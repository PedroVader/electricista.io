import type { CardExtra, Servicio } from "./tipos";

/**
 * Servicios del vertical. Las páginas /[slug] se generan desde este archivo
 * con generateStaticParams. Regla global: NINGÚN importe en euros publicado.
 */

export const servicios: Servicio[] = [
  {
    slug: "electricistas-urgentes-24-horas",
    nombre: "Urgencias 24h",
    card: {
      titulo: "Urgencias 24h",
      linea: "Sin luz, cortocircuito o salta el diferencial: vamos hoy.",
      icono: "reloj",
      destacada: true,
      animada: true,
    },
    h1: "Electricistas urgentes 24 horas",
    heroSub:
      "Te has quedado sin luz, huele a quemado o el diferencial no para de saltar. Llámanos: te decimos precio cerrado por teléfono y salimos ya.",
    heroImage: "/img/hero-urgencias-24h.jpg",
    metaTitle: "Electricistas urgentes 24 horas | electricista.io",
    metaDescription:
      "Electricistas 24 horas en Barcelona y área metropolitana. Urgencias eléctricas atendidas hoy, precio cerrado antes de empezar.",
    urgencias: true,
    queIncluye: [
      {
        titulo: "Diagnóstico en el momento",
        texto:
          "Localizamos la avería nada más llegar: diferencial, magnetotérmico, derivación o cortocircuito.",
      },
      {
        titulo: "Reparación en la misma visita",
        texto:
          "En la mayoría de urgencias dejamos la instalación funcionando ese mismo día.",
      },
      {
        titulo: "Precio cerrado por teléfono",
        texto:
          "Antes de salir te decimos lo que cuesta. Sin sorpresas al acabar, tampoco de madrugada.",
      },
      {
        titulo: "Instalador habilitado",
        texto:
          "Quien viene es un instalador autorizado, no un intermediario. Si hace falta boletín, lo emitimos.",
      },
    ],
    secciones: [
      {
        h2: "Urgencias que atendemos a cualquier hora",
        parrafos: [
          "Una urgencia eléctrica no espera a horario de oficina. Estas son las llamadas que más recibimos:",
        ],
        bullets: [
          "Se ha ido la luz en toda la casa y no vuelve",
          "El diferencial salta cada vez que lo subes",
          "Olor a quemado en enchufes, cuadro o regletas",
          "Chispazos al enchufar o al encender la luz",
          "Un cortocircuito ha dejado media casa sin corriente",
          "El local o la comunidad se ha quedado sin suministro",
        ],
      },
      {
        h2: "Cómo funciona una urgencia con nosotros",
        parrafos: [
          "1. Nos llamas y nos cuentas qué pasa. Dos minutos bastan.",
          "2. Te damos precio cerrado de la salida y el diagnóstico por teléfono.",
          "3. Sale el electricista de guardia. Repara en la misma visita siempre que es posible.",
          "Si la avería destapa un problema mayor (cuadro antiguo, instalación fuera de normativa), te lo explicamos y te pasamos presupuesto cerrado por escrito. Tú decides.",
        ],
      },
    ],
    faqs: [
      {
        pregunta: "¿De verdad venís hoy?",
        respuesta:
          "Sí. Para urgencias tenemos electricista de guardia todos los días. En Barcelona y área metropolitana el tiempo de llegada habitual es de menos de una hora.",
      },
      {
        pregunta: "¿Cuánto cuesta una urgencia?",
        respuesta:
          "Depende del horario y de la avería. Te damos el precio cerrado por teléfono antes de salir, y ese es el precio. No publicamos tarifas porque cada caso es distinto: pedirlo no cuesta nada.",
      },
      {
        pregunta: "¿Trabajáis de noche y en festivos?",
        respuesta:
          "Sí, 24 horas los 365 días. El horario afecta al precio y te lo decimos antes, no después.",
      },
      {
        pregunta: "¿Qué hago mientras llega el electricista?",
        respuesta:
          "Si huele a quemado o hay chispazos, baja el interruptor general del cuadro y no lo vuelvas a subir. Desenchufa lo que estaba conectado en la zona afectada.",
      },
    ],
  },
  {
    slug: "electricista-urgente-barcelona",
    nombre: "Urgente Barcelona",
    card: {
      titulo: "Urgente en Barcelona",
      linea: "Electricista de guardia en Barcelona ciudad, hoy mismo.",
      icono: "rapido",
    },
    h1: "Electricista urgente en Barcelona",
    heroSub:
      "Electricista de guardia en Barcelona ciudad. Llegamos a cualquier distrito en menos de una hora, con precio cerrado por teléfono.",
    heroImage: "/img/hero-urgente-barcelona.jpg",
    metaTitle: "Electricista urgente en Barcelona | 24h | electricista.io",
    metaDescription:
      "Electricista urgente en Barcelona. Llegada en menos de 1h a cualquier distrito, 24 horas. Precio cerrado por teléfono antes de salir.",
    urgencias: true,
    queIncluye: [
      {
        titulo: "Cobertura en toda Barcelona",
        texto:
          "Eixample, Gràcia, Sants, Sant Martí, Sant Andreu, Les Corts, Sarrià-Sant Gervasi, Horta, Nou Barris y Ciutat Vella.",
      },
      {
        titulo: "Llegada en menos de 1 hora",
        texto:
          "El electricista de guardia se mueve por la ciudad: en la mayoría de avisos está en tu puerta en 45-60 minutos.",
      },
      {
        titulo: "Precio cerrado por teléfono",
        texto:
          "Te decimos el coste de la salida y el diagnóstico antes de ir. Sin recargos sorpresa al acabar.",
      },
      {
        titulo: "Reparación con garantía",
        texto:
          "Instalador habilitado, materiales homologados y garantía por escrito de la reparación.",
      },
    ],
    secciones: [
      {
        h2: "Urgencias eléctricas en pisos y fincas antiguas de Barcelona",
        parrafos: [
          "Buena parte de las urgencias que atendemos en Barcelona vienen de instalaciones con décadas de vida: cuadros sin diferencial, cableado antiguo y derivaciones que hacen saltar la luz. Es lo habitual en muchas fincas del Eixample, Gràcia o Ciutat Vella.",
          "Reparamos la avería hoy y, si tu instalación necesita una actualización para no repetir el susto, te lo decimos con un presupuesto cerrado aparte. Nunca mezclamos las dos cosas.",
        ],
      },
      {
        h2: "También atendemos comercios y comunidades",
        parrafos: [
          "Un local sin luz pierde dinero cada hora. Damos prioridad a comercios, restaurantes y comunidades de vecinos con el suministro caído. Si administras fincas, guarda nuestro teléfono: te resolvemos la urgencia y te mandamos la factura como empresa, con IVA desglosado.",
        ],
      },
    ],
    faqs: [
      {
        pregunta: "¿Cuánto tarda un electricista urgente en llegar en Barcelona?",
        respuesta:
          "Lo habitual es entre 45 minutos y una hora, según el distrito y la hora del día. Te damos una franja concreta al llamar.",
      },
      {
        pregunta: "¿Cubrís toda la ciudad?",
        respuesta:
          "Sí, los diez distritos. También L'Hospitalet, Badalona, Santa Coloma y el resto del área metropolitana.",
      },
      {
        pregunta: "¿Cómo sé cuánto me va a costar?",
        respuesta:
          "Te lo decimos por teléfono antes de salir: precio cerrado de salida y diagnóstico, y precio cerrado de la reparación en cuanto vemos la avería. Nada de tarifas ocultas.",
      },
    ],
  },
  {
    slug: "boletin-electrico",
    nombre: "Boletín eléctrico (CIE)",
    card: {
      titulo: "Boletín eléctrico (CIE)",
      linea: "Para alta de luz, subida de potencia o reformas. En 24-48h.",
      icono: "boletin",
      destacada: true,
    },
    h1: "Boletín eléctrico (CIE) en Barcelona en 24-48 horas",
    heroSub:
      "¿Te pide la comercializadora un boletín para dar de alta la luz o subir potencia? Lo emitimos y lo tramitamos nosotros. Precio cerrado por adelantado.",
    heroImage: "/img/hero-boletin.jpg",
    metaTitle: "Boletín eléctrico Barcelona (CIE) en 24-48h | electricista.io",
    metaDescription:
      "Boletín eléctrico (CIE) en Barcelona en 24-48h. Instaladores habilitados: revisión, emisión y tramitación. Precio cerrado antes de empezar.",
    ctaFrecuente: true,
    queIncluye: [
      {
        titulo: "Revisión de la instalación",
        texto:
          "Un instalador habilitado comprueba que tu instalación cumple el reglamento antes de firmar nada.",
      },
      {
        titulo: "Emisión del boletín",
        texto:
          "Emitimos el CIE (Certificado de Instalación Eléctrica) o el boletín de reconocimiento, según tu caso.",
      },
      {
        titulo: "Tramitación completa",
        texto:
          "Lo registramos ante Indústria y te lo dejamos listo para presentar a tu comercializadora.",
      },
      {
        titulo: "Adaptaciones si hacen falta",
        texto:
          "Si la instalación no pasa, te damos presupuesto cerrado de lo necesario para que pase. Tú decides.",
      },
    ],
    secciones: [
      {
        h2: "¿Qué es el boletín eléctrico y cuándo lo necesitas?",
        parrafos: [
          "El boletín eléctrico, oficialmente CIE (Certificado de Instalación Eléctrica), es el documento que acredita que tu instalación cumple el reglamento. Solo puede firmarlo un instalador habilitado.",
          "Lo necesitas en estos casos:",
        ],
        bullets: [
          "Alta de luz en un piso o local que lleva tiempo sin suministro",
          "Subida de potencia contratada",
          "Reforma que toca la instalación eléctrica",
          "Instalaciones antiguas: la comercializadora puede exigirlo si tu boletín tiene más de 20 años",
          "Cambio de uso del inmueble (de local a vivienda, por ejemplo)",
        ],
      },
      {
        h2: "Boletín azul y boletín blanco: cuál te piden",
        parrafos: [
          "En Cataluña se habla de dos boletines y conviene no confundirlos. El boletín azul es un reconocimiento de una instalación existente: el instalador la revisa y certifica que puede seguir en servicio. Es el que suelen pedir para altas de luz en pisos antiguos que no han hecho obras.",
          "El boletín blanco es el CIE propiamente dicho: se emite cuando la instalación es nueva o se ha modificado (reforma, ampliación, subida de potencia con cambios). ",
          "Si no sabes cuál te están pidiendo, mándanos el correo de tu comercializadora y te lo decimos en el día, sin compromiso.",
        ],
      },
      {
        h2: "¿Quién puede firmar un boletín?",
        parrafos: [
          "Solo un instalador eléctrico habilitado, inscrito en el registro de empresas instaladoras. Ni un manitas, ni un técnico sin habilitación, ni el administrador de la finca. Un boletín firmado por quien no debe no vale ante Indústria ni ante tu comercializadora.",
          "Todos nuestros boletines los firma un instalador habilitado de nuestro equipo, con su número de registro.",
        ],
      },
      {
        h2: "¿Cuánto cuesta y cuánto tarda?",
        parrafos: [
          "El precio depende de si la instalación pasa la revisión a la primera o necesita adaptaciones, y del tamaño de la vivienda o local. Por eso no publicamos una cifra: te damos precio cerrado por escrito antes de empezar, en menos de 2 horas, y ese es el precio.",
          "Los plazos sí son estándar: revisión y emisión en 24-48 horas desde tu llamada en la mayoría de casos.",
        ],
      },
      {
        h2: "¿El boletín caduca? ¿Qué pasa con la tramitación?",
        parrafos: [
          "El CIE no tiene una caducidad formal, pero las comercializadoras suelen rechazar boletines de más de 20 años al hacer gestiones. Si el tuyo es de esa época, cuenta con renovarlo.",
          "De la tramitación nos ocupamos nosotros: registramos el certificado ante el departamento de Indústria de la Generalitat y te entregamos el documento tal y como te lo pide tu comercializadora (Endesa, Iberdrola, Naturgy o cualquier otra) para dar el alta o ampliar potencia. Tú solo lo adjuntas a tu gestión.",
        ],
      },
    ],
    faqs: [
      {
        pregunta: "¿Cuánto cuesta un boletín eléctrico en Barcelona?",
        respuesta:
          "Depende del tamaño de la instalación y de si necesita adaptaciones para cumplir el reglamento. Te damos precio cerrado por escrito antes de empezar, gratis y en menos de 2 horas.",
      },
      {
        pregunta: "¿Cuánto tarda?",
        respuesta:
          "Revisión y emisión en 24-48 horas en la mayoría de casos. Si hay que hacer adaptaciones, el plazo depende del trabajo y te lo decimos en el presupuesto.",
      },
      {
        pregunta: "¿Qué diferencia hay entre boletín azul y blanco?",
        respuesta:
          "El azul certifica una instalación existente que no se ha modificado (reconocimiento). El blanco (CIE) se emite para instalaciones nuevas o modificadas. Tu comercializadora te dirá cuál exige; si tienes dudas, te lo aclaramos gratis.",
      },
      {
        pregunta: "¿Me vale un boletín firmado por un amigo electricista?",
        respuesta:
          "Solo si es instalador habilitado inscrito en el registro. Si no, Indústria y la comercializadora lo rechazarán.",
      },
      {
        pregunta: "¿Y si mi instalación no pasa la revisión?",
        respuesta:
          "Te explicamos exactamente qué falla y te damos presupuesto cerrado de las adaptaciones. Sin compromiso: el diagnóstico no te obliga a hacer la obra con nosotros.",
      },
    ],
  },
  {
    slug: "averias-electricas",
    nombre: "Averías y cortocircuitos",
    card: {
      titulo: "Averías y cortocircuitos",
      linea: "Salta la luz, enchufes muertos, olor a quemado. Lo encontramos.",
      icono: "averia",
    },
    h1: "Averías eléctricas: las encontramos y las reparamos",
    heroSub:
      "Se va la luz, salta el diferencial, hay enchufes que no funcionan. Localizamos la causa, te damos precio cerrado y lo reparamos.",
    heroImage: "/img/hero-averias.jpg",
    metaTitle: "Averías eléctricas y cortocircuitos | electricista.io",
    metaDescription:
      "Reparación de averías eléctricas en Barcelona y área metropolitana: diferencial que salta, cortocircuitos, enchufes sin corriente. Precio cerrado.",
    queIncluye: [
      {
        titulo: "Localización de la avería",
        texto:
          "Con medición y comprobación de circuitos, no a ojo. Encontramos la causa, no solo el síntoma.",
      },
      {
        titulo: "Reparación con garantía",
        texto:
          "Sustituimos lo dañado con material homologado y te dejamos la instalación probada.",
      },
      {
        titulo: "Informe claro",
        texto:
          "Te explicamos qué ha pasado y cómo evitar que se repita. Sin tecnicismos innecesarios.",
      },
      {
        titulo: "Precio cerrado",
        texto:
          "Diagnóstico con precio comunicado por adelantado y reparación presupuestada antes de tocar nada.",
      },
    ],
    secciones: [
      {
        h2: "Averías que resolvemos cada semana",
        parrafos: ["Si te suena alguna de estas, es de lo más común:"],
        bullets: [
          "El diferencial salta al conectar un electrodoméstico concreto",
          "“Se va la luz” de forma aleatoria, sobre todo de noche",
          "Enchufes o habitaciones enteras sin corriente",
          "Luces que parpadean o pierden intensidad",
          "Cortocircuito tras una obra, una gotera o un temporal",
          "Cuadro que hace ruido, huele raro o se calienta",
        ],
      },
      {
        h2: "Por qué no conviene esperar",
        parrafos: [
          "Una derivación o un cable dañado no se arreglan solos: empeoran. Lo que hoy es un diferencial que salta de vez en cuando puede acabar en un cable quemado dentro de la pared. Cuanto antes se localiza, más barata es la reparación.",
          "Si la avería es urgente (sin luz, olor a quemado, chispazos), pasa a nuestra línea de urgencias 24h y vamos hoy.",
        ],
      },
    ],
    faqs: [
      {
        pregunta: "¿Cuánto cuesta encontrar una avería?",
        respuesta:
          "El diagnóstico tiene un precio cerrado que te decimos por teléfono antes de ir. La reparación se presupuesta aparte cuando sabemos qué falla, siempre por escrito y antes de empezar.",
      },
      {
        pregunta: "El diferencial salta solo a veces. ¿Merece la pena llamar?",
        respuesta:
          "Sí. Un diferencial que salta de forma intermitente casi siempre es una derivación en un electrodoméstico o en la instalación. Es de las averías que más crecen si se dejan pasar.",
      },
      {
        pregunta: "¿Podéis venir fuera de horario laboral?",
        respuesta:
          "Sí. Si no es urgente, concertamos la visita cuando te venga bien, incluida franja de tarde. Si es urgente, tenemos guardia 24h.",
      },
      {
        pregunta: "¿La reparación tiene garantía?",
        respuesta:
          "Sí, por escrito. Cubre la mano de obra y los materiales que instalamos.",
      },
    ],
  },
  {
    slug: "cambio-cuadro-electrico",
    nombre: "Cambio de cuadro eléctrico",
    card: {
      titulo: "Cambio de cuadro eléctrico",
      linea: "Adiós a los fusibles: cuadro moderno con diferencial y PIAs.",
      icono: "cuadro",
    },
    h1: "Cambio de cuadro eléctrico: seguridad al día en una mañana",
    heroSub:
      "Si tu cuadro tiene fusibles, no tiene diferencial o salta sin motivo, toca cambiarlo. Lo sustituimos en una visita y con boletín si lo necesitas.",
    heroImage: "/img/hero-cuadro.jpg",
    metaTitle: "Cambio de cuadro eléctrico Barcelona | electricista.io",
    metaDescription:
      "Cambio y actualización de cuadros eléctricos en Barcelona y área metropolitana. Instalación en una mañana, con boletín (CIE) incluido si lo necesitas.",
    queIncluye: [
      {
        titulo: "Cuadro nuevo normalizado",
        texto:
          "Diferencial, magnetotérmicos (PIAs) por circuito y protección contra sobretensiones si la quieres.",
      },
      {
        titulo: "Instalación en una visita",
        texto:
          "En la mayoría de viviendas, el cambio completo se hace en una mañana. Te quedas sin luz solo unas horas.",
      },
      {
        titulo: "Boletín si lo necesitas",
        texto:
          "Somos instaladores habilitados: si tu gestión requiere CIE, lo emitimos con el mismo trabajo.",
      },
      {
        titulo: "Retirada del cuadro antiguo",
        texto: "Nos llevamos el material viejo y te dejamos la zona limpia.",
      },
    ],
    secciones: [
      {
        h2: "Señales de que tu cuadro necesita cambio",
        parrafos: [
          "El cuadro es el guardián de tu instalación. Si es de otra época, no te protege como debería:",
        ],
        bullets: [
          "Todavía tiene fusibles de cerámica o “plomos”",
          "No hay diferencial, o hay uno solo para toda la casa",
          "Salta entero cuando enchufas el horno y el lavavajillas a la vez",
          "El botón de prueba del diferencial no dispara nada",
          "Vas a subir potencia o hacer reforma y te piden adaptarlo",
        ],
      },
      {
        h2: "Cómo lo hacemos",
        parrafos: [
          "Primero te pedimos una foto del cuadro actual: con eso y un par de preguntas te damos presupuesto cerrado por escrito, casi siempre sin visita previa. El día del cambio, el corte de luz dura unas horas, no días.",
          "Dejamos cada circuito rotulado (cocina, luces, enchufes, clima…) para que sepas qué es cada cosa, y probamos la instalación completa contigo delante.",
        ],
      },
    ],
    faqs: [
      {
        pregunta: "¿Cuánto cuesta cambiar un cuadro eléctrico?",
        respuesta:
          "Depende del número de circuitos y del estado de la instalación. Mándanos una foto del cuadro y te damos precio cerrado por escrito en menos de 2 horas.",
      },
      {
        pregunta: "¿Cuánto tiempo estaré sin luz?",
        respuesta:
          "En una vivienda tipo, entre 3 y 5 horas. Te avisamos antes de cortar y te dejamos todo funcionando el mismo día.",
      },
      {
        pregunta: "¿Cambiar el cuadro requiere boletín?",
        respuesta:
          "Si se modifica la instalación puede requerir CIE, sobre todo si aprovechas para subir potencia. Como somos instaladores habilitados, lo emitimos nosotros en el mismo trabajo.",
      },
      {
        pregunta: "¿Merece la pena añadir protección contra sobretensiones?",
        respuesta:
          "Si tienes electrodomésticos de gama media-alta, ordenadores o teletrabajas, sí: una sobretensión de red puede quemarlos y el protector cuesta mucho menos que reponerlos.",
      },
    ],
  },
  {
    slug: "instalacion-punto-de-carga-coche-electrico",
    nombre: "Punto de carga coche eléctrico",
    card: {
      titulo: "Punto de carga",
      linea: "Cargador en tu garaje o comunidad, con legalización incluida.",
      icono: "carga",
    },
    h1: "Instalación de punto de carga para coche eléctrico",
    heroSub:
      "Instalamos tu cargador en garaje privado o plaza de comunidad: estudio, instalación, legalización y boletín. Todo con precio cerrado.",
    metaTitle: "Punto de carga coche eléctrico Barcelona | electricista.io",
    metaDescription:
      "Instalación de puntos de carga para coche eléctrico en Barcelona y área metropolitana. En garajes privados y comunidades, con legalización y CIE.",
    queIncluye: [
      {
        titulo: "Estudio previo",
        texto:
          "Valoramos tu instalación, la distancia al contador y la potencia disponible antes de darte precio.",
      },
      {
        titulo: "Instalación completa",
        texto:
          "Cargador, cableado, protecciones dedicadas y configuración. Compatible con los principales fabricantes.",
      },
      {
        titulo: "Legalización y CIE",
        texto:
          "Tramitamos la legalización de la instalación y emitimos el boletín. En comunidades, te guiamos con la notificación a la finca.",
      },
      {
        titulo: "Gestión de ayudas",
        texto:
          "Te orientamos sobre las subvenciones vigentes para puntos de carga y te preparamos la documentación técnica.",
      },
    ],
    secciones: [
      {
        h2: "¿En una comunidad de vecinos? Es más fácil de lo que crees",
        parrafos: [
          "Para instalar un cargador en tu plaza de garaje comunitaria no necesitas permiso de la junta: la ley solo te obliga a comunicarlo previamente a la comunidad. Nosotros te preparamos el escrito y resolvemos las dudas técnicas del administrador si las hay.",
          "La instalación va conectada a tu contador, con su propia protección: tú pagas tu consumo y nadie más se ve afectado.",
        ],
      },
      {
        h2: "Qué cargador te conviene",
        parrafos: [
          "Depende de tu coche, de tu potencia contratada y de cuántos kilómetros haces al día. En el estudio previo te recomendamos la potencia de carga adecuada, y si conviene subir la potencia contratada te lo decimos claro, con el trámite incluido en el presupuesto.",
        ],
      },
    ],
    faqs: [
      {
        pregunta: "¿Cuánto cuesta instalar un punto de carga?",
        respuesta:
          "Depende sobre todo de la distancia entre tu contador y la plaza, y del cargador elegido. Con fotos y tus datos de contrato solemos cerrar el precio sin visita; si hace falta visita técnica, te decimos su precio al concertarla. El presupuesto, siempre cerrado por escrito.",
      },
      {
        pregunta: "¿Necesito permiso de la comunidad?",
        respuesta:
          "No. Solo hay que comunicarlo previamente a la comunidad. Te preparamos nosotros la notificación.",
      },
      {
        pregunta: "¿Hay que subir la potencia contratada?",
        respuesta:
          "No siempre: muchos cargadores regulan la potencia y cargan de noche sin tocar tu contrato. Lo valoramos en el estudio previo.",
      },
      {
        pregunta: "¿La instalación se legaliza?",
        respuesta:
          "Sí, siempre. Emitimos el CIE y registramos la instalación: lo necesitarás para la garantía, el seguro y las ayudas públicas.",
      },
    ],
  },
  {
    slug: "subir-potencia-luz",
    nombre: "Subir potencia de luz",
    card: {
      titulo: "Subida de potencia",
      linea: "¿Salta la luz al usar dos aparatos? Te gestionamos la subida.",
      icono: "potencia",
    },
    h1: "Subir la potencia de la luz sin líos",
    heroSub:
      "Si la luz salta cuando enciendes dos aparatos a la vez, necesitas más potencia. Revisamos tu instalación, emitimos el boletín si hace falta y te acompañamos en el trámite.",
    heroImage: "/img/hero-potencia.jpg",
    metaTitle: "Subir potencia de luz Barcelona | Boletín incluido",
    metaDescription:
      "Subida de potencia contratada en Barcelona y área metropolitana. Revisión de instalación, boletín (CIE) y acompañamiento en el trámite con tu comercializadora.",
    queIncluye: [
      {
        titulo: "Diagnóstico de potencia",
        texto:
          "Calculamos la potencia que de verdad necesitas según tus aparatos. A veces la solución no es subir, y te lo diremos.",
      },
      {
        titulo: "Revisión de la instalación",
        texto:
          "Comprobamos que tu instalación admite la nueva potencia: cuadro, derivación individual y protecciones.",
      },
      {
        titulo: "Boletín si te lo piden",
        texto:
          "Para subir potencia, la comercializadora suele exigir CIE si tu boletín es antiguo. Lo emitimos en 24-48h.",
      },
      {
        titulo: "Acompañamiento en el trámite",
        texto:
          "Te decimos exactamente qué pedir a tu comercializadora y qué documentos adjuntar. Sin bucles con el call center.",
      },
    ],
    secciones: [
      {
        h2: "Señales de que te falta potencia",
        parrafos: ["Es de las consultas más habituales, y se nota así:"],
        bullets: [
          "Salta el ICP al usar horno y vitrocerámica a la vez",
          "No puedes poner la lavadora con el aire acondicionado encendido",
          "Acabas de pasarte a cocina eléctrica o aerotermia",
          "Has instalado un punto de carga para el coche",
        ],
      },
      {
        h2: "Ojo: a veces el problema no es la potencia",
        parrafos: [
          "Antes de pagar más cada mes en el término fijo, conviene comprobarlo: un magnetotérmico envejecido o un cuadro mal dimensionado dan los mismos síntomas que la falta de potencia. En la visita medimos tu consumo real y te decimos con datos si hay que subir potencia, ajustar el cuadro o ambas cosas.",
        ],
      },
    ],
    faqs: [
      {
        pregunta: "¿Cuánto cuesta subir la potencia?",
        respuesta:
          "Tiene dos partes: los derechos que cobra la distribuidora en tu factura y, si tu instalación necesita boletín o adaptaciones, nuestro trabajo. De lo nuestro te damos precio cerrado por escrito antes de empezar.",
      },
      {
        pregunta: "¿Siempre hace falta boletín para subir potencia?",
        respuesta:
          "No siempre. Si tu boletín tiene menos de 20 años y la instalación admite la nueva potencia, puede no hacer falta. Si te lo piden, lo emitimos en 24-48h.",
      },
      {
        pregunta: "¿Cuánto tarda el trámite completo?",
        respuesta:
          "Nuestra parte, 24-48 horas. La comercializadora y la distribuidora suelen tardar entre unos días y un par de semanas en aplicar el cambio.",
      },
    ],
  },
  {
    slug: "electricistas-para-empresas-y-comunidades",
    nombre: "Empresas y comunidades",
    card: {
      titulo: "Empresas y comunidades",
      linea: "Mantenimiento y averías para fincas, oficinas y locales.",
      icono: "empresa",
    },
    h1: "Electricistas para empresas y comunidades",
    heroSub:
      "Mantenimiento eléctrico, averías y reformas para comunidades de vecinos, oficinas, locales y hostelería. Un mismo equipo, respuesta rápida y factura con IVA desglosado.",
    heroImage: "/img/hero-empresas.jpg",
    metaTitle: "Electricistas para empresas y comunidades | electricista.io",
    metaDescription:
      "Servicio eléctrico para empresas y comunidades en Barcelona y área metropolitana: mantenimientos periódicos, urgencias y reformas. Visita técnica y propuesta por escrito.",
    b2b: true,
    ctaLabel: "Pide una visita técnica",
    queIncluye: [
      {
        titulo: "Mantenimiento periódico",
        texto:
          "Revisiones programadas de cuadros, alumbrado y protecciones. Menos averías, menos sustos y todo documentado.",
      },
      {
        titulo: "Urgencias con prioridad",
        texto:
          "Línea preferente para clientes con mantenimiento: un local sin luz no puede esperar al día siguiente.",
      },
      {
        titulo: "Boletines y legalizaciones",
        texto:
          "CIE para locales, ampliaciones de potencia, legalización de instalaciones y certificados para actividades.",
      },
      {
        titulo: "Facturación como empresa",
        texto:
          "Factura con CIF e IVA desglosado, presupuestos por escrito y un interlocutor único para todos tus centros.",
      },
    ],
    secciones: [
      {
        h2: "Comunidades de vecinos",
        parrafos: [
          "Alumbrado de escalera y garaje, línea del ascensor, portero automático, telecos, cuadros comunitarios. Trabajamos con administradores de fincas de Barcelona y el Vallès: presupuesto cerrado para la junta, aviso previo a los vecinos y parte de trabajo al acabar.",
          "Si administras varias fincas, un contrato de mantenimiento te ahorra la gestión de buscar electricista cada vez que algo falla.",
        ],
      },
      {
        h2: "Oficinas, locales y hostelería",
        parrafos: [
          "Cuadros que se quedan cortos, ampliaciones de potencia para cocinas, iluminación de sala y terraza, revisiones para el seguro o la licencia de actividad. Trabajamos fuera de tu horario de apertura cuando el trabajo lo permite, para que no cierres ni una hora.",
        ],
      },
      {
        h2: "Cómo empezamos",
        parrafos: [
          "Pide una visita técnica. Vemos tus instalaciones, te decimos qué está bien, qué es mejorable y qué es urgente, y te pasamos propuesta por escrito: puntual o de mantenimiento periódico. Sin permanencias raras ni letra pequeña.",
        ],
      },
    ],
    faqs: [
      {
        pregunta: "¿La visita técnica tiene coste?",
        respuesta:
          "Sí, tiene un precio cerrado que te decimos al concertarla, según el tamaño de las instalaciones a revisar. Lo que no tiene es compromiso: la propuesta que te pasemos después la valoras con calma.",
      },
      {
        pregunta: "¿Facturáis a nombre de la empresa?",
        respuesta:
          "Sí, siempre: factura con vuestro CIF e IVA desglosado, y presupuesto previo por escrito para vuestra contabilidad.",
      },
      {
        pregunta: "¿Podéis trabajar fuera de horario comercial?",
        respuesta:
          "Sí. En locales y oficinas programamos los trabajos de noche o en festivo cuando conviene, para no interrumpir la actividad.",
      },
      {
        pregunta: "¿Cómo funciona el mantenimiento periódico?",
        respuesta:
          "Definimos un calendario de revisiones según tus instalaciones. Cada visita queda documentada y los avisos entre revisiones tienen respuesta prioritaria.",
      },
    ],
  },
];

/** Card de la home sin página propia en v1: instalaciones nuevas → presupuesto */
export const cardsExtra: CardExtra[] = [
  {
    titulo: "Instalaciones nuevas",
    linea: "Obra nueva, reformas integrales y ampliaciones de instalación.",
    icono: "instalacion",
    href: "/presupuesto",
  },
];

export function getServicio(slug: string): Servicio | undefined {
  return servicios.find((s) => s.slug === slug);
}
