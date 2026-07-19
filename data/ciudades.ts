import type { Ciudad } from "./tipos";

/**
 * Ciudades del vertical. Las páginas /electricista-{ciudad} se generan desde
 * este archivo con generateStaticParams.
 *
 * REGLA SEO: el bloque porQue es contenido ÚNICO por ciudad (100-150 palabras).
 * Prohibido clonar párrafos entre ciudades.
 */

export const ciudades: Ciudad[] = [
  {
    slug: "electricista-barcelona",
    nombre: "Barcelona",
    comarca: "Barcelonès",
    h1: "Electricista en Barcelona: urgencias e instaladores autorizados",
    metaTitle: "Electricista en Barcelona | Urgencias 24h y Boletines",
    metaDescription:
      "Electricistas autorizados en Barcelona. Urgencias 24h, boletines (CIE), averías y cuadros. Precio cerrado antes de empezar.",
    porQue: [
      "Barcelona tiene uno de los parques de viviendas más antiguos de España: más de la mitad de los pisos se construyeron antes de 1980. En fincas del Eixample, Gràcia o Ciutat Vella seguimos encontrando instalaciones con cableado de hace cincuenta años, cuadros sin diferencial y boletines que ninguna comercializadora acepta ya. Es justo el tipo de trabajo que hacemos a diario: poner instalaciones viejas al día, emitir el boletín y dejarlo todo registrado.",
      "Nos movemos por los diez distritos con tiempos de llegada de 45-60 minutos en urgencias, también en zonas de difícil aparcamiento como Ciutat Vella o Gràcia. El aparcamiento corre de nuestra cuenta, no de la tuya. Y si tienes un local o administras fincas en la ciudad, tenemos línea preferente para que un corte de luz no te pare el negocio.",
    ],
    tambienServicio: {
      intro:
        "Además de Barcelona ciudad, cubrimos a diario los municipios que la rodean: L'Hospitalet de Llobregat, Santa Coloma de Gramenet, Sant Adrià de Besòs, Esplugues y Cornellà. Si estás en el área metropolitana y no ves tu municipio, llámanos igualmente: casi seguro que llegamos.",
      municipios: [
        "L'Hospitalet de Llobregat",
        "Santa Coloma de Gramenet",
        "Sant Adrià de Besòs",
        "Esplugues de Llobregat",
        "Cornellà de Llobregat",
      ],
    },
    zonas: {
      h2: "Electricista en Barcelona, distrito a distrito",
      intro:
        "Cada distrito tiene su propio parque de viviendas y sus averías típicas. Esto es lo que más hacemos en cada zona de la ciudad.",
      items: [
        {
          nombre: "Eixample",
          href: "/electricista-eixample",
          texto:
            "Fincas regias de principios del siglo XX con instalaciones crecidas a parches: cableado antiguo, cuadros en la entrada y boletines caducados. Renovaciones completas, CIE para altas de luz y subidas de potencia.",
        },
        {
          nombre: "Ciutat Vella",
          texto:
            "Edificios centenarios en el Gòtic, el Born y el Raval: humedad, secciones de cable insuficientes y mucha rotación de locales. Legalizamos instalaciones de comercios y reparamos averías en pisos con instalación histórica.",
        },
        {
          nombre: "Gràcia",
          href: "/electricista-gracia",
          texto:
            "Fincas estrechas y pisos reformados a medias donde la potencia se queda corta al electrificar la cocina. Subidas de potencia, cuadros nuevos y reformas de instalación.",
        },
        {
          nombre: "Sants-Montjuïc",
          href: "/electricista-sants",
          texto:
            "Bloques de los años 50 a 70 en Sants, Hostafrancs y la Bordeta, muchos todavía con fusibles. Cambios de cuadro y adecuaciones para pasar el boletín.",
        },
        {
          nombre: "Sant Martí",
          href: "/electricista-sant-marti",
          texto:
            "Del Poblenou y el 22@ con oficinas y lofts a los barrios del Besòs. Mantenimiento de oficinas, cuadros de locales y líneas dedicadas para climatización.",
        },
        {
          nombre: "Sant Andreu",
          href: "/electricista-sant-andreu",
          texto:
            "Casas de pueblo del casco antiguo y bloques de La Sagrera y el Bon Pastor. Instalaciones vistas sobre regletas que piden renovación completa con boletín incluido.",
        },
        {
          nombre: "Nou Barris",
          texto:
            "Bloques de los 60 y 70 con potencias mínimas contratadas: el ICP salta con dos aparatos. Subidas de potencia con revisión de la derivación individual.",
        },
        {
          nombre: "Horta-Guinardó",
          href: "/electricista-horta",
          texto:
            "Calles con desnivel, casas con jardín y fincas pequeñas. Iluminación exterior, automatismos de puertas y renovación de instalaciones antiguas.",
        },
        {
          nombre: "Les Corts",
          href: "/electricista-les-corts",
          texto:
            "Vivienda de los 70 y 80 y muchas oficinas. Adecuación de cuadros, iluminación de despachos y revisiones para seguros y licencias de actividad.",
        },
        {
          nombre: "Sarrià-Sant Gervasi",
          href: "/electricista-sarria-sant-gervasi",
          texto:
            "Casas grandes y áticos con clima, aerotermia y coche eléctrico. Puntos de carga, ampliaciones de potencia y domótica con instalación legalizada.",
        },
      ],
    },
    faqsLocales: [
      {
        pregunta: "¿Cuánto tarda un electricista en llegar a Barcelona?",
        respuesta:
          "En urgencias, entre 45 minutos y una hora a cualquier distrito. Para trabajos programados, concertamos día y franja horaria y la cumplimos.",
      },
      {
        pregunta: "¿Trabajáis en fincas antiguas del Eixample o Ciutat Vella?",
        respuesta:
          "Constantemente. Instalaciones antiguas, cuadros sin diferencial y boletines caducados son nuestro pan de cada día. Revisamos, actualizamos y emitimos el CIE.",
      },
      {
        pregunta: "¿Cobráis el desplazamiento dentro de Barcelona?",
        respuesta:
          "La salida tiene un precio cerrado que te decimos por teléfono antes de ir, igual en toda Barcelona: sin recargos por distrito ni por aparcamiento, y sin extras al acabar.",
      },
      {
        pregunta: "¿Hacéis boletines para pisos de alquiler o turísticos en Barcelona?",
        respuesta:
          "Sí. Si el piso lleva tiempo sin suministro o la comercializadora rechaza el boletín antiguo, lo revisamos, adaptamos lo necesario y emitimos el CIE en 24-48h para que puedas dar el alta.",
      },
      {
        pregunta: "¿Trabajáis de noche y en festivos en Barcelona?",
        respuesta:
          "Sí, la guardia de urgencias es 24/7 también en Barcelona ciudad. El horario afecta al precio y te lo decimos por teléfono antes de salir.",
      },
      {
        pregunta: "¿Atendéis locales y oficinas en Barcelona?",
        respuesta:
          "Sí, y con prioridad: un negocio sin luz pierde dinero cada hora. También hacemos mantenimientos periódicos y legalizaciones para licencias de actividad.",
      },
    ],
    enlaceUrgente: {
      href: "/electricista-urgente-barcelona",
      texto: "¿Es urgente? Electricista de guardia en Barcelona ahora mismo →",
    },
  },
  {
    slug: "electricista-sabadell",
    nombre: "Sabadell",
    comarca: "Vallès Occidental",
    h1: "Electricista en Sabadell: urgencias e instaladores autorizados",
    metaTitle: "Electricista en Sabadell | Urgencias 24h y Boletines",
    metaDescription:
      "Electricistas autorizados en Sabadell. Urgencias 24h, boletines (CIE), averías y cuadros. Precio cerrado antes de empezar.",
    porQue: [
      "Sabadell es nuestra casa: tenemos la base en la ciudad, así que aquí los tiempos de llegada son los más cortos de toda nuestra zona de trabajo. En urgencias solemos estar en tu puerta en menos de media hora, ya sea en el Centre, la Creu Alta, Can Rull, Gràcia o la Concòrdia.",
      "Conocemos bien el parque de viviendas local: bloques de los años 60 y 70 con instalaciones que piden renovación, pisos del Eixample sabadellenc con cuadros a medio actualizar y casas en los barrios del norte donde el boletín antiguo ya no sirve para subir potencia. También trabajamos para la industria y los talleres de los polígonos de Sabadell, con mantenimientos y ampliaciones de potencia para maquinaria.",
    ],
    tambienServicio: {
      intro:
        "Desde Sabadell damos servicio diario a todo el Vallès Occidental cercano. En Castellar del Vallès y Sant Quirze del Vallès atendemos muchas casas unifamiliares, con puntos de carga y ampliaciones incluidos, y en Barberà, Cerdanyola y Ripollet trabajamos tanto en vivienda como en naves y locales. Mismo equipo, mismos plazos y mismo precio cerrado que en Sabadell.",
      municipios: [
        "Castellar del Vallès",
        "Sant Quirze del Vallès",
        "Barberà del Vallès",
        "Cerdanyola del Vallès",
        "Ripollet",
      ],
    },
    zonas: {
      h2: "Electricista en Sabadell, barrio a barrio",
      intro:
        "Trabajamos a diario en todos los barrios de la ciudad. Esto es lo que más nos encontramos en cada zona.",
      items: [
        {
          nombre: "Centre",
          texto:
            "Pisos señoriales y fincas antiguas junto al Passeig: instalaciones con décadas encima y cuadros por renovar. Renovación completa con boletín y subidas de potencia.",
        },
        {
          nombre: "La Creu Alta",
          texto:
            "Casas de cos y bloques de posguerra: cableado justo y potencias cortas. Cuadros nuevos, derivaciones por humedad y adecuaciones para el CIE.",
        },
        {
          nombre: "Can Rull i la Concòrdia",
          texto:
            "Bloques de los 60 y 70 con la instalación original. Cambios de cuadro, enchufes sin toma de tierra y subidas de potencia para cocina eléctrica.",
        },
        {
          nombre: "Gràcia i Can Feu",
          texto:
            "Vivienda familiar y talleres reconvertidos. Ampliaciones, iluminación y puntos de carga en garajes particulares.",
        },
        {
          nombre: "Polígons Can Roqueta i Gràcia Sud",
          texto:
            "Naves y talleres con trifásica: mantenimientos, cuadros industriales, ampliaciones de potencia para maquinaria y legalizaciones.",
        },
      ],
    },
    faqsLocales: [
      {
        pregunta: "¿Cuánto tarda un electricista en llegar a Sabadell?",
        respuesta:
          "Menos que en ningún otro sitio: nuestra base está en Sabadell. En urgencias, normalmente menos de 30 minutos.",
      },
      {
        pregunta: "¿Cubrís Castellar, Sant Quirze y alrededores?",
        respuesta:
          "Sí, a diario: Castellar, Sant Quirze, Barberà, Cerdanyola y Ripollet, con las mismas condiciones que en Sabadell.",
      },
      {
        pregunta: "¿Hacéis boletines en Sabadell?",
        respuesta:
          "Sí. Somos instaladores habilitados: revisamos la instalación, emitimos el CIE o el boletín de reconocimiento y lo tramitamos ante Indústria en 24-48h.",
      },
      {
        pregunta: "¿Trabajáis con administradores de fincas de Sabadell?",
        respuesta:
          "Sí: alumbrado de escalera, línea del ascensor, cuadros comunitarios y garajes, con presupuesto cerrado para la junta y parte de trabajo documentado.",
      },
      {
        pregunta: "¿Instaláis puntos de carga en casas de Castellar o Sant Quirze?",
        respuesta:
          "Constantemente: es la zona donde más cargadores instalamos, casi siempre en garaje propio, con estudio de potencia y legalización incluidos.",
      },
    ],
  },
  {
    slug: "electricista-badalona",
    nombre: "Badalona",
    comarca: "Barcelonès",
    h1: "Electricista en Badalona: urgencias e instaladores autorizados",
    metaTitle: "Electricista en Badalona | Urgencias 24h y Boletines",
    metaDescription:
      "Electricistas autorizados en Badalona. Urgencias 24h, boletines (CIE), averías y cuadros. Precio cerrado antes de empezar.",
    porQue: [
      "En Badalona trabajamos sobre todo en dos frentes. El primero, los barrios densos como Llefià, La Salut o Sant Roc, con muchos bloques de los años 60 y 70: instalaciones justas de potencia, cuadros por renovar y boletines antiguos que frenan cualquier gestión con la comercializadora. El segundo, la primera línea de mar: la humedad y el salitre castigan terminales, enchufes exteriores y cuadros de locales, y generan derivaciones que hacen saltar el diferencial sin motivo aparente.",
      "Llegamos a Badalona en 30-45 minutos en urgencias, y damos servicio tanto a particulares como a los comercios del Centre y del puerto. Si tu local vive del día a día, priorizamos tu avería para que no pierdas ni una jornada.",
    ],
    tambienServicio: {
      intro:
        "Cubrimos también los municipios que rodean Badalona: Sant Adrià de Besòs y Santa Coloma de Gramenet por el lado del Besòs, y Montgat y Tiana por la costa. En Montgat y Tiana atendemos muchas casas con jardín: iluminación exterior, puntos de carga y ampliaciones de potencia son los encargos más habituales.",
      municipios: [
        "Sant Adrià de Besòs",
        "Santa Coloma de Gramenet",
        "Montgat",
        "Tiana",
      ],
    },
    zonas: {
      h2: "Electricista en Badalona, barrio a barrio",
      intro:
        "De la primera línea de mar a los polígonos, cada zona de Badalona falla a su manera. Esto es lo que más resolvemos en cada una.",
      items: [
        {
          nombre: "Centre i Dalt de la Vila",
          texto:
            "Fincas antiguas y comercios: instalaciones históricas, cuadros pequeños y locales que renuevan licencia. Boletines y adecuaciones de instalación.",
        },
        {
          nombre: "Llefià i La Salut",
          texto:
            "Bloques densos de los 60 y 70 con potencias mínimas: ICP que salta y cuadros originales. Subidas de potencia y cambios de cuadro.",
        },
        {
          nombre: "Front marítim i Port",
          texto:
            "Salitre y humedad: derivaciones en enchufes exteriores, terrazas de bares y cuadros de locales. Localización de derivaciones y sustitución por material estanco.",
        },
        {
          nombre: "Canyadó i Manresà",
          texto:
            "Casas y bajos con jardín cerca de la costa: iluminación exterior, automatismos de puertas y ampliaciones de instalación.",
        },
        {
          nombre: "Les Guixeres",
          texto:
            "Polígono con naves y talleres: trifásica, mantenimiento industrial y legalizaciones de instalación ante Indústria.",
        },
      ],
    },
    faqsLocales: [
      {
        pregunta: "¿Cuánto tarda un electricista en llegar a Badalona?",
        respuesta:
          "En urgencias, entre 30 y 45 minutos a cualquier barrio, del Centre a Llefià o Canyadó.",
      },
      {
        pregunta: "Vivo cerca del mar y salta el diferencial a menudo. ¿Es normal?",
        respuesta:
          "Es muy típico de la primera línea: el salitre y la humedad provocan derivaciones en enchufes y terminales. Se localiza, se sustituye lo dañado y se acabaron los saltos.",
      },
      {
        pregunta: "¿Trabajáis con comercios en Badalona?",
        respuesta:
          "Sí, tanto averías con prioridad como mantenimientos y ampliaciones de potencia para locales y hostelería.",
      },
      {
        pregunta: "¿Hacéis boletines para dar de alta la luz en pisos antiguos de Badalona?",
        respuesta:
          "Sí, es de lo que más hacemos en Llefià, La Salut y el Centre: revisión de la instalación, adaptación si hace falta y CIE en 24-48h.",
      },
      {
        pregunta: "¿Trabajáis con comunidades de vecinos en Badalona?",
        respuesta:
          "Sí: alumbrado de escalera, ascensor, garaje y cuadro comunitario, con presupuesto cerrado por escrito para presentar a la junta.",
      },
    ],
  },
  {
    slug: "electricista-mataro",
    nombre: "Mataró",
    comarca: "Maresme",
    h1: "Electricista en Mataró: urgencias e instaladores autorizados",
    metaTitle: "Electricista en Mataró | Urgencias 24h y Boletines",
    metaDescription:
      "Electricistas autorizados en Mataró. Urgencias 24h, boletines (CIE), averías y cuadros. Precio cerrado antes de empezar.",
    porQue: [
      "Mataró combina un casco antiguo con edificios centenarios, ensanches de posguerra como Cerdanyola, el barrio más poblado del Maresme, y zonas nuevas junto a la Via Europa. Cada zona falla a su manera: en el Centre y l'Havana vemos instalaciones antiguas que necesitan renovación completa y boletín; en Cerdanyola, cuadros cortos de potencia para la vida actual; y en las zonas nuevas, sobre todo ampliaciones, domótica y puntos de carga.",
      "Al ser capital del Maresme, también nos llaman muchas segundas residencias de la comarca: casas que pasan meses cerradas y aparecen con derivaciones por humedad o instalaciones que no arrancan. Las ponemos a punto y, si hace falta boletín para reactivar el suministro, lo emitimos en 24-48h.",
    ],
    tambienServicio: {
      intro:
        "Desde Mataró cubrimos el Maresme cercano: Argentona y Cabrera de Mar hacia el interior, y la línea de costa de Vilassar de Mar, Premià de Mar y Sant Andreu de Llavaneres. En las urbanizaciones de Llavaneres y Argentona hacemos mucha iluminación exterior, automatismos de puertas y puntos de carga para coche eléctrico.",
      municipios: [
        "Argentona",
        "Cabrera de Mar",
        "Vilassar de Mar",
        "Premià de Mar",
        "Sant Andreu de Llavaneres",
      ],
    },
    zonas: {
      h2: "Electricista en Mataró, barrio a barrio",
      intro:
        "Del casco antiguo a la Via Europa, cada zona de Mataró pide un trabajo distinto. Esto es lo que más hacemos en cada una.",
      items: [
        {
          nombre: "Centre i l'Havana",
          texto:
            "Edificios centenarios del casco antiguo: instalaciones para renovar por completo, boletines para altas de luz y reformas de comercios.",
        },
        {
          nombre: "Cerdanyola",
          texto:
            "El barrio más poblado del Maresme, con bloques de los 60 y 70: cuadros cortos, potencias mínimas y enchufes sin tierra. Cambios de cuadro y subidas de potencia.",
        },
        {
          nombre: "Via Europa i Parc Central",
          texto:
            "Vivienda reciente con clima y domótica: ampliaciones, líneas dedicadas y puntos de carga en garajes comunitarios.",
        },
        {
          nombre: "Rocafonda i El Palau",
          texto:
            "Bloques de posguerra con la instalación original: adecuaciones para pasar el boletín y renovación de cuadros.",
        },
        {
          nombre: "Polígons Pla d'en Boet i Mata-Rocafonda",
          texto:
            "Industria y talleres: trifásica, mantenimientos preventivos y ampliaciones de potencia para maquinaria.",
        },
      ],
    },
    faqsLocales: [
      {
        pregunta: "¿Cuánto tarda un electricista en llegar a Mataró?",
        respuesta:
          "En urgencias, entre 40 minutos y una hora según la zona. Para trabajos programados, elegimos contigo día y franja.",
      },
      {
        pregunta: "Tengo una segunda residencia en el Maresme. ¿La revisáis?",
        respuesta:
          "Sí. Es un encargo habitual: revisión completa antes de la temporada, reparación de derivaciones por humedad y boletín si la comercializadora lo pide para reactivar el alta.",
      },
      {
        pregunta: "¿Cubrís Premià, Vilassar y Llavaneres?",
        respuesta:
          "Sí, toda la franja de costa cercana a Mataró y el interior de Argentona y Cabrera, con las mismas condiciones.",
      },
      {
        pregunta: "¿Trabajáis con comercios del centro de Mataró?",
        respuesta:
          "Sí, con prioridad en averías y trabajos programados fuera de tu horario de apertura para que no cierres ni una hora.",
      },
      {
        pregunta: "¿Instaláis puntos de carga en urbanizaciones de Llavaneres o Argentona?",
        respuesta:
          "Sí, es un encargo habitual en la zona: estudio de potencia, instalación del cargador y legalización con CIE incluida.",
      },
    ],
  },
  {
    slug: "electricista-granollers",
    nombre: "Granollers",
    comarca: "Vallès Oriental",
    h1: "Electricista en Granollers: urgencias e instaladores autorizados",
    metaTitle: "Electricista en Granollers | Urgencias 24h y Boletines",
    metaDescription:
      "Electricistas autorizados en Granollers. Urgencias 24h, boletines (CIE), averías y cuadros. Precio cerrado antes de empezar.",
    porQue: [
      "Granollers es la capital del Vallès Oriental y se nota en el tipo de trabajo: mucha vivienda de casco urbano con instalaciones por renovar, comercio en el centro, en la zona de la Porxada y el mercado del jueves, que no puede permitirse un corte de luz, y una corona de polígonos industriales, como Congost o Font del Ràdium, donde hacemos mantenimientos, cuadros trifásicos y ampliaciones de potencia para naves.",
      "En vivienda, el encargo más repetido es la puesta al día: cuadros con fusibles todavía en servicio, boletines de hace décadas que la comercializadora ya no acepta y potencias que se quedaron cortas al electrificar cocina o clima. Llegamos a Granollers en 30-45 minutos en urgencias, y cubrimos también las urbanizaciones de los municipios vecinos.",
    ],
    tambienServicio: {
      intro:
        "Desde Granollers damos servicio a todo el Vallès Oriental cercano: Mollet del Vallès y Parets del Vallès por el sur, Les Franqueses del Vallès al norte, Montornès del Vallès junto a los polígonos del Besòs y Llinars del Vallès hacia el Montseny. En Llinars y Les Franqueses trabajamos en muchas casas unifamiliares: iluminación exterior, ampliaciones y puntos de carga.",
      municipios: [
        "Mollet del Vallès",
        "Les Franqueses del Vallès",
        "Parets del Vallès",
        "Llinars del Vallès",
        "Montornès del Vallès",
      ],
    },
    zonas: {
      h2: "Electricista en Granollers, barrio a barrio",
      intro:
        "Del centro comercial a los polígonos del Congost, esto es lo que más trabajamos en cada zona de Granollers.",
      items: [
        {
          nombre: "Centre i la Porxada",
          texto:
            "Comercio y vivienda sobre locales: cuadros pequeños, ampliaciones para hostelería y boletines para traspasos y licencias de actividad.",
        },
        {
          nombre: "Font Verda i Tres Torres",
          texto:
            "Bloques residenciales de los 60 a los 80: renovación de cuadros, subidas de potencia y adecuación de la instalación para el CIE.",
        },
        {
          nombre: "Can Bassa i Palou",
          texto:
            "Vivienda familiar y bajos con patio: iluminación exterior, ampliaciones de instalación y puntos de carga.",
        },
        {
          nombre: "Polígons Congost i Font del Ràdium",
          texto:
            "Naves industriales: cuadros trifásicos, mantenimiento preventivo y legalizaciones de instalación ante Indústria.",
        },
        {
          nombre: "Corró i entorn de Les Franqueses",
          texto:
            "Unifamiliares y parcelas: instalación completa en reformas, aerotermia y cargadores de coche eléctrico.",
        },
      ],
    },
    faqsLocales: [
      {
        pregunta: "¿Cuánto tarda un electricista en llegar a Granollers?",
        respuesta:
          "En urgencias, entre 30 y 45 minutos. Cubrimos también Mollet, Parets, Les Franqueses, Montornès y Llinars con tiempos similares.",
      },
      {
        pregunta: "¿Trabajáis en naves y polígonos del Vallès Oriental?",
        respuesta:
          "Sí: mantenimiento industrial, cuadros trifásicos, ampliaciones de potencia y legalizaciones para naves y talleres en Congost, Font del Ràdium y los polígonos de los municipios vecinos.",
      },
      {
        pregunta: "¿Hacéis boletines en Granollers?",
        respuesta:
          "Sí, revisión y emisión del CIE en 24-48h, con tramitación ante Indústria incluida.",
      },
      {
        pregunta: "¿Hacéis boletines urgentes en Granollers?",
        respuesta:
          "Los plazos normales son 24-48h. Si tienes un alta de luz parada por el boletín, dínoslo al llamar y priorizamos la revisión.",
      },
      {
        pregunta: "¿Trabajáis de madrugada en el Vallès Oriental?",
        respuesta:
          "Sí, la guardia de urgencias es 24/7 también en Granollers, Mollet, Parets, Les Franqueses, Montornès y Llinars.",
      },
    ],
  },
];

export function getCiudad(slug: string): Ciudad | undefined {
  return ciudades.find((c) => c.slug === slug);
}
