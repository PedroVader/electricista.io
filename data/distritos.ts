import type { Ciudad } from "./tipos";

/**
 * Landings de distrito de Barcelona (fase 2 del SPEC). Usan la misma
 * plantilla que las ciudades y cuelgan de /electricista-barcelona
 * mediante el campo padre.
 */

const padre = { nombre: "Barcelona", slug: "electricista-barcelona" };

export const distritos: Ciudad[] = [
  {
    slug: "electricista-eixample",
    nombre: "Eixample",
    comarca: "Barcelona",
    padre,
    h1: "Electricista en el Eixample: urgencias e instaladores autorizados",
    metaTitle: "Electricista en el Eixample (Barcelona) | Urgencias 24h",
    metaDescription:
      "Electricistas autorizados en el Eixample. Fincas antiguas, boletines (CIE), cuadros y urgencias 24h. Precio cerrado antes de empezar.",
    porQue: [
      "El Eixample concentra el parque de fincas regias más grande de Barcelona: edificios de 1900 a 1930 con techos altos, instalaciones que han crecido a parches durante un siglo y cuadros junto a la puerta que ya no protegen nada. Es nuestro distrito de trabajo más habitual, y el motivo de buena parte de los boletines que emitimos: pisos que se venden o se alquilan y cuya instalación no pasa la revisión de la comercializadora.",
      "Trabajamos con cuidado en fincas con elementos protegidos: rozas mínimas, molduras respetadas y canaletas donde no se puede abrir pared. En urgencias llegamos en 30-45 minutos a cualquier punto del distrito, del Fort Pienc a la Esquerra, y el aparcamiento es problema nuestro, no tuyo.",
    ],
    tambienServicio: {
      intro:
        "Desde el Eixample nos movemos a los distritos que lo rodean en pocos minutos: Gràcia y Sant Martí por arriba y por mar, Ciutat Vella por abajo y Les Corts por la Diagonal. Y por supuesto, al resto de Barcelona.",
      municipios: ["Gràcia", "Sant Martí", "Ciutat Vella", "Les Corts", "Sants"],
    },
    zonas: {
      h2: "Trabajos habituales por zona del Eixample",
      intro:
        "El distrito es grande y cada zona tiene su patrón de averías. Esto es lo que más hacemos en cada una.",
      items: [
        {
          nombre: "La Dreta de l'Eixample",
          texto:
            "Fincas señoriales con instalación centenaria: renovación completa, boletines para compraventa y cuadros nuevos con protección para despachos y consultas.",
        },
        {
          nombre: "L'Antiga i la Nova Esquerra",
          texto:
            "Pisos reformados a medias donde la potencia se queda corta: subidas de potencia, líneas nuevas de cocina y adecuaciones para el CIE.",
        },
        {
          nombre: "Sant Antoni",
          texto:
            "Comercio y hostelería en plena efervescencia: ampliaciones de potencia para cocinas, cuadros de locales y legalizaciones para licencias.",
        },
        {
          nombre: "Sagrada Família",
          texto:
            "Bloques de los 50 a los 70 con fusibles todavía en servicio: cambios de cuadro, tomas de tierra y derivaciones que hacen saltar el diferencial.",
        },
        {
          nombre: "Fort Pienc",
          texto:
            "Vivienda de los 70 y 80 junto a Glòries: renovación de cuadros, líneas para climatización y puntos de carga en párkings comunitarios.",
        },
      ],
    },
    faqsLocales: [
      {
        pregunta: "¿Cuánto tarda un electricista en llegar al Eixample?",
        respuesta:
          "En urgencias, entre 30 y 45 minutos a cualquier zona del distrito. En trabajos programados, concertamos franja y la cumplimos.",
      },
      {
        pregunta: "Mi finca está catalogada. ¿Podéis renovar la instalación?",
        respuesta:
          "Sí, lo hacemos a menudo en el Eixample: rozas mínimas, molduras y carpinterías respetadas, y canaleta técnica donde no se puede abrir pared. Todo con boletín al acabar.",
      },
      {
        pregunta: "¿Hacéis boletines para vender o alquilar un piso en el Eixample?",
        respuesta:
          "Sí, es el encargo estrella del distrito: revisamos la instalación, adaptamos lo imprescindible y emitimos el CIE en 24-48h.",
      },
    ],
  },
  {
    slug: "electricista-gracia",
    nombre: "Gràcia",
    comarca: "Barcelona",
    padre,
    h1: "Electricista en Gràcia: urgencias e instaladores autorizados",
    metaTitle: "Electricista en Gràcia (Barcelona) | Urgencias 24h",
    metaDescription:
      "Electricistas autorizados en Gràcia. Fincas pequeñas, reformas, boletines (CIE) y urgencias 24h. Precio cerrado antes de empezar.",
    porQue: [
      "La Vila de Gràcia es un pueblo dentro de Barcelona y sus fincas lo reflejan: edificios estrechos, sin ascensor, con instalaciones pequeñas que se quedaron en otra época. El encargo típico del barrio es el piso recién alquilado o comprado por gente joven que quiere electrificar la cocina y descubre que la potencia y el cuadro no dan para más.",
      "Las calles estrechas y las plazas no nos frenan: vamos a pie desde donde se pueda aparcar, con lo que el tiempo de llegada en urgencias se mantiene en 30-45 minutos. También atendemos los comercios y restaurantes de las plazas, con trabajos fuera de horario para no interrumpir el servicio.",
    ],
    tambienServicio: {
      intro:
        "Cubrimos todo el distrito de Gràcia, de la Vila a Vallcarca, y saltamos en minutos a los distritos vecinos: el Eixample por abajo, Horta-Guinardó por el este y Sarrià-Sant Gervasi por el oeste.",
      municipios: ["Eixample", "Horta-Guinardó", "Sarrià-Sant Gervasi"],
    },
    zonas: {
      h2: "Trabajos habituales por zona de Gràcia",
      intro: "Cada parte del distrito tiene su encargo típico. Estos son los nuestros.",
      items: [
        {
          nombre: "Vila de Gràcia",
          texto:
            "Fincas estrechas con potencia corta: subidas de potencia, cuadros nuevos y reformas de instalación en pisos pequeños. Comercios de plaza con ampliaciones para hostelería.",
        },
        {
          nombre: "La Salut",
          texto:
            "Pendientes y fincas junto al Park Güell: instalaciones antiguas, derivaciones por humedad y renovación de cuadros.",
        },
        {
          nombre: "Vallcarca i els Penitents",
          texto:
            "Casas con jardín y bloques en desnivel: iluminación exterior, automatismos y ampliaciones de instalación.",
        },
        {
          nombre: "El Coll i Camp d'en Grassot",
          texto:
            "Bloques de los 60 y 70: cambios de cuadro, tomas de tierra y adecuaciones para pasar el boletín.",
        },
      ],
    },
    faqsLocales: [
      {
        pregunta: "¿Cuánto tarda un electricista en llegar a Gràcia?",
        respuesta:
          "Entre 30 y 45 minutos en urgencias, también en la Vila y sus calles estrechas: aparcamos donde se puede y seguimos a pie.",
      },
      {
        pregunta: "Quiero electrificar la cocina de un piso antiguo de Gràcia. ¿Qué necesito?",
        respuesta:
          "Casi siempre: línea nueva de cocina, cuadro a la altura y, según el caso, subida de potencia con boletín. Te lo cerramos todo en un mismo presupuesto por escrito.",
      },
      {
        pregunta: "¿Trabajáis en los bares y restaurantes de las plazas?",
        respuesta:
          "Sí, con trabajos programados fuera de tu horario de servicio y urgencias con prioridad para que no pares la cocina.",
      },
    ],
  },
  {
    slug: "electricista-sants",
    nombre: "Sants",
    comarca: "Barcelona",
    padre,
    h1: "Electricista en Sants: urgencias e instaladores autorizados",
    metaTitle: "Electricista en Sants (Barcelona) | Urgencias 24h",
    metaDescription:
      "Electricistas autorizados en Sants, Hostafrancs y la Bordeta. Cuadros antiguos, boletines (CIE) y urgencias 24h. Precio cerrado.",
    porQue: [
      "Sants, Hostafrancs y la Bordeta comparten el mismo parque de viviendas: bloques de los años 50 a 70 levantados alrededor de la industria, muchos con los fusibles originales y sin toma de tierra en media casa. El cambio de cuadro es el trabajo que más hacemos en el distrito, seguido de las adecuaciones para pasar el boletín en pisos que llevan décadas sin tocarse.",
      "El comercio de la carretera de Sants y el entorno de la estación también nos da trabajo a diario: locales que renuevan licencia, ampliaciones de potencia y averías con prioridad para no cerrar la persiana. En urgencias llegamos en 30-45 minutos a cualquier punto del distrito.",
    ],
    tambienServicio: {
      intro:
        "Desde Sants cubrimos todo el distrito de Sants-Montjuïc, incluida la Marina y el Poble-sec, y llegamos en minutos a Les Corts, el Eixample y L'Hospitalet, que queda a un paso.",
      municipios: ["Les Corts", "Eixample", "Poble-sec i la Marina", "L'Hospitalet"],
    },
    zonas: {
      h2: "Trabajos habituales por zona de Sants",
      intro: "Esto es lo que más resolvemos en cada parte del distrito.",
      items: [
        {
          nombre: "Sants i Sants-Badal",
          texto:
            "Bloques de posguerra con fusibles y cableado justo: cambios de cuadro, tomas de tierra y renovación completa con boletín.",
        },
        {
          nombre: "Hostafrancs",
          texto:
            "Comercio y vivienda sobre locales: ampliaciones de potencia, cuadros de local y legalizaciones para licencias de actividad.",
        },
        {
          nombre: "La Bordeta",
          texto:
            "Casas de cos y bloques bajos: instalaciones vistas por renovar, derivaciones y subidas de potencia para cocina eléctrica.",
        },
        {
          nombre: "Entorno de la estación y Fira",
          texto:
            "Oficinas, hoteles y locales de paso: mantenimiento, revisiones para seguros y averías atendidas con prioridad.",
        },
      ],
    },
    faqsLocales: [
      {
        pregunta: "¿Cuánto tarda un electricista en llegar a Sants?",
        respuesta:
          "En urgencias, entre 30 y 45 minutos a Sants, Hostafrancs, la Bordeta o Badal.",
      },
      {
        pregunta: "Mi piso de Sants todavía tiene los plomos. ¿Es urgente cambiarlos?",
        respuesta:
          "No es una urgencia, pero sí una prioridad: un cuadro con fusibles no te protege de derivaciones ni contactos. El cambio se hace en una mañana y te pasamos precio cerrado con una foto del cuadro.",
      },
      {
        pregunta: "¿Hacéis boletines en Sants para dar de alta la luz?",
        respuesta:
          "Sí, a diario: revisión, adecuación de lo imprescindible y CIE en 24-48h, con la tramitación incluida.",
      },
    ],
  },
  {
    slug: "electricista-sant-marti",
    nombre: "Sant Martí",
    comarca: "Barcelona",
    padre,
    h1: "Electricista en Sant Martí: urgencias e instaladores autorizados",
    metaTitle: "Electricista en Sant Martí (Barcelona) | Urgencias 24h",
    metaDescription:
      "Electricistas autorizados en Sant Martí: Poblenou, 22@, Clot y La Verneda. Oficinas, lofts, boletines y urgencias 24h. Precio cerrado.",
    porQue: [
      "Sant Martí es el distrito más contrastado de Barcelona para un electricista: en el Poblenou y el 22@ trabajamos en oficinas, lofts y antiguas fábricas reconvertidas que heredan instalaciones trifásicas industriales; en el Clot, el Camp de l'Arpa y La Verneda, en bloques residenciales de los 60 y 70 con las averías clásicas de esa época: cuadros cortos, potencias mínimas y enchufes sin tierra.",
      "Para las empresas del 22@ ofrecemos mantenimiento con interlocutor único y factura con IVA desglosado; para los vecinos, el mismo servicio de siempre: precio cerrado por escrito y urgencias en menos de una hora en todo el distrito.",
    ],
    tambienServicio: {
      intro:
        "Cubrimos todo Sant Martí, del front marítim de la Vila Olímpica a la Verneda, y saltamos en minutos a Sant Andreu, el Eixample y Sant Adrià de Besòs.",
      municipios: ["Sant Andreu", "Eixample", "Sant Adrià de Besòs"],
    },
    zonas: {
      h2: "Trabajos habituales por zona de Sant Martí",
      intro: "Del loft industrial al bloque de barrio, esto es lo que más hacemos.",
      items: [
        {
          nombre: "Poblenou i 22@",
          texto:
            "Oficinas y lofts en fábricas reconvertidas: cuadros trifásicos, mantenimiento de empresa, iluminación técnica y legalizaciones.",
        },
        {
          nombre: "Vila Olímpica i front marítim",
          texto:
            "Vivienda de los 90 con clima: líneas dedicadas, renovación de cuadros y derivaciones por salitre en terrazas y exteriores.",
        },
        {
          nombre: "El Clot i Camp de l'Arpa",
          texto:
            "Bloques de los 60 y 70: cambios de cuadro, subidas de potencia y adecuaciones para el boletín.",
        },
        {
          nombre: "La Verneda i la Pau",
          texto:
            "Vivienda de posguerra con potencias mínimas: el ICP salta con dos aparatos. Subidas de potencia y revisión de derivaciones individuales.",
        },
      ],
    },
    faqsLocales: [
      {
        pregunta: "¿Cuánto tarda un electricista en llegar a Sant Martí?",
        respuesta:
          "En urgencias, entre 30 minutos y una hora según la zona, del Poblenou a la Verneda.",
      },
      {
        pregunta: "¿Lleváis el mantenimiento eléctrico de oficinas en el 22@?",
        respuesta:
          "Sí: revisiones programadas, averías con prioridad, iluminación y ampliaciones, con contrato de mantenimiento e IVA desglosado.",
      },
      {
        pregunta: "Tengo un loft en una antigua fábrica del Poblenou. ¿Trabajáis con trifásica?",
        respuesta:
          "Sí, es habitual en el barrio: adaptamos instalaciones trifásicas heredadas, las legalizamos y las dejamos con las protecciones al día.",
      },
    ],
  },
  {
    slug: "electricista-sant-andreu",
    nombre: "Sant Andreu",
    comarca: "Barcelona",
    padre,
    h1: "Electricista en Sant Andreu: urgencias e instaladores autorizados",
    metaTitle: "Electricista en Sant Andreu (Barcelona) | Urgencias 24h",
    metaDescription:
      "Electricistas autorizados en Sant Andreu, La Sagrera y Bon Pastor. Instalaciones antiguas, boletines y urgencias 24h. Precio cerrado.",
    porQue: [
      "El casco antiguo de Sant Andreu conserva casas de pueblo con instalaciones vistas sobre regletas que piden renovación completa, mientras que La Sagrera y el Bon Pastor combinan bloques de posguerra con vivienda nueva llegada con las obras de la estación. Esa mezcla marca nuestro trabajo diario: renovaciones integrales con boletín en el casco antiguo y cuadros, potencias y derivaciones en los bloques.",
      "En urgencias llegamos en 30-45 minutos a todo el distrito, incluida Trinitat Vella. Y si tienes un comercio en la calle Gran de Sant Andreu, priorizamos tu avería para que abras con normalidad.",
    ],
    tambienServicio: {
      intro:
        "Cubrimos todo el distrito y su entorno inmediato: Nou Barris al otro lado de la Meridiana, Sant Martí hacia mar y Santa Coloma cruzando el Besòs.",
      municipios: ["Nou Barris", "Sant Martí", "Santa Coloma de Gramenet"],
    },
    zonas: {
      h2: "Trabajos habituales por zona de Sant Andreu",
      intro: "Esto es lo que más hacemos en cada parte del distrito.",
      items: [
        {
          nombre: "Casc antic de Sant Andreu",
          texto:
            "Casas de pueblo con instalación vista sobre regletas: renovaciones completas con boletín y cuadros nuevos respetando la estética.",
        },
        {
          nombre: "La Sagrera",
          texto:
            "Bloques de los 60 junto a vivienda nueva: cambios de cuadro en lo viejo, líneas de clima y puntos de carga en lo nuevo.",
        },
        {
          nombre: "Bon Pastor i Baró de Viver",
          texto:
            "Vivienda de posguerra renovada por fases: adecuaciones para boletín, tomas de tierra y subidas de potencia.",
        },
        {
          nombre: "Trinitat Vella",
          texto:
            "Bloques con potencias mínimas: revisión de derivación individual, subidas de potencia y reparación de averías recurrentes.",
        },
      ],
    },
    faqsLocales: [
      {
        pregunta: "¿Cuánto tarda un electricista en llegar a Sant Andreu?",
        respuesta:
          "En urgencias, entre 30 y 45 minutos a todo el distrito, incluidas Trinitat Vella y Bon Pastor.",
      },
      {
        pregunta: "Mi casa del casco antiguo tiene la instalación vista con cables antiguos. ¿Se puede renovar sin destrozarla?",
        respuesta:
          "Sí: combinamos rozas donde se puede con canaleta y moldura donde no, y dejamos la instalación legalizada con su boletín. Es el encargo típico del barrio.",
      },
      {
        pregunta: "¿Atendéis los comercios de la calle Gran?",
        respuesta:
          "Sí, con prioridad en averías y trabajos fuera de horario comercial para no interrumpir la venta.",
      },
    ],
  },
  {
    slug: "electricista-les-corts",
    nombre: "Les Corts",
    comarca: "Barcelona",
    padre,
    h1: "Electricista en Les Corts: urgencias e instaladores autorizados",
    metaTitle: "Electricista en Les Corts (Barcelona) | Urgencias 24h",
    metaDescription:
      "Electricistas autorizados en Les Corts y Pedralbes. Oficinas, comunidades, puntos de carga y urgencias 24h. Precio cerrado.",
    porQue: [
      "Les Corts combina la vivienda de los años 70 y 80 mejor conservada de Barcelona con la mayor densidad de oficinas de la Diagonal. Para las comunidades trabajamos cuadros comunitarios, alumbrado de escalera y garajes; para las empresas, mantenimiento con revisiones programadas y factura con IVA desglosado; y en Pedralbes, casas grandes con clima, domótica y coche eléctrico.",
      "El punto de carga es el encargo que más crece en el distrito: párkings comunitarios grandes donde instalamos el cargador conectado a tu contador, con la notificación a la comunidad preparada por nosotros y la legalización incluida.",
    ],
    tambienServicio: {
      intro:
        "Cubrimos todo Les Corts y Pedralbes, y llegamos en minutos a Sarrià-Sant Gervasi, el Eixample, Sants y L'Hospitalet por la Gran Via de Carles III.",
      municipios: ["Sarrià-Sant Gervasi", "Eixample", "Sants", "L'Hospitalet"],
    },
    zonas: {
      h2: "Trabajos habituales por zona de Les Corts",
      intro: "Esto es lo que más hacemos en cada parte del distrito.",
      items: [
        {
          nombre: "Les Corts centre",
          texto:
            "Vivienda de los 70 y 80: renovación de cuadros, líneas de climatización y adecuaciones para boletín en compraventas.",
        },
        {
          nombre: "La Maternitat i Sant Ramon",
          texto:
            "Comunidades grandes con garaje: cuadros comunitarios, alumbrado de escalera con LED y puntos de carga en plazas de párking.",
        },
        {
          nombre: "Pedralbes",
          texto:
            "Casas y áticos con clima, aerotermia y jardín: domótica, iluminación exterior y cargadores de coche eléctrico legalizados.",
        },
        {
          nombre: "Eje Diagonal",
          texto:
            "Oficinas y despachos: mantenimiento programado, iluminación técnica y revisiones para seguros y licencias.",
        },
      ],
    },
    faqsLocales: [
      {
        pregunta: "¿Cuánto tarda un electricista en llegar a Les Corts?",
        respuesta:
          "En urgencias, entre 30 y 45 minutos a todo el distrito, Pedralbes incluida.",
      },
      {
        pregunta: "¿Instaláis puntos de carga en párkings comunitarios de Les Corts?",
        respuesta:
          "Sí, es de lo que más hacemos en el distrito: cargador conectado a tu contador, notificación a la comunidad preparada por nosotros y legalización con CIE incluida.",
      },
      {
        pregunta: "¿Trabajáis con administradores de fincas de la zona?",
        respuesta:
          "Sí: presupuesto cerrado para la junta, aviso a los vecinos, parte de trabajo al acabar y mantenimientos periódicos si la finca lo quiere.",
      },
    ],
  },
  {
    slug: "electricista-sarria-sant-gervasi",
    nombre: "Sarrià-Sant Gervasi",
    comarca: "Barcelona",
    padre,
    h1: "Electricista en Sarrià-Sant Gervasi: urgencias e instaladores autorizados",
    metaTitle: "Electricista en Sarrià-Sant Gervasi | Urgencias 24h",
    metaDescription:
      "Electricistas autorizados en Sarrià, Sant Gervasi y el Putxet. Domótica, aerotermia, puntos de carga y urgencias 24h. Precio cerrado.",
    porQue: [
      "Sarrià-Sant Gervasi es el distrito de las casas grandes: torres con jardín en Sarrià y Les Tres Torres, pisos amplios en Galvany y el Putxet, y una demanda creciente de aerotermia, clima por conductos y coche eléctrico. Ese perfil pide instalaciones bien dimensionadas: ampliaciones de potencia, cuadros con protecciones por zonas y líneas dedicadas que instalamos y legalizamos con su CIE.",
      "También conservamos lo antiguo: fincas señoriales de principios del siglo XX en Sant Gervasi con instalación centenaria que renovamos respetando molduras y carpinterías. En urgencias llegamos en 30-45 minutos a todo el distrito, también a la parte alta.",
    ],
    tambienServicio: {
      intro:
        "Cubrimos todo el distrito, de la Bonanova a Galvany, y llegamos en minutos a Gràcia, Les Corts y el Eixample. Por la ronda de Dalt, también a Horta y a Sant Cugat.",
      municipios: ["Gràcia", "Les Corts", "Eixample", "Horta-Guinardó"],
    },
    zonas: {
      h2: "Trabajos habituales por zona de Sarrià-Sant Gervasi",
      intro: "Esto es lo que más hacemos en cada parte del distrito.",
      items: [
        {
          nombre: "Sarrià i Les Tres Torres",
          texto:
            "Torres con jardín: aerotermia, iluminación exterior, automatismos, domótica y cargadores de coche eléctrico legalizados.",
        },
        {
          nombre: "Sant Gervasi-Galvany",
          texto:
            "Pisos amplios en fincas señoriales: renovación completa de instalaciones centenarias con boletín, respetando la estética original.",
        },
        {
          nombre: "El Putxet i el Farró",
          texto:
            "Fincas de media altura con instalaciones de los 60 y 70: cambios de cuadro, subidas de potencia y líneas de clima.",
        },
        {
          nombre: "La Bonanova",
          texto:
            "Vivienda amplia con reformas de calidad: instalación completa en reformas, cuadros por zonas y protección contra sobretensiones.",
        },
      ],
    },
    faqsLocales: [
      {
        pregunta: "¿Cuánto tarda un electricista en llegar a Sarrià o Sant Gervasi?",
        respuesta:
          "En urgencias, entre 30 y 45 minutos, también en la parte alta del distrito.",
      },
      {
        pregunta: "Quiero aerotermia y un cargador de coche. ¿Me llega la potencia?",
        respuesta:
          "Lo calculamos con tus consumos reales: muchas veces basta con optimizar el cuadro y programar cargas; si hay que ampliar potencia, gestionamos el trámite y el boletín.",
      },
      {
        pregunta: "¿Instaláis domótica?",
        respuesta:
          "Sí: iluminación, persianas y clima integrados, siempre sobre una instalación bien dimensionada y legalizada. Te asesoramos sobre qué sistema encaja con tu casa.",
      },
    ],
  },
  {
    slug: "electricista-horta",
    nombre: "Horta",
    comarca: "Barcelona",
    padre,
    h1: "Electricista en Horta: urgencias e instaladores autorizados",
    metaTitle: "Electricista en Horta (Barcelona) | Urgencias 24h",
    metaDescription:
      "Electricistas autorizados en Horta-Guinardó: Horta, el Carmel y el Guinardó. Instalaciones antiguas, boletines y urgencias 24h.",
    porQue: [
      "Horta-Guinardó es el distrito de los desniveles: casas con jardín y pasajes en Horta y la Font d'en Fargues, y bloques de los 50 a los 70 colgados de la ladera en el Carmel y el Guinardó. En las casas hacemos mucha iluminación exterior, automatismos de puertas y renovación de instalaciones antiguas; en los bloques, cambios de cuadro, tomas de tierra y subidas de potencia.",
      "La orografía no cambia los plazos: en urgencias llegamos en 30-45 minutos a cualquier punto del distrito, del casco antiguo de Horta a la Teixonera. Y como en toda Barcelona, precio cerrado por teléfono antes de salir.",
    ],
    tambienServicio: {
      intro:
        "Cubrimos todo Horta-Guinardó y su entorno: Gràcia y el Eixample ladera abajo, Nou Barris al otro lado de la ronda y Sant Andreu por la Meridiana.",
      municipios: ["Gràcia", "Nou Barris", "Sant Andreu", "Eixample"],
    },
    zonas: {
      h2: "Trabajos habituales por zona de Horta-Guinardó",
      intro: "Esto es lo que más hacemos en cada parte del distrito.",
      items: [
        {
          nombre: "Horta i la Font d'en Fargues",
          texto:
            "Casas con jardín y pasajes: iluminación exterior, automatismos de puertas, ampliaciones y renovación de instalaciones antiguas.",
        },
        {
          nombre: "El Carmel i la Teixonera",
          texto:
            "Bloques de los 50 a los 70 en ladera: cuadros originales por cambiar, potencias mínimas y derivaciones recurrentes.",
        },
        {
          nombre: "El Guinardó",
          texto:
            "Fincas de media altura: adecuaciones para boletín, tomas de tierra y líneas nuevas para cocina y clima.",
        },
        {
          nombre: "La Vall d'Hebron",
          texto:
            "Vivienda de los 70 junto a equipamientos: renovación de cuadros, iluminación de comunidades y garajes.",
        },
      ],
    },
    faqsLocales: [
      {
        pregunta: "¿Cuánto tarda un electricista en llegar a Horta o el Carmel?",
        respuesta:
          "En urgencias, entre 30 y 45 minutos a cualquier punto del distrito, cuestas incluidas.",
      },
      {
        pregunta: "Tengo una casa con jardín en Horta. ¿Hacéis iluminación exterior?",
        respuesta:
          "Sí, es un clásico del barrio: iluminación de jardín y fachada con material estanco, automatismos de puertas y riego, todo sobre líneas protegidas.",
      },
      {
        pregunta: "¿Hacéis boletines en el Guinardó y el Carmel?",
        respuesta:
          "Sí, a diario: revisión de la instalación, adecuación de lo imprescindible y CIE en 24-48h con tramitación incluida.",
      },
    ],
  },
];

export function getDistrito(slug: string): Ciudad | undefined {
  return distritos.find((d) => d.slug === slug);
}
