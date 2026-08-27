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
      "El Eixample concentra el parque de fincas regias más grande de Barcelona: edificios de 1900 a 1930 con techos altos, instalaciones que han crecido a parches durante un siglo y cuadros junto a la puerta que ya no protegen nada. Es nuestro distrito de trabajo más habitual, y el motivo de buena parte de los boletines que gestionamos: pisos que se venden o se alquilan y cuya instalación no pasa la revisión de la comercializadora.",
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
    secciones: [
      {
        h2: "La instalación centenaria de una finca del Eixample",
        parrafos: [
          "Las fincas del Eixample Cerdà se levantaron entre 1900 y 1930, cuando la electricidad era un lujo para dar luz a unas pocas bombillas. Todo lo que hay hoy en esos pisos (cocina, lavadora, aire acondicionado, ordenadores) cuelga de una instalación que nunca se diseñó para eso y que ha ido creciendo a parches durante un siglo.",
          "El patrón que encontramos casi siempre es el mismo: una columna montante antigua que sube por el patio de luces, derivaciones hechas en distintas décadas y con distintos criterios, cableado de sección corta escondido bajo molduras, y a menudo ausencia total de toma de tierra. En los pisos donde alguien reformó la cocina en los noventa suele aparecer además una línea nueva bien hecha conviviendo con otra de los años cincuenta, sin que nadie separase nunca los circuitos.",
          "El patio de luces merece mención aparte porque es el origen de una parte importante de las urgencias del distrito. Es húmedo, mal ventilado y por él pasan tanto las bajantes como buena parte de las derivaciones. Cuando el aislamiento cede ahí, el diferencial empieza a saltar los días de lluvia y nadie relaciona una cosa con la otra.",
          "Nuestro trabajo habitual en estas fincas no es rehacerlo todo de golpe, que casi nunca hace falta: es separar circuitos, poner un cuadro que proteja de verdad, resolver la toma de tierra y sustituir los tramos que estén comprometidos. Y hacerlo respetando la finca, que es lo que más nos preguntan.",
        ],
      },
      {
        h2: "Obra en finca catalogada: cómo trabajamos sin romper",
        parrafos: [
          "Buena parte del Eixample está protegido, y muchos propietarios dan por hecho que renovar la instalación implica levantar molduras, picar paredes de mosaico o sacrificar un techo con artesonado. En la práctica casi nunca es así, pero exige trabajar de otra manera y con más tiempo de planificación.",
          "Lo que hacemos: aprovechar los tubos y canalizaciones existentes siempre que admitan el nuevo cableado, pasar por falsos techos de zonas ya reformadas (habitualmente baños y cocina), usar canaleta técnica en color y perfil discretos donde no se puede abrir pared, y reservar las rozas para los tramos cortos e imprescindibles. Los suelos hidráulicos y las carpinterías originales no se tocan.",
          "Cuando la actuación afecta a elementos comunes de la finca, hablamos nosotros con el administrador y le entregamos por escrito qué se va a hacer y cómo. Es un paso que a los propietarios les ahorra discusiones en la junta y que hacemos sin coste, porque nos evita problemas a todos.",
        ],
      },
      {
        h2: "Por qué el Eixample es el distrito que más boletines genera",
        parrafos: [
          "De todos los CIE que gestionamos en Barcelona, el Eixample se lleva la mayor parte, y no es casualidad. Se juntan tres factores: es el distrito con más operaciones de compraventa y alquiler, tiene el parque de vivienda más antiguo en manos privadas, y sus boletines originales, cuando existen, son de hace décadas.",
          "La secuencia se repite cada semana. Alguien compra o alquila un piso, va a dar de alta la luz, y la comercializadora le pide un boletín porque el que consta es anterior a los años ochenta o directamente no hay ninguno. Ahí es cuando nos llaman, normalmente con prisa, porque la mudanza ya tiene fecha.",
          "Nuestro consejo si estás en mitad de una operación: no esperes al día del alta. Con una visita de revisión sabes en un rato si la instalación pasa tal cual o qué hay que tocar, y eso te da margen para negociar quién asume la adaptación antes de firmar. Hacerlo después es tener el mismo gasto sin ninguna capacidad de negociar.",
        ],
      },
    ],
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
          "Sí, es el encargo estrella del distrito: revisamos la instalación, adaptamos lo imprescindible y te gestionamos el CIE en 24-48h.",
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
    secciones: [
      {
        h2: "La casa de pueblo de Gràcia y su cuadro de juguete",
        parrafos: [
          "Gràcia fue municipio independiente hasta 1897 y su tejido urbano sigue siendo el de un pueblo: casas bajas de dos y tres plantas, fincas estrechas de una escalera, y pisos que originalmente eran viviendas obreras de dimensiones muy contenidas. Eso condiciona por completo el trabajo eléctrico en el barrio.",
          "El cuadro típico de una casa de la Vila es minúsculo: dos o tres elementos junto a la puerta de entrada, a menudo dentro de un armario o tapado por un cuadro decorativo, con un solo diferencial para toda la vivienda cuando lo hay. Las cajas de derivación están donde se pudo, no donde tocaba, y el cableado va con frecuencia sobre regleta vista pintada del color de la pared, invisible hasta que la miras de cerca.",
          "El encargo estrella del barrio llega con la gente joven que compra o alquila una de estas casas y quiere una cocina eléctrica en condiciones. Ahí aparece el choque: la potencia contratada es la mínima heredada de hace treinta años, no hay circuito propio de cocina, y el cuadro no admite un elemento más. Se resuelve bien, pero hay que hacer las tres cosas a la vez (línea nueva, cuadro y potencia) y contarlo desde el principio para que no haya sorpresas.",
        ],
      },
      {
        h2: "Bajos comerciales y terrazas de plaza",
        parrafos: [
          "Las plazas de Gràcia concentran una densidad de bares y restaurantes que no tiene ningún otro barrio de su tamaño, y esos locales trabajan con instalaciones que en muchos casos nacieron como el bajo de una casa particular.",
          "Los problemas que más atendemos aquí son de sobrecarga: cocinas que han ido incorporando equipos sin que nadie recalculase nada, cámaras frigoríficas colgadas de un circuito de enchufes, y cuadros de local donde conviven la instalación del comedor, la de la cocina y la de la terraza sin separación clara. En verano, cuando entra el aire acondicionado en la ecuación, es cuando salta todo.",
          "Trabajamos estos locales fuera de horario de servicio, normalmente por la mañana temprano o en el día de cierre, porque parar una cocina en hora punta cuesta más que cualquier reparación. Para terrazas y veladores montamos tomas estancas y protección específica para intemperie, que es lo que exige tener consumo permanente a la calle.",
          "Si tu local necesita legalización para una licencia de actividad, el certificado va incluido en el mismo trabajo y lo tramitamos nosotros.",
        ],
      },
      {
        h2: "Festa Major y otras instalaciones temporales",
        parrafos: [
          "En agosto Gràcia monta la decoración de calle más ambiciosa de la ciudad, y detrás de cada calle engalanada hay una instalación eléctrica provisional que tiene que aguantar una semana de uso intensivo a la intemperie.",
          "Las comisiones de fiestas suelen resolverlo con voluntarios y buena voluntad, pero hay una parte que conviene que revise alguien habilitado: de dónde se toma la corriente, qué protección diferencial tiene esa toma, cómo están hechos los empalmes que quedan al alcance de la gente y si el cableado aéreo está a la altura y con la sujeción adecuada.",
          "Damos servicio a comisiones, asociaciones de vecinos y comercios para este tipo de montajes temporales: revisión previa, cuadro provisional con protecciones en condiciones y disponibilidad durante los días de fiesta por si algo falla. No es nuestro trabajo más habitual, pero es el que más nos gusta.",
        ],
      },
    ],
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
    secciones: [
      {
        h2: "Bloques obreros de los cincuenta y sus montantes comunitarios",
        parrafos: [
          "Sants, Hostafrancs y la Bordeta crecieron alrededor de la industria y su parque de vivienda lo refleja: bloques levantados entre los años cincuenta y setenta para alojar a trabajadores, construidos rápido, con superficies ajustadas y una instalación eléctrica pensada para lo mínimo.",
          "La particularidad técnica de estos edificios está en la parte común. Muchos conservan la centralización de contadores original y los montantes que suben por la escalera con secciones que hoy se quedan cortas para lo que consumen los pisos. El síntoma es reconocible: caídas de tensión en las plantas altas, luces que parpadean cuando arranca el ascensor y vecinos que no pueden subir potencia porque la línea que les da servicio no lo admite.",
          "Aquí el trabajo interesante no es el piso, es el edificio. Cuando una comunidad de Sants nos llama por un problema recurrente, lo primero que proponemos es revisar la centralización y los montantes antes de que cada vecino gaste dinero por su cuenta en una solución individual que no va a resolver nada. Es una conversación menos cómoda pero mucho más honesta.",
        ],
      },
      {
        h2: "Comunidades: lo que se puede resolver en una junta",
        parrafos: [
          "Trabajamos con bastantes administradores de fincas del distrito, y hay un patrón que se repite: la comunidad convive durante años con una avería intermitente en zonas comunes porque nadie sabe cuánto va a costar arreglarla y la junta no quiere aprobar un cheque en blanco.",
          "Lo que hacemos es al revés: visita técnica, informe por escrito de qué está fallando y presupuesto cerrado desglosado por partidas, para que el administrador pueda llevar a la junta un documento concreto y votable. Si hay partidas que pueden esperar, se dice cuáles y por qué.",
          "Los trabajos que más nos encargan las comunidades de Sants son la renovación del alumbrado de escalera y párking con detección de presencia, la puesta al día del cuadro de servicios comunes, la revisión de la línea del ascensor y la preinstalación de recarga en garajes donde ya hay vecinos preguntando por el coche eléctrico.",
          "Facturamos a la comunidad con CIF e IVA desglosado y, si el trabajo lo requiere, con su certificado correspondiente.",
        ],
      },
      {
        h2: "El entorno de la estación y la Fira: locales y trifásica",
        parrafos: [
          "La franja que va de Sants Estació a la Fira de Montjuïc concentra un tipo de cliente distinto al del resto del distrito: comercio de paso, hostelería con horarios largos, oficinas pequeñas y almacenes.",
          "Aquí lo habitual es encontrar suministro trifásico, que es otra liga. Un local trifásico mal equilibrado (con casi toda la carga colgada de una de las tres fases) da problemas que se confunden con una avería: protecciones que saltan sin motivo aparente, motores que rinden mal y consumos más altos de lo que corresponde. Equilibrar fases es de los trabajos que más agradece un local y de los que menos se piden, porque casi nadie sabe que existe.",
          "También es zona de aperturas y traspasos constantes, con la urgencia típica de quien tiene fecha de inauguración. En esos casos lo que marca la diferencia es la legalización: adecuar la instalación a la actividad real y emitir el certificado que pide el ayuntamiento para la licencia, sin que el papeleo se convierta en el cuello de botella.",
        ],
      },
    ],
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
    secciones: [
      {
        h2: "Poblenou y el 22@: naves rehabilitadas y oficinas",
        parrafos: [
          "Sant Martí es el distrito donde más trabajo de empresa hacemos, y el motivo es el 22@. La antigua trama industrial del Poblenou se ha ido convirtiendo en oficinas, estudios, coworkings y lofts, pero muchas de esas rehabilitaciones conviven todavía con parte de la instalación original de la nave.",
          "El escenario típico es una planta diáfana de varios centenares de metros con suministro trifásico, un cuadro general antiguo y una distribución que ha ido cambiando cada vez que ha entrado un inquilino nuevo. Cada reforma añadió tomas, líneas de datos y climatización, y casi ninguna documentó nada. Cuando llegamos, la primera tarea suele ser levantar el esquema real de lo que hay, porque el plano que existe dejó de ser cierto hace tres arrendatarios.",
          "El trabajo aquí tiene un componente de mantenimiento que no existe en vivienda: revisiones periódicas, termografía del cuadro para detectar puntos calientes antes de que se conviertan en avería, y disponibilidad de respuesta rápida, porque una oficina de sesenta personas sin luz es una factura de nómina parada.",
          "Facturamos con CIF, IVA desglosado y albarán firmado de cada intervención, que es lo que necesitan las empresas para sus propios controles.",
        ],
      },
      {
        h2: "Vila Olímpica y Diagonal Mar: torres de los noventa",
        parrafos: [
          "La otra mitad del distrito es completamente distinta. La Vila Olímpica se construyó para 1992 y Diagonal Mar es de los dos mil: son edificios modernos, con instalación correcta de origen y una problemática que no tiene nada que ver con la del Poblenou industrial.",
          "Lo que envejece en estas torres no es el cableado, es el equipamiento. Nos llaman para renovar sistemas de climatización por conductos que llevan treinta años, para actualizar la domótica de la primera generación que ya no tiene repuestos ni soporte, y sobre todo para instalar puntos de carga en párkings comunitarios de gran tamaño.",
          "Los garajes de estas fincas son el caso más interesante: tienen muchas plazas, la demanda de recarga crece cada año y las instalaciones improvisadas plaza a plaza acaban siendo un desastre difícil de ordenar. Cuando la comunidad se lo plantea a tiempo, una canalización común bien dimensionada permite que cada vecino se conecte a su propio contador cuando le toque, sin volver a abrir el garaje cada vez.",
        ],
      },
      {
        h2: "El Clot, la Verneda y el Sant Martí de siempre",
        parrafos: [
          "Entre el 22@ y el frente marítimo queda la parte del distrito donde vive la mayoría de la gente, y ahí el trabajo es el de un barrio residencial normal: bloques de los sesenta y setenta en el Clot, Camp de l'Arpa y la Verneda, con cuadros que piden relevo y potencias heredadas de otra época.",
          "Es la zona del distrito donde más cambios de cuadro y más subidas de potencia hacemos, casi siempre por el mismo motivo: reformas de cocina que pasan de gas a inducción y aparatos de aire acondicionado que se instalan sin que nadie compruebe si la instalación aguanta lo que se le pide.",
          "Atendemos urgencias en todo el distrito con el mismo tiempo de respuesta, tanto si la llamada viene de una oficina del 22@ como de un tercero sin ascensor de la Verneda. Y el precio de la salida se dice por teléfono antes de movernos, aquí y en cualquier otro sitio.",
        ],
      },
    ],
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
    secciones: [
      {
        h2: "Casas de pueblo con instalación vista",
        parrafos: [
          "Sant Andreu de Palomar fue municipio propio hasta 1897 y su casco antiguo lo sigue pareciendo: calles estrechas, casas bajas de planta y piso, muchas todavía en manos de la misma familia desde hace generaciones. Es uno de los tejidos con la instalación eléctrica más antigua que encontramos en Barcelona.",
          "Lo característico de estas casas es la instalación vista: cableado sobre regletas de madera o plástico que recorre las paredes por encima del rodapié o bajo el techo, empalmes hechos a la vista y cajas que nunca se cerraron. No es necesariamente peligroso por estar a la vista, pero suele ir acompañado de todo lo demás: sin toma de tierra, con secciones cortas y con un cuadro que se limita a un par de fusibles.",
          "La renovación completa de una casa así es un trabajo de varios días y conviene plantearlo bien, porque no siempre interesa hacerlo todo de golpe. Lo que solemos proponer es un orden de prioridades: primero cuadro y toma de tierra, que es lo que te protege; después los circuitos de cocina y baño, que son los que más carga y más riesgo concentran; y el resto cuando toque. Presupuestado por fases, por escrito, y sin que la primera fase te obligue a contratar las siguientes.",
        ],
      },
      {
        h2: "La Sagrera: obra nueva y párkings preparados para recargar",
        parrafos: [
          "El norte del distrito lleva dos décadas en obras alrededor de la estación de la Sagrera, y eso ha traído promociones de vivienda nueva que conviven pared con pared con el Sant Andreu de toda la vida.",
          "En obra reciente el trabajo cambia por completo: la instalación es correcta y está documentada, así que lo que nos piden son ampliaciones y mejoras. Puntos de carga en la plaza de garaje, líneas para climatización o aerotermia, iluminación de terrazas y, en las comunidades, la puesta en marcha de la preinstalación de recarga que muchas promociones dejaron hecha pero sin rematar.",
          "Ese último punto genera bastante confusión entre vecinos: tener preinstalación no significa tener el punto de carga listo para usar. Significa que la canalización y la previsión de potencia están hechas, que es la parte cara, pero falta la línea propia desde tu contador, el equipo y su legalización. Es una buena noticia (el trabajo es mucho más rápido y sencillo) pero no es gratis ni automático.",
        ],
      },
      {
        h2: "Bon Pastor y Baró de Viver: naves, talleres y trifásica",
        parrafos: [
          "En el extremo del distrito, junto al Besòs, queda tejido industrial en activo: talleres, almacenes, pequeñas industrias y naves que dan servicio a toda la ciudad. Es un cliente distinto y con necesidades distintas.",
          "Aquí trabajamos suministros trifásicos, maquinaria con motores, cuadros de distribución de nave y alumbrado industrial. Los encargos más frecuentes son la renovación de alumbrado a LED, que en una nave con muchas horas de uso se amortiza rápido, la puesta al día de cuadros que se han quedado por debajo de la carga instalada, y el mantenimiento preventivo para que una parada de producción no dependa de la suerte.",
          "Para actividades industriales la legalización tiene sus propios requisitos según la potencia y el tipo de local. Nos encargamos de la documentación técnica y de la tramitación, y decimos desde el principio qué exige tu caso concreto, que no siempre es lo mismo que le pidieron al vecino.",
        ],
      },
    ],
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
    secciones: [
      {
        h2: "Comunidades de los setenta y ochenta: el trabajo está en las zonas comunes",
        parrafos: [
          "Les Corts tiene uno de los parques de vivienda mejor conservados de Barcelona: bloques de los años setenta y ochenta, con buenas superficies, comunidades organizadas y administradores profesionales. Eso cambia el tipo de trabajo que hacemos en el distrito.",
          "En una finca de Les Corts el piso individual suele estar razonablemente bien. Donde se concentra el trabajo es en la parte común, que es la que nadie mira hasta que falla: cuadros de servicios comunes montados en los ochenta y ampliados sin criterio, alumbrado de escalera y párking con equipos obsoletos y consumos altos, líneas de ascensor sin protección diferencial propia, y grupos de presión y bombas de achique conectados de forma provisional que lleva quince años siendo definitiva.",
          "El encargo que más nos piden aquí es la renovación completa del alumbrado común con luminarias LED y detección de presencia. Es el trabajo con el retorno más claro que puede aprobar una comunidad: baja el consumo de forma inmediata, elimina el mantenimiento de sustituir tubos y lámparas cada temporada, y mejora la seguridad en párkings y rellanos. Lo presupuestamos por escrito y desglosado para que se pueda llevar a junta sin discusión.",
        ],
      },
      {
        h2: "Zona universitaria: pisos compartidos y sobrecarga",
        parrafos: [
          "La franja que rodea el campus concentra una densidad enorme de pisos compartidos, y ahí aparece un patrón que no se ve en ningún otro sitio del distrito.",
          "Una vivienda diseñada en los setenta para una familia de cuatro personas con dos o tres electrodomésticos pasa a alojar a cinco estudiantes, cada uno con su ordenador, su calefactor eléctrico en invierno y su rutina propia. El resultado es una instalación funcionando al límite todo el día, regletas encadenadas en las habitaciones y un cuadro que no distingue circuitos. Las llamadas por enchufes que se calientan y magnetotérmicos que saltan a diario vienen casi siempre de aquí.",
          "Lo que resuelve el problema no es subir potencia sin más, que es lo primero que pide todo el mundo: es repartir la carga en circuitos separados y sustituir el cuadro. Trabajamos bastante para propietarios que alquilan por habitaciones y que prefieren dejar la instalación en condiciones antes que atender una avería cada mes.",
          "Si eres propietario y alquilas, ten presente que la instalación es responsabilidad tuya, no del inquilino, y que un incendio de origen eléctrico en una vivienda mal mantenida es un problema serio frente al seguro.",
        ],
      },
      {
        h2: "Oficinas de la Diagonal y locales de Pedralbes",
        parrafos: [
          "La Diagonal a su paso por Les Corts concentra la mayor densidad de oficinas de la ciudad junto con el 22@, y en Pedralbes hay un comercio y una restauración de nivel alto con exigencias propias.",
          "Para oficinas, el trabajo habitual es la adecuación de plantas cuando cambia el inquilino o la distribución: puestos de trabajo nuevos, líneas de datos, alumbrado y climatización, con la particularidad de que casi siempre hay que hacerlo con el edificio en funcionamiento y en horario restringido.",
          "En locales de restauración la clave es la potencia y la separación de circuitos: cocina, cámaras frigoríficas, climatización y sala tienen que ir por su lado, y las cámaras deben quedar en un circuito que no se pueda desconectar por error. Es el detalle que evita encontrarte el género perdido un lunes por la mañana.",
          "Mantenimiento con revisiones programadas y prioridad de respuesta para clientes con contrato, porque en hostelería una avería a media tarde es dinero contado.",
        ],
      },
    ],
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
    secciones: [
      {
        h2: "Casas con jardín: otra escala de instalación",
        parrafos: [
          "Sarrià, Les Tres Torres y Pedralbes concentran el mayor número de viviendas unifamiliares de Barcelona, y una casa no es un piso grande: es una instalación de otra categoría, con necesidades que en un piso simplemente no existen.",
          "Lo primero que cambia es la potencia. Entre climatización, cocina completa, bomba de piscina, riego automático, iluminación exterior y uno o dos coches eléctricos, es habitual llegar a demandas que exigen suministro trifásico. Y con la trifásica llega el equilibrado de fases, que en una vivienda mal repartida provoca disparos que parecen averías y no lo son.",
          "Lo segundo es que buena parte de la instalación está a la intemperie. Jardín, porche, piscina, garaje exterior y accesos requieren material estanco, canalización enterrada en condiciones y protecciones específicas. Es donde más chapuzas heredadas encontramos: tomas de interior colocadas en un porche, cables de riego enterrados sin tubo y focos de jardín alimentados desde el enchufe de una terraza.",
          "Y lo tercero es la piscina, que tiene reglamentación propia. Las distancias de seguridad, la protección diferencial de alta sensibilidad y las conexiones equipotenciales no son opcionales ni interpretables. Es de las pocas cosas en este oficio donde no hay margen para el criterio personal.",
        ],
      },
      {
        h2: "Domótica y automatización: qué compensa y qué no",
        parrafos: [
          "Es el distrito donde más nos preguntan por domótica, y también donde más instalaciones abandonadas nos encontramos: sistemas que se montaron hace diez o quince años, que costaron mucho dinero y que hoy nadie usa porque el fabricante desapareció, la aplicación dejó de actualizarse o simplemente resultó más incómodo que un interruptor.",
          "Nuestra opinión, después de arreglar unas cuantas: la automatización que compensa es la que resuelve un problema real y sigue funcionando aunque se caiga internet. Control de riego y de iluminación exterior por horario, gestión de la carga del coche para aprovechar las horas baratas, control de clima por zonas y detección de fugas de agua con corte automático. Todo eso ahorra dinero o evita un desastre.",
          "Lo que solemos desaconsejar es la automatización por catálogo: persianas conectadas que ya funcionaban bien con su interruptor, escenas de iluminación que nadie recuerda cómo se activan y sistemas cerrados que te atan a un único proveedor para siempre. Si algo solo lo puede reparar quien lo instaló, tienes un problema esperando fecha.",
          "Trabajamos con protocolos abiertos y dejamos siempre el control manual funcionando en paralelo. Si un día el sistema falla, la casa sigue teniendo luz como cualquier otra.",
        ],
      },
      {
        h2: "El Putxet y Galvany: pisos grandes en fincas señoriales",
        parrafos: [
          "La parte más urbana del distrito, entre Balmes y el Putxet, tiene un parque de pisos amplios en fincas de calidad, muchas de los años treinta a sesenta, con superficies que superan con holgura la media de la ciudad.",
          "El problema típico de estos pisos es la desproporción entre el tamaño de la vivienda y el tamaño de su instalación. Doscientos metros con cuatro circuitos, un solo diferencial para todo y enchufes contados en las habitaciones, porque cuando se construyó nadie previó que en un dormitorio haría falta más de una toma.",
          "La reforma eléctrica de un piso así es un trabajo de varios días, y merece la pena plantearla junto con cualquier otra obra que se vaya a hacer. Si vas a cambiar suelos o a tocar techos, es el momento de rehacer la instalación con la mitad de coste en albañilería. Si no hay obra prevista, se puede hacer igualmente con las técnicas de mínima intervención que usamos en fincas protegidas.",
        ],
      },
    ],
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
    secciones: [
      {
        h2: "El distrito del desnivel: instalaciones que sufren la intemperie",
        parrafos: [
          "Horta-Guinardó trepa por la falda de Collserola y esa geografía condiciona el trabajo eléctrico más de lo que parece. Casas con jardín en desnivel, pasajes, escaleras públicas, parcelas donde el garaje está veinte metros por debajo de la vivienda y muros de contención por todas partes.",
          "La consecuencia práctica es que aquí hay mucha más instalación a la intemperie que en un distrito llano: líneas que cruzan un jardín en pendiente, iluminación de escaleras y accesos exteriores, tomas en porches y trasteros, y canalizaciones enterradas que llevan décadas soportando filtraciones cada vez que llueve fuerte.",
          "Es también el distrito donde más averías por humedad atendemos, y con un patrón muy marcado: aparecen en otoño con las primeras lluvias fuertes, desaparecen en verano y vuelven al año siguiente un poco peor. Cuando alguien nos dice que su diferencial salta solo en invierno, casi siempre hay agua entrando por una canalización exterior o por un muro.",
          "Reparar bien esto pasa por sustituir el tramo afectado con material estanco y canalización nueva, no por secar y esperar. Lo segundo funciona hasta la siguiente tormenta.",
        ],
      },
      {
        h2: "El Carmel y la Teixonera: bloques colgados de la montaña",
        parrafos: [
          "La parte alta del distrito se construyó deprisa entre los años cincuenta y setenta para acoger a la inmigración que llegaba a Barcelona, y muchos de aquellos bloques siguen en pie con su instalación original o poco más.",
          "Lo que encontramos habitualmente: cuadros con fusibles o con un único diferencial, ausencia de toma de tierra en toda la vivienda, secciones de cable insuficientes y montantes comunitarios que se quedaron cortos hace décadas. Es la zona de Barcelona donde más cambios de cuadro completos hacemos y donde más veces tenemos que explicar que subir la potencia contratada no sirve de nada si la instalación de la casa no puede transportarla.",
          "Hay además una circunstancia local que conviene conocer: muchas de estas fincas tienen dificultades de acceso, con escaleras públicas, calles sin salida y pendientes fuertes. No es un problema para nosotros y no lo repercutimos, pero sí explica que el tiempo de llegada en una urgencia aquí sea algo mayor que en la parte baja del distrito. Cuando llamas, te decimos una franja realista, no la que suena mejor.",
        ],
      },
      {
        h2: "Vall d'Hebron y la Font d'en Fargues: equipamientos y casas",
        parrafos: [
          "El distrito combina dos realidades más: la zona de grandes equipamientos alrededor de Vall d'Hebron, con hospitales, instalaciones deportivas y residencias, y los barrios de casas con jardín de la Font d'en Fargues y Sant Genís, de tejido mucho más residencial.",
          "Para el entorno de equipamientos trabajamos sobre todo con empresas de servicios, clínicas privadas y residencias, donde lo que se valora es la disponibilidad y la trazabilidad: revisiones programadas, informe escrito de cada intervención y capacidad de respuesta rápida, porque en un centro con personas dependientes un corte de suministro no es una molestia, es un riesgo.",
          "En las casas de la Font d'en Fargues el trabajo se parece más al de Sarrià pero a otra escala: instalaciones exteriores, iluminación de jardín, ampliaciones para climatización y, cada vez más, puntos de carga en garajes particulares. Con la ventaja de que en vivienda unifamiliar con garaje propio la instalación de recarga es de las más sencillas y rápidas que existen: línea directa desde tu cuadro y listo.",
        ],
      },
    ],
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
