import type { FAQ } from "./tipos";

/** Copy de las páginas fijas (home, presupuesto, contacto). */

export const home = {
  metaTitle: "Electricistas en Barcelona | Urgencias 24h y Boletines",
  metaDescription:
    "Electricistas autorizados en Barcelona, Sabadell, Badalona, Mataró y Granollers. Urgencias 24h, boletines (CIE) y averías. Precio cerrado.",
  serviciosIntro:
    "Del enchufe que chispea al cuadro completo de una nave. Elige lo que te pasa y te contamos cómo lo resolvemos, o llámanos directamente y nos lo cuentas tú.",
  bandaUrgencias: {
    texto: "Hay un electricista de guardia ahora mismo.",
    subtexto: "Sin luz, cortocircuito o olor a quemado: te decimos precio cerrado por teléfono y salimos ya.",
  },
  boletinDestacado: {
    h2: "¿Te han pedido el boletín eléctrico?",
    parrafos: [
      "Es el trámite que más resolvemos. Si tu comercializadora te pide un CIE para dar de alta la luz, subir potencia o después de una reforma, lo tienes en 24-48 horas: revisamos la instalación, emitimos el certificado y lo tramitamos ante Indústria. Tú solo lo adjuntas a tu gestión.",
    ],
    bullets: [
      "Boletín azul (reconocimiento) y blanco (CIE), según lo que te pidan",
      "Firmado por instalador habilitado con número de registro",
      "Tramitación ante Indústria incluida",
      "Listo en 24-48 horas en la mayoría de casos",
    ],
    ctaTexto: "Todo sobre el boletín eléctrico",
    ctaHref: "/boletin-electrico",
  },
  consejos: {
    h2: "Guías rápidas de nuestros electricistas",
    intro:
      "Las dudas que nos preguntáis cada semana, respondidas sin rodeos: qué puedes comprobar tú y cuándo toca llamar.",
    ctaTexto: "Ver todos los consejos",
  },
  textoSeo: {
    h2: "Electricistas de confianza en Barcelona y su área metropolitana",
    parrafos: [
      "Somos una empresa instaladora con base en Sabadell y equipo propio de electricistas habilitados. Eso tiene una consecuencia práctica para ti: podemos firmar y tramitar boletines eléctricos (CIE) con plena validez ante Indústria y ante tu comercializadora, algo que ningún “manitas” puede ofrecerte. Trabajamos cada día en Barcelona, Sabadell, Badalona, Mataró y Granollers, y en los municipios de sus comarcas.",
      "¿Qué tipo de trabajos hacemos? De todo lo que cuelga de un cuadro eléctrico: urgencias que no pueden esperar, averías que llevan semanas dando la lata, boletines para dar de alta la luz o subir potencia, cuadros antiguos con fusibles que toca jubilar, puntos de carga para el coche eléctrico, iluminación y ampliaciones para reformas, y mantenimiento para comunidades de vecinos, oficinas, comercios y hostelería.",
      "Nuestra forma de trabajar es simple y no cambia nunca: nos cuentas qué necesitas, te damos un precio cerrado por escrito en menos de 2 horas y, si te encaja, vamos cuando te venga bien. El precio que aceptas es el que pagas. Si durante el trabajo aparece algo imprevisto, se para, se te explica y se presupuesta aparte. Todos los trabajos quedan probados, recogidos y con garantía por escrito.",
      "Si es tu primera vez con nosotros, empieza por donde empieza casi todo el mundo: una llamada de dos minutos o el formulario de arriba. Sin compromiso, sin visitas comerciales y sin sorpresas en la factura.",
    ],
  },
  porQue: {
    h2: "Por qué vecinos y empresas nos llaman a nosotros",
    parrafos: [
      "Porque hacemos lo que casi nadie hace en este oficio: decirte el precio antes, por escrito, y cumplirlo. Cuando llamas a un electricista sueles jugártela dos veces: no sabes quién va a venir ni cuánto te va a costar al final. Aquí las dos cosas están resueltas. Quien viene a tu casa o a tu negocio es un instalador habilitado de nuestro equipo, no un intermediario ni “un chico que conozco”, y tiene capacidad legal para firmar tu boletín si lo necesitas. Y el precio que aceptas es el precio que pagas: cerrado por escrito antes de empezar, sin sorpresas al acabar. Así trabajamos en cada avería, cada cuadro y cada instalación, sea un piso en Gràcia o una nave en Granollers.",
    ],
    bullets: [
      "Precio cerrado por escrito antes de empezar",
      "Instalador habilitado, no “un manitas”",
      "Boletín eléctrico (CIE) en 24-48h",
      "El mismo electricista para tus siguientes trabajos",
    ],
  },
  comoFunciona: {
    h2: "Cómo funciona",
    pasos: [
      {
        titulo: "Nos llamas o escribes",
        texto:
          "Cuéntanos qué necesitas en dos minutos. Si puedes, con una foto basta para valorar la mayoría de trabajos.",
      },
      {
        titulo: "Te damos precio cerrado",
        texto:
          "Por escrito y en menos de 2 horas en horario laboral. Ese precio no cambia al acabar.",
      },
      {
        titulo: "Vamos hoy o cuando te venga bien",
        texto:
          "Urgencias, hoy mismo. Trabajos programados, el día y la franja que elijas. Y cumplimos la hora.",
      },
    ],
  },
  zonas: {
    h2: "Trabajamos en toda el área de Barcelona",
    intro:
      "Servicio propio en Barcelona, Sabadell, Badalona, Mataró y Granollers, y cobertura diaria en sus comarcas: Barcelonès, Vallès Occidental, Vallès Oriental y Maresme.",
  },
  faqs: [
    {
      pregunta: "¿Cuánto cobra un electricista por hora?",
      respuesta:
        "Nosotros no trabajamos por horas, y con razón: la hora abierta es la puerta a las sorpresas en la factura. Te damos un precio cerrado por el trabajo completo antes de empezar, por escrito. Pídelo gratis: te lo mandamos en menos de 2 horas.",
    },
    {
      pregunta: "¿El desplazamiento se cobra?",
      respuesta:
        "Sí, la visita se cobra. Tiene un precio cerrado que te decimos por teléfono antes de ir, según zona y horario. Lo que no hay son sorpresas: lo sabes antes de que salga el electricista, y la reparación se presupuesta por escrito antes de tocar nada.",
    },
    {
      pregunta: "¿Qué es el boletín eléctrico y cuándo lo necesito?",
      respuesta:
        "Es el certificado (CIE) que acredita que tu instalación cumple el reglamento, y solo puede firmarlo un instalador habilitado. Lo necesitas para dar de alta la luz, subir potencia, tras una reforma o si tu instalación es antigua. Lo emitimos en 24-48h.",
    },
    {
      pregunta: "¿Venís hoy mismo?",
      respuesta:
        "Si es urgente, sí: tenemos electricista de guardia 24 horas, todos los días. Si no corre prisa, concertamos día y franja horaria y la cumplimos.",
    },
    {
      pregunta: "¿Trabajáis con empresas y comunidades?",
      respuesta:
        "Sí: comunidades de vecinos, oficinas, locales y hostelería, tanto averías puntuales como mantenimientos periódicos. Factura con CIF e IVA desglosado y visita técnica para valorar la instalación.",
    },
    {
      pregunta: "¿Dais garantía?",
      respuesta:
        "Sí, por escrito, sobre la mano de obra y los materiales que instalamos. Si algo de lo nuestro falla, volvemos y lo resolvemos sin coste.",
    },
    {
      pregunta: "¿Sois instaladores autorizados?",
      respuesta:
        "Sí. Somos empresa instaladora con electricistas habilitados, inscritos en el registro correspondiente. Por eso podemos emitir y firmar boletines (CIE) con plena validez.",
    },
  ] as FAQ[],
  ctaFinal: {
    h2: "¿Hablamos?",
    texto:
      "Llámanos y te decimos precio cerrado, o déjanos tus datos y te llamamos nosotros en menos de 2 horas en horario laboral.",
  },
};

export const presupuesto = {
  metaTitle: "Precio de electricista: presupuesto cerrado gratis",
  metaDescription:
    "¿Cuánto cuesta un electricista en Barcelona? Te damos precio cerrado por escrito en menos de 2h, gratis. Sin sorpresas al acabar.",
  h1: "¿Cuánto cuesta un electricista? Precio cerrado, gratis y en menos de 2 horas",
  intro:
    "Respuesta corta: depende del trabajo, y desconfía de quien te dé una cifra sin saber qué necesitas. Respuesta útil: pídenos presupuesto y en menos de 2 horas tienes un precio cerrado por escrito, sin compromiso. Aquí te contamos de qué depende.",
  secciones: [
    {
      h2: "¿Cuánto cuesta un electricista?",
      parrafos: [
        "El precio de un trabajo eléctrico depende de cuatro factores: el tipo de trabajo (no es lo mismo cambiar un enchufe que un cuadro completo), la urgencia y el horario (una guardia nocturna no cuesta lo mismo que una visita programada), los materiales necesarios y si el trabajo requiere boletín (CIE) y su tramitación.",
        "Por eso no publicamos tarifas: una cifra suelta, sin ver tu caso, solo sirve para llevarse sorpresas después. Nuestro sistema es el contrario: nos cuentas qué necesitas, y te damos un precio cerrado por escrito antes de empezar. Ese precio incluye todo y no cambia al acabar.",
      ],
    },
    {
      h2: "¿Se cobra el desplazamiento?",
      parrafos: [
        "Sí, la visita se cobra, y su precio cerrado te lo decimos por teléfono antes de ir. Lo que no encontrarás son conceptos que aparecen al final de la factura: el desplazamiento lo conoces antes de abrir la puerta y el trabajo se presupuesta por escrito antes de empezar. Si aceptas un precio, ese es el precio.",
      ],
    },
    {
      h2: "¿Cuánto cuesta un boletín eléctrico?",
      parrafos: [
        "Depende del tamaño de la instalación y de si pasa la revisión a la primera o necesita adaptaciones para cumplir el reglamento. Te damos el precio cerrado antes de empezar, y los plazos son estándar: emisión en 24-48 horas en la mayoría de casos. Tienes todos los detalles en nuestra página del boletín eléctrico.",
      ],
    },
    {
      h2: "¿Y una urgencia? ¿Cuánto me va a costar?",
      parrafos: [
        "También te lo decimos antes: cuando llamas, te damos el precio cerrado de la salida y el diagnóstico por teléfono, según el horario. Y cuando el electricista ve la avería, te da el precio cerrado de la reparación antes de tocar nada. En ningún momento avanzas sin saber cuánto cuesta.",
      ],
    },
  ],
  faqs: [
    {
      pregunta: "¿El presupuesto es gratis de verdad?",
      respuesta:
        "El presupuesto sí: la mayoría de trabajos los presupuestamos con una llamada y alguna foto, sin visita previa, gratis y sin compromiso. Te llega por escrito en menos de 2 horas en horario laboral. Si hace falta visita de diagnóstico, esa tiene un precio cerrado que te avisamos antes.",
    },
    {
      pregunta: "¿El precio puede cambiar al acabar el trabajo?",
      respuesta:
        "No. Es la base de nuestra forma de trabajar: precio cerrado por escrito antes de empezar. Si durante el trabajo apareciera algo imprevisible, se para, se te explica y se presupuesta aparte. Nunca te encontrarás un extra en la factura.",
    },
    {
      pregunta: "¿Cobráis por horas?",
      respuesta:
        "No. Presupuestamos por trabajo completo. La hora abierta traslada el riesgo al cliente; el precio cerrado nos obliga a nosotros a trabajar bien y rápido.",
    },
    {
      pregunta: "¿Qué necesitáis para darme precio?",
      respuesta:
        "Qué necesitas, en qué municipio y, si es posible, una o dos fotos. Con eso cerramos precio en la gran mayoría de casos. Si el trabajo es grande, concertamos una visita técnica con precio avisado por adelantado.",
    },
  ] as FAQ[],
};

export const contacto = {
  metaTitle: "Contacto | Presupuesto gratis en menos de 2h",
  metaDescription:
    "Pide presupuesto gratis a nuestros electricistas: te respondemos en menos de 2 horas en horario laboral. Urgencias atendidas 24h por teléfono.",
  h1: "Pide presupuesto gratis",
  intro:
    "Cuéntanos qué necesitas y te llamamos en menos de 2 horas en horario laboral con un precio cerrado. ¿Es urgente? No esperes al formulario: llámanos, hay un electricista de guardia ahora mismo.",
};
