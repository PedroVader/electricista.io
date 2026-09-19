# Genera un .docx real (OOXML) desde el markdown del articulo, conservando
# encabezados, negritas, hipervinculos y tablas, que es lo que textutil pierde.
import re, sys, zipfile
from xml.sax.saxutils import escape

src, dst = sys.argv[1], sys.argv[2]
cuerpo = open(src, encoding="utf-8").read().split("\n---\n", 1)[1].strip()

rels, body = [], []

def rel(url):
    rid = f"rId{100 + len(rels)}"
    rels.append((rid, url))
    return rid

def runs(txt, negrita=False):
    """Trocea texto en runs respetando **negrita** y [ancla](url)."""
    out = []
    for parte in re.split(r"(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*)", txt):
        if not parte:
            continue
        m = re.match(r"^\[([^\]]+)\]\(([^)]+)\)$", parte)
        if m:
            rid = rel(m.group(2))
            out.append(
                f'<w:hyperlink r:id="{rid}"><w:r><w:rPr><w:rStyle w:val="Hyperlink"/>'
                f'</w:rPr><w:t xml:space="preserve">{escape(m.group(1))}</w:t></w:r></w:hyperlink>')
            out.append(
                '<w:r><w:rPr><w:color w:val="8A6D1F"/><w:sz w:val="16"/></w:rPr>'
                f'<w:t xml:space="preserve"> ({escape(m.group(2))})</w:t></w:r>')
            continue
        m = re.match(r"^\*\*([^*]+)\*\*$", parte)
        b = negrita or bool(m)
        t = m.group(1) if m else parte
        pr = "<w:rPr><w:b/></w:rPr>" if b else ""
        out.append(f'<w:r>{pr}<w:t xml:space="preserve">{escape(t)}</w:t></w:r>')
    return "".join(out)

def parrafo(txt, estilo=None, sangria=False, negrita=False):
    pr = "<w:pPr>"
    if estilo:
        pr += f'<w:pStyle w:val="{estilo}"/>'
    if sangria:
        pr += '<w:ind w:left="360" w:hanging="180"/>'
    pr += "</w:pPr>"
    body.append(f"<w:p>{pr}{runs(txt, negrita)}</w:p>")

def tabla(filas):
    filas = [[c.strip() for c in f.strip().strip("|").split("|")] for f in filas]
    filas = [f for f in filas if not all(set(c) <= set("-: ") for c in f)]
    bordes = "".join(
        f'<w:{b} w:val="single" w:sz="4" w:color="BBBBBB"/>'
        for b in ("top", "left", "bottom", "right", "insideH", "insideV"))
    xml = [f'<w:tbl><w:tblPr><w:tblW w:w="5000" w:type="pct"/>'
           f"<w:tblBorders>{bordes}</w:tblBorders></w:tblPr>"]
    for i, f in enumerate(filas):
        xml.append("<w:tr>")
        for celda in f:
            sombra = '<w:shd w:val="clear" w:fill="F2F2F2"/>' if i == 0 else ""
            xml.append(f"<w:tc><w:tcPr>{sombra}</w:tcPr>"
                       f"<w:p>{runs(celda, negrita=i == 0)}</w:p></w:tc>")
        xml.append("</w:tr>")
    xml.append("</w:tbl><w:p/>")
    body.append("".join(xml))

parrafo("Ficha para el editor", estilo="Heading2")
tabla([
    "| Campo | Valor |", "|---|---|",
    "| **Título** | Punto de recarga en garaje comunitario: permisos y precio |",
    "| **Meta description** | ¿Puede la comunidad impedirte instalar un cargador en tu plaza? Qué dice la ley, cómo se conecta, qué protecciones lleva y cuánto cuesta en 2026. |",
    "| **Slug sugerido** | /punto-recarga-coche-electrico-garaje-comunidad-vecinos/ |",
    "| **Categoría** | Industria y Construcción (encaja también en Hogar e Inmobiliaria) |",
    "| **Extensión** | 1.900 palabras. Texto original e inédito, no publicado en ningún otro medio. |",
])
parrafo("Los 2 enlaces del artículo", estilo="Heading3")
tabla([
    "| Ancla | URL de destino | Dónde va |", "|---|---|---|",
    "| instalar un punto de recarga en el garaje | https://electricista.io/instalacion-punto-de-carga-coche-electrico | Apartado «Qué lleva la instalación», último párrafo |",
    "| electricistas para comunidades de vecinos | https://electricista.io/electricistas-para-empresas-y-comunidades | Apartado «Cuando la que se mueve es la comunidad» |",
])
parrafo("Ambos enlaces, **dofollow** (sin rel=\"sponsored\" ni \"nofollow\"). En el texto aparecen subrayados y con su URL entre paréntesis al lado: los paréntesis son solo una ayuda de revisión, **no deben publicarse**. Se ruega no alterar las frases que contienen los enlaces.")
body.append('<w:p><w:r><w:br w:type="page"/></w:r></w:p>')

buffer_tabla = []
for linea in cuerpo.split("\n"):
    l = linea.rstrip()
    if l.startswith("|"):
        buffer_tabla.append(l)
        continue
    if buffer_tabla:
        tabla(buffer_tabla)
        buffer_tabla = []
    if not l.strip():
        continue
    m = re.match(r"^(#{1,3}) (.+)$", l)
    if m:
        parrafo(m.group(2), estilo=f"Heading{len(m.group(1))}")
    elif l.startswith("- "):
        parrafo("• " + l[2:], sangria=True)
    elif re.match(r"^\d+\. ", l):
        parrafo(l, sangria=True)
    else:
        parrafo(l)
if buffer_tabla:
    tabla(buffer_tabla)

NS = ('xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" '
      'xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"')

def estilo(id_, nombre, tam, color="1A1A1A", b=True, antes=280, despues=120):
    return (f'<w:style w:type="paragraph" w:styleId="{id_}"><w:name w:val="{nombre}"/>'
            f'<w:pPr><w:spacing w:before="{antes}" w:after="{despues}"/></w:pPr><w:rPr>'
            f'{"<w:b/>" if b else ""}<w:color w:val="{color}"/><w:sz w:val="{tam}"/></w:rPr></w:style>')

styles = (f'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:styles {NS}>'
          '<w:docDefaults><w:rPrDefault><w:rPr>'
          '<w:rFonts w:ascii="Georgia" w:hAnsi="Georgia"/><w:sz w:val="22"/>'
          '</w:rPr></w:rPrDefault></w:docDefaults>'
          '<w:style w:type="paragraph" w:default="1" w:styleId="Normal"><w:name w:val="Normal"/>'
          '<w:pPr><w:spacing w:after="160" w:line="276" w:lineRule="auto"/></w:pPr></w:style>'
          + estilo("Heading1", "heading 1", 44, antes=0, despues=200)
          + estilo("Heading2", "heading 2", 30)
          + estilo("Heading3", "heading 3", 26)
          + '<w:style w:type="character" w:styleId="Hyperlink"><w:name w:val="Hyperlink"/>'
            '<w:rPr><w:color w:val="0B5CAB"/><w:u w:val="single"/></w:rPr></w:style>'
          + "</w:styles>")

document = (f'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:document {NS}>'
            f'<w:body>{"".join(body)}</w:body></w:document>')

rels_xml = ('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
            '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">'
            '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>'
            + "".join(
                f'<Relationship Id="{rid}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink" '
                f'Target="{escape(url, {chr(34): "&quot;"})}" TargetMode="External"/>' for rid, url in rels)
            + "</Relationships>")

with zipfile.ZipFile(dst, "w", zipfile.ZIP_DEFLATED) as z:
    z.writestr("[Content_Types].xml",
               '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
               '<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">'
               '<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>'
               '<Default Extension="xml" ContentType="application/xml"/>'
               '<Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>'
               '<Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/>'
               "</Types>")
    z.writestr("_rels/.rels",
               '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
               '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">'
               '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>'
               "</Relationships>")
    z.writestr("word/document.xml", document)
    z.writestr("word/styles.xml", styles)
    z.writestr("word/_rels/document.xml.rels", rels_xml)
print("OK ->", dst, "| enlaces:", len(rels))
