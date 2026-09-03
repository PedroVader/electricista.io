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
    h1: "Electricistas urgentes 24 horas en Barcelona",
    heroSub:
      "Te has quedado sin luz, huele a quemado o el diferencial no para de saltar. Llámanos: te decimos precio cerrado por teléfono y salimos ya.",
    heroImage: "/img/hero-urgencias-24h.jpg",
    metaTitle: "Electricistas urgentes 24 horas en Barcelona",
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
          "Quien viene es un instalador habilitado con su número de registro, no un manitas. Si hace falta boletín, él lo firma y nosotros lo tramitamos.",
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
      {
        h2: "Qué hacer en los primeros cinco minutos",
        parrafos: [
          "Mientras llegamos, lo que hagas ahora importa. Estas son las pautas que damos por teléfono, por orden de gravedad.",
          "Si huele a quemado o ves humo, baja el interruptor general del cuadro y no lo vuelvas a subir bajo ningún concepto, aunque parezca que ya no pasa nada. El olor a plástico caliente significa que algo se está degradando por dentro y volver a dar tensión es exactamente lo que no hay que hacer. Ventila y sal de la habitación afectada.",
          "Si hay agua en contacto con la instalación, por una gotera o una inundación, corta el general antes de tocar nada y no pises la zona mojada hasta haberlo hecho. Es la situación que más accidentes domésticos provoca y la que la gente subestima más.",
          "Si alguien ha recibido una descarga, no lo toques mientras siga en contacto con la corriente: corta primero el suministro desde el cuadro y llama al 112. Una descarga que parece leve puede dar problemas de ritmo cardíaco horas después, así que que lo valore un médico aunque la persona diga que está bien.",
          "Y si simplemente te has quedado sin luz, comprueba antes de nada si tus vecinos también. Si es toda la finca o toda la calle, es un corte de la distribuidora y ahí no hay avería tuya que reparar.",
        ],
      },
      {
        h2: "Por qué resolvemos la mayoría en la misma visita",
        parrafos: [
          "Una urgencia que acaba en «vuelvo mañana con la pieza» no es una urgencia resuelta, es una visita cobrada. Por eso el electricista de guardia sale con el material de recambio habitual ya cargado.",
          "En la furgoneta van diferenciales y magnetotérmicos de los calibres más usados, mecanismos de enchufe e interruptor, cable de las secciones habituales, material para rehacer cajas de derivación, portalámparas y equipos de alumbrado, y el instrumental de medición para localizar la avería en lugar de ir probando: pinza amperimétrica, medidor de aislamiento y detector de trazas para seguir un cable por dentro de la pared.",
          "Con eso resolvemos en el momento la gran mayoría de avisos. Lo que no se puede improvisar es una pieza específica de un equipo concreto, un cuadro completo a medida o una actuación que requiera obra. En esos casos dejamos la instalación en situación segura y con el máximo de servicio posible, y te decimos con fecha cuándo se remata y por cuánto.",
        ],
      },
      {
        h2: "Urgencias que no son urgencias (y te ahorran dinero)",
        parrafos: [
          "Esto no nos conviene contarlo, pero preferimos decirlo. No todo lo que asusta necesita una salida de guardia a las tres de la mañana, y una salida nocturna o en festivo cuesta más que una visita programada al día siguiente.",
          "Pueden esperar a horario normal: un enchufe concreto que ha dejado de funcionar mientras el resto de la casa va bien, una luz o un punto de alumbrado fundido, un magnetotérmico que salta solo al usar un aparato determinado (basta con no usarlo), o el timbre y el portero automático averiados. Nada de eso empeora por esperar unas horas.",
          "No pueden esperar: cualquier olor a quemado, chispazos, un cuadro o un mecanismo caliente al tacto, notar cosquilleo al tocar un electrodoméstico o un grifo, agua sobre la instalación, un local sin suministro con género refrigerado, y un ascensor o una bomba de achique parados en una comunidad.",
          "Cuando llames te lo diremos con la misma franqueza. Si tu caso puede esperar, te lo decimos y te damos cita para el día siguiente, aunque eso signifique facturar menos hoy.",
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
    metaTitle: "Electricista urgente en Barcelona 24h, hoy mismo",
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
          "El electricista de guardia se mueve por la ciudad. En la mayoría de avisos está en tu puerta en 45-60 minutos.",
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
      {
        h2: "Urgencias en fincas antiguas: lo que nos encontramos",
        parrafos: [
          "Barcelona tiene uno de los parques de vivienda más antiguos de España, y eso marca el perfil de las urgencias que atendemos en la ciudad. No trabajamos igual en una finca de 1920 del Eixample que en una torre de los dos mil de Diagonal Mar.",
          "En finca antigua la avería casi nunca está donde parece. El cuadro está junto a la puerta, las derivaciones se hicieron en distintas décadas y con distintos criterios, y buena parte del recorrido pasa por el patio de luces, que es húmedo y mal ventilado. Localizar el punto exacto exige medir circuito por circuito, y por eso el diagnóstico es una parte del trabajo tan importante como la reparación.",
          "Hay además un factor que sorprende a mucha gente: en fincas con instalación centenaria es frecuente que la avería que te ha dejado sin luz sea el síntoma y no la causa. Reparamos lo que te ha dejado a oscuras hoy, te decimos claramente qué hemos visto del resto de la instalación, y te lo presupuestamos aparte y por escrito. Nunca aprovechamos una urgencia para vender una reforma.",
        ],
      },
      {
        h2: "Comunidades y locales: quién paga qué",
        parrafos: [
          "Es la duda que más discusiones genera cuando la urgencia ocurre en un edificio de vecinos, y conviene tenerla clara antes de que pase.",
          "La frontera está en el contador. Desde el contador hacia el interior de tu vivienda o local, la instalación es privativa y el coste es del propietario. Desde el contador hacia atrás (montantes, centralización de contadores, línea general de alimentación, cuadro de servicios comunes, alumbrado de escalera y párking, ascensor, bombas) es instalación común y el coste es de la comunidad.",
          "En la práctica, cuando llegamos a una urgencia en una finca, lo primero que determinamos es de qué lado está la avería, y lo dejamos por escrito en el parte. Si es común, facturamos a la comunidad con CIF e IVA desglosado y con el detalle que necesita el administrador para justificarlo. Si es privativa, al propietario.",
          "Para locales de hostelería y comercio damos prioridad de respuesta, porque un restaurante sin luz a las ocho de la tarde o una cámara frigorífica parada tienen un coste por hora que no lo tiene una vivienda.",
        ],
      },
      {
        h2: "Los diez distritos, con tiempos realistas",
        parrafos: [
          "Cubrimos toda la ciudad, pero no todas las zonas están a la misma distancia ni tienen el mismo acceso, y preferimos decirte una franja que se cumpla antes que una que suene bien.",
          "En la parte central y llana de la ciudad (Eixample, Gràcia, Sants-Montjuïc, Sant Martí, Les Corts, Ciutat Vella) lo habitual son entre 30 y 45 minutos. En las zonas altas y con desnivel, como buena parte de Horta-Guinardó, Nou Barris y la parte alta de Sarrià-Sant Gervasi, el tiempo sube algo por acceso y pendiente. En Sant Andreu depende bastante del punto exacto.",
          "El aparcamiento en Barcelona es problema nuestro, no tuyo, y no lo repercutimos en la factura. Si en tu calle no hay forma de parar, aparcamos donde se pueda y subimos a pie con el material.",
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
      "¿Te pide la comercializadora un boletín para dar de alta la luz o subir potencia? Lo firma un instalador habilitado y lo tramitamos nosotros. Precio cerrado por adelantado.",
    heroImage: "/img/hero-boletin.jpg",
    metaTitle: "Boletín eléctrico en Barcelona (CIE) en 24-48h",
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
          "Se firma el CIE (Certificado de Instalación Eléctrica) o el boletín de reconocimiento, según tu caso.",
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
          "En Cataluña se habla de dos boletines y se confunden mucho. El boletín azul es un reconocimiento de una instalación que ya existe. El instalador la revisa y certifica que puede seguir en servicio. Es el que piden para altas de luz en pisos antiguos donde no se ha hecho obra.",
          "El boletín blanco es el CIE propiamente dicho: se emite cuando la instalación es nueva o se ha modificado (reforma, ampliación, subida de potencia con cambios). ",
          "Si no sabes cuál te están pidiendo, mándanos el correo de tu comercializadora y te lo decimos en el día, sin compromiso.",
        ],
      },
      {
        h2: "¿Quién puede firmar un boletín?",
        parrafos: [
          "Solo un instalador eléctrico habilitado, inscrito en el registro de empresas instaladoras. Ni un manitas, ni un técnico sin habilitación, ni el administrador de la finca. Un boletín firmado por quien no debe no vale ante Indústria ni ante tu comercializadora.",
          "Todos los boletines que gestionamos los firma un instalador habilitado inscrito en el registro oficial, con su número. Si quieres comprobarlo, pídenoslo y te damos el dato antes de contratar: el registro de instaladores es público.",
        ],
      },
      {
        h2: "¿Cuánto cuesta y cuánto tarda?",
        parrafos: [
          "El precio depende de si la instalación pasa la revisión a la primera o necesita adaptaciones, y del tamaño de la vivienda o local. Por eso no publicamos una cifra: te damos precio cerrado por escrito antes de empezar, en menos de 2 horas, y ese es el precio.",
          "Los plazos sí son estándar. Revisión y emisión en 24-48 horas desde tu llamada.",
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
    h1: "Averías eléctricas en Barcelona: las encontramos y las reparamos",
    heroSub:
      "Se va la luz, salta el diferencial, hay enchufes que no funcionan. Localizamos la causa, te damos precio cerrado y lo reparamos.",
    heroImage: "/img/hero-averias.jpg",
    metaTitle: "Averías eléctricas y cortocircuitos en Barcelona",
    metaDescription:
      "Reparación de averías eléctricas en Barcelona: diferencial que salta, cortocircuitos, enchufes sin corriente. Precio cerrado.",
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
      {
        h2: "Cómo localizamos una avería: medir en vez de adivinar",
        parrafos: [
          "La diferencia entre una reparación que dura y una que te devuelve el problema en dos semanas está casi siempre en el diagnóstico. Y un diagnóstico serio es una medición, no una inspección visual.",
          "El método que seguimos es siempre el mismo. Primero acotamos: qué circuito está afectado y en qué condiciones aparece el fallo. Después medimos el aislamiento de ese circuito, que es lo que revela si hay una fuga de corriente y con qué magnitud. Comprobamos la continuidad del conductor de protección para saber si la toma de tierra llega de verdad hasta el punto afectado. Verificamos la caída de tensión bajo carga, que es lo que delata una conexión floja o una sección insuficiente. Y donde hace falta seguir un cable por dentro de la pared, usamos detector de trazas en lugar de picar a ciegas.",
          "Todo eso da números, no opiniones. Con esos números sabemos si lo que tienes es un mecanismo estropeado, una derivación por humedad, un empalme mal hecho o un problema de fondo en la instalación. Y tú sabes por qué te estamos proponiendo una cosa y no otra.",
        ],
      },
      {
        h2: "Las averías intermitentes, que son las difíciles",
        parrafos: [
          "La avería que aparece y desaparece es la que más veces nos llega después de que otro haya intentado arreglarla. Y tiene explicación: si el fallo no está presente cuando el electricista llega, no hay nada que medir.",
          "Las causas habituales de un fallo intermitente son cuatro: una conexión floja que hace contacto según la temperatura o las vibraciones, humedad que solo aparece con la lluvia o al ducharse, un aparato que fuga únicamente cuando entra su resistencia (el termo es el ejemplo clásico), y la degradación de un mecanismo que aún no ha fallado del todo.",
          "Lo que hacemos en estos casos es distinto: en lugar de buscar el fallo en el momento, buscamos el rastro que deja. Un punto caliente, un contacto oxidado, un valor de aislamiento que está bajo pero todavía no dispara. Cuando aun así no aparece, podemos dejar registrando el circuito para capturar el evento cuando ocurra.",
          "Si te han venido a mirar lo mismo dos o tres veces sin resultado, cuéntanoslo al llamar: nos ahorra repetir el camino que ya no funcionó.",
        ],
      },
      {
        h2: "Lo que nunca hacemos en una reparación",
        parrafos: [
          "Hay atajos que son habituales en el oficio y que nosotros no usamos, porque te dejan el problema aplazado en lugar de resuelto:",
        ],
        bullets: [
          "Poner un magnetotérmico de mayor calibre para que deje de saltar, dejando el cable trabajando por encima de su límite",
          "Sustituir un diferencial que dispara sin corregir antes la fuga que lo hace disparar",
          "Empalmar fuera de caja de registro, aunque quede escondido y nadie lo vea nunca",
          "Dar por buena una toma de tierra sin haberla medido",
          "Aprovechar una avería para venderte una reforma que no te hace falta hoy",
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
    h1: "Cambio de cuadro eléctrico en Barcelona: seguridad al día en una mañana",
    heroSub:
      "Si tu cuadro tiene fusibles, no tiene diferencial o salta sin motivo, toca cambiarlo. Hacemos sustitución de cuadros antiguos y montaje de cuadros nuevos, en una visita y con boletín si lo necesitas.",
    heroImage: "/img/hero-cuadro.jpg",
    metaTitle: "Cambio y sustitución de cuadros eléctricos en Barcelona",
    metaDescription:
      "Sustitución de cuadros eléctricos antiguos y montaje de cuadros nuevos en Barcelona. Instalación en una mañana, con boletín (CIE) si lo necesitas.",
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
          "Trabajamos con instaladores habilitados: si tu gestión requiere CIE, se firma con el mismo trabajo.",
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
          "Primero te pedimos una foto del cuadro actual. Con eso y un par de preguntas te damos presupuesto cerrado por escrito, casi siempre sin visita previa. El día del cambio, el corte de luz dura unas horas, no días.",
          "Dejamos cada circuito rotulado (cocina, luces, enchufes, clima…) para que sepas qué es cada cosa, y probamos la instalación completa contigo delante.",
        ],
      },
      {
        h2: "Qué lleva dentro un cuadro nuevo",
        parrafos: [
          "Cuando pidas presupuesto para un cuadro, mira qué estás comprando. Dos presupuestos con el mismo título pueden contener cosas muy distintas. Nosotros montamos aparamenta Hager y Schneider, y protección contra sobretensiones Toscano. Esto es lo que lleva un cuadro de vivienda estándar:",
        ],
        bullets: [
          "Interruptor general automático, que permite cortar toda la vivienda de golpe",
          "Diferencial o diferenciales según el número de circuitos, con su prueba de disparo verificada",
          "Un magnetotérmico por circuito, dimensionado a la sección real del cable de ese circuito",
          "Circuitos separados como mínimo para alumbrado, enchufes generales, cocina y horno, lavadora y baño, y climatización si existe",
          "Protección contra sobretensiones permanentes y transitorias, muy recomendable en toda el área de Barcelona",
          "Rotulación de cada línea con lo que alimenta, para que dentro de unos años sepas qué bajar",
          "Comprobación final de aislamiento y continuidad de tierra, y garantía por escrito",
        ],
      },
      {
        h2: "¿Hace falta cambiarlo entero o basta con ampliar?",
        parrafos: [
          "No siempre hay que sustituir el cuadro completo, y decirlo nos cuesta trabajo facturado, pero es la respuesta honesta en bastantes casos.",
          "Basta con ampliar o modificar cuando el cuadro es relativamente moderno, tiene diferencial que funciona, hay espacio libre en el carril y lo que necesitas es añadir un circuito nuevo, por ejemplo para una cocina de inducción o un aire acondicionado. Ahí se añade lo que falta y se deja el resto como está.",
          "Hay que sustituirlo entero cuando quedan fusibles, cuando no hay diferencial o hay uno solo para toda la vivienda, cuando el envolvente está lleno y no admite un elemento más, cuando los magnetotérmicos no se corresponden con la sección de los cables, o cuando la instalación necesita boletín y el cuadro actual no lo va a pasar.",
          "Te lo decimos con una foto del cuadro abierto, sin visita previa y sin coste. Mándanosla y en el mismo día sabes en cuál de los dos casos estás.",
        ],
      },
      {
        h2: "Sustitución, montaje o ampliación: no es lo mismo",
        parrafos: [
          "Nos llegan las tres peticiones y conviene distinguirlas, porque el trabajo y el precio no son el mismo.",
          "La sustitución de un cuadro antiguo es lo más frecuente con diferencia. Hay una instalación en servicio, con su cuadro de fusibles o con un diferencial único, y se cambia por uno normalizado aprovechando el cableado existente cuando está en condiciones. Es el trabajo de una mañana del que hablamos arriba.",
          "El montaje de un cuadro nuevo aparece en obra nueva, en una reforma integral o cuando se crea un suministro que antes no existía, como el de un local que se segrega. Aquí no hay nada que aprovechar. Se diseña el reparto de circuitos desde cero en función de lo que va a haber, y lleva boletín porque la instalación es nueva.",
          "La ampliación es la opción intermedia y la más barata. El cuadro actual está bien, tiene sitio libre en el carril y solo hay que añadir el circuito que falta. Si tu caso es este te lo diremos, aunque nos dé menos trabajo.",
        ],
      },
      {
        h2: "Cuadros de comunidad y de local",
        parrafos: [
          "No todo son viviendas. Una parte importante de los cuadros que renovamos son de servicios comunes y de locales de actividad, y ahí las exigencias cambian.",
          "En comunidades, el cuadro de servicios comunes suele alimentar alumbrado de escalera y párking, ascensor, grupo de presión, bomba de achique, antena y portero. El problema clásico es que ha ido creciendo por acumulación durante décadas, sin que nadie replanteara el conjunto, y acaba siendo un cuadro donde nadie sabe qué es cada cosa. Lo rehacemos ordenado y rotulado, y entregamos al administrador el esquema por escrito.",
          "En locales, lo determinante es separar por actividad: cocina, cámaras frigoríficas, climatización y sala tienen que ir independientes, y las cámaras deben quedar en un circuito que no se pueda desconectar por error al cerrar. Si el local necesita legalización para su licencia de actividad, el certificado va incluido y lo tramitamos nosotros.",
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
          "Si se modifica la instalación puede requerir CIE, sobre todo si aprovechas para subir potencia. Trabajamos con instaladores habilitados, así que se firma en el mismo trabajo.",
      },
      {
        pregunta: "¿Merece la pena añadir protección contra sobretensiones?",
        respuesta:
          "Si tienes electrodomésticos de gama media-alta, ordenadores o teletrabajas, sí: una sobretensión de red puede quemarlos y el protector cuesta mucho menos que reponerlos.",
      },
      {
        pregunta: "¿Hacéis sustitución de cuadros eléctricos antiguos?",
        respuesta:
          "Es el trabajo que más hacemos. Cuadros de fusibles de porcelana, cuadros con un solo diferencial para toda la casa y cuadros llenos que no admiten un circuito más. Se sustituyen por uno normalizado, con un magnetotérmico por circuito, y todo rotulado antes de cerrar.",
      },
      {
        pregunta: "¿Y montaje de cuadros en obra nueva o reforma integral?",
        respuesta:
          "También. En obra el reparto de circuitos se diseña desde cero según lo que vaya a haber en la vivienda o el local, y la instalación se legaliza con su certificado. Si eres reformista o constructor, coordinamos directamente con la obra.",
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
    h1: "Instalación de punto de carga para coche eléctrico en Barcelona",
    heroSub:
      "Instalamos tu cargador en garaje privado o plaza de comunidad: estudio, instalación, legalización y boletín. Todo con precio cerrado.",
    metaTitle: "Punto de carga para coche eléctrico en Barcelona",
    metaDescription:
      "Instalación de puntos de carga para coche eléctrico en Barcelona: garajes privados y comunidades, con legalización y CIE.",
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
          "Tramitamos la legalización de la instalación y te gestionamos el boletín. En comunidades, te guiamos con la notificación a la finca.",
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
      {
        h2: "Tres escenarios, tres instalaciones distintas",
        parrafos: [
          "No cuesta ni tarda lo mismo instalar un punto de carga en una casa que en la plaza treinta y dos de un párking comunitario. Estos son los tres casos que hacemos y qué implica cada uno.",
          "En vivienda unifamiliar con garaje propio es la instalación más sencilla que existe. El cuadro está a pocos metros, se tira una línea dedicada con sus protecciones y se legaliza. Se resuelve en una jornada, y rara vez hay que ampliar potencia si se programa la carga nocturna.",
          "En plaza de párking comunitario el trabajo está en el recorrido. Hay que llevar la línea desde tu contador, normalmente centralizado en planta baja, hasta tu plaza, atravesando zona común. Requiere comunicación previa a la comunidad, que no es lo mismo que pedir permiso, y acordar el trazado con el administrador para que quede ordenado.",
          "En flota de empresa cambia la escala. Varios puntos simultáneos, gestión de carga entre vehículos para no disparar la potencia contratada, identificación de usuario para imputar consumos y, casi siempre, suministro trifásico. Aquí el estudio previo es la mitad del trabajo.",
        ],
      },
      {
        h2: "Qué potencia de carga te conviene de verdad",
        parrafos: [
          "La tentación es contratar el cargador más potente disponible, y en la mayoría de casos es dinero mal gastado. La pregunta correcta no es cuánta potencia admite el equipo, sino cuántas horas tienes el coche parado.",
          "Si el coche duerme en casa entre diez y doce horas cada noche, un punto de carga doméstico convencional cubre de sobra el kilometraje diario de casi cualquier conductor urbano. Subir a mayor potencia solo acorta un tiempo que de todas formas ibas a pasar durmiendo, y en cambio puede obligarte a ampliar la potencia contratada y pagar más término fijo los doce meses del año.",
          "La potencia alta tiene sentido en casos concretos: vehículos con baterías grandes y uso intensivo, flotas que rotan, viviendas con dos coches eléctricos, o cuando el coche solo puede cargar en franjas cortas.",
          "En el estudio previo miramos tu kilometraje real, tu potencia contratada, tu curva de consumo y las horas que el coche está parado. Con eso te decimos qué equipo tiene sentido, sin casarnos con ninguna marca y sin venderte potencia que no vas a usar.",
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
          "Sí, siempre. Se firma el CIE y registramos la instalación: lo necesitarás para la garantía, el seguro y las ayudas públicas.",
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
    h1: "Subir la potencia de la luz en Barcelona, sin líos",
    heroSub:
      "Si la luz salta cuando enciendes dos aparatos a la vez, necesitas más potencia. Revisamos tu instalación, te gestionamos el boletín si hace falta y te acompañamos en el trámite.",
    heroImage: "/img/hero-potencia.jpg",
    metaTitle: "Subir potencia de luz en Barcelona | Boletín incluido",
    metaDescription:
      "Subida de potencia contratada en Barcelona. Revisión de instalación, boletín (CIE) y acompañamiento en el trámite con tu comercializadora.",
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
          "Para subir potencia, la comercializadora suele exigir CIE si tu boletín es antiguo. Te lo gestionamos en 24-48h.",
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
          "Antes de pagar más cada mes en el término fijo, compruébalo. Un magnetotérmico envejecido o un cuadro mal repartido dan los mismos síntomas que la falta de potencia. En la visita medimos tu consumo real y te decimos con datos si hay que subir potencia, ajustar el cuadro o las dos cosas.",
        ],
      },
      {
        h2: "Cuando tu instalación no admite la potencia que quieres",
        parrafos: [
          "Esta es la conversación incómoda del servicio, y preferimos tenerla antes de empezar que a mitad del trámite.",
          "La potencia que puedes contratar no la decides tú ni tu comercializadora: la marca lo que soporta tu instalación. Y en pisos anteriores a los años ochenta es frecuente que la instalación no dé para lo que el propietario quiere contratar. Los tres motivos habituales son la ausencia de toma de tierra, secciones de cable insuficientes para la nueva carga y un cuadro que no admite los circuitos que exige el reglamento actual.",
          "Cuando eso ocurre hay que adecuar la instalación antes de emitir el boletín, y ese trabajo se presupuesta aparte y por escrito. No lo metemos escondido dentro del precio del boletín, porque son dos cosas distintas y tienes derecho a decidir sobre cada una.",
          "Lo que sí hacemos siempre es decírtelo en la primera visita, con lo que cuesta y por qué. Si prefieres no hacerlo, el diagnóstico es tuyo y puedes llevártelo a otra empresa: no te cobramos por la información.",
        ],
      },
      {
        h2: "Los casos que más atendemos",
        parrafos: [
          "Casi todas las subidas de potencia que hacemos en Barcelona y el Vallès responden a uno de estos cuatro escenarios, y cada uno tiene lo suyo:",
          "La reforma de cocina que pasa de gas a inducción es el más frecuente con diferencia. La inducción tiene una demanda alta y exige circuito propio, así que casi siempre arrastra línea nueva, cuadro y boletín además de la subida.",
          "La instalación de climatización o aerotermia, sobre todo cuando se sustituye una calefacción de gas. Aquí lo importante es dimensionar bien: los equipos modernos arrancan de forma progresiva y consumen menos de lo que la gente teme.",
          "El punto de carga para el coche eléctrico, donde muchas veces la subida se puede evitar con un equilibrador de carga y programando la recarga nocturna. Lo estudiamos antes de proponerte pagar más término fijo cada mes.",
          "Y el alta de suministro en un piso que llevaba tiempo vacío, donde la potencia heredada suele ser la mínima de hace décadas y la comercializadora pide boletín nuevo de todos modos.",
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
          "No siempre. Si tu boletín tiene menos de 20 años y la instalación admite la nueva potencia, puede no hacer falta. Si te lo piden, te lo gestionamos en 24-48h.",
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
    h1: "Electricistas para empresas y comunidades en Barcelona",
    heroSub:
      "Mantenimiento eléctrico, averías y reformas para comunidades de vecinos, oficinas, locales y hostelería. Un mismo equipo, respuesta rápida y factura con IVA desglosado.",
    heroImage: "/img/hero-empresas.jpg",
    metaTitle: "Electricistas para empresas y comunidades en Barcelona",
    metaDescription:
      "Servicio eléctrico para empresas y comunidades en Barcelona: mantenimientos, urgencias y reformas. Visita técnica y propuesta por escrito.",
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
      {
        h2: "Qué incluye un contrato de mantenimiento",
        parrafos: [
          "El mantenimiento eléctrico se vende muchas veces como una cuota sin contenido definido. El nuestro se firma con un alcance concreto y por escrito, para que sepas exactamente qué estás pagando:",
        ],
        bullets: [
          "Revisiones periódicas programadas, con la frecuencia que fijemos según tu instalación",
          "Termografía del cuadro general para detectar puntos calientes antes de que provoquen una avería",
          "Medición de aislamiento y verificación de disparo real de los diferenciales",
          "Revisión del alumbrado de emergencia y su autonomía, que es lo primero que mira una inspección",
          "Informe escrito tras cada visita, con lo revisado, lo corregido y lo que conviene prever",
          "Prioridad de respuesta en urgencias para clientes con contrato",
          "Interlocutor fijo: hablas siempre con la misma persona, que ya conoce tu instalación",
        ],
      },
      {
        h2: "Comunidades: cómo se lleva un trabajo a junta",
        parrafos: [
          "Trabajamos con bastantes administradores de fincas y sabemos dónde se atasca todo: una junta no puede aprobar un gasto que no está definido, así que los problemas se posponen año tras año mientras la avería sigue ahí.",
          "Nuestra forma de resolverlo es dar al administrador un documento que se pueda votar. Visita técnica, informe de qué está fallando y por qué, y presupuesto cerrado desglosado por partidas, separando lo que es urgente de lo que puede esperar al ejercicio siguiente. Si hay varias soluciones posibles, las ponemos con su coste para que la junta elija con criterio.",
          "Los encargos más habituales en comunidades son la renovación del alumbrado común a LED con detección de presencia, la puesta al día del cuadro de servicios comunes, la revisión de la línea de ascensor y bombas, y la preinstalación de recarga en garajes. El del alumbrado es el que más fácil se aprueba, porque el ahorro se nota en el primer recibo.",
        ],
      },
      {
        h2: "Facturación y documentación",
        parrafos: [
          "Para una empresa o una comunidad, el trabajo no termina cuando la instalación funciona: termina cuando el papeleo está en orden. Es la parte que más quejas genera con otros proveedores y a la que damos la misma importancia que a la reparación.",
          "Facturamos siempre con CIF e IVA desglosado, con albarán firmado de cada intervención y con el detalle suficiente para que tu gestoría o tu administrador puedan imputarlo sin llamarnos a preguntar. Los trabajos que lo requieren salen con su certificado de instalación tramitado ante Indústria, y los que afectan a licencias de actividad con la documentación técnica que pide el ayuntamiento.",
          "Si tienes varias sedes, locales o fincas, agrupamos la facturación como te convenga y mantenemos un histórico por emplazamiento, de forma que cuando llames por una avería ya sabemos qué se hizo ahí la última vez.",
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
