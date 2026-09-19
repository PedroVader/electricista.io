import re, sys, html

src, dst, titulo = sys.argv[1], sys.argv[2], sys.argv[3]
raw = open(src, encoding="utf-8").read()
cuerpo = raw.split("\n---\n", 1)[1].strip()

def inline(t):
    t = html.escape(t, quote=False)
    # El ancla queda enlazada y ademas se imprime la URL entre parentesis,
    # para que el editor del medio vea exactamente que enlace va donde.
    t = re.sub(r"\[([^\]]+)\]\(([^)]+)\)",
               r'<a href="\2">\1</a> <span class="url">(\2)</span>', t)
    t = re.sub(r"\*\*([^*]+)\*\*", r"<strong>\1</strong>", t)
    return t

out, tabla, lista = [], [], None

def cierra_lista():
    global lista
    if lista:
        out.append(f"</{lista}>")
        lista = None

def vuelca_tabla():
    global tabla
    if not tabla:
        return
    filas = [[c.strip() for c in f.strip().strip("|").split("|")] for f in tabla]
    filas = [f for f in filas if not all(set(c) <= set("-: ") for c in f)]
    out.append("<table>")
    for i, f in enumerate(filas):
        et = "th" if i == 0 else "td"
        out.append("<tr>" + "".join(f"<{et}>{inline(c)}</{et}>" for c in f) + "</tr>")
    out.append("</table>")
    tabla = []

for linea in cuerpo.split("\n"):
    l = linea.rstrip()
    if l.startswith("|"):
        cierra_lista(); tabla.append(l); continue
    vuelca_tabla()
    if not l.strip():
        cierra_lista(); continue
    m = re.match(r"^(#{1,3}) (.+)$", l)
    if m:
        cierra_lista()
        n = len(m.group(1))
        out.append(f"<h{n}>{inline(m.group(2))}</h{n}>")
        continue
    if l.startswith("- "):
        if lista != "ul": cierra_lista(); out.append("<ul>"); lista = "ul"
        out.append(f"<li>{inline(l[2:])}</li>"); continue
    m = re.match(r"^\d+\. (.+)$", l)
    if m:
        if lista != "ol": cierra_lista(); out.append("<ol>"); lista = "ol"
        out.append(f"<li>{inline(m.group(1))}</li>"); continue
    cierra_lista()
    out.append(f"<p>{inline(l)}</p>")
vuelca_tabla(); cierra_lista()

brief = """<div class="brief">
<p class="brief-t">Ficha para el editor</p>
<table class="ficha">
<tr><th>Título</th><td>Punto de recarga en garaje comunitario: permisos y precio</td></tr>
<tr><th>Meta description</th><td>¿Puede la comunidad impedirte instalar un cargador en tu plaza? Qué dice la ley, cómo se conecta, qué protecciones lleva y cuánto cuesta en 2026.</td></tr>
<tr><th>Slug sugerido</th><td>/punto-recarga-coche-electrico-garaje-comunidad-vecinos/</td></tr>
<tr><th>Categoría</th><td>Industria y Construcción (encaja también en Hogar e Inmobiliaria)</td></tr>
<tr><th>Extensión</th><td>1.900 palabras. Texto original e inédito, no publicado en ningún otro medio.</td></tr>
</table>
<p class="brief-t2">Los 2 enlaces del artículo</p>
<table class="ficha">
<tr><th>Ancla</th><th>URL de destino</th><th>Dónde va</th></tr>
<tr><td>instalar un punto de recarga en el garaje</td><td class="url">https://electricista.io/instalacion-punto-de-carga-coche-electrico</td><td>Apartado «Qué lleva la instalación», último párrafo</td></tr>
<tr><td>electricistas para comunidades de vecinos</td><td class="url">https://electricista.io/electricistas-para-empresas-y-comunidades</td><td>Apartado «Cuando la que se mueve es la comunidad»</td></tr>
</table>
<p class="nota">Ambos enlaces, <strong>dofollow</strong> (sin rel="sponsored" ni "nofollow"). En el texto aparecen subrayados y con su URL entre paréntesis al lado: los paréntesis son solo una ayuda de revisión, <strong>no deben publicarse</strong>. Se ruega no alterar las frases que contienen los enlaces.</p>
</div>"""

css = """@page{margin:18mm 16mm}
body{font-family:Georgia,'Times New Roman',serif;font-size:11.5pt;line-height:1.55;color:#1a1a1a;max-width:46em;margin:0 auto}
h1{font-size:21pt;line-height:1.25;margin:0 0 .6em}
h2{font-size:14.5pt;margin:1.6em 0 .5em;border-bottom:1px solid #ddd;padding-bottom:.2em;page-break-after:avoid}
h3{font-size:12pt;margin:1.3em 0 .4em;page-break-after:avoid}
p{margin:0 0 .85em}ul,ol{margin:0 0 1em 1.3em}li{margin:.3em 0}
table{border-collapse:collapse;width:100%;margin:1.1em 0;font-size:10pt;page-break-inside:avoid}
th,td{border:1px solid #ccc;padding:.45em .6em;text-align:left;vertical-align:top}th{background:#f2f2f2}
a{color:#0b5cab}
.url{font-family:'SF Mono',Menlo,monospace;font-size:8.5pt;color:#8a6d1f;word-break:break-all}
.brief{border:1.5px solid #c9a227;background:#fdfaf1;padding:1em 1.2em;margin:0 0 2.2em;page-break-after:always}
.brief-t{font-size:14pt;font-weight:bold;margin:0 0 .6em}
.brief-t2{font-size:12pt;font-weight:bold;margin:1.4em 0 .4em}
.brief table{margin:.2em 0}
.ficha th{width:9em;white-space:nowrap}
.nota{font-size:9.5pt;color:#444;margin:.9em 0 0}"""

open(dst, "w", encoding="utf-8").write(
    f'<!doctype html><html lang="es"><head><meta charset="utf-8">'
    f"<title>{html.escape(titulo)}</title><style>{css}</style></head><body>\n"
    + brief + "\n" + "\n".join(out) + "\n</body></html>\n")
print("OK ->", dst)
