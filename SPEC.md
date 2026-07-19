# SPEC — electricista.io

> **Instrucciones para Claude Code:** Construir la web completa según este SPEC. Seguir el orden y la estructura exactamente. El copy indicado es definitivo salvo donde se marque [PLACEHOLDER]. Idioma del sitio: español (España). Este proyecto debe construirse como **plantilla multi-vertical reutilizable**: toda la configuración de marca, servicios y ciudades debe vivir en archivos de datos/config, no hardcodeada en componentes, para poder clonar el proyecto en futuros verticales (fontanero, cerrajero...) cambiando solo la config.

---

## 1. Contexto y objetivo

- **Producto:** Servicios de electricista a domicilio y para empresas en Barcelona y área metropolitana (Sabadell, Mataró, Granollers, Badalona y Vallès). Operado por Fast Horizons SL con electricistas instaladores habilitados que emiten CIE/boletines.
- **Modelo:** Réplica del playbook de limpieza.ai — captación orgánica local (SEO + Google Business Profile), conversión por llamada y WhatsApp.
- **Objetivo de la web:** Generar llamadas y WhatsApps. El 80% de la conversión esperada es llamada directa, no formulario. Todo el diseño se subordina a eso.
- **Ángulo diferencial:** "Instaladores autorizados" (habilitados, emiten boletín/CIE) + rapidez en urgencias + precios claros.
- **Tono:** Directo, profesional, de confianza. Cero relleno corporativo. Frases cortas. Siempre "tú".

## 2. Stack técnico

- **Framework:** Next.js 14+ (App Router), TypeScript.
- **Estilos:** Tailwind CSS.
- **Deploy:** Netlify. Dominio: electricista.io. Formularios con **Netlify Forms** (ver §8).
- **Contenido:** Páginas estáticas (SSG). Servicios y ciudades definidos en `/data/servicios.ts` y `/data/ciudades.ts` — las páginas de ciudad y servicio se generan desde estos archivos con `generateStaticParams`.
- **Sin CMS en v1.** Blog en fase 2.

## 3. Diseño

### 3.1 Paleta

| Token | Hex | Uso |
|---|---|---|
| `--ink` | #17181C | Fondo oscuro (header, hero, footer, stats bar), texto principal sobre claro |
| `--amber` | #FFB400 | CTAs, iconos, acentos, subrayados, hover |
| `--amber-dark` | #E09E00 | Hover de botones, bordes de acento |
| `--paper` | #FFFFFF | Fondo base de secciones |
| `--paper-warm` | #F7F5F0 | Fondo alterno de secciones |
| `--slate` | #5A5E66 | Texto secundario |

**Reglas duras:**
- El amarillo NUNCA se usa como color de texto sobre fondo claro ni como fondo de secciones enteras.
- Botón primario: fondo `--amber`, texto `--ink`, peso bold. Es la combinación de máximo contraste del sitio y se reserva para CTAs.
- Sobre `--ink`, el texto es blanco y los acentos `--amber`.

### 3.2 Tipografía

- **Display (H1/H2):** Archivo (Google Fonts), pesos 700-800, tracking ligeramente negativo. Condensada e industrial — encaja con el oficio sin caer en cliché.
- **Cuerpo:** Inter, 400/500/600.
- Escala: H1 clamp(2.2rem, 5vw, 3.5rem); H2 ~2rem; cuerpo 1.0625rem, line-height 1.6.

### 3.3 Elemento firma

Una **franja diagonal de obra** (patrón de rayas amarillo/antracita a 45°, tipo cinta de señalización, 6-8px de alto) como separador entre el hero y la primera sección, y reutilizada con sutileza en los bordes superiores de las cards de urgencias. Es el único guiño visual "eléctrico" — el resto del diseño es sobrio. No usar rayos ⚡, bombillas ni enchufes como decoración repetida.

### 3.4 Reglas generales

- Mobile-first. La mayoría del tráfico local es móvil.
- Border-radius moderado (8px cards, 6px botones). Sombras suaves, nunca dramáticas.
- Respetar `prefers-reduced-motion`. Animaciones mínimas: solo fade-up sutil al hacer scroll en cards.
- Accesibilidad: contraste AA en todo, focus visible.

## 4. Arquitectura de URLs

Basada en datos SEMrush (DB España, jul 2026). Prioridad = orden de construcción y de esfuerzo de contenido.

| # | URL | Keyword objetivo (vol/mes, KD) | Tipo |
|---|---|---|---|
| 1 | `/` | electricista + marca; "electricistas cerca de mi" vía GBP | Home |
| 2 | `/electricista-barcelona` | electricista barcelona (1.900, KD30) + variantes (~2.740 total) | Ciudad |
| 3 | `/electricista-urgente-barcelona` | urgencias/24h barcelona (~450 agregado, KD 6-12, CPC 7-9€) | Servicio×Ciudad |
| 4 | `/electricista-sabadell` | electricista sabadell (480+210+60, KD 8-12) | Ciudad |
| 5 | `/electricistas-urgentes-24-horas` | electricistas 24 horas (5.400), electricista 24 horas (1.300), urgentes (1.000), de urgencia (720), urgente (590) | Servicio |
| 6 | `/boletin-electrico` | boletín eléctrico barcelona (90+70+30+20, KD 3, CPC hasta 6,14€) + precio boletín (20) + cola azul/blanco/tramitar | Servicio |
| 7 | `/presupuesto` | precio de electricista (720, KD8), precio hora electricista barcelona (40), precio boletín electrico barcelona (20) — SIN publicar importes, ver §6.4 | Utilidad/SEO |
| 8 | `/electricista-badalona` | electricista badalona (390, KD8, CPC 5€) | Ciudad |
| 9 | `/electricista-mataro` | electricista mataró (90+40+30, KD11) | Ciudad |
| 10 | `/electricista-granollers` | [PLACEHOLDER: datos pendientes; construir igual — capital del Vallès Oriental] | Ciudad |
| 11 | `/cambio-cuadro-electrico` | [PLACEHOLDER: volúmenes pendientes] | Servicio |
| 12 | `/averias-electricas` | averías, cortocircuitos, "se va la luz" | Servicio |
| 13 | `/instalacion-punto-de-carga-coche-electrico` | [PLACEHOLDER: volúmenes pendientes — poca competencia, ticket alto] | Servicio |
| 14 | `/electricistas-para-empresas-y-comunidades` | cola B2B detectada (comunidades, oficinas, hoteles, locales) — canal a mantenimientos recurrentes | Servicio B2B |
| 15 | `/subir-potencia-luz` | [PLACEHOLDER: volúmenes pendientes] | Servicio |
| 16 | `/contacto` | — | Utilidad |

**Fase 2 (no construir en v1, dejar prevista la estructura de datos):** landings de distrito de Barcelona (Eixample, Gràcia, Sants, Sant Martí, Sant Andreu, Les Corts, Sarrià-Sant Gervasi, Horta), `/electricista-terrassa`, `/electricista-sant-cugat`, municipios del Vallès con URL propia si GSC muestra demanda, blog.

**Interlinking obligatorio:**
- Toda página de ciudad enlaza a todos los servicios y viceversa (bloque "Servicios en {ciudad}" / "Zonas donde ofrecemos {servicio}").
- Sabadell menciona y cubre: Castellar, Sant Quirze, Barberà, Cerdanyola, Ripollet. Granollers cubre: Mollet, Les Franqueses, Parets, Llinars, Montornès. Mataró cubre el Maresme cercano. Estas menciones van en una sección "También damos servicio en" con texto real, no solo una lista de nombres.
- `/presupuesto` recibe enlace desde el nav y desde todas las páginas de servicio.

## 5. Componentes globales

### 5.1 Header (sticky)

- Fondo `--ink`. Logo a la izquierda [PLACEHOLDER: logo pendiente — mientras tanto, wordmark "electricista.io" en Archivo 700, con ".io" en `--amber`].
- Nav: Servicios (dropdown), Zonas (dropdown), Presupuesto, Contacto.
- Derecha: teléfono clicable con icono `tel:` [PLACEHOLDER: número pendiente] en `--amber` + botón CTA "Pedir presupuesto".
- En móvil: el teléfono NUNCA se esconde en el menú hamburguesa — icono de llamada siempre visible en la barra.

### 5.2 Botón flotante "Pedir presupuesto"

- Fijo abajo-derecha en todas las páginas, fondo `--amber`, texto `--ink`: "Pedir presupuesto". Al pulsarlo hace scroll al formulario de la página (o navega a `/contacto` si la página no tiene formulario).
- **WhatsApp desactivado en v1** (aún no hay número). Dejar el componente de WhatsApp implementado pero controlado por flag en `/data/config.ts` (`whatsapp: { enabled: false, number: "" }`) para activarlo sin tocar código cuando exista el número.

### 5.3 Barra de urgencias (solo móvil)

- Barra fija inferior en páginas de urgencias y ciudad: mitad izquierda "📞 Llamar ahora" (fondo `--amber`), mitad derecha "Pedir presupuesto" (fondo `--ink`, borde `--amber`, scroll al formulario). Altura 56px.

### 5.4 Footer

- Fondo `--ink`. 4 columnas: (1) marca + NAP completo y consistente [PLACEHOLDER: Fast Horizons SL, Calle Alcarria 22, P.1 Pta.4, 08207 Sabadell + teléfono + email], (2) servicios, (3) zonas, (4) legal (aviso legal, privacidad, cookies).
- Línea final: "Instaladores eléctricos habilitados — emitimos boletín eléctrico (CIE)".

## 6. Plantillas de página

### 6.1 Home

1. **Hero** — Fondo `--ink` con foto real de electricista trabajando en cuadro eléctrico [PLACEHOLDER: foto propia; mientras, Unsplash técnica, nunca stock sonriente falso] con overlay oscuro.
   - Eyebrow en `--amber`: "Instaladores autorizados en Barcelona y Vallès"
   - H1: "Electricistas profesionales con boletín. Hoy mismo si es urgente."
   - Subtítulo: "Averías, urgencias 24h, boletines eléctricos, cuadros y cualquier instalación. Presupuesto claro antes de empezar."
   - CTA primario: "📞 Llamar ahora" (`tel:`) + CTA secundario outline: "Pedir presupuesto gratis" (scroll al formulario)
   - Fila de trust badges con iconos en `--amber`: 🕐 Urgencias 24h · ✅ Instaladores habilitados · 📋 Emitimos boletín (CIE) · ⚡ Presupuesto en menos de 2h · 🧾 Precio cerrado antes de empezar
2. **Franja diagonal firma** (§3.3)
3. **Servicios** — Fondo `--paper`. H2: "¿Qué necesitas?" Grid de cards (2 col móvil, 4 desktop): Urgencias 24h, Boletín eléctrico (CIE), Averías y cortocircuitos, Cambio de cuadro eléctrico, Instalaciones nuevas, Punto de carga coche eléctrico, Subida de potencia, Empresas y comunidades. Cada card: icono lineal `--amber`, H3, 1 línea, link "Ver detalles →". Las dos primeras cards (Urgencias y Boletín) llevan el borde superior con el patrón firma.
4. **Por qué** — Fondo `--paper-warm`. Layout 60/40 texto+imagen. H2: "Por qué vecinos y empresas nos llaman a nosotros". Párrafo 150-200 palabras + bullets: precio cerrado por escrito antes de empezar · instalador habilitado (no "un manitas") · boletín en 24-48h · mismo electricista para tus siguientes trabajos.
5. **Cómo funciona** — 3 pasos numerados (aquí la numeración SÍ es secuencia real): 1. Nos llamas o escribes → 2. Te damos precio cerrado → 3. Vamos hoy o cuando te venga bien. 
6. **Stats bar** — Fondo `--ink`, texto blanco, números en `--amber`: "X+ trabajos realizados" · "<2h respuesta media" · "24/7 urgencias" · "★ 4,9 en Google" [PLACEHOLDER: usar solo números reales; hasta tenerlos, omitir esta sección].
7. **Zonas** — H2: "Trabajamos en toda el área de Barcelona". Cards/enlaces a las landings de ciudad + línea de municipios cubiertos.
8. **Reseñas** — [PLACEHOLDER: integrar 3-6 reseñas reales de GBP cuando existan; hasta entonces omitir. NUNCA inventar reseñas.]
9. **FAQ** — 6-8 preguntas con schema FAQPage: ¿cuánto cobra un electricista por hora? · ¿el desplazamiento se cobra? · ¿qué es el boletín eléctrico y cuándo lo necesito? · ¿venís hoy mismo? · ¿trabajáis con empresas y comunidades? · ¿dais garantía?
10. **CTA final** — Fondo `--ink`. H2: "¿Hablamos?" + teléfono grande + formulario de presupuesto embebido (§8).

### 6.2 Plantilla de ciudad (`/electricista-{ciudad}`)

Misma estructura que la home con estas sustituciones:
- H1: "Electricista en {Ciudad} — Urgencias e instaladores autorizados"
- Title: "Electricista en {Ciudad} | Urgencias 24h y Boletines | electricista.io"
- Meta description: "Electricistas autorizados en {Ciudad}. Urgencias 24h, boletines (CIE), averías y cuadros. Precio cerrado antes de empezar. ☎ [teléfono]"
- El bloque "Por qué" incluye 100-150 palabras ESPECÍFICAS de la ciudad (tipo de parque de viviendas, barrios, tiempos de llegada) — contenido único por ciudad, prohibido clonar párrafos entre ciudades.
- Sección "También damos servicio en" con los municipios satélite de esa ciudad (ver §4).
- FAQ con 2-3 preguntas localizadas ("¿cuánto tarda un electricista en llegar a {Ciudad}?").
- Barcelona además enlaza de forma destacada a `/electricista-urgente-barcelona`.

### 6.3 Plantilla de servicio

- H1 orientado a la keyword. Estructura: hero corto (fondo `--paper-warm`, no oscuro) → qué incluye → cómo funciona → FAQ del servicio → zonas → CTA. **Sin importes publicados en ninguna página**: el mensaje de pricing es siempre "precio cerrado por escrito antes de empezar — pide presupuesto gratis", nunca cifras concretas.
- `/electricista-urgente-barcelona` y `/electricistas-urgentes-24-horas`: añaden bloque de disponibilidad ("Ahora mismo hay un electricista de guardia") y la barra de urgencias móvil (§5.3) siempre activa.
- `/boletin-electrico`: explicar qué es el CIE, cuándo es obligatorio (alta de luz, subida de potencia, reformas, instalaciones antiguas), plazos (24-48h) y precio cerrado. Es la página más transaccional del sitio: CTA cada dos secciones. La cola larga de búsqueda revela las dudas exactas del usuario — cubrirlas como H2/FAQ: **boletín azul vs boletín blanco** (terminología habitual en Cataluña: azul = reconocimiento de instalación existente; blanco/CIE = instalación nueva o modificada), quién puede firmarlo (solo instalador habilitado), cuánto cuesta, cuánto tarda, si caduca, tramitación/registro ante Indústria y qué pide la comercializadora (Endesa) para dar el alta. Mencionar "boletín azul" explícitamente en el contenido.
- `/electricistas-para-empresas-y-comunidades`: tono B2B, menciona mantenimientos periódicos, comunidades de vecinos, oficinas, locales y hostelería; CTA "Pide una visita técnica gratuita". Preparar el copy para pedir CIF y facturar con IVA desglosado.

### 6.4 `/presupuesto`

- Objetivo SEO: capturar "precio de electricista", "precio hora electricista barcelona", "precio boletín eléctrico" SIN publicar importes.
- Contenido: explicar de qué depende el precio de un trabajo eléctrico (tipo de trabajo, urgencia/horario, materiales, si requiere boletín) y cómo funciona nuestro sistema: presupuesto gratis en menos de 2h, **precio cerrado por escrito antes de empezar, sin sorpresas al acabar**.
- H2s tipo: "¿Cuánto cuesta un electricista?" (respuesta honesta: depende de estos factores + pídenos precio cerrado gratis), "¿Se cobra el desplazamiento?", "¿Cuánto cuesta un boletín eléctrico?" — todas las respuestas SIN cifras, redirigiendo al presupuesto gratuito.
- CTA doble (llamada + formulario) tras cada bloque. Schema FAQPage.
- **Regla global del sitio: ningún importe en euros publicado en ninguna página.** El pricing se comunica solo en presupuesto individual (teléfono/WhatsApp).

## 7. SEO técnico

- **Schema en todas las páginas:** `Electrician` (subtipo de LocalBusiness) con NAP, `areaServed` (Barcelona, Sabadell, Mataró, Granollers, Badalona + municipios), `openingHours` 24/7 para urgencias, `telephone`. FAQPage donde haya FAQ. BreadcrumbList en servicios y ciudades.
- **Metas:** title ≤60 chars con keyword al inicio; description ≤155 con teléfono. Definidas por página en los archivos de datos.
- **OG images:** plantilla generada con fondo `--ink` + wordmark + título de página.
- **Sitemap.xml y robots.txt** automáticos. Canonicals autorreferentes.
- **Rendimiento:** imágenes next/image en WebP/AVIF, fuentes con `next/font`, objetivo LCP <2s en móvil, CLS ~0.
- **hreflang:** no aplica (solo español). El dominio .io es genérico: la señal geográfica viene del contenido, GBP y enlaces locales — reforzar NAP idéntico en web y ficha.

## 8. Conversión y medición

- **Dos canales de conversión en v1: llamada y formulario.** WhatsApp queda desactivado por flag hasta tener número (§5.2).
- **Formulario de presupuesto (Netlify Forms):** campos nombre, teléfono, ciudad (select con las ciudades cubiertas), qué necesitas (textarea corto). Aparece embebido en el CTA final de home y páginas de ciudad/servicio, y como página en `/contacto`.
  - Implementación Netlify Forms con Next.js: incluir un formulario HTML estático con `data-netlify="true"`, `name="presupuesto"`, input oculto `<input type="hidden" name="form-name" value="presupuesto">` y honeypot (`netlify-honeypot="bot-field"`). Como el App Router puede no exponer el form en el HTML de build, añadir un archivo `public/__forms.html` con la definición estática del formulario para que Netlify lo detecte, y enviar desde el cliente con `fetch` a `/__forms.html` con `application/x-www-form-urlencoded`. Verificar tras el primer deploy que el form aparece en el panel de Netlify.
  - Tras envío: mensaje de éxito inline ("Recibido. Te llamamos en menos de 2h en horario laboral.") — sin redirección.
  - Notificaciones de Netlify Forms por email [PLACEHOLDER: email de destino].
- Todos los `tel:` y CTAs llevan atributos `data-event` para tracking (llamada_header, llamada_hero, form_envio, form_scroll...).
- GA4 + Google Search Console desde el día del deploy. Eventos de conversión: clic en tel, envío de formulario.
- [PLACEHOLDER: número de teléfono exclusivo del vertical, no compartido con limpieza.ai, para atribución.]

## 9. Legal

- Páginas de aviso legal, privacidad y cookies con datos de Fast Horizons SL [PLACEHOLDER: revisar textos legales antes de publicar].
- Banner de cookies solo si se cargan cookies no esenciales (GA4 → sí): banner simple con aceptar/rechazar.

## 10. Criterios de aceptación

1. `npm run build` sin errores; todas las rutas de §4 (1-16) generadas estáticamente.
2. Lighthouse móvil: Performance ≥90, SEO ≥95, Accessibility ≥95 en home y una ciudad.
3. Teléfono visible sin scroll en móvil en todas las páginas.
4. Añadir un vertical nuevo (p.ej. fontanero) debe requerir solo: cambiar `/data/config.ts` (marca, colores, teléfono), `/data/servicios.ts` y `/data/ciudades.ts` — cero cambios en componentes.
5. Ningún texto Lorem Ipsum ni reseñas/números inventados en producción.
6. Ningún importe en euros publicado en ninguna página del sitio (regla §6.4).
