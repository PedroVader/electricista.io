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
      "Barcelona tiene uno de los parques de vivienda más antiguos de España. Más de la mitad de los pisos se construyeron antes de 1980. En fincas del Eixample, Gràcia o Ciutat Vella seguimos encontrando cableado de hace cincuenta años, cuadros sin diferencial y boletines que ninguna comercializadora acepta ya. Es justo el trabajo que hacemos a diario. Poner instalaciones viejas al día, gestionar el boletín y dejarlo todo registrado.",
      "Nos movemos por los diez distritos con tiempos de llegada de 45-60 minutos en urgencias, también en zonas de difícil aparcamiento como Ciutat Vella o Gràcia. El aparcamiento corre de nuestra cuenta, no de la tuya. Y si tienes un local o administras fincas en la ciudad, tenemos línea preferente para que un corte de luz no te pare el negocio.",
    ],
    tambienServicio: {
      intro:
        "Además de Barcelona ciudad cubrimos a diario los municipios que la rodean. L'Hospitalet de Llobregat, Santa Coloma de Gramenet, Sant Adrià de Besòs, Esplugues y Cornellà. Si estás en el área metropolitana y no ves tu municipio, llámanos igual. Casi seguro que llegamos.",
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
          href: "/electricista-ciutat-vella",
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
          href: "/electricista-nou-barris",
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
    secciones: [
      {
        h2: "Un parque de vivienda que envejece más rápido que su instalación",
        parrafos: [
          "Más de la mitad de los pisos de Barcelona se construyeron antes de 1980, y una parte importante antes de 1960. Eso significa que la instalación eléctrica de la mayoría de hogares de la ciudad se diseñó para un uso doméstico que ya no existe: unas bombillas, una radio y poco más.",
          "Lo que ha pasado desde entonces es que hemos ido enchufando cosas sin que nadie recalculase nada. Una vivienda media de hoy tiene entre veinte y treinta aparatos conectados de forma permanente, cocina eléctrica en muchos casos, climatización y cada vez más un coche que cargar. La instalación aguanta porque el cobre es paciente, no porque esté dimensionada.",
          "El resultado se ve en el tipo de avisos que recibimos. Diferenciales que saltan sin causa aparente, enchufes que se calientan, magnetotérmicos que no distinguen circuitos porque solo hay dos para toda la casa. Casi ninguno es una avería puntual. Son el mismo problema de fondo asomando por sitios distintos.",
        ],
      },
      {
        h2: "Trabajar en una ciudad densa: acceso, horarios y comunidades",
        parrafos: [
          "Barcelona tiene particularidades logísticas que afectan a cómo se hace el trabajo, y conviene decirlas porque son las que más fricción generan con otros gremios.",
          "La primera es el aparcamiento. En buena parte de la ciudad no hay dónde parar, y menos con furgoneta. Es problema nuestro: aparcamos donde se pueda y subimos el material a pie, y no lo repercutimos en la factura. Lo que sí pedimos es que nos digas si hay ascensor, porque cambia el tiempo de una instalación con material pesado.",
          "La segunda son las comunidades. En una ciudad de fincas verticales, muchos trabajos tocan zona común aunque el cliente sea un vecino: pasar una línea por la escalera, intervenir en la centralización de contadores, llevar un cable al garaje. Hablamos nosotros con el administrador y dejamos por escrito qué se va a hacer, que es lo que evita que el trabajo se pare a mitad.",
          "Y la tercera son los horarios. En fincas con actividad comercial en los bajos o con vecinos que teletrabajan, los cortes de suministro se acuerdan con antelación. Preferimos empezar más tarde y no dejar a nadie tirado sin avisar.",
        ],
      },
      {
        h2: "Los diez distritos, cada uno con su patrón",
        parrafos: [
          "Trabajamos en toda la ciudad, pero no encontramos lo mismo en todas partes. En el Eixample y Ciutat Vella dominan las fincas de principios del siglo pasado, con instalaciones que han crecido a parches y mucho boletín para compraventa. En Gràcia y Sant Andreu, casas bajas de antiguo pueblo con cuadros minúsculos. En Sants, Nou Barris y buena parte de Sant Martí, bloques obreros de los cincuenta a los setenta donde el problema suele estar en los montantes comunitarios. En Les Corts y Sarrià-Sant Gervasi, comunidades bien mantenidas donde el trabajo está en zonas comunes, y casas grandes con instalaciones de otra escala.",
          "Si quieres el detalle de tu zona, tenemos página propia para los distritos donde más trabajamos, con lo que nos encontramos calle a calle. Y si el tuyo no está, llámanos igual: cubrimos los diez.",
        ],
      },
    ],
    faqsLocales: [
      {
        pregunta: "¿Cuánto tarda un electricista en llegar a Barcelona?",
        respuesta:
          "En urgencias, entre 45 minutos y una hora a cualquier distrito. Para trabajos programados, concertamos día y franja horaria y la cumplimos.",
      },
      {
        pregunta: "¿Trabajáis en fincas antiguas del Eixample o Ciutat Vella?",
        respuesta:
          "Constantemente. Instalaciones antiguas, cuadros sin diferencial y boletines caducados son nuestro pan de cada día. Revisamos, actualizamos y te gestionamos el CIE con un instalador habilitado.",
      },
      {
        pregunta: "¿Cobráis el desplazamiento dentro de Barcelona?",
        respuesta:
          "La salida tiene un precio cerrado que te decimos por teléfono antes de ir, igual en toda Barcelona: sin recargos por distrito ni por aparcamiento, y sin extras al acabar.",
      },
      {
        pregunta: "¿Hacéis boletines para pisos de alquiler o turísticos en Barcelona?",
        respuesta:
          "Sí. Si el piso lleva tiempo sin suministro o la comercializadora rechaza el boletín antiguo, lo revisamos, adaptamos lo necesario y te gestionamos el CIE en 24-48h para que puedas dar el alta.",
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
    secciones: [
      {
        h2: "Somos de aquí, y eso se nota en el tiempo de llegada",
        parrafos: [
          "Tenemos la base en Sabadell, en la Calle Alcarria, y es la única ciudad donde podemos prometer lo que prometemos sin matices: en urgencias solemos estar en tu puerta en menos de media hora, y en trabajos programados podemos ajustar la franja horaria mucho más que en cualquier otro sitio.",
          "Tiene una segunda consecuencia práctica menos evidente: aquí volvemos. Si dentro de dos años te falla algo de lo que instalamos, el mismo equipo puede pasarse sin que sea una expedición. Para comunidades y comercios eso vale más que cualquier descuento, porque lo que compras no es una reparación, es tener a alguien cerca.",
          "También conocemos el terreno administrativo local, que ahorra tiempo en licencias de actividad y en gestiones que dependen del ayuntamiento.",
        ],
      },
      {
        h2: "La herencia industrial y sus instalaciones",
        parrafos: [
          "Sabadell fue una capital textil y buena parte de su tejido construido viene de ahí: naves reconvertidas, vapores rehabilitados, bloques levantados para alojar a los trabajadores de las fábricas y polígonos que siguen en activo.",
          "En los barrios que crecieron alrededor de la industria, como Can Rull, la Concòrdia o Torre-romeu, encontramos el patrón clásico de la vivienda obrera de los sesenta y setenta: superficies ajustadas, potencia mínima heredada, cuadros con un solo diferencial y montantes comunitarios que se quedaron cortos hace décadas. Es donde más cambios de cuadro y más subidas de potencia hacemos de toda la ciudad.",
          "En los polígonos, Can Roqueta y Gràcia Sud sobre todo, el trabajo es industrial: suministros trifásicos, cuadros de distribución de nave, maquinaria con motores y alumbrado de gran altura. Aquí lo que se valora es el mantenimiento preventivo, porque una parada de producción cuesta mucho más que la revisión que la habría evitado.",
          "Y en las naves rehabilitadas a vivienda o a espacio de trabajo, un poco de todo: instalaciones industriales que hay que adaptar a un uso que no estaba previsto cuando se construyeron.",
        ],
      },
      {
        h2: "Comunidades del Vallès: el trabajo que nadie mira",
        parrafos: [
          "En Sabadell y su entorno trabajamos con bastantes comunidades, y el patrón se repite tanto que merece la pena contarlo. El piso individual suele estar aceptable. Lo que está desatendido es la parte común, porque no es de nadie hasta que falla.",
          "Los puntos que más problemas dan son siempre los mismos. El cuadro de servicios comunes, ampliado por acumulación durante décadas hasta que nadie sabe qué es cada cosa. El alumbrado de escalera y garaje con equipos obsoletos y consumos que se comen el presupuesto de la comunidad. La línea del ascensor, muchas veces sin protección diferencial propia. Y las bombas de achique, que solo se descubre que no funcionan el día de la tormenta.",
          "Lo que ofrecemos al administrador es un informe escrito con presupuesto cerrado y desglosado por partidas, separando lo urgente de lo que puede esperar al ejercicio siguiente. Una junta no aprueba un gasto indefinido; sí aprueba un documento concreto.",
        ],
      },
    ],
    faqsLocales: [
      {
        pregunta: "¿Cuánto tarda un electricista en llegar a Sabadell?",
        respuesta:
          "Menos que en ningún otro sitio, porque nuestra base está en Sabadell. En urgencias, menos de 30 minutos.",
      },
      {
        pregunta: "¿Cubrís Castellar, Sant Quirze y alrededores?",
        respuesta:
          "Sí, a diario: Castellar, Sant Quirze, Barberà, Cerdanyola y Ripollet, con las mismas condiciones que en Sabadell.",
      },
      {
        pregunta: "¿Hacéis boletines en Sabadell?",
        respuesta:
          "Sí. Trabajamos con instaladores habilitados: revisamos la instalación, se firma el CIE o el boletín de reconocimiento y lo tramitamos ante Indústria en 24-48h.",
      },
      {
        pregunta: "¿Trabajáis con administradores de fincas de Sabadell?",
        respuesta:
          "Sí: alumbrado de escalera, línea del ascensor, cuadros comunitarios y garajes, con presupuesto cerrado para la junta y parte de trabajo documentado.",
      },
      {
        pregunta: "¿Instaláis puntos de carga en casas de Castellar o Sant Quirze?",
        respuesta:
          "Constantemente. Es la zona donde más cargadores instalamos, casi siempre en garaje propio, con estudio de potencia y legalización incluidos.",
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
      "En Badalona trabajamos en dos frentes. El primero son los barrios densos como Llefià, La Salut o Sant Roc, con muchos bloques de los años 60 y 70. Instalaciones justas de potencia, cuadros por renovar y boletines antiguos que frenan cualquier gestión con la comercializadora. El segundo es la primera línea de mar, donde la humedad y el salitre castigan terminales, enchufes exteriores y cuadros de local, y generan derivaciones que hacen saltar el diferencial sin motivo aparente.",
      "Llegamos a Badalona en 30-45 minutos en urgencias, y damos servicio tanto a particulares como a los comercios del Centre y del puerto. Si tu local vive del día a día, priorizamos tu avería para que no pierdas ni una jornada.",
    ],
    tambienServicio: {
      intro:
        "Cubrimos también los municipios que rodean Badalona. Sant Adrià de Besòs y Santa Coloma de Gramenet por el lado del Besòs, y Montgat y Tiana por la costa. En Montgat y Tiana atendemos muchas casas con jardín, donde lo que más nos piden es iluminación exterior, puntos de carga y ampliaciones de potencia.",
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
    secciones: [
      {
        h2: "El salitre: por qué en primera línea todo dura menos",
        parrafos: [
          "Badalona tiene cinco kilómetros de fachada marítima, y eso introduce una variable que en una ciudad de interior no existe: la corrosión salina. No es un detalle menor ni una excusa comercial, es la causa directa de buena parte de las averías que atendemos en el frente marítimo y en Canyadó.",
          "El salitre ataca los contactos metálicos, y lo hace despacio y por dentro. Un enchufe exterior, una caja de derivación en una terraza o un cuadro en un garaje cerca del mar acumulan una capa de óxido que aumenta la resistencia del contacto. Más resistencia significa más calor, y más calor significa que el mecanismo se degrada más rápido todavía. Es un círculo que termina en un punto caliente y, si nadie lo mira, en un enchufe quemado.",
          "Lo que cambia en la práctica: en primera línea usamos material estanco con grado de protección alto también en sitios donde tierra adentro no haría falta, cajas con junta en lugar de cajas convencionales, y recomendamos revisar los cuadros exteriores con más frecuencia de la habitual. Cuesta algo más de entrada y evita rehacer la instalación cada pocos años.",
        ],
      },
      {
        h2: "Llefià, La Salut y Sant Roc: bloques de los sesenta y potencia justa",
        parrafos: [
          "La otra mitad del trabajo en Badalona está en los barrios densos de la parte alta, que crecieron muy deprisa entre los años sesenta y setenta para acoger la llegada masiva de población a la ciudad.",
          "El perfil constructivo es reconocible. Bloques altos, pisos de superficie contenida y una instalación dimensionada para lo justo de aquella época. Lo que encontramos son cuadros con uno o ningún diferencial, ninguna toma de tierra en la vivienda y potencia contratada en el mínimo heredado, que salta en cuanto coinciden la cocina y la lavadora.",
          "Hay además un factor que complica las subidas de potencia en estos edificios: los montantes comunitarios. De poco sirve contratar más potencia si la línea que llega a tu piso no puede transportarla. Cuando detectamos que el problema es del edificio y no del piso, lo decimos, aunque signifique que el trabajo se convierta en una conversación con la comunidad en lugar de una factura rápida.",
        ],
      },
      {
        h2: "Comercio de barrio y locales de la Rambla",
        parrafos: [
          "Badalona tiene un comercio de proximidad muy vivo, y los locales de barrio comparten un problema: instalaciones que nacieron como el bajo de una vivienda y que han ido asumiendo la carga de una actividad comercial sin que nadie replanteara el conjunto.",
          "En hostelería es donde más se nota. Una cocina que ha ido incorporando equipos, cámaras frigoríficas colgadas del circuito de enchufes generales, y climatización añadida el último verano. En cuanto coincide todo, salta. Y saltar en hora de servicio, o perder el género de una cámara un fin de semana, cuesta bastante más que haber separado los circuitos a tiempo.",
          "Trabajamos estos locales fuera de horario de servicio y damos prioridad de respuesta a los que tienen género refrigerado. Si el local necesita legalización para su licencia de actividad, tramitamos la documentación con el ayuntamiento.",
        ],
      },
    ],
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
      "Al ser capital del Maresme, también nos llaman muchas segundas residencias de la comarca: casas que pasan meses cerradas y aparecen con derivaciones por humedad o instalaciones que no arrancan. Las ponemos a punto y, si hace falta boletín para reactivar el suministro, te lo gestionamos en 24-48h.",
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
    secciones: [
      {
        h2: "Segundas residencias: casas que pasan meses cerradas",
        parrafos: [
          "Como capital del Maresme, Mataró y su comarca concentran una cantidad importante de vivienda de temporada, y ese uso intermitente genera un tipo de avería que casi no se ve en una vivienda habitual.",
          "Una casa cerrada durante meses acumula humedad sin que nadie ventile, y la humedad es el principal enemigo del aislamiento eléctrico. El patrón típico es el de la familia que llega en junio, sube el diferencial y no aguanta. O peor: aguanta, pero hay una derivación instalada desde hace meses que nadie ha detectado.",
          "A eso se suman los efectos del abandono: nidos de insectos y roedores en cajas de derivación y cuadros exteriores, corrosión en los mecanismos de terrazas y porches, bombas de piscina que llevan medio año paradas y arrancan forzando, y sistemas de riego enterrados que han pasado el invierno bajo el agua.",
          "Nuestra recomendación para quien tiene una casa así es sencilla y ahorra sustos: una revisión antes de la temporada, no el primer fin de semana con la casa llena. Medir el aislamiento de los circuitos y comprobar el disparo del diferencial lleva poco tiempo y evita empezar las vacaciones sin luz.",
        ],
      },
      {
        h2: "Del casco antiguo a la Via Europa: tres ciudades en una",
        parrafos: [
          "Mataró tiene un parque construido especialmente variado para su tamaño, y cada franja tiene su problema característico.",
          "El Centre y l'Havana son casco antiguo, con edificios que en algunos casos superan el siglo. Aquí el trabajo es de renovación completa: instalaciones que nunca tuvieron toma de tierra, cuadros de fusibles todavía en servicio y mucho boletín asociado a operaciones de compraventa, porque es la zona con más rotación de propiedad.",
          "Cerdanyola es otra cosa. Es el barrio más poblado del Maresme y responde al modelo de ensanche de posguerra: bloques de los cincuenta a los setenta, potencias cortas y cuadros que se quedaron pequeños en cuanto entraron la lavadora y el aire acondicionado.",
          "Y la franja de la Via Europa y el Parc Central es vivienda relativamente reciente, con instalación correcta de origen. Ahí no nos llaman por averías, nos llaman por ampliaciones: climatización, aerotermia, iluminación y, cada vez con más frecuencia, puntos de carga en el garaje.",
        ],
      },
      {
        h2: "Industria y comercio en el Pla d'en Boet",
        parrafos: [
          "Mataró conserva actividad industrial y logística en sus polígonos, y ese cliente tiene necesidades distintas de las de la vivienda.",
          "Trabajamos suministros trifásicos, cuadros de distribución de nave, alumbrado industrial y maquinaria con motores. Los encargos más habituales son la renovación de alumbrado a LED, que en una nave con muchas horas de uso se amortiza rápido, el equilibrado de fases cuando la carga ha crecido de forma desordenada, y el mantenimiento preventivo con termografía del cuadro general.",
          "Para actividades industriales la legalización tiene requisitos propios según la potencia y el tipo de local. Nos ocupamos de la documentación técnica y decimos desde el principio qué exige tu caso, que no siempre coincide con lo que le pidieron al de al lado.",
        ],
      },
    ],
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
        "Desde Granollers damos servicio a todo el Vallès Oriental cercano. Mollet y Parets por el sur, Les Franqueses al norte, Montornès junto a los polígonos del Besòs y Llinars hacia el Montseny. En Llinars y Les Franqueses trabajamos en muchas casas unifamiliares, con iluminación exterior, ampliaciones y puntos de carga.",
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
    secciones: [
      {
        h2: "Capital de comarca: mucha empresa por metro cuadrado",
        parrafos: [
          "Granollers es la capital del Vallès Oriental y funciona como centro de servicios de toda la comarca. Eso hace que aquí el reparto entre trabajo doméstico y trabajo profesional se incline más hacia el segundo que en cualquier otra de nuestras ciudades.",
          "La corona de polígonos que rodea la ciudad, con Congost y Font del Ràdium a la cabeza, concentra industria, logística y talleres. Es un cliente exigente en un aspecto concreto: la continuidad. Una nave parada por un fallo eléctrico no pierde el coste de la reparación, pierde el turno entero, y por eso lo que se valora aquí no es el precio de la intervención sino el tiempo de respuesta y el mantenimiento que evita la parada.",
          "Trabajamos con termografía del cuadro general para detectar puntos calientes antes de que se conviertan en avería, revisiones programadas en las paradas de producción y disponibilidad para urgencias. Facturamos con CIF, IVA desglosado y albarán firmado de cada intervención.",
        ],
      },
      {
        h2: "El comercio del centro y el mercado del jueves",
        parrafos: [
          "El centro de Granollers, alrededor de la Porxada, tiene un comercio tradicional fuerte, y el jueves la ciudad se convierte en el mercado de referencia de la comarca desde hace siglos.",
          "Para un comercio del centro, un corte de luz en día de mercado no es una molestia: es la mejor jornada de la semana perdida. Damos prioridad de respuesta a los locales del casco urbano y, siempre que se puede, programamos los trabajos que requieren corte para el principio de semana.",
          "Los problemas habituales del comercio de casco antiguo son los de siempre: instalaciones que empezaron siendo domésticas, cuadros que han crecido por acumulación y falta de separación entre circuitos de sala, cámaras y climatización. Cuando el local necesita adecuación para una licencia de actividad, tramitamos la legalización con la documentación que pide el ayuntamiento.",
          "Para las paradas del mercado y las instalaciones temporales de la ciudad, montamos cuadros provisionales con protecciones en condiciones, que es donde más chapuzas peligrosas se ven.",
        ],
      },
      {
        h2: "Vivienda de casco urbano y la corona de Les Franqueses",
        parrafos: [
          "En vivienda, Granollers presenta el perfil típico de una ciudad media catalana: casco urbano con edificios antiguos que piden renovación completa, ensanches de los sesenta y setenta con potencias cortas, y una periferia de vivienda más reciente y de menor densidad.",
          "En Corró y el entorno de Les Franqueses cambia el tipo de encargo: hay más casa unifamiliar, con lo que aparecen las necesidades propias de la vivienda con jardín, garaje propio y a veces piscina. Instalaciones exteriores con material estanco, iluminación de acceso, riego automático y puntos de carga, que en una casa con garaje propio son de las instalaciones más rápidas y sencillas que existen.",
          "Cubrimos también los municipios de la comarca: Les Franqueses, La Roca, Canovelles, Cardedeu, Llinars y el resto del Vallès Oriental, con el mismo compromiso de precio cerrado antes de empezar.",
        ],
      },
    ],
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
  {
    slug: "electricista-hospitalet",
    nombre: "L'Hospitalet de Llobregat",
    comarca: "Barcelonès",
    h1: "Electricista en L'Hospitalet: urgencias e instaladores autorizados",
    metaTitle: "Electricista en L'Hospitalet | Urgencias 24h y boletines",
    metaDescription:
      "Electricistas en L'Hospitalet de Llobregat. Cambio de cuadros, boletines (CIE), averías y urgencias 24h. Precio cerrado antes de empezar.",
    porQue: [
      "L'Hospitalet es la ciudad más densa de España, y eso se nota en su parque de vivienda. Barrios como Collblanc, la Torrassa, Santa Eulàlia o Bellvitge crecieron a toda velocidad entre los años cincuenta y setenta para alojar la llegada masiva de población, con pisos de superficie muy ajustada y una instalación eléctrica pensada para lo mínimo de aquella época.",
      "El trabajo que más hacemos aquí es exactamente ese: cuadros de fusibles o con un único diferencial que hay que sustituir, viviendas sin toma de tierra y potencias contratadas en el mínimo heredado, que saltan en cuanto la cocina y la lavadora coinciden. Estamos a diez minutos por la Gran Via o la Ronda de Dalt, así que en urgencias los tiempos son los mismos que en Barcelona ciudad.",
    ],
    tambienServicio: {
      intro:
        "Desde L'Hospitalet cubrimos el resto del Baix Llobregat cercano y saltamos a Barcelona en minutos. Trabajamos a diario en toda esta franja.",
      municipios: [
        "Cornellà de Llobregat",
        "Esplugues de Llobregat",
        "Sant Joan Despí",
        "El Prat de Llobregat",
        "Barcelona",
      ],
    },
    zonas: {
      h2: "Trabajos habituales por barrio de L'Hospitalet",
      intro:
        "La ciudad cambia mucho de un barrio a otro, y el tipo de avería también.",
      items: [
        {
          nombre: "Collblanc i la Torrassa",
          texto:
            "La zona más densa y con el parque más antiguo: sustitución de cuadros con fusibles, tomas de tierra que no existen y boletines para altas de luz.",
        },
        {
          nombre: "Santa Eulàlia i Granvia Sud",
          texto:
            "Bloques de los sesenta y setenta con potencia corta: subidas de potencia, líneas nuevas de cocina y renovación de cuadro.",
        },
        {
          nombre: "Bellvitge i Gornal",
          texto:
            "Grandes bloques con mucha zona común: cuadros de servicios comunes, alumbrado de escalera y párking, y líneas de ascensor.",
        },
        {
          nombre: "Centre i Sant Josep",
          texto:
            "Comercio de calle y oficinas: separación de circuitos, adecuación para licencias de actividad y mantenimiento.",
        },
        {
          nombre: "La Marina i polígonos",
          texto:
            "Naves, talleres y almacenes: suministros trifásicos, cuadros de distribución y alumbrado industrial a LED.",
        },
      ],
    },
    secciones: [
      {
        h2: "La ciudad más densa de España y su instalación eléctrica",
        parrafos: [
          "L'Hospitalet supera los 20.000 habitantes por kilómetro cuadrado. Esa densidad no es un dato de trivial: condiciona directamente cómo son las instalaciones que nos encontramos.",
          "Significa edificios altos con muchas viviendas por escalera, y por tanto montantes comunitarios que soportan mucha más carga de la que se calculó cuando se construyeron. El síntoma clásico son las caídas de tensión en las plantas superiores y los vecinos que no consiguen subir potencia porque la línea que les da servicio no lo admite.",
          "Significa también pisos pequeños donde todo está cerca: la cocina, la lavadora y el baño colgando a menudo del mismo circuito, cuando el reglamento actual pide que vayan separados. Es la causa de buena parte de los magnetotérmicos que saltan a diario en la ciudad.",
          "Cuando nos llaman por un problema recurrente en una finca de L'Hospitalet, lo primero que miramos es si el problema es del piso o del edificio. Decirlo a tiempo evita que cada vecino gaste por su cuenta en una solución que no arregla nada.",
        ],
      },
      {
        h2: "Sustitución de cuadros: el trabajo estrella en la ciudad",
        parrafos: [
          "De todo lo que hacemos en L'Hospitalet, la sustitución de cuadros antiguos es lo más repetido, y tiene una explicación demográfica sencilla. La mayor parte del parque se levantó antes de que el reglamento actual existiera.",
          "Lo que abrimos habitualmente son cuadros con dos o tres elementos junto a la puerta, a veces todavía con fusibles de porcelana, sin ningún diferencial o con uno solo gobernando toda la vivienda. En ese escenario, una fuga en la lavadora deja sin luz la casa entera y nadie sabe por qué.",
          "El cambio se resuelve en una mañana, aprovechando el cableado existente cuando está en condiciones. Sales con circuitos separados, un magnetotérmico por circuito, toma de tierra verificada y todo rotulado. Si la gestión que tienes pendiente requiere boletín, se firma en el mismo trabajo.",
        ],
      },
      {
        h2: "Comunidades de Bellvitge y los grandes bloques",
        parrafos: [
          "Bellvitge y Gornal tienen un modelo urbano propio, con bloques de gran altura y mucha superficie común por comunidad. Ahí el trabajo eléctrico se parece más al de un edificio de oficinas que al de una finca de barrio.",
          "Lo que más nos encargan es la renovación del alumbrado de escalera y párking con luminarias LED y detección de presencia, que en bloques con estas dimensiones se nota en el primer recibo. Después, la puesta al día del cuadro de servicios comunes, que suele haber crecido por acumulación durante décadas, y la revisión de las líneas de ascensor y de las bombas.",
          "Trabajamos con administradores de fincas de toda la ciudad. Entregamos informe escrito y presupuesto cerrado desglosado por partidas, separando lo urgente de lo que puede esperar, para que la junta tenga algo concreto que votar.",
        ],
      },
    ],
    faqsLocales: [
      {
        pregunta: "¿Cuánto tardáis en llegar a L'Hospitalet?",
        respuesta:
          "En urgencias, entre 30 y 45 minutos a cualquier barrio. Estamos conectados por la Gran Via y la Ronda de Dalt, así que los tiempos son prácticamente los de Barcelona ciudad.",
      },
      {
        pregunta: "Mi piso de Collblanc no tiene toma de tierra. ¿Tiene solución?",
        respuesta:
          "Sí, y es más habitual de lo que parece en el parque anterior a los ochenta. Se resuelve llevando el conductor de protección desde el cuadro a los circuitos y verificando la puesta a tierra del edificio. Sin ella no hay boletín posible, así que es lo primero que hay que arreglar si tienes una gestión pendiente.",
      },
      {
        pregunta: "¿Trabajáis con comunidades de Bellvitge?",
        respuesta:
          "Sí, es de las zonas donde más comunidades llevamos. Alumbrado común, cuadros de servicios, ascensor y bombas, con informe y presupuesto por partidas para llevar a junta.",
      },
      {
        pregunta: "¿Hacéis boletines para altas de luz en L'Hospitalet?",
        respuesta:
          "Constantemente, es la ciudad con más rotación de alquiler de nuestra zona. Revisamos, adaptamos lo imprescindible y te gestionamos el CIE en 24-48h con un instalador habilitado.",
      },
    ],
  },
  {
    slug: "electricista-terrassa",
    nombre: "Terrassa",
    comarca: "Vallès Occidental",
    h1: "Electricista en Terrassa: urgencias e instaladores autorizados",
    metaTitle: "Electricista en Terrassa | Urgencias 24h y boletines",
    metaDescription:
      "Electricistas en Terrassa. Sustitución de cuadros, boletines (CIE), averías y urgencias 24h. Precio cerrado antes de empezar.",
    porQue: [
      "Terrassa es, con Sabadell, la capital del Vallès Occidental, y las dos comparten el mismo origen industrial y el mismo tipo de parque construido. Trabajamos aquí a diario desde nuestra base de Sabadell, a quince minutos por la C-58.",
      "Lo que nos encontramos en la ciudad tiene dos caras. En los barrios que crecieron con la industria textil, como Ca n'Anglada, Sant Pere Nord o Torre-sana, bloques de los sesenta y setenta con cuadros por renovar y potencias mínimas heredadas. Y en el centro y los vapores rehabilitados, instalaciones industriales adaptadas a usos que no estaban previstos cuando se construyeron.",
    ],
    tambienServicio: {
      intro:
        "Desde Terrassa cubrimos el Vallès Occidental al completo, y trabajamos a diario en los municipios de su entorno.",
      municipios: [
        "Sabadell",
        "Rubí",
        "Sant Cugat del Vallès",
        "Castellar del Vallès",
        "Matadepera",
      ],
    },
    zonas: {
      h2: "Trabajos habituales por zona de Terrassa",
      intro: "Cada parte de la ciudad tiene su encargo característico.",
      items: [
        {
          nombre: "Centre i Vapor Gran",
          texto:
            "Edificios antiguos y vapores rehabilitados: renovación completa de instalación, boletines para compraventa y adecuación de locales.",
        },
        {
          nombre: "Ca n'Anglada i Torre-sana",
          texto:
            "Bloques de los sesenta y setenta: sustitución de cuadros, tomas de tierra y subidas de potencia para cocinas eléctricas.",
        },
        {
          nombre: "Sant Pere i Sant Pere Nord",
          texto:
            "Vivienda densa con mucha comunidad: alumbrado de escalera y párking, cuadros de servicios comunes y líneas de ascensor.",
        },
        {
          nombre: "Les Fonts i Can Parellada",
          texto:
            "Casas con jardín y parcela: instalaciones exteriores, iluminación, riego y puntos de carga en garaje propio.",
        },
        {
          nombre: "Polígons Santa Margarida i Can Petit",
          texto:
            "Naves y talleres: suministros trifásicos, cuadros de distribución, equilibrado de fases y alumbrado industrial.",
        },
      ],
    },
    secciones: [
      {
        h2: "Los vapores: instalaciones industriales con usos nuevos",
        parrafos: [
          "Terrassa conserva uno de los conjuntos de arquitectura industrial más importantes de Cataluña, y buena parte de esos vapores se han ido reconvirtiendo en viviendas, equipamientos, oficinas y espacios de trabajo.",
          "Esas rehabilitaciones plantean un problema técnico concreto: la instalación de origen era industrial, con suministro trifásico, secciones pensadas para maquinaria y una distribución que no tiene nada que ver con la que pide un uso residencial o de oficinas. Muchas conversiones se hicieron por fases y en años distintos, así que lo que hay hoy es una superposición de criterios.",
          "Cuando entramos en un edificio de estos, la primera tarea suele ser levantar el esquema real de lo que existe, porque la documentación disponible dejó de ser cierta hace varias reformas. A partir de ahí se decide qué se aprovecha y qué se rehace, y se deja documentado para el siguiente.",
        ],
      },
      {
        h2: "Industria activa: los polígonos de Terrassa",
        parrafos: [
          "Más allá del patrimonio, Terrassa mantiene actividad industrial real en polígonos como Santa Margarida, Can Petit o Els Bellots. Es un cliente con prioridades distintas a las de la vivienda.",
          "Aquí lo que cuesta dinero no es la reparación, es la parada. Por eso el trabajo que más valor aporta es el preventivo: termografía del cuadro general para localizar puntos calientes antes de que se conviertan en avería, revisiones programadas aprovechando las paradas de producción, y equilibrado de fases cuando la carga ha ido creciendo de forma desordenada.",
          "También hacemos renovación de alumbrado industrial a LED, que en una nave con muchas horas de encendido se amortiza rápido, y la documentación técnica que exige cada actividad según su potencia y su tipo de local.",
        ],
      },
      {
        h2: "Quince minutos desde nuestra base",
        parrafos: [
          "Nuestra base está en Sabadell, así que Terrassa queda a un cuarto de hora por la C-58. En la práctica eso significa dos cosas.",
          "En urgencias, tiempos de llegada cortos y reales, no la franja que suena mejor por teléfono. Y en trabajos programados, flexibilidad para ajustar la franja horaria, que es lo que agradecen los comercios y los locales que no pueden parar en hora punta.",
          "Conocemos además el parque de vivienda del Vallès Occidental porque es donde más trabajamos: las dos ciudades comparten el mismo origen industrial y los mismos problemas heredados en las instalaciones de los barrios que crecieron alrededor de las fábricas.",
        ],
      },
    ],
    faqsLocales: [
      {
        pregunta: "¿Cuánto tardáis en llegar a Terrassa?",
        respuesta:
          "En urgencias, entre 30 y 40 minutos desde nuestra base de Sabadell por la C-58. En trabajos programados concertamos día y franja, y la cumplimos.",
      },
      {
        pregunta: "¿Trabajáis en naves y talleres de los polígonos?",
        respuesta:
          "Sí. Suministros trifásicos, cuadros de nave, equilibrado de fases, alumbrado industrial y mantenimiento preventivo con termografía. Facturamos con CIF e IVA desglosado y albarán de cada intervención.",
      },
      {
        pregunta: "Vivo en un vapor rehabilitado. ¿Podéis con la instalación?",
        respuesta:
          "Es de los trabajos más interesantes que hacemos en Terrassa. Levantamos primero el esquema real de lo que hay, que casi nunca coincide con los planos, y a partir de ahí decidimos qué se aprovecha y qué se rehace.",
      },
      {
        pregunta: "¿Hacéis boletines en Terrassa?",
        respuesta:
          "Sí, con los mismos plazos que en el resto de nuestra zona: revisión y CIE en 24-48h, firmado por instalador habilitado y tramitado ante Indústria.",
      },
    ],
  },
  {
    slug: "electricista-sant-cugat",
    nombre: "Sant Cugat del Vallès",
    comarca: "Vallès Occidental",
    h1: "Electricista en Sant Cugat: urgencias e instaladores autorizados",
    metaTitle: "Electricista en Sant Cugat | Urgencias 24h y Boletines",
    metaDescription:
      "Electricistas autorizados en Sant Cugat. Casas, puntos de carga, boletines (CIE) y urgencias 24h. Precio cerrado antes de empezar.",
    porQue: [
      "Sant Cugat es la ciudad de nuestra zona con más vivienda unifamiliar, y eso cambia por completo el tipo de trabajo. Aquí no dominan los pisos de sesenta metros con potencia corta, sino casas con jardín, piscina, riego, garaje y varios coches, muchas de ellas en Valldoreix, Mira-sol, la Floresta y les Planes. Instalaciones grandes, con cuadros secundarios repartidos y tomas exteriores que sufren la intemperie.",
      "Es también donde más puntos de carga instalamos: casas con garaje propio donde el cargador entra sin discusión de junta, y comunidades del centro y de Coll Favà que están preparando el párking para varios vehículos a la vez. A eso se suma el tejido de oficinas y parques empresariales de la zona de Sant Joan y la estación, con mantenimientos y ampliaciones. Llegamos desde Sabadell en 20-30 minutos.",
    ],
    tambienServicio: {
      intro:
        "Sant Cugat es nuestra puerta al Vallès más residencial. Desde aquí trabajamos a diario en Valldoreix y Mira-sol, subimos a Rubí y a Terrassa por la autopista y bajamos a Cerdanyola y Barberà en cuestión de minutos. Mismo equipo y mismo precio cerrado en todos ellos.",
      municipios: [
        "Rubí",
        "Cerdanyola del Vallès",
        "Barberà del Vallès",
        "Sabadell",
        "Terrassa",
      ],
    },
    zonas: {
      h2: "Electricista en Sant Cugat, zona a zona",
      intro:
        "El municipio es muy extenso y cada núcleo tiene su propio tipo de instalación y de avería.",
      items: [
        {
          nombre: "Centre i Monestir",
          texto:
            "Pisos y casas de pueblo en el casco antiguo: instalaciones con décadas encima, cuadros por renovar, boletines para compraventa y locales comerciales del eje peatonal.",
        },
        {
          nombre: "Valldoreix",
          texto:
            "Parcelas grandes con jardín y piscina: cuadros secundarios, riego y alumbrado exterior, depuradoras, tomas estancas y puntos de carga en garaje propio.",
        },
        {
          nombre: "Mira-sol i la Floresta",
          texto:
            "Casas entre bosque, muchas ampliadas por fases: circuitos añadidos sin criterio, derivaciones por humedad y renovación completa con boletín.",
        },
        {
          nombre: "Coll Favà, Sant Joan i Volpelleres",
          texto:
            "Bloques y comunidades recientes: párkings preparados para varios puntos de carga, cuadros de servicios comunes y alumbrado de zonas ajardinadas.",
        },
        {
          nombre: "Parcs empresarials i oficines",
          texto:
            "Oficinas y naves del entorno de la estación y Can Sant Joan: mantenimiento, cuadros de distribución, alumbrado LED y ampliaciones de potencia.",
        },
      ],
    },
    secciones: [
      {
        h2: "Casas con jardín: la instalación que nadie mira hasta que falla",
        parrafos: [
          "En una casa de Valldoreix o Mira-sol la instalación eléctrica no termina en el cuadro del recibidor. Hay riego automático, alumbrado de jardín, bomba y depuradora de piscina, puerta de garaje motorizada, portero de la valla y a menudo un cuadro secundario en el sótano o en un anexo. Todo eso vive a la intemperie o cerca de ella, y es la parte que envejece primero.",
          "El patrón que más vemos es el de la casa ampliada por fases. Se cerró un porche, se puso la piscina diez años después y se añadió el aire acondicionado más tarde, y cada intervención colgó de donde había sitio en el cuadro. El resultado es un cuadro sin margen, circuitos que mezclan interior y exterior, y un diferencial general que salta cuando llueve y deja a oscuras la casa entera por culpa de una toma del jardín.",
          "El trabajo aquí es ordenar. Separar los circuitos de exterior en su propio diferencial para que una humedad en el jardín no te tire la casa, revisar las tomas estancas, comprobar la puesta a tierra, que en parcela suele ser mejorable, y dejar el cuadro con margen para lo siguiente. Se hace en una o dos jornadas y con boletín al terminar si la instalación lo requiere.",
        ],
      },
      {
        h2: "Puntos de carga: es donde más instalamos",
        parrafos: [
          "Sant Cugat concentra una de las mayores densidades de vehículo eléctrico del área de Barcelona, y aquí el punto de carga se resuelve de dos maneras muy distintas según dónde vivas.",
          "En casa unifamiliar es el escenario sencillo: hay garaje propio, la línea sale del cuadro de la vivienda y la única decisión de fondo es si la potencia contratada aguanta cargar mientras funciona el resto de la casa. Cuando no aguanta, no siempre hay que subir potencia: un sistema de gestión de carga adapta el consumo del cargador a lo que sobra en cada momento, y sale mejor que pagar más término de potencia todo el año.",
          "En comunidad hay que hacerlo bien desde el principio. La ley permite instalar el punto de carga sin necesidad de que la junta lo apruebe, basta con comunicarlo, pero eso no significa tirar un cable como se pueda. Lo correcto es una preinstalación con línea propia desde la centralización y capacidad para que después vengan otros vecinos sin rehacer nada. En los párkings de Coll Favà y Volpelleres lo hemos hecho ya varias veces, y sale mucho más barato una preinstalación conjunta que cinco instalaciones sueltas.",
        ],
      },
      {
        h2: "Cuánto tardamos en llegar y cómo trabajamos aquí",
        parrafos: [
          "Nuestra base está en Sabadell, a veinte minutos por la C-58 o por la B-30 según la hora. En urgencias eso significa entre 25 y 35 minutos al centro de Sant Cugat, algo más a los núcleos dispersos de la Floresta o les Planes, donde el acceso es más lento. Preferimos darte una franja que se cumple.",
          "En trabajos programados en casas trabajamos con una particularidad que aquí importa: la mayoría son viviendas ocupadas y con gente teletrabajando. Organizamos los cortes de suministro por circuitos y avisamos con antelación de cuánto va a durar cada uno, para que nadie se quede sin luz en mitad de una reunión. Es un detalle que no cuesta nada y que evita el 90% de los problemas.",
          "Para las comunidades y las oficinas de los parques empresariales facturamos con CIF e IVA desglosado, y ofrecemos revisión periódica de la instalación con informe por escrito. Es la fórmula que usan la mayoría de administradores con los que trabajamos en el Vallès.",
        ],
      },
    ],
    faqsLocales: [
      {
        pregunta: "¿Cuánto tarda un electricista en llegar a Sant Cugat?",
        respuesta:
          "En urgencias, entre 25 y 35 minutos al centro desde nuestra base de Sabadell. A Valldoreix y Mira-sol, similar; a la Floresta y les Planes puede subir algo por el acceso.",
      },
      {
        pregunta: "Tengo casa con piscina y jardín y me salta el diferencial cuando llueve. ¿Qué es?",
        respuesta:
          "Casi siempre una toma o una caja del exterior que ha perdido estanqueidad, o la bomba de la piscina. El problema de fondo es que el jardín comparte diferencial con la casa. Se localiza midiendo circuito por circuito y se resuelve separando el exterior en su propio diferencial.",
      },
      {
        pregunta: "¿Podéis instalar un punto de carga en mi casa de Valldoreix?",
        respuesta:
          "Sí, es de los trabajos que más hacemos en Sant Cugat. Revisamos el cuadro y la potencia contratada, y si la potencia se queda justa te proponemos un sistema de gestión de carga antes que subirla: suele salir mejor.",
      },
      {
        pregunta: "Vivo en un piso de Coll Favà. ¿Necesito permiso de la comunidad para el cargador?",
        respuesta:
          "No necesitas aprobación de la junta, basta con comunicarlo por escrito al presidente o al administrador. Ahora bien, si hay más vecinos interesados conviene plantear una preinstalación conjunta del párking: sale bastante más barato que instalaciones sueltas.",
      },
      {
        pregunta: "Estoy comprando una casa en Mira-sol. ¿Reviso la instalación antes?",
        respuesta:
          "Sí, y antes de firmar arras. En casas ampliadas por fases es donde más sorpresas aparecen: cuadros sin margen, circuitos mezclados y puestas a tierra insuficientes. Saberlo antes te da margen para negociar quién asume la adaptación.",
      },
      {
        pregunta: "¿Trabajáis con oficinas y comunidades de Sant Cugat?",
        respuesta:
          "Sí: mantenimiento periódico, cuadros de servicios comunes, alumbrado LED y ampliaciones de potencia, con factura con CIF e IVA desglosado e informe escrito de cada revisión.",
      },
    ],
  },
];

export function getCiudad(slug: string): Ciudad | undefined {
  return ciudades.find((c) => c.slug === slug);
}
