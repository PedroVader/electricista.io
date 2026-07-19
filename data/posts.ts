import type { Post } from "./tipos";

/**
 * Artículos del blog (fase 2 del SPEC). Objetivo: cola larga informacional
 * que alimenta de autoridad a las páginas de servicio. Sin importes, nunca.
 */

export const posts: Post[] = [
  {
    slug: "por-que-salta-el-diferencial",
    titulo: "¿Por qué salta el diferencial? Causas y qué hacer",
    descripcion:
      "El diferencial salta por algo: derivación, humedad o un aparato dañado. Te contamos cómo localizar la causa y cuándo llamar al electricista.",
    fecha: "2026-07-19",
    resumen:
      "El diferencial no salta porque sí: te está avisando de una fuga de corriente. La buena noticia es que con tres comprobaciones puedes acotar la causa antes de llamar a nadie.",
    secciones: [
      {
        h2: "Qué es el diferencial y por qué salta",
        parrafos: [
          "El diferencial es el interruptor del cuadro que te protege a ti, no a la instalación: detecta fugas de corriente y corta el suministro antes de que la fuga pase por una persona. Cuando salta, es que ha detectado una derivación: corriente escapándose por donde no debe.",
          "Las causas más habituales, por orden de frecuencia:",
        ],
        bullets: [
          "Un electrodoméstico dañado: lavadora, lavavajillas, termo y horno son los sospechosos habituales",
          "Humedad en cajas, enchufes exteriores o en la pared tras una gotera",
          "Cableado envejecido con el aislamiento cuarteado",
          "Un diferencial viejo que dispara por desgaste, sin fuga real",
        ],
      },
      {
        h2: "Cómo acotar la causa en 5 minutos",
        parrafos: [
          "1. Baja todos los magnetotérmicos (los interruptores pequeños) y sube el diferencial. Si se mantiene, la fuga está en algún circuito.",
          "2. Sube los magnetotérmicos de uno en uno. El circuito que haga saltar el diferencial es el que tiene la fuga.",
          "3. Si el circuito culpable es el de enchufes, desenchufa todo lo conectado a él y vuelve a probar. Si ya no salta, ve enchufando aparato a aparato hasta dar con el dañado.",
          "Si el diferencial salta con todos los magnetotérmicos bajados, o el circuito culpable es el de luces o el de un electrodoméstico fijo, la avería está en la instalación y toca medirla con instrumentos.",
        ],
      },
      {
        h2: "Cuándo llamar al electricista",
        parrafos: [
          "Llama si el diferencial salta de forma intermitente sin patrón claro, si salta de noche o con lluvia (huele a humedad en la instalación), si no puedes dejarlo subido ni con todo desconectado, o si al tocar un electrodoméstico notas cosquilleo. Ese último caso es serio: deja de usar el aparato ya.",
          "Una derivación no se arregla sola: el aislamiento dañado va a más y lo que hoy es una molestia puede acabar en un cable quemado. Localizarla con medición es trabajo de una visita en la mayoría de casos.",
        ],
      },
    ],
    faqs: [
      {
        pregunta: "¿Puedo dejar el diferencial subido a la fuerza?",
        respuesta:
          "No. Si no aguanta subido es que la fuga sigue ahí, y anular o puentear un diferencial te deja sin la única protección contra contactos eléctricos. Es la peor idea posible.",
      },
      {
        pregunta: "¿Cuánto cuesta encontrar una derivación?",
        respuesta:
          "El diagnóstico tiene un precio cerrado que te decimos por teléfono antes de ir, y la reparación se presupuesta por escrito antes de tocar nada.",
      },
    ],
    relacionados: ["averias-electricas", "electricistas-urgentes-24-horas"],
  },
  {
    slug: "boletin-electrico-guia",
    titulo: "Boletín eléctrico (CIE): la guía sin rodeos",
    descripcion:
      "Qué es el boletín eléctrico, cuándo es obligatorio, quién puede firmarlo y cuánto tarda. Guía práctica para altas de luz y subidas de potencia.",
    fecha: "2026-07-19",
    resumen:
      "Si tu comercializadora te pide un boletín, esto es lo que necesitas saber: qué es exactamente, en qué casos es obligatorio y por qué solo puede firmarlo un instalador habilitado.",
    secciones: [
      {
        h2: "Qué es exactamente el boletín",
        parrafos: [
          "El boletín eléctrico, oficialmente CIE (Certificado de Instalación Eléctrica), es el documento que acredita que una instalación cumple el reglamento de baja tensión. Lo firma un instalador habilitado y se registra ante Indústria. Sin él, la comercializadora no tramita ciertas gestiones.",
          "En Cataluña oirás hablar de boletín azul y boletín blanco: el azul es un reconocimiento de una instalación existente que no se ha modificado; el blanco es el CIE de una instalación nueva o modificada. Tu comercializadora te dirá cuál exige para tu gestión.",
        ],
      },
      {
        h2: "Cuándo es obligatorio",
        parrafos: ["Los casos que nos llegan cada semana:"],
        bullets: [
          "Alta de luz en un piso o local que lleva tiempo sin suministro",
          "Subida de potencia contratada por encima de lo que admite tu boletín actual",
          "Reforma que modifica la instalación eléctrica",
          "Instalación con boletín de más de 20 años que la comercializadora rechaza",
          "Cambio de uso del inmueble, por ejemplo de local a vivienda",
        ],
      },
      {
        h2: "Quién puede firmarlo y cuánto tarda",
        parrafos: [
          "Solo un instalador habilitado inscrito en el registro de empresas instaladoras. Ni un técnico sin habilitación, ni el administrador, ni un boletín comprado por internet sin revisión real: Indústria y la comercializadora los rechazan, y firmar sin revisar es ilegal.",
          "Con la instalación en condiciones, la revisión y la emisión se resuelven en 24-48 horas. Si la instalación no pasa, el instalador debe decirte exactamente qué falla y presupuestarte la adaptación antes de tocar nada. Así lo hacemos nosotros en toda el área de Barcelona.",
        ],
      },
    ],
    faqs: [
      {
        pregunta: "¿El boletín caduca?",
        respuesta:
          "No tiene caducidad formal, pero en la práctica las comercializadoras rechazan boletines de más de 20 años al hacer gestiones. Si el tuyo es de esa época, cuenta con renovarlo.",
      },
      {
        pregunta: "¿Qué pasa si mi instalación no pasa la revisión?",
        respuesta:
          "Te decimos qué falla exactamente y te damos presupuesto cerrado de la adaptación. El diagnóstico no te obliga a hacer la obra con nosotros.",
      },
    ],
    relacionados: ["boletin-electrico", "subir-potencia-luz"],
  },
  {
    slug: "senales-cuadro-electrico-anticuado",
    titulo: "5 señales de que tu cuadro eléctrico está anticuado",
    descripcion:
      "Fusibles, un solo diferencial, saltos frecuentes: las señales de que tu cuadro eléctrico necesita renovación y qué implica cambiarlo.",
    fecha: "2026-07-19",
    resumen:
      "El cuadro es el guardián de tu instalación, y buena parte de los que vemos cada semana en pisos de Barcelona y el Vallès llevan décadas jubilables. Estas son las cinco señales claras.",
    secciones: [
      {
        h2: "Las 5 señales",
        parrafos: ["Si reconoces una o más, tu cuadro pide relevo:"],
        bullets: [
          "Todavía tiene fusibles de cerámica, los clásicos plomos: tecnología de hace 50 años",
          "No hay diferencial, o hay uno solo para toda la vivienda",
          "Salta entero al usar dos electrodomésticos a la vez, sin distinguir circuitos",
          "El botón de prueba del diferencial no dispara nada al pulsarlo",
          "Hace ruido, huele raro o alguna tapa está caliente al tacto",
        ],
      },
      {
        h2: "Qué te da un cuadro moderno",
        parrafos: [
          "Un cuadro actual separa la vivienda en circuitos con su magnetotérmico cada uno: si falla la lavadora, no se apaga toda la casa. El diferencial protege contra contactos, y si añades protección contra sobretensiones, tus electrodomésticos y equipos quedan cubiertos frente a picos de red, que en verano no son raros.",
          "El cambio completo se hace en una mañana en la mayoría de viviendas: se corta la luz unas horas, se sustituye el cuadro, se rotula cada circuito y se prueba todo contigo delante. Si aprovechas para subir potencia o el cambio afecta a la instalación, puede requerir boletín, que emitimos en el mismo trabajo.",
        ],
      },
    ],
    faqs: [
      {
        pregunta: "¿Es obligatorio cambiar un cuadro con fusibles?",
        respuesta:
          "No hay una obligación general de renovarlo si no tocas la instalación, pero te deja sin protecciones modernas y bloqueará cualquier gestión que requiera boletín. En cuanto reformes o subas potencia, tocará actualizarlo.",
      },
      {
        pregunta: "¿Cuánto cuesta cambiar el cuadro?",
        respuesta:
          "Depende de los circuitos y del estado de la instalación. Mándanos una foto del cuadro y te damos precio cerrado por escrito en menos de 2 horas.",
      },
    ],
    relacionados: ["cambio-cuadro-electrico", "averias-electricas"],
  },
  {
    slug: "como-subir-potencia-luz",
    titulo: "Cómo subir la potencia de la luz paso a paso",
    descripcion:
      "Guía práctica para subir la potencia contratada: cuándo hace falta, qué te pedirá la comercializadora y qué papel juega el boletín.",
    fecha: "2026-07-19",
    resumen:
      "Salta el ICP cuando enciendes el horno y la vitro a la vez: te falta potencia. Antes de llamar a tu comercializadora, conviene saber qué te van a pedir y en qué orden hacer las cosas.",
    secciones: [
      {
        h2: "Primero: comprueba que de verdad es la potencia",
        parrafos: [
          "No todos los cortes por consumo son falta de potencia. Un magnetotérmico envejecido o un cuadro mal repartido dan síntomas idénticos. La comprobación honesta pasa por medir tu consumo real con todo funcionando: si el consumo simultáneo supera lo contratado, es potencia; si no, es el cuadro. Subir potencia sin comprobarlo es pagar más término fijo cada mes para nada.",
        ],
      },
      {
        h2: "Los pasos del trámite",
        parrafos: [
          "1. Revisa qué potencia admite tu instalación: está en tu boletín. Si tiene más de 20 años o no aparece, la comercializadora te pedirá uno nuevo.",
          "2. Si hace falta boletín, un instalador habilitado revisa la instalación y emite el CIE. Nuestra parte se resuelve en 24-48 horas.",
          "3. Pide el cambio a tu comercializadora con el boletín adjunto. Ella lo traslada a la distribuidora, que aplica el cambio en unos días o un par de semanas.",
          "4. La distribuidora cobra derechos por la ampliación en tu factura: es un concepto regulado, no del electricista.",
        ],
      },
      {
        h2: "Casos típicos en los que hará falta boletín",
        parrafos: [""],
        bullets: [
          "Pisos antiguos con boletín de hace décadas, lo más común en Barcelona",
          "Cocinas que pasan de gas a eléctrica o inducción",
          "Instalación de aerotermia o aire acondicionado por conductos",
          "Punto de carga para coche eléctrico en la plaza de garaje",
        ],
      },
    ],
    faqs: [
      {
        pregunta: "¿Puedo subir la potencia sin boletín?",
        respuesta:
          "Solo si tu boletín vigente ya cubre la nueva potencia y la comercializadora lo acepta. En pisos con boletines antiguos, lo normal es que pidan uno nuevo.",
      },
      {
        pregunta: "¿Cuánto tarda todo el proceso?",
        respuesta:
          "Nuestra parte, 24-48 horas. El resto depende de la comercializadora y la distribuidora: entre unos días y un par de semanas.",
      },
    ],
    relacionados: ["subir-potencia-luz", "boletin-electrico"],
  },
  {
    slug: "cargador-coche-electrico-comunidad",
    titulo: "Cargador de coche eléctrico en una comunidad: pasos y normativa",
    descripcion:
      "Instalar un punto de carga en tu plaza de garaje comunitaria es más fácil de lo que crees: no necesitas permiso de la junta, solo comunicarlo.",
    fecha: "2026-07-19",
    resumen:
      "La duda que frena a más gente no es técnica sino de convivencia: ¿me dejará la comunidad? La respuesta corta es que no necesitas que te dejen. Te contamos el proceso completo.",
    secciones: [
      {
        h2: "No necesitas permiso, solo comunicarlo",
        parrafos: [
          "La Ley de Propiedad Horizontal es clara: para instalar un punto de carga de uso privado en tu plaza, basta con comunicarlo previamente a la comunidad (al presidente o al administrador). No hace falta votación ni aprobación de la junta. La comunidad puede darse por enterada, y punto.",
          "Nosotros te preparamos el escrito de comunicación y resolvemos las dudas técnicas del administrador si las hay. Es parte del servicio.",
        ],
      },
      {
        h2: "Cómo se instala técnicamente",
        parrafos: [
          "El cargador se conecta a tu propio contador, no al de la comunidad: tú pagas tu consumo y nadie más se ve afectado. Desde tu contador se tiende una línea dedicada hasta la plaza, con sus protecciones propias en un pequeño cuadro.",
          "La instalación se legaliza siempre con su CIE: lo necesitarás para la garantía del cargador, para el seguro y para cualquier ayuda pública. Una instalación de cargador sin legalizar es un problema esperando fecha.",
        ],
      },
      {
        h2: "¿Y la potencia? ¿Tendré que ampliar?",
        parrafos: [
          "No siempre. Los cargadores actuales regulan la potencia de carga y pueden programarse para cargar de noche, cuando la casa consume poco. En el estudio previo calculamos si tu potencia actual da para el coche o si conviene ampliarla, y en ese caso el trámite y el boletín van incluidos en el mismo trabajo.",
        ],
      },
    ],
    faqs: [
      {
        pregunta: "¿La comunidad puede negarse?",
        respuesta:
          "No, si es un punto de uso privado en tu plaza: la ley solo exige comunicación previa. Otra cosa son instalaciones compartidas o en zonas comunes, que sí pasan por junta.",
      },
      {
        pregunta: "¿Qué cargador me conviene?",
        respuesta:
          "Depende de tu coche, tu potencia y tus kilómetros diarios. En el estudio previo te recomendamos potencia de carga y modelo, sin casarte con ninguna marca.",
      },
    ],
    relacionados: [
      "instalacion-punto-de-carga-coche-electrico",
      "subir-potencia-luz",
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
