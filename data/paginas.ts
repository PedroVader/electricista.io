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
      "Es el trámite que más resolvemos. Si tu comercializadora te pide un CIE para dar de alta la luz, subir potencia o después de una reforma, lo tienes en 24-48 horas: revisamos la instalación, un instalador habilitado firma el certificado y nosotros lo tramitamos ante Indústria. Tú solo lo adjuntas a tu gestión.",
    ],
    bullets: [
      "Boletín azul (reconocimiento) y blanco (CIE), según lo que te pidan",
      "Firmado por un instalador habilitado, con su número de registro",
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
      "Somos una empresa de servicios eléctricos con base en Sabadell que trabaja con instaladores habilitados inscritos en el registro. Eso tiene una consecuencia práctica para ti: tu boletín eléctrico (CIE) lo firma quien legalmente puede hacerlo, con plena validez ante Indústria y ante tu comercializadora, algo que ningún “manitas” puede ofrecerte. Trabajamos cada día en Barcelona, Sabadell, Badalona, Mataró y Granollers, y en los municipios de sus comarcas.",
      "¿Qué tipo de trabajos hacemos? De todo lo que cuelga de un cuadro eléctrico: urgencias que no pueden esperar, averías que llevan semanas dando la lata, boletines para dar de alta la luz o subir potencia, cuadros antiguos con fusibles que toca jubilar, puntos de carga para el coche eléctrico, iluminación y ampliaciones para reformas, y mantenimiento para comunidades de vecinos, oficinas, comercios y hostelería.",
      "Nuestra forma de trabajar es simple y no cambia nunca: nos cuentas qué necesitas, te damos un precio cerrado por escrito en menos de 2 horas y, si te encaja, vamos cuando te venga bien. El precio que aceptas es el que pagas. Si durante el trabajo aparece algo imprevisto, se para, se te explica y se presupuesta aparte. Todos los trabajos quedan probados, recogidos y con garantía por escrito.",
      "Si es tu primera vez con nosotros, empieza por donde empieza casi todo el mundo: una llamada de dos minutos o el formulario de arriba. Sin compromiso, sin visitas comerciales y sin sorpresas en la factura.",
    ],
  },
  porQue: {
    h2: "Por qué vecinos y empresas nos llaman a nosotros",
    parrafos: [
      "Porque hacemos lo que casi nadie hace en este oficio. Decirte el precio antes, por escrito, y cumplirlo. Cuando llamas a un electricista te la juegas dos veces: no sabes quién va a venir ni cuánto vas a acabar pagando. Aquí las dos cosas están resueltas. Quien viene a tu casa o a tu negocio es un instalador habilitado con su número de registro, no “un chico que conozco”, y tiene capacidad legal para firmar tu boletín. Y el precio que aceptas es el precio que pagas, cerrado por escrito antes de empezar. Así trabajamos en cada avería, cada cuadro y cada instalación, sea un piso en Gràcia o una nave en Granollers.",
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
        "No trabajamos por horas, y con razón. La hora abierta es la puerta a las sorpresas en la factura. Te damos un precio cerrado por el trabajo completo antes de empezar, por escrito. Pídelo gratis y lo tienes en menos de 2 horas.",
    },
    {
      pregunta: "¿El desplazamiento se cobra?",
      respuesta:
        "Sí, la visita se cobra. Tiene un precio cerrado que te decimos por teléfono antes de ir, según zona y horario. Lo que no hay son sorpresas: lo sabes antes de que salga el electricista, y la reparación se presupuesta por escrito antes de tocar nada.",
    },
    {
      pregunta: "¿Qué es el boletín eléctrico y cuándo lo necesito?",
      respuesta:
        "Es el certificado (CIE) que acredita que tu instalación cumple el reglamento, y solo puede firmarlo un instalador habilitado. Lo necesitas para dar de alta la luz, subir potencia, tras una reforma o si tu instalación es antigua. Te lo gestionamos en 24-48h.",
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
      pregunta: "¿Quién hace el trabajo y quién firma el boletín?",
      respuesta:
        "El trabajo lo ejecuta un instalador eléctrico habilitado, inscrito en el registro oficial, y es él quien firma tu boletín (CIE) con su número. Nosotros coordinamos el servicio, te damos el precio cerrado y tramitamos la documentación ante Indústria. Puedes pedirnos el número de registro del instalador que va a firmar el tuyo.",
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
    "Respuesta corta: depende del trabajo, y desconfía de quien te suelte una cifra sin saber qué necesitas. Respuesta útil: pídenos presupuesto y en menos de 2 horas tienes un precio cerrado por escrito, sin compromiso. Aquí te contamos de qué depende.",
  secciones: [
    {
      h2: "¿Cuánto cuesta un electricista?",
      parrafos: [
        "El precio de un trabajo eléctrico depende de cuatro cosas. Del tipo de trabajo, porque no es lo mismo cambiar un enchufe que un cuadro completo. De la urgencia y el horario, porque una guardia nocturna no cuesta lo que una visita programada. De los materiales. Y de si el trabajo requiere boletín y su tramitación.",
        "Por eso no publicamos tarifas. Una cifra suelta, sin ver tu caso, solo sirve para llevarse sorpresas después. Nuestro sistema es el contrario. Nos cuentas qué necesitas y te damos un precio cerrado por escrito antes de empezar. Ese precio incluye todo y no cambia al acabar.",
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
        "Depende del tamaño de la instalación y de si pasa la revisión a la primera o necesita adaptaciones. Te damos el precio cerrado antes de empezar. Los plazos sí son estándar: emisión en 24-48 horas. Tienes todos los detalles en nuestra página del boletín eléctrico.",
      ],
    },
    {
      h2: "¿Y una urgencia? ¿Cuánto me va a costar?",
      parrafos: [
        "También te lo decimos antes: cuando llamas, te damos el precio cerrado de la salida y el diagnóstico por teléfono, según el horario. Y cuando el electricista ve la avería, te da el precio cerrado de la reparación antes de tocar nada. En ningún momento avanzas sin saber cuánto cuesta.",
      ],
    },
    {
      h2: "Por qué desconfiar de las tarifas publicadas",
      parrafos: [
        "Cuando buscas cuánto cuesta un electricista, lo primero que sale son listas de precios por concepto. Tanto por cambiar un enchufe, tanto por punto de luz. Suenan tranquilizadoras y casi nunca se parecen a la factura final.",
        "El motivo es que esas tarifas describen una operación en el vacío, y el trabajo eléctrico casi nunca ocurre en el vacío. Cambiar un enchufe cuesta lo que cuesta si detrás hay una caja de registro accesible y un circuito en condiciones. Si el mecanismo está quemado porque el cable que lo alimenta tiene poca sección, cambiar el enchufe no arregla nada y el trabajo real es otro. La tarifa publicada no sabe en cuál de los dos casos estás. Nosotros, con una foto y dos preguntas, casi siempre sí.",
        "Hay además una razón menos amable. Una tarifa baja y llamativa sirve para conseguir la visita, y la conversación sobre el precio real ocurre cuando ya tienes al técnico en casa y la instalación abierta. Es la posición con menos capacidad de negociación posible.",
        "Nuestra alternativa no es más cara por definición: es que sabes el número antes, por escrito, y decides con calma y sin nadie delante.",
      ],
    },
    {
      h2: "Qué incluye siempre un precio cerrado nuestro",
      parrafos: [
        "Para que compares con otros presupuestos, esto es lo que va dentro del número que te damos y que no aparecerá después como extra:",
      ],
      bullets: [
        "La mano de obra completa del trabajo descrito, sin límite de horas",
        "Los materiales necesarios, homologados y detallados en el presupuesto",
        "Las pruebas finales: disparo del diferencial, aislamiento y continuidad de tierra",
        "La retirada del material sustituido y la limpieza de la zona de trabajo",
        "La garantía por escrito sobre mano de obra y materiales instalados",
        "El IVA, indicado de forma desglosada y no escondido en el total",
      ],
    },
    {
      h2: "Qué puede cambiar el precio (y cómo lo gestionamos)",
      parrafos: [
        "Ser honestos con el precio cerrado obliga a decir también en qué casos puede aparecer un coste adicional, porque prometer que nunca pasa nada sería mentir.",
        "Lo que puede aparecer es lo imprevisible: al abrir una pared aparece una instalación distinta de la que había en el plano, un cable que parecía sano resulta estar dañado en un tramo oculto, o el mecanismo que había que sustituir arrastra un problema en el circuito que lo alimenta.",
        "Cuando eso ocurre, el procedimiento es siempre el mismo: se para el trabajo, te lo enseñamos, te explicamos qué implica y te pasamos un presupuesto aparte para esa parte concreta. Tú decides si se hace ahora, más adelante o con otra empresa. Lo que nunca hacemos es continuar y presentarte la sorpresa en la factura.",
        "El precio que aceptaste para el trabajo original sigue siendo ese, se haga o no el añadido.",
      ],
    },
    {
      h2: "Cuándo pedir presupuesto y cuándo llamar directamente",
      parrafos: [
        "Si el trabajo puede esperar, el formulario es la mejor opción: nos das el contexto con calma, adjuntas fotos y recibes el precio por escrito en menos de 2 horas en horario laboral. Es el camino de los boletines, los cambios de cuadro, las subidas de potencia, los puntos de carga y cualquier instalación programada.",
        "Si hay riesgo, llama y no esperes: olor a quemado, chispazos, un mecanismo caliente al tacto, cosquilleo al tocar un electrodoméstico, agua sobre la instalación o un local con género refrigerado sin suministro. En esos casos el precio de la salida te lo damos por teléfono en el momento y salimos.",
        "Y si dudas de en cuál de los dos grupos estás, llama igualmente. Preguntarlo no cuesta nada y te diremos con franqueza si tu caso puede esperar a mañana, aunque eso signifique facturar menos hoy.",
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
    {
      pregunta: "¿Cuánto tiempo me mantenéis el precio?",
      respuesta:
        "Nuestros presupuestos tienen una validez indicada en el propio documento, habitualmente de un mes. Si lo aceptas dentro de ese plazo, el precio es el que pone, aunque el material haya subido entre medias.",
    },
    {
      pregunta: "¿Hay que pagar algo por adelantado?",
      respuesta:
        "En trabajos domésticos habituales, no: se paga al terminar, con el trabajo probado y funcionando. En instalaciones grandes que requieren pedir material específico puede haber una provisión inicial, y en ese caso se dice desde el presupuesto, nunca sobre la marcha.",
    },
    {
      pregunta: "¿Qué formas de pago aceptáis?",
      respuesta:
        "Tarjeta, transferencia y efectivo. Siempre con factura, y con IVA desglosado. Si eres empresa o comunidad, facturamos con CIF y con el detalle que necesite tu gestoría o tu administrador.",
    },
    {
      pregunta: "¿Puedo pedir presupuesto solo para comparar?",
      respuesta:
        "Sí, y nos parece razonable que lo hagas. Pedir precio no te compromete a nada y no vas a recibir llamadas insistiendo. Si comparas, mira qué incluye cada presupuesto y no solo el total. La diferencia está casi siempre en los materiales, en las pruebas finales y en si la garantía va por escrito.",
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
  secciones: [
    {
      h2: "Qué pasa después de que nos escribas",
      parrafos: [
        "Nada de esperas sin noticias ni de comerciales insistiendo. El proceso es siempre el mismo y lo puedes seguir sin llamarnos tú:",
        "1. Recibimos tu mensaje y lo lee una persona, no un robot. Si nos has dejado fotos, mejor: con una o dos se valora la mayoría de trabajos sin necesidad de visita.",
        "2. Te llamamos en menos de 2 horas en horario laboral para entender bien el caso. Suelen bastar dos o tres minutos.",
        "3. Te mandamos el precio cerrado por escrito, con lo que incluye y lo que no. Ese precio no cambia al acabar.",
        "4. Si te encaja, acordamos día y franja horaria. Y cumplimos la hora: si vamos con retraso, te avisamos antes de que sea tarde.",
        "Si el trabajo es grande o hay demasiadas incógnitas para cerrar precio a distancia, te proponemos una visita técnica y te decimos su coste por adelantado. Nunca aparece una visita cobrada que no hayas aceptado antes.",
      ],
    },
    {
      h2: "Horarios: cuándo respondemos y cuándo salimos",
      parrafos: [
        "Hay dos cosas que la gente mezcla, y afectan a lo que puedes esperar de nosotros según la hora a la que escribas.",
        "Las urgencias se atienden 24 horas, todos los días del año, festivos incluidos. Si te has quedado sin luz, huele a quemado o hay chispazos, llama al teléfono a cualquier hora: hay un electricista de guardia y te decimos el precio cerrado de la salida antes de movernos.",
        "Los presupuestos y trabajos programados se gestionan en horario laboral. Si nos escribes un sábado por la tarde, te responderemos el lunes por la mañana. Preferimos decirlo claro a prometer una respuesta inmediata que no vamos a dar.",
        "Para comunidades, empresas y locales con contrato de mantenimiento hay prioridad de respuesta y un interlocutor fijo que ya conoce vuestra instalación.",
      ],
    },
    {
      h2: "Qué contarnos para que el presupuesto sea exacto",
      parrafos: [
        "Cuanto mejor entendamos el caso, más ajustado será el precio y menos sorpresas habrá. Con esto basta:",
      ],
      bullets: [
        "Qué te pasa o qué necesitas, en lenguaje normal: no hace falta que uses términos técnicos",
        "En qué municipio y, si es urgente, en qué calle o barrio",
        "Si es vivienda, local, oficina o zona común de una comunidad",
        "Una o dos fotos: del cuadro eléctrico abierto, del enchufe o del punto afectado",
        "Si hay ascensor y si el acceso tiene alguna particularidad",
        "Si tienes fecha límite, por una mudanza, un alta de luz o una apertura",
      ],
    },
  ],
  faqs: [
    {
      pregunta: "¿Cuánto tardáis en responder?",
      respuesta:
        "Menos de 2 horas en horario laboral. Fuera de ese horario, el formulario se contesta al siguiente día hábil. Las urgencias son otra cosa: para eso está el teléfono, que se atiende 24 horas todos los días del año.",
    },
    {
      pregunta: "¿El presupuesto tiene algún coste o compromiso?",
      respuesta:
        "Ninguno. La mayoría de trabajos los presupuestamos con una llamada y alguna foto, sin visita previa y sin compromiso. Si el caso requiere visita técnica, te decimos su precio antes de ir y decides tú.",
    },
    {
      pregunta: "¿Puedo escribiros por WhatsApp?",
      respuesta:
        "Sí, y para muchos casos es lo más práctico porque puedes mandar fotos directamente. Tienes el botón en cualquier página. Para una urgencia, mejor llamar: es más rápido y te damos precio en el momento.",
    },
    {
      pregunta: "¿Atendéis en catalán?",
      respuesta:
        "Sí, en catalán y en castellano, tanto por teléfono como por escrito. Dinos qué prefieres y sin problema.",
    },
    {
      pregunta: "¿Qué zonas cubrís?",
      respuesta:
        "Barcelona ciudad y sus diez distritos, Sabadell, Badalona, Mataró y Granollers, además de los municipios del Barcelonès, el Vallès Occidental, el Vallès Oriental y el Maresme. Si tu municipio no aparece pero está en esa área, llámanos igual y te lo confirmamos.",
    },
    {
      pregunta: "¿Qué hago con mis datos si cambio de opinión?",
      respuesta:
        "Escríbenos al correo de contacto y los eliminamos. Solo usamos lo que nos das para responderte al presupuesto: no cedemos datos a terceros ni te vamos a meter en ninguna lista de correo.",
    },
  ] as FAQ[],
};
