import { SLUGS_CA, RUTAS_CA } from "@/data/ca/slugs";

/**
 * Idiomas del sitio. El castellano vive en la raíz, el catalán bajo /ca y
 * el inglés es una única landing de captación en /en.
 */
export type Locale = "es" | "ca" | "en";

export const LOCALES: Locale[] = ["es", "ca", "en"];

/** Rutas fijas por idioma */
export const RUTAS: Record<Locale, { home: string; presupuesto: string; contacto: string; blog: string }> = {
  es: { home: "/", presupuesto: "/presupuesto", contacto: "/contacto", blog: "/blog" },
  ca: { home: "/ca", presupuesto: "/ca/pressupost", contacto: "/ca/contacte", blog: "/blog" },
  en: { home: "/en", presupuesto: "/en#form-presupuesto", contacto: "/en#form-presupuesto", blog: "/blog" },
};

/** Ruta de una landing (ciudad, distrito o servicio) en un idioma dado */
export function rutaLanding(locale: Locale, slug: string): string {
  return locale === "ca" ? `/ca/${slug}` : `/${slug}`;
}

const SLUGS_ES_DESDE_CA: Record<string, string> = Object.fromEntries(
  Object.entries(SLUGS_CA).map(([es, ca]) => [ca, es]),
);
const RUTAS_ES_DESDE_CA: Record<string, string> = Object.fromEntries(
  Object.entries(RUTAS_CA).map(([es, ca]) => [ca, es]),
);

/**
 * Ruta equivalente en otro idioma, o la portada de ese idioma si la página
 * no está traducida (blog, legales). Se usa en el selector de idioma.
 */
export function rutaEquivalente(pathname: string, destino: Locale): string {
  const limpia = pathname.replace(/\/$/, "") || "/";
  // Normalizamos primero a la ruta en castellano
  let es: string | undefined;
  if (limpia === "/en") es = "/";
  else if (limpia.startsWith("/ca")) {
    es = RUTAS_ES_DESDE_CA[limpia];
    if (!es) {
      const slug = limpia.replace(/^\/ca\//, "");
      es = SLUGS_ES_DESDE_CA[slug] ? `/${SLUGS_ES_DESDE_CA[slug]}` : undefined;
    }
  } else es = limpia;

  if (destino === "es") return es ?? "/";
  if (destino === "en") return "/en";
  if (!es) return "/ca";
  if (RUTAS_CA[es]) return RUTAS_CA[es];
  const slug = es.replace(/^\//, "");
  return SLUGS_CA[slug] ? `/ca/${SLUGS_CA[slug]}` : "/ca";
}

/**
 * Bloque `alternates` de metadata con canonical + hreflang. Solo se emiten
 * los idiomas en los que la página existe de verdad.
 */
export function alternates(opts: { es?: string; ca?: string; en?: string; actual: Locale }) {
  const canonical = opts[opts.actual];
  const languages: Record<string, string> = {};
  if (opts.es) languages["es"] = opts.es;
  if (opts.ca) languages["ca"] = opts.ca;
  if (opts.en) languages["en"] = opts.en;
  if (opts.es) languages["x-default"] = opts.es;
  return Object.keys(languages).length > 1
    ? { canonical, languages }
    : { canonical };
}

/** Textos de interfaz de los componentes compartidos */
const UI = {
  es: {
    nav: { servicios: "Servicios", zonas: "Zonas", presupuesto: "Presupuesto", consejos: "Consejos", contacto: "Contacto", principal: "Principal", menuMovil: "Menú móvil", abrirMenu: "Abrir menú", cerrarMenu: "Cerrar menú", inicio: "inicio", llamar: "Llamar", llamarAl: "Llamar al", pedirPresupuesto: "Pedir presupuesto", idioma: "Idioma" },
    footer: { servicios: "Servicios", pedirPresupuesto: "Pedir presupuesto", serviciosPorCiudad: "Servicios por ciudad", zonas: "Zonas", electricistaEn: (z: string) => `Electricista en ${z}`, barrios: "Barrios de Barcelona", legal: "Legal", avisoLegal: "Aviso legal", privacidad: "Política de privacidad", cookies: "Política de cookies", consejos: "Consejos", contacto: "Contacto" },
    cta: { etiqueta: "Contacto", hablamos: "¿Hablamos?", texto: "Llámanos y te decimos precio cerrado, o déjanos tus datos y te llamamos nosotros en menos de 2 horas en horario laboral.", urgencias24: "Urgencias atendidas 24 horas, todos los días.", inline: "Precio cerrado por escrito antes de empezar. Pídelo gratis:", pedirPresupuesto: "Pedir presupuesto", llamarAhora: "Llamar ahora", accionesRapidas: "Acciones rápidas", whatsapp: "Escribir por WhatsApp", urgencias24h: "Urgencias 24h", urgenciasLlamar: (t: string) => `Urgencias 24 horas. Llamar al ${t}` },
    hero: { llamarAl: "Llamar al", pedirPresupuesto: "Pedir presupuesto", solicita: "Solicita tu presupuesto", sinCompromiso: "Sin compromiso. Precio cerrado por escrito antes de empezar.", esUrgente: "¿Es urgente? Llama al", oEscribenos: "o escríbenos a", altDefecto: (marca: string) => `Electricista de ${marca} trabajando en una instalación eléctrica` },
    form: { nombre: "Nombre", tuNombre: "Tu nombre", telefono: "Teléfono o WhatsApp", queNecesitas: "¿Qué necesitas?", eligeServicio: "Elige el servicio", otro: "Otro", ciudad: "Ciudad", eligeZona: "Elige tu zona", alrededores: (c: string) => `${c} y alrededores`, otraZona: "Otra (área de Barcelona)", mensaje: "Cuéntanos más (opcional)", placeholderMensaje: "Ej.: se me va la luz al encender el horno / necesito un boletín para dar de alta la luz", error: "No se ha podido enviar. Inténtalo de nuevo o llámanos al", enviando: "Enviando…", enviar: "Solicitar presupuesto", tienesFotos: "¿Tienes fotos?", enviaWhatsapp: "Envíalas por WhatsApp", teLlamamos: "Te llamamos en menos de 2 h en horario laboral. Sin compromiso.", honeypot: "No rellenes esto:" },
    secciones: { comoTrabajamos: "Cómo trabajamos", porQueNosotros: "Por qué nosotros", altPorQue: (marca: string) => `Electricista de ${marca} trabajando en un cuadro eléctrico`, servicios: "Servicios", queNecesitas: "¿Qué necesitas?", serviciosEn: (c: string) => `Servicios en ${c}`, verDetalles: "Ver detalles", zonasServicio: "Zonas de servicio", zonasDonde: (s: string) => `Zonas donde ofrecemos ${s}`, tambienEn: "También en:", dudas: "Dudas habituales", preguntasFrecuentes: "Preguntas frecuentes", trabajosReales: "Trabajos reales", trabajosH2: "Trabajos reales de nuestros electricistas", trabajosIntro: "Fotografías tomadas por nuestro equipo durante las intervenciones, sin retoques ni bancos de imágenes.", igTitulo: "Subimos cada trabajo a Instagram", igTexto: (a: string) => `Cuadros, averías y obras terminadas, día a día en ${a}`, igSeguir: "Seguirnos", igAria: (a: string) => `Ver nuestros trabajos en Instagram, ${a}. Se abre en una pestaña nueva`, igAriaLinea: (a: string) => `Instagram ${a}, se abre en una pestaña nueva`, enGoogle: "en Google", resena: "reseña", resenas: "reseñas", verPerfil: "Ver perfil", selloAria: (n: string, t: number) => `Valoración ${n} de 5 en Google con ${t} reseñas. Ver perfil` },
    ciudad: { eyebrow: (c: string, k: string) => `Instaladores autorizados en ${c} (${k})`, verPadre: (p: string) => `‹ Ver todo nuestro servicio de electricista en ${p}`, electricistaEn: (z: string) => `Electricista en ${z}`, porQue: (c: string) => `Por qué en ${c} nos llaman a nosotros`, tambienServicio: "También damos servicio en", faqs: (c: string) => `Preguntas frecuentes en ${c}`, ctaFinal: (c: string) => `¿Necesitas un electricista en ${c}?`, altHero: (marca: string, c: string) => `Electricista de ${marca} trabajando en ${c}` },
    servicio: { llamarAhora: "Llamar ahora", ctaDefecto: "Pedir presupuesto gratis", volverPadre: (p: string) => `‹ ${p} en toda el área de Barcelona`, volverCiudad: (c: string) => `‹ Electricista en ${c}`, guardia: "Ahora mismo hay un electricista de guardia.", llamaAl: "Llama al", elServicio: "El servicio", queIncluye: "Qué incluye", preguntasSobre: (s: string) => `Preguntas sobre ${s}`, enTuCiudad: (s: string) => `${s} en tu ciudad`, comoQueda: (s: string) => `Cómo queda un trabajo de ${s}`, guias: "Guías relacionadas", comoCalculamos: "¿Quieres saber cómo calculamos el precio? Así funciona nuestro presupuesto cerrado →", visitaTecnica: "Pide una visita técnica", b2bTexto: "Cuéntanos qué instalaciones tenéis y te proponemos plan y precio cerrado. Facturamos con CIF e IVA desglosado.", altHero: (h1: string, marca: string) => `${h1}: electricistas de ${marca} en plena intervención` },
    home: { consejos: "Consejos", leerGuia: "Leer la guía", boletin: "Boletín eléctrico", sobreNosotros: "Sobre nosotros" },
    contacto: { prefieresLlamar: "¿Prefieres llamar?", urgencias: "Urgencias atendidas 24 horas, todos los días del año.", datos: "Datos de contacto", dudas: "Dudas antes de escribirnos" },
    presupuesto: { todoBoletin: "Todo sobre el boletín eléctrico (CIE) →", ctaH2: "Pide tu precio cerrado", ctaTexto: "Gratis, por escrito y en menos de 2 horas en horario laboral. O llámanos y te lo damos por teléfono.", palabraBoletin: "boletín" },
    breadcrumb: { inicio: "Inicio", consejos: "Consejos", contacto: "Contacto", presupuesto: "Presupuesto" },
    noEncontrada: { titulo: "Esta página no existe", texto: "Puede que el enlace esté mal escrito. Lo que sí funciona siempre:", portada: "Ir a la portada", presupuesto: "Pedir presupuesto" },
  },
  ca: {
    nav: { servicios: "Serveis", zonas: "Zones", presupuesto: "Pressupost", consejos: "Consells", contacto: "Contacte", principal: "Principal", menuMovil: "Menú mòbil", abrirMenu: "Obrir el menú", cerrarMenu: "Tancar el menú", inicio: "inici", llamar: "Trucar", llamarAl: "Trucar al", pedirPresupuesto: "Demanar pressupost", idioma: "Idioma" },
    footer: { servicios: "Serveis", pedirPresupuesto: "Demanar pressupost", serviciosPorCiudad: "Serveis per ciutat", zonas: "Zones", electricistaEn: (z: string) => `Lampista a ${z}`, barrios: "Barris de Barcelona", legal: "Legal", avisoLegal: "Avís legal", privacidad: "Política de privacitat", cookies: "Política de galetes", consejos: "Consells", contacto: "Contacte" },
    cta: { etiqueta: "Contacte", hablamos: "En parlem?", texto: "Truca'ns i et diem el preu tancat, o deixa'ns les teves dades i et truquem nosaltres en menys de 2 hores en horari laboral.", urgencias24: "Urgències ateses 24 hores, tots els dies.", inline: "Preu tancat per escrit abans de començar. Demana'l gratis:", pedirPresupuesto: "Demanar pressupost", llamarAhora: "Trucar ara", accionesRapidas: "Accions ràpides", whatsapp: "Escriure per WhatsApp", urgencias24h: "Urgències 24h", urgenciasLlamar: (t: string) => `Urgències 24 hores. Trucar al ${t}` },
    hero: { llamarAl: "Trucar al", pedirPresupuesto: "Demanar pressupost", solicita: "Demana el teu pressupost", sinCompromiso: "Sense compromís. Preu tancat per escrit abans de començar.", esUrgente: "És urgent? Truca al", oEscribenos: "o escriu-nos a", altDefecto: (marca: string) => `Lampista de ${marca} treballant en una instal·lació elèctrica` },
    form: { nombre: "Nom", tuNombre: "El teu nom", telefono: "Telèfon o WhatsApp", queNecesitas: "Què necessites?", eligeServicio: "Tria el servei", otro: "Altres", ciudad: "Ciutat", eligeZona: "Tria la teva zona", alrededores: (c: string) => `${c} i rodalies`, otraZona: "Una altra (àrea de Barcelona)", mensaje: "Explica'ns més (opcional)", placeholderMensaje: "Ex.: se'n va la llum quan encenc el forn / necessito un butlletí per donar d'alta la llum", error: "No s'ha pogut enviar. Torna-ho a provar o truca'ns al", enviando: "Enviant…", enviar: "Demanar pressupost", tienesFotos: "Tens fotos?", enviaWhatsapp: "Envia-les per WhatsApp", teLlamamos: "Et truquem en menys de 2 h en horari laboral. Sense compromís.", honeypot: "No omplis això:" },
    secciones: { comoTrabajamos: "Com treballem", porQueNosotros: "Per què nosaltres", altPorQue: (marca: string) => `Lampista de ${marca} treballant en un quadre elèctric`, servicios: "Serveis", queNecesitas: "Què necessites?", serviciosEn: (c: string) => `Serveis a ${c}`, verDetalles: "Veure detalls", zonasServicio: "Zones de servei", zonasDonde: (s: string) => `Zones on oferim ${s}`, tambienEn: "També a:", dudas: "Dubtes habituals", preguntasFrecuentes: "Preguntes freqüents", trabajosReales: "Feines reals", trabajosH2: "Feines reals dels nostres lampistes", trabajosIntro: "Fotografies fetes pel nostre equip durant les intervencions, sense retocs ni bancs d'imatges.", igTitulo: "Pugem cada feina a Instagram", igTexto: (a: string) => `Quadres, avaries i obres acabades, dia a dia a ${a}`, igSeguir: "Segueix-nos", igAria: (a: string) => `Veure les nostres feines a Instagram, ${a}. S'obre en una pestanya nova`, igAriaLinea: (a: string) => `Instagram ${a}, s'obre en una pestanya nova`, enGoogle: "a Google", resena: "ressenya", resenas: "ressenyes", verPerfil: "Veure perfil", selloAria: (n: string, t: number) => `Valoració ${n} de 5 a Google amb ${t} ressenyes. Veure perfil` },
    ciudad: { eyebrow: (c: string, k: string) => `Instal·ladors autoritzats a ${c} (${k})`, verPadre: (p: string) => `‹ Veure tot el nostre servei de lampista a ${p}`, electricistaEn: (z: string) => `Lampista a ${z}`, porQue: (c: string) => `Per què a ${c} ens truquen a nosaltres`, tambienServicio: "També donem servei a", faqs: (c: string) => `Preguntes freqüents a ${c}`, ctaFinal: (c: string) => `Necessites un lampista a ${c}?`, altHero: (marca: string, c: string) => `Lampista de ${marca} treballant a ${c}` },
    servicio: { llamarAhora: "Trucar ara", ctaDefecto: "Demanar pressupost gratis", volverPadre: (p: string) => `‹ ${p} a tota l'àrea de Barcelona`, volverCiudad: (c: string) => `‹ Lampista a ${c}`, guardia: "Ara mateix hi ha un electricista de guàrdia.", llamaAl: "Truca al", elServicio: "El servei", queIncluye: "Què inclou", preguntasSobre: (s: string) => `Preguntes sobre ${s}`, enTuCiudad: (s: string) => `${s} a la teva ciutat`, comoQueda: (s: string) => `Com queda una feina de ${s}`, guias: "Guies relacionades", comoCalculamos: "Vols saber com calculem el preu? Així funciona el nostre pressupost tancat →", visitaTecnica: "Demana una visita tècnica", b2bTexto: "Explica'ns quines instal·lacions teniu i us proposem pla i preu tancat. Facturem amb CIF i IVA desglossat.", altHero: (h1: string, marca: string) => `${h1}: lampistes de ${marca} en plena intervenció` },
    home: { consejos: "Consells", leerGuia: "Llegir la guia", boletin: "Butlletí elèctric", sobreNosotros: "Qui som" },
    contacto: { prefieresLlamar: "Prefereixes trucar?", urgencias: "Urgències ateses 24 hores, tots els dies de l'any.", datos: "Dades de contacte", dudas: "Dubtes abans d'escriure'ns" },
    presupuesto: { todoBoletin: "Tot sobre el butlletí elèctric (CIE) →", ctaH2: "Demana el teu preu tancat", ctaTexto: "Gratis, per escrit i en menys de 2 hores en horari laboral. O truca'ns i te'l donem per telèfon.", palabraBoletin: "butlletí" },
    breadcrumb: { inicio: "Inici", consejos: "Consells", contacto: "Contacte", presupuesto: "Pressupost" },
    noEncontrada: { titulo: "Aquesta pàgina no existeix", texto: "Pot ser que l'enllaç estigui mal escrit. El que sí que funciona sempre:", portada: "Anar a la portada", presupuesto: "Demanar pressupost" },
  },
  en: {
    nav: { servicios: "Services", zonas: "Areas", presupuesto: "Get a quote", consejos: "Guides", contacto: "Contact", principal: "Main", menuMovil: "Mobile menu", abrirMenu: "Open menu", cerrarMenu: "Close menu", inicio: "home", llamar: "Call", llamarAl: "Call", pedirPresupuesto: "Get a quote", idioma: "Language" },
    footer: { servicios: "Services", pedirPresupuesto: "Get a quote", serviciosPorCiudad: "Services by city", zonas: "Areas", electricistaEn: (z: string) => `Electrician in ${z}`, barrios: "Barcelona districts", legal: "Legal", avisoLegal: "Legal notice", privacidad: "Privacy policy", cookies: "Cookie policy", consejos: "Guides", contacto: "Contact" },
    cta: { etiqueta: "Contact", hablamos: "Shall we talk?", texto: "Call us for a fixed price, or leave your details and we'll call you back within 2 hours during business hours.", urgencias24: "Emergencies answered 24 hours a day, every day.", inline: "Fixed price in writing before we start. Ask for it, free:", pedirPresupuesto: "Get a quote", llamarAhora: "Call now", accionesRapidas: "Quick actions", whatsapp: "Message us on WhatsApp", urgencias24h: "24h emergencies", urgenciasLlamar: (t: string) => `24-hour emergencies. Call ${t}` },
    hero: { llamarAl: "Call", pedirPresupuesto: "Get a quote", solicita: "Request your quote", sinCompromiso: "No obligation. Fixed price in writing before we start.", esUrgente: "Is it urgent? Call", oEscribenos: "or email us at", altDefecto: (marca: string) => `${marca} electrician working on an electrical installation` },
    form: { nombre: "Name", tuNombre: "Your name", telefono: "Phone or WhatsApp", queNecesitas: "What do you need?", eligeServicio: "Choose a service", otro: "Other", ciudad: "City", eligeZona: "Choose your area", alrededores: (c: string) => `${c} and surroundings`, otraZona: "Other (Barcelona area)", mensaje: "Tell us more (optional)", placeholderMensaje: "E.g.: the power trips when I turn on the oven / I need a certificate (boletín) to get the electricity connected", error: "Could not send. Please try again or call us on", enviando: "Sending…", enviar: "Request a quote", tienesFotos: "Got photos?", enviaWhatsapp: "Send them on WhatsApp", teLlamamos: "We'll call you within 2 hours during business hours. No obligation.", honeypot: "Leave this empty:" },
    secciones: { comoTrabajamos: "How we work", porQueNosotros: "Why us", altPorQue: (marca: string) => `${marca} electrician working on a consumer unit`, servicios: "Services", queNecesitas: "What do you need?", serviciosEn: (c: string) => `Services in ${c}`, verDetalles: "See details", zonasServicio: "Service areas", zonasDonde: (s: string) => `Areas where we offer ${s}`, tambienEn: "Also in:", dudas: "Common questions", preguntasFrecuentes: "Frequently asked questions", trabajosReales: "Real jobs", trabajosH2: "Real jobs by our electricians", trabajosIntro: "Photos taken by our team on site, no retouching and no stock images.", igTitulo: "We post every job on Instagram", igTexto: (a: string) => `Consumer units, faults and finished jobs, day by day at ${a}`, igSeguir: "Follow us", igAria: (a: string) => `See our work on Instagram, ${a}. Opens in a new tab`, igAriaLinea: (a: string) => `Instagram ${a}, opens in a new tab`, enGoogle: "on Google", resena: "review", resenas: "reviews", verPerfil: "See profile", selloAria: (n: string, t: number) => `Rated ${n} out of 5 on Google with ${t} reviews. See profile` },
    ciudad: { eyebrow: (c: string, k: string) => `Licensed installers in ${c} (${k})`, verPadre: (p: string) => `‹ See our full electrician service in ${p}`, electricistaEn: (z: string) => `Electrician in ${z}`, porQue: (c: string) => `Why people in ${c} call us`, tambienServicio: "We also cover", faqs: (c: string) => `Frequently asked questions in ${c}`, ctaFinal: (c: string) => `Need an electrician in ${c}?`, altHero: (marca: string, c: string) => `${marca} electrician working in ${c}` },
    servicio: { llamarAhora: "Call now", ctaDefecto: "Get a free quote", volverPadre: (p: string) => `‹ ${p} across the Barcelona area`, volverCiudad: (c: string) => `‹ Electrician in ${c}`, guardia: "There is an electrician on call right now.", llamaAl: "Call", elServicio: "The service", queIncluye: "What's included", preguntasSobre: (s: string) => `Questions about ${s}`, enTuCiudad: (s: string) => `${s} in your city`, comoQueda: (s: string) => `What a ${s} job looks like`, guias: "Related guides", comoCalculamos: "Want to know how we work out the price? This is how our fixed quote works →", visitaTecnica: "Book a technical visit", b2bTexto: "Tell us what installations you have and we'll propose a plan and a fixed price. Invoiced with VAT itemised.", altHero: (h1: string, marca: string) => `${h1}: ${marca} electricians at work` },
    home: { consejos: "Guides", leerGuia: "Read the guide", boletin: "Electrical certificate", sobreNosotros: "About us" },
    contacto: { prefieresLlamar: "Prefer to call?", urgencias: "Emergencies answered 24 hours a day, every day of the year.", datos: "Contact details", dudas: "Questions before you write" },
    presupuesto: { todoBoletin: "All about the electrical certificate (CIE) →", ctaH2: "Ask for your fixed price", ctaTexto: "Free, in writing and within 2 hours during business hours. Or call us and we'll give it to you over the phone.", palabraBoletin: "certificate" },
    breadcrumb: { inicio: "Home", consejos: "Guides", contacto: "Contact", presupuesto: "Quote" },
    noEncontrada: { titulo: "This page doesn't exist", texto: "The link may be misspelt. What always works:", portada: "Go to the homepage", presupuesto: "Get a quote" },
  },
} as const;

export type UI = (typeof UI)["es"];

export function ui(locale: Locale): UI {
  return UI[locale] as unknown as UI;
}

/** Atributo lang de <html> por idioma */
export const HTML_LANG: Record<Locale, string> = { es: "es", ca: "ca", en: "en" };
