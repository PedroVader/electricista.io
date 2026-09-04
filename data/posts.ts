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
          "El diferencial es el interruptor del cuadro que te protege a ti, no a la instalación. Detecta fugas de corriente y corta el suministro antes de que esa fuga pase por una persona. Si ha saltado, ha visto una derivación. Es decir, corriente escapándose por donde no debe.",
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
        h2: "Diferencial, magnetotérmico e ICP: quién es quién",
        parrafos: [
          "Antes de buscar la causa, mira qué te ha saltado exactamente. La gente dice «me ha saltado la luz» para tres cosas distintas, y cada una significa algo diferente.",
          "El diferencial es el interruptor ancho, con un botón de prueba marcado con una T. Protege a las personas y salta cuando hay fuga. Los magnetotérmicos son los estrechos que tiene al lado. Protegen el cableado y saltan cuando ese circuito va sobrecargado o hay un cortocircuito. El ICP limita la potencia total que tienes contratada. En los contadores digitales ya no es una pieza aparte del cuadro, va dentro del propio contador.",
          "La regla rápida: si salta el ancho, tienes una fuga. Si salta uno estrecho, ese circuito concreto va sobrecargado o tiene un cortocircuito. Si se va toda la casa al encender el horno con la vitro puesta, te falta potencia contratada y esto no es una avería.",
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
        h2: "Salta solo cuando llueve o hay humedad",
        parrafos: [
          "Es uno de los patrones más reconocibles y también uno de los más frecuentes en Barcelona, donde la humedad ambiental es alta buena parte del año. Si tu diferencial salta los días de lluvia, por la mañana temprano o después de ducharte, casi siempre hay agua llegando a un punto de la instalación donde no debería.",
          "Dónde lo encontramos más a menudo. Cajas de derivación en paredes que dan a un patio de luces o al exterior. Enchufes de terraza y balcón sin tapa estanca. Focos empotrados en techos de baño mal ventilados. Farolas y tomas de jardín. Y muchas veces el rastro de una gotera antigua que nadie relacionó nunca con la electricidad.",
          "La humedad no rompe nada de golpe. Va degradando el aislamiento poco a poco, y por eso el síntoma empieza siendo un salto suelto un día de tormenta y en unos meses ya es semanal. Cogido pronto se arregla cambiando el tramo o el mecanismo afectado. Si lo dejas correr, acabas rehaciendo el circuito entero.",
        ],
      },
      {
        h2: "Salta de madrugada y no había nadie usando nada",
        parrafos: [
          "Que salte con la casa dormida despista mucho, pero tiene explicación. De noche siguen funcionando aparatos que no ves: el termo eléctrico calentando, la nevera y el congelador arrancando el compresor, la caldera, el aire acondicionado en modo espera, el riego programado o una bomba de achique.",
          "El termo es el primer sospechoso, con diferencia. Su resistencia trabaja sumergida en agua, y cuando el aislamiento se degrada empieza a fugar justo al activarse, que casi siempre es de madrugada. Compruébalo: desconecta el magnetotérmico del termo una noche y mira si el diferencial aguanta.",
          "El segundo sospechoso es el frigorífico, sobre todo si tiene años. El arranque del compresor genera un pico que un diferencial ya desgastado no perdona.",
        ],
      },
      {
        h2: "Qué no debes hacer nunca",
        parrafos: [
          "Hay tres reacciones muy comunes que empeoran el problema, y las vemos cada semana:",
        ],
        bullets: [
          "Sujetar la palanca del diferencial con cinta o un objeto para que no baje: anulas la única protección que tienes contra una electrocución",
          "Sustituir el diferencial por uno de mayor sensibilidad para que «no moleste»: la fuga sigue ahí y ahora nadie la vigila",
          "Puentear el circuito problemático en el cuadro para seguir teniendo luz mientras «ya lo miraré»",
          "Ignorar el cosquilleo al tocar la lavadora, el horno o un grifo: eso ya es corriente pasando por tu cuerpo",
        ],
      },
      {
        h2: "Cuándo llamar al electricista",
        parrafos: [
          "Llama si el diferencial salta de forma intermitente sin patrón claro, si salta de noche o con lluvia (huele a humedad en la instalación), si no puedes dejarlo subido ni con todo desconectado, o si al tocar un electrodoméstico notas cosquilleo. Ese último caso es serio: deja de usar el aparato ya.",
          "Una derivación no se arregla sola. El aislamiento dañado va a más, y lo que hoy es una molestia acaba en un cable quemado. Localizarla con medición es trabajo de una visita.",
          "Lo que hacemos al llegar es medir, no adivinar. Con un telurómetro y un medidor de aislamiento se comprueba circuito por circuito dónde se está yendo la corriente, y eso da un resultado numérico, no una opinión. En la mayoría de viviendas la localización se resuelve en la misma visita, y salimos de ahí con la causa identificada y el presupuesto cerrado de la reparación.",
        ],
      },
      {
        h2: "Diferenciales superinmunizados y de rearme automático",
        parrafos: [
          "Si tu diferencial salta por microfugas que no llegan a ser un peligro real (algo típico cuando conviven muchos equipos electrónicos, variadores o luminarias LED baratas), existe el diferencial superinmunizado. Filtra las corrientes de alta frecuencia que hacen disparar a un diferencial convencional sin motivo, manteniendo intacta la protección frente a las fugas que sí importan. Es la solución correcta para ese caso concreto; no es una forma de tapar una avería.",
          "El de rearme automático va un paso más allá: tras un disparo comprueba si la fuga persiste y, si no, vuelve a dar servicio solo. Tiene todo el sentido en una segunda residencia, en un local con cámaras frigoríficas o en una comunidad con ascensor y bomba de agua, donde un corte a deshora sale caro. En una vivienda habitual rara vez compensa.",
          "Ojo con el orden: primero se localiza y se corrige la fuga, y después, si procede, se cambia el aparato. Al revés es comprar tranquilidad falsa.",
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
      {
        pregunta: "¿Cada cuánto debo pulsar el botón de prueba del diferencial?",
        respuesta:
          "Una vez al mes. Pulsa la T y el diferencial debe dispararse en el acto; luego lo vuelves a subir. Si no dispara, el aparato está averiado y no te protege, aunque a simple vista parezca que todo funciona. Es la comprobación de seguridad más barata que existe y casi nadie la hace.",
      },
      {
        pregunta: "El diferencial salta y no vuelve a subir. ¿Qué hago?",
        respuesta:
          "Baja todos los magnetotérmicos y prueba a subir el diferencial. Si con todo bajado sigue sin aguantar, la fuga está antes del cuadro o el propio diferencial está dañado: ahí ya toca llamarnos. Si aguanta, ve subiendo los magnetotérmicos de uno en uno para identificar el circuito. Mientras tanto puedes dejar sin servicio solo el circuito problemático y conservar la luz en el resto de la casa.",
      },
      {
        pregunta: "¿Puede saltar por culpa de la instalación de un vecino?",
        respuesta:
          "En una vivienda con instalación independiente, no: cada abonado tiene su propio circuito desde el contador. Sí puede ocurrir en instalaciones antiguas mal segregadas o cuando hay tomas compartidas en zonas comunes, algo que todavía encontramos en fincas viejas del Eixample y Ciutat Vella. Se comprueba midiendo.",
      },
      {
        pregunta: "¿Es normal que salte al enchufar el cargador del coche?",
        respuesta:
          "No debería. Un punto de carga bien instalado lleva su propia línea y su protección dedicada, incluida la que exige el reglamento para corriente continua. Si te salta el diferencial general al cargar, lo más probable es que el cargador esté colgado de un circuito que no le corresponde.",
      },
    ],
    relacionados: ["averias-electricas", "electricistas-urgentes-24-horas"],
  },
  {
    slug: "boletin-electrico-guia",
    titulo: "Boletín eléctrico (CIE): la guía sin rodeos",
    descripcion:
      "Qué es el boletín eléctrico, cuándo es obligatorio, quién puede firmarlo y cuánto tarda. Guía práctica para altas de luz y subidas de potencia.",
    fecha: "2026-07-26",
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
          "Dar de alta la luz en una vivienda o local con el suministro cortado desde hace tiempo",
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
          "Con la instalación en condiciones, la revisión y la emisión se resuelven en 24-48 horas. Si la instalación no pasa, el instalador debe decirte exactamente qué falla y presupuestarte la adaptación antes de tocar nada. Así se trabaja con nosotros en toda el área de Barcelona.",
        ],
      },
      {
        h2: "Qué se revisa exactamente antes de firmar",
        parrafos: [
          "Un boletín no es un papel que se rellena. Es el resultado de una inspección con mediciones. Esto es lo que se comprueba en una vivienda estándar, y te interesa saberlo para distinguir a quien hace el trabajo de quien te vende una firma:",
        ],
        bullets: [
          "Medición de la resistencia de la toma de tierra, que debe estar dentro de los valores del reglamento",
          "Medición del aislamiento de cada circuito, para detectar fugas que aún no dan síntomas",
          "Comprobación de que existe diferencial y de que dispara de verdad al probarlo",
          "Que los magnetotérmicos se corresponden con la sección real del cable de cada circuito",
          "Continuidad del conductor de protección en los enchufes: que la toma de tierra llegue de verdad a donde dice llegar",
          "Estado del cuadro, de las cajas de derivación y de los mecanismos accesibles",
          "Que la potencia que se quiere contratar sea compatible con la instalación existente",
        ],
      },
      {
        h2: "Los motivos por los que una instalación no pasa",
        parrafos: [
          "Cuando una revisión no sale adelante, casi siempre es por una de estas cuatro razones, y ninguna es rara en el parque de vivienda de Barcelona y el Vallès.",
          "La primera y más frecuente es la falta de toma de tierra. Muchos pisos anteriores a los ochenta nunca la tuvieron, y sin ella no hay boletín posible. La segunda es un cuadro obsoleto, con fusibles de porcelana o con un único diferencial para toda la vivienda. La tercera son secciones de cable insuficientes para la potencia que se quiere contratar, y aparece siempre que alguien pasa de cocina de gas a inducción. La cuarta son las modificaciones caseras acumuladas durante años. Regletas fijas, empalmes sin caja, circuitos alargados a ojo.",
          "En todos esos casos te decimos qué falla, qué implica corregirlo y cuánto cuesta, por escrito. El diagnóstico no te obliga a hacer la adaptación con nosotros, y el presupuesto de la adaptación va siempre separado del boletín para que veas qué pagas por cada cosa.",
        ],
      },
      {
        h2: "Boletín azul y boletín blanco: cuál te van a pedir",
        parrafos: [
          "Es la confusión más habitual y merece la pena aclararla, porque pedir el que no es te hace perder días.",
          "El azul, formalmente un certificado de reconocimiento de instalación, sirve cuando la instalación ya existe, no se ha modificado y solo hay que acreditar que sigue siendo apta. Es el caso típico del alta de luz en un piso que llevaba tiempo vacío.",
          "El blanco es el CIE propiamente dicho y se emite cuando la instalación es nueva o se ha modificado: una reforma, un cambio de cuadro, una subida de potencia que obliga a tocar circuitos, un punto de carga. Si has hecho obra, es el que te van a pedir.",
          "En la práctica hay un atajo útil: llama a tu comercializadora y pregunta literalmente qué documento necesitan para tu gestión. Te dirán el nombre exacto y te ahorras el viaje de vuelta.",
        ],
      },
      {
        h2: "Qué documentación te queda en la mano",
        parrafos: [
          "Al terminar deberías tener tres cosas, y si te falta alguna, reclámala:",
        ],
        bullets: [
          "El certificado con el número de registro del instalador habilitado que lo firma",
          "El sello o justificante de la tramitación ante Indústria, que es lo que le da validez frente a terceros",
          "La memoria técnica de diseño cuando la instalación lo requiere por potencia o por tipo de local",
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
      {
        pregunta: "¿Puedo comprar un boletín por internet sin que venga nadie?",
        respuesta:
          "Encontrarás quien te lo venda, pero lo que te vende es un documento falso. Firmar un certificado sin haber inspeccionado y medido la instalación es ilegal, y la responsabilidad recae sobre quien firma. Para ti el riesgo es doble. Que Indústria o la comercializadora lo rechacen y hayas tirado el dinero, y que tu seguro se desentienda si algún día hay un incendio de origen eléctrico.",
      },
      {
        pregunta: "¿Vale el boletín de la instalación de gas o del agua?",
        respuesta:
          "No. Cada instalación tiene su propio certificado y su propio instalador habilitado. El CIE es exclusivo de la instalación eléctrica.",
      },
      {
        pregunta: "He perdido mi boletín. ¿Puedo pedir una copia?",
        respuesta:
          "Si el original se tramitó ante Indústria queda registrado, y normalmente se puede recuperar una copia. Si no hay rastro o es muy antiguo, sale más a cuenta emitir uno nuevo. Un boletín de más de veinte años te lo van a rechazar igualmente en cuanto hagas cualquier gestión.",
      },
      {
        pregunta: "¿Necesito boletín para vender o alquilar un piso?",
        respuesta:
          "No es obligatorio por el hecho de vender o alquilar; lo obligatorio ahí es el certificado de eficiencia energética, que es otra cosa. Ahora bien, si el nuevo inquilino o comprador tiene que dar de alta el suministro y el boletín existente es antiguo, se lo van a pedir a él. Tenerlo resuelto de antemano evita que la operación se atasque en el último momento.",
      },
      {
        pregunta: "¿Quién paga el boletín, el propietario o el inquilino?",
        respuesta:
          "No hay una norma que lo imponga, depende de lo que pactéis en el contrato. El criterio razonable, y el que vemos aplicar más a menudo, es que la puesta en condiciones de la instalación corresponde al propietario, mientras que los trámites de alta de suministro a nombre del inquilino corren por cuenta de este.",
      },
    ],
    relacionados: ["boletin-electrico", "subir-potencia-luz"],
  },
  {
    slug: "senales-cuadro-electrico-anticuado",
    titulo: "5 señales de que tu cuadro eléctrico está anticuado",
    descripcion:
      "Fusibles, un solo diferencial, saltos frecuentes: las señales de que tu cuadro eléctrico necesita renovación y qué implica cambiarlo.",
    fecha: "2026-08-02",
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
        h2: "Cómo saber la edad real de tu cuadro",
        parrafos: [
          "No hace falta ser técnico para situar tu cuadro en una época. Basta con abrir la tapa y mirar qué hay dentro; la propia tecnología te da la fecha aproximada.",
          "Si ves fusibles roscados de porcelana o cartuchos de plomo, estás ante una instalación anterior a los años setenta, sin ninguna protección para las personas. Si hay automáticos pero un solo diferencial que gobierna toda la casa, lo normal es que sea de los ochenta o principios de los noventa. Si tienes dos diferenciales y cinco o seis circuitos separados (alumbrado, enchufes, cocina, lavadora, baño), estás ya en el esquema que impuso el reglamento de 2002. Y si además hay un dispositivo contra sobretensiones, tu cuadro es posterior a 2019 o ha sido renovado hace poco.",
          "Un detalle que delata la edad mejor que ninguno: si tu cocina es eléctrica o de inducción y no tiene un circuito propio en el cuadro, esa instalación está trabajando por encima de lo que se diseñó, aunque de momento aguante.",
        ],
      },
      {
        h2: "Qué te da un cuadro moderno",
        parrafos: [
          "Un cuadro actual separa la vivienda en circuitos con su magnetotérmico cada uno: si falla la lavadora, no se apaga toda la casa. El diferencial protege contra contactos, y si añades protección contra sobretensiones, tus electrodomésticos y equipos quedan cubiertos frente a picos de red, que en verano no son raros.",
          "En una vivienda normal el cambio completo se hace en una mañana. Se corta la luz unas horas, se sustituye el cuadro, se rotula cada circuito y se prueba todo contigo delante. Si aprovechas para subir potencia, o si el cambio afecta a la instalación, hará falta boletín. Se firma en el mismo trabajo.",
        ],
      },
      {
        h2: "Cómo es el día del cambio, hora a hora",
        parrafos: [
          "La duda que más nos hacen por teléfono no es técnica: es cuánto tiempo van a estar sin luz y si tienen que hacer obra. Así es una sustitución estándar en un piso.",
          "1. Llegamos y comprobamos la instalación existente antes de tocar nada, para confirmar que el presupuesto que aceptaste sigue siendo el correcto. Si aparece algo distinto de lo previsto, te lo decimos en ese momento, no al acabar.",
          "2. Se corta el suministro y se desmonta el cuadro antiguo. A partir de aquí empiezan las horas sin luz, que en una vivienda normal son entre tres y cinco.",
          "3. Se monta el cuadro nuevo, se identifican y se conectan los circuitos uno a uno y se separan los que iban agrupados de forma incorrecta.",
          "4. Se prueba todo: disparo real del diferencial, aislamiento de cada circuito y continuidad de la toma de tierra. Se rotula cada línea con lo que alimenta, para que dentro de cinco años sepas qué bajar sin ir a ciegas.",
          "5. Repasamos juntos el cuadro terminado, te explicamos qué es cada cosa y te entregamos la garantía por escrito. Si el trabajo requería boletín, lo firma el instalador habilitado y lo tramitamos nosotros.",
        "Sobre el material: montamos aparamenta Hager y Schneider, y protección contra sobretensiones Toscano. No son las marcas más baratas del catálogo y es una decisión consciente, porque el cuadro es lo último que quieres tener que volver a abrir en veinte años. Si prefieres otra marca concreta, dilo y la presupuestamos.",
          "No hay que picar paredes: el cuadro se sustituye en el mismo hueco y se aprovecha el cableado existente siempre que esté en condiciones. Solo hay obra si hay que llevar una línea nueva a algún sitio, y eso se te dice y se presupuesta antes.",
        ],
      },
      {
        h2: "Fusibles, automáticos y por qué los plomos ya no valen",
        parrafos: [
          "Los fusibles hacían su trabajo: cuando pasaba demasiada corriente, el hilo se fundía y cortaba el circuito. El problema no es que protejan mal frente a la sobrecarga, es todo lo que no hacen.",
          "Un fusible no protege a las personas. Se funde cuando el cable corre peligro, no cuando la corriente pasa por un cuerpo. Frente a una derivación, que es lo que te electrocuta, un cuadro de plomos no reacciona en absoluto. Ese es el motivo por el que el diferencial se volvió obligatorio y por el que un cuadro de fusibles no es simplemente antiguo, sino inseguro.",
          "Y hay un problema práctico añadido. El fusible invita a manipularlo. En casi todas las viviendas con plomos que abrimos aparece alguno reforzado con hilo de cobre, o de más calibre del que toca, para que «no salte tanto». Eso convierte la protección en decorativa y deja el cable trabajando por encima de su límite. Así es exactamente como empiezan los incendios de origen eléctrico.",
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
      {
        pregunta: "¿Cuántas horas voy a estar sin luz?",
        respuesta:
          "En una vivienda estándar, entre tres y cinco horas, todas dentro de la misma mañana. Si tienes nevera o congelador llenos no hace falta que vacíes nada: manteniéndolos cerrados aguantan ese tiempo de sobra.",
      },
      {
        pregunta: "¿Hay que picar paredes o hacer obra?",
        respuesta:
          "No en una sustitución normal. El cuadro nuevo va en el mismo hueco del antiguo y se reutiliza el cableado existente si está en condiciones. Solo hay obra si hace falta tirar una línea nueva, por ejemplo para dar circuito propio a una cocina de inducción, y en ese caso te lo decimos y se presupuesta antes de empezar.",
      },
      {
        pregunta: "¿Puede la comunidad obligarme a cambiar mi cuadro?",
        respuesta:
          "No: lo que hay dentro de tu vivienda, desde el contador hacia adentro, es tuyo y la comunidad no tiene competencia. Distinto es el caso de la instalación de zonas comunes o de la centralización de contadores, que sí es responsabilidad de la comunidad y ahí sí se decide en junta.",
      },
      {
        pregunta: "¿Merece la pena poner protección contra sobretensiones?",
        respuesta:
          "En Barcelona y el Vallès, sí en la mayoría de casos. Los picos de red asociados a tormentas de verano y a maniobras de la distribuidora son habituales, y un solo episodio puede llevarse por delante la televisión, el router, la placa de la vitro y la caldera a la vez. El sobrecoste al hacer un cuadro nuevo es marginal comparado con reponer todo eso.",
      },
    ],
    relacionados: ["cambio-cuadro-electrico", "averias-electricas"],
  },
  {
    slug: "como-subir-potencia-luz",
    titulo: "Cómo subir la potencia de la luz paso a paso",
    descripcion:
      "Guía práctica para subir la potencia contratada: cuándo hace falta, qué te pedirá la comercializadora y qué papel juega el boletín.",
    fecha: "2026-08-11",
    resumen:
      "Salta el ICP cuando enciendes el horno con la vitro puesta. Te falta potencia. Antes de llamar a tu comercializadora, mira qué te van a pedir y en qué orden hay que hacer las cosas.",
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
          "2. Si hace falta boletín, un instalador habilitado revisa la instalación y firma el CIE. Nuestra parte se resuelve en 24-48 horas.",
          "3. Pide el cambio a tu comercializadora con el boletín adjunto. Ella lo traslada a la distribuidora, que aplica el cambio en unos días o un par de semanas.",
          "4. La distribuidora cobra derechos por la ampliación en tu factura: es un concepto regulado, no del electricista.",
        ],
      },
      {
        h2: "Casos típicos en los que hará falta boletín",
        parrafos: [
          "No toda subida de potencia obliga a emitir un certificado nuevo. Estas situaciones sí:",
        ],
        bullets: [
          "Pisos antiguos con boletín de hace décadas, lo más común en Barcelona",
          "Cocinas que pasan de gas a eléctrica o inducción",
          "Instalación de aerotermia o aire acondicionado por conductos",
          "Punto de carga para coche eléctrico en la plaza de garaje",
        ],
      },
      {
        h2: "Cuánta potencia necesitas de verdad",
        parrafos: [
          "Aquí es donde más dinero se pierde, y en las dos direcciones. Quedarte corto significa convivir con cortes cada vez que coinciden dos aparatos grandes. Pasarte significa pagar de más en el término fijo todos los meses del año, llueva o truene, uses la luz o estés de vacaciones.",
          "La forma honesta de decidirlo es sumar lo que puede coincidir de verdad en el peor momento del día, no todo lo que tienes enchufado. Los grandes consumidores de una vivienda son siempre los mismos: la vitrocerámica o inducción, el horno, el termo eléctrico, la lavadora y la secadora en fase de calor, el aire acondicionado y, si lo tienes, el cargador del coche. El resto (iluminación, televisión, ordenadores, router, pequeño electrodoméstico) suma bastante menos de lo que la gente supone.",
          "Hay un caso que se repite mucho en Barcelona. Pisos que llevan décadas con la potencia mínima porque la cocina era de gas, y que al reformar y poner inducción se quedan cortos de golpe. Ahí la subida no es opcional, y arrastra boletín nuevo porque la cocina necesita su propio circuito.",
        ],
      },
      {
        h2: "Bajar la potencia también es una opción",
        parrafos: [
          "Nadie lo cuenta, pero es la otra mitad del asunto. Si en tu factura no ves cortes nunca y la potencia contratada viene heredada del anterior propietario o de una época en la que tenías más gente en casa, es muy posible que estés pagando de más cada mes sin ninguna contrapartida.",
          "Bajar potencia es un trámite más sencillo que subirla, y no suele requerir boletín nuevo: una instalación apta para más lo es para menos. Antes de tocar nada, mide. Tienes tu consumo real hora a hora en la web de tu distribuidora, y lo que te interesa es cuál ha sido tu pico máximo en las últimas semanas.",
          "El freno es administrativo. Tras una modificación, la normativa impide volver a cambiar la potencia durante doce meses. Así que esta decisión se toma con el dato delante, no por intuición.",
        ],
      },
      {
        h2: "El ICP ya no está en el cuadro",
        parrafos: [
          "Si buscas el interruptor de control de potencia en tu cuadro y no lo encuentras, no te has vuelto loco. Con los contadores digitales, el control de potencia se hace desde el propio contador y ya no hay una pieza física separada en tu cuadro.",
          "Esto tiene una consecuencia práctica que sorprende a mucha gente: cuando te pasas de potencia, el corte lo hace el contador y el rearme puede tardar unos segundos, o exigir que bajes el consumo antes de recuperar el servicio. No es una avería y no hay que llamar a nadie; es el comportamiento normal del equipo.",
          "También significa que la distribuidora conoce tu curva de consumo hora a hora, y tú también: puedes consultarla en su portal. Es la mejor herramienta gratuita que existe para decidir si te sobra o te falta potencia, mucho mejor que cualquier estimación.",
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
      {
        pregunta: "¿Puedo volver a cambiar la potencia si me equivoco?",
        respuesta:
          "No de inmediato. Tras una modificación hay que esperar doce meses para volver a cambiarla, así que conviene acertar a la primera. Por eso insistimos en medir el consumo real antes de decidir en lugar de ir a ojo.",
      },
      {
        pregunta: "¿Tengo que estar en casa para la subida de potencia?",
        respuesta:
          "Para nuestra visita de revisión y emisión del boletín, sí, alguien tiene que abrirnos. El cambio posterior que aplica la distribuidora se hace de forma remota sobre el contador digital y no requiere que estés presente ni que venga nadie.",
      },
      {
        pregunta: "¿La subida de potencia la puedo pedir yo directamente a la distribuidora?",
        respuesta:
          "El trámite se hace siempre a través de tu comercializadora, que es tu interlocutor, y ella lo traslada a la distribuidora. Tú aportas el boletín; del resto se encargan ellas.",
      },
    ],
    relacionados: ["subir-potencia-luz", "boletin-electrico"],
  },
  {
    slug: "cargador-coche-electrico-comunidad",
    titulo: "Cargador de coche eléctrico en comunidad: pasos y normativa",
    descripcion:
      "Instalar un punto de carga en tu plaza de garaje comunitaria es más fácil de lo que crees: no necesitas permiso de la junta, solo comunicarlo.",
    fecha: "2026-08-20",
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
          "La pieza que suele resolver el problema sin tocar la potencia contratada es el equilibrador de carga. Es un dispositivo que mide en tiempo real lo que está consumiendo la vivienda y ajusta automáticamente la carga del coche para no superar nunca tu límite. Si alguien pone el horno a media carga, el cargador baja el ritmo solo y vuelve a subirlo cuando la cocina se apaga. Cargas más despacio en esos momentos, pero no te quedas sin luz y no pagas más término fijo todo el año.",
        ],
      },
      {
        h2: "Del contador a la plaza: por dónde va el cable",
        parrafos: [
          "Esta es la parte que decide buena parte del trabajo y del presupuesto, y por eso la miramos siempre antes de dar precio.",
          "En la mayoría de fincas de Barcelona los contadores están centralizados en la planta baja o en el vestíbulo. Desde ahí hasta tu plaza hay que tender una línea propia por zona común, en bandeja o en tubo grapado al techo del garaje. El recorrido puede ser de unos metros o de bastantes según dónde te toque la plaza, y esa distancia es lo que más varía de un presupuesto a otro.",
          "Que el cable pase por zona común no cambia lo dicho sobre permisos. La ley contempla expresamente ese paso para instalaciones de recarga de uso privado. Lo que sí hacemos siempre es acordar el trazado con el administrador, para que quede ordenado y no estorbe a los vecinos que vengan después.",
          "Un consejo que ahorra dinero a la comunidad entera: si sabes de más vecinos interesados, planteadlo a la vez. Dejar preinstalada una canalización común para varias plazas cuesta bastante menos que abrir el mismo recorrido tres veces en tres años.",
        ],
      },
      {
        h2: "Qué protecciones exige la normativa",
        parrafos: [
          "Un punto de carga no es un enchufe reforzado. La ITC-BT-52, que es la instrucción del reglamento dedicada a la recarga de vehículo eléctrico, obliga a una serie de elementos. Deberías reconocerlos en tu presupuesto:",
        ],
        bullets: [
          "Línea dedicada desde tu contador, sin compartir circuito con nada más de la vivienda",
          "Protección diferencial propia para la instalación de recarga",
          "Protección frente a corrientes continuas de defecto, que los diferenciales convencionales no detectan",
          "Magnetotérmico dimensionado para la potencia real del punto de carga",
          "Puesta a tierra verificada, imprescindible en un equipo que vas a manipular con las manos a diario",
          "Certificado de instalación eléctrica (CIE) tramitado ante Indústria",
        ],
      },
      {
        h2: "El error de cargar con un enchufe normal",
        parrafos: [
          "El cable que viene de serie con casi todos los coches permite enchufarlo a una toma doméstica, y mucha gente empieza así pensando que ya tiene el problema resuelto. Es la instalación que más nos toca reparar después.",
          "El motivo es sencillo: un enchufe doméstico está diseñado para consumos intermitentes, no para entregar corriente de forma continua durante seis, ocho o diez horas seguidas. Ese uso sostenido calienta el mecanismo, degrada los contactos y termina por deformar el plástico. El final típico es un enchufe ennegrecido, y en el peor caso un principio de incendio en un garaje, que es justo donde menos falta hace.",
          "Añade que esa toma casi nunca tiene línea propia ni las protecciones que exige la instrucción, y que una instalación no legalizada te deja fuera de cobertura frente al seguro y frente a la garantía del propio cargador. Cargar así puede sacarte de un apuro un día concreto; como solución permanente no lo es.",
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
      {
        pregunta: "¿Puedo colgarlo del contador de la comunidad?",
        respuesta:
          "No, y no te interesa aunque te dejaran. Se conecta siempre a tu propio contador: tú pagas exactamente lo que cargas y ningún vecino tiene motivo para discutir tu consumo. Es también lo que evita el conflicto más común en las comunidades con puntos de carga.",
      },
      {
        pregunta: "¿Y si soy inquilino y la plaza es de alquiler?",
        respuesta:
          "Puedes instalarlo, pero necesitas el consentimiento del propietario de la plaza, además de la comunicación a la comunidad. Deja por escrito qué pasa con la instalación cuando termine el contrato. Si se queda, si se retira y quién paga eso.",
      },
      {
        pregunta: "¿Cuánto tarda la instalación?",
        respuesta:
          "Cuando el recorrido es sencillo, el montaje se resuelve en una jornada. Lo que marca los plazos reales es el paso previo: la comunicación a la comunidad y, si hay que ampliar potencia, el trámite con la comercializadora y la distribuidora.",
      },
      {
        pregunta: "¿Hay ayudas públicas para instalarlo?",
        respuesta:
          "Han existido convocatorias de ayudas a la recarga, tanto estatales como autonómicas, pero abren y cierran por plazos y las condiciones cambian de una a otra. Consulta qué hay vigente en el momento de instalar. Lo que sí es constante es el requisito de fondo: sin la instalación legalizada y su certificado no puedes optar a ninguna.",
      },
    ],
    relacionados: [
      "instalacion-punto-de-carga-coche-electrico",
      "subir-potencia-luz",
    ],
  },
  {
    slug: "se-ha-ido-la-luz-que-hacer",
    titulo: "Se ha ido la luz: cómo saber si el problema es tuyo",
    descripcion:
      "Antes de llamar a un electricista, comprueba si el corte es de tu casa, de la finca o de la compañía. Te lo explicamos paso a paso y sin riesgo.",
    fecha: "2026-09-01",
    resumen:
      "La mitad de las urgencias que atendemos se resuelven en el cuadro en dos minutos, y otra parte ni siquiera son nuestras: son cortes de la distribuidora. Esta guía te dice en qué caso estás antes de que llames a nadie.",
    secciones: [
      {
        h2: "Primero: ¿es solo tu casa?",
        parrafos: [
          "Es la pregunta que decide todo lo demás, y se responde en treinta segundos. Asómate a la escalera y mira si hay luz en el rellano. Mira por la ventana si hay luz en el edificio de enfrente y en las farolas de la calle. Si tienes buena relación con algún vecino, un mensaje basta.",
          "Si el corte afecta a la calle entera o a toda la finca desde la acometida, es de la distribuidora, que en la mayor parte de Cataluña es e-distribución. Ahí no entra un electricista particular: hay que avisarles a ellos y esperar. Llamar a un instalador en ese caso solo sirve para pagar una visita que no puede arreglar nada.",
          "Si la luz solo ha desaparecido en tu vivienda, o solo en las zonas comunes de la finca, entonces sí es una instalación privada y sigue leyendo.",
        ],
      },
      {
        h2: "Segundo: mira qué ha bajado en el cuadro",
        parrafos: [
          "Abre el cuadro y fíjate bien en qué interruptor está caído, porque cada uno significa una cosa distinta. Esto no es un detalle menor: es literalmente el diagnóstico.",
          "El diferencial es el interruptor más ancho y tiene un pequeño botón de prueba, normalmente marcado con una T. Si ha bajado él, hay una fuga de corriente en algún punto de la instalación. Los magnetotérmicos son los estrechos que tiene al lado, uno por circuito. Si ha bajado uno de ellos, ese circuito concreto va sobrecargado o tiene un cortocircuito. Y si lo que se va es todo de golpe al encender un aparato grande, sin que quede nada bajado en el cuadro, lo que ha actuado es el control de potencia que llevan dentro los contadores digitales: no tienes una avería, tienes poca potencia contratada.",
          "Si no ha bajado nada, el cuadro está entero y aun así no hay luz, revisa que el interruptor general no esté cortado y comprueba si el corte afecta a toda la casa o solo a unas estancias. Cuando falla solo una parte y en el cuadro no hay nada caído, suele haber una conexión suelta o una caja de registro con problema, y eso ya es trabajo de electricista.",
        ],
        bullets: [
          "Interruptor ancho con botón de prueba caído: hay una fuga de corriente",
          "Interruptor estrecho caído: ese circuito va sobrecargado o tiene un cortocircuito",
          "Todo se va al encender algo grande y no hay nada caído: falta potencia contratada",
          "Nada caído y sin luz en toda la casa: mira el general y consulta con la finca",
          "Nada caído y sin luz solo en una zona: conexión suelta o caja de registro",
        ],
      },
      {
        h2: "Tercero: localiza el circuito culpable sin riesgo",
        parrafos: [
          "Si lo que ha bajado es el diferencial, puedes acotar el problema tú mismo sin tocar ningún cable y sin ningún riesgo. Solo se manipulan los mandos del cuadro.",
          "Baja todos los magnetotérmicos, los estrechos. Sube el diferencial, que ahora debería quedarse arriba porque no hay nada conectado detrás. Ve subiendo los magnetotérmicos de uno en uno, esperando unos segundos entre cada uno. Cuando al subir uno concreto el diferencial vuelva a caer, ese es tu circuito: déjalo bajado y sube el resto. Tendrás luz en toda la casa menos en esa zona, y podrás esperar a mañana en condiciones dignas en lugar de pasar la noche a oscuras.",
          "Con el circuito localizado queda la segunda mitad: saber si la fuga viene de un aparato o de la instalación. Desenchufa todo lo que cuelgue de esa zona, sube el magnetotérmico y observa. Si aguanta, ve enchufando aparatos de uno en uno hasta que salte: el último es el averiado y basta con no usarlo. Si salta con todo desenchufado, la fuga está en el cableado, en una caja o en un mecanismo, y ahí sí hace falta medir el aislamiento con instrumental.",
        ],
      },
      {
        h2: "Cuándo no hay que tocar nada y llamar directamente",
        parrafos: [
          "Todo lo anterior vale para un cuadro que ha saltado y punto. Hay situaciones en las que no se comprueba nada, se corta el suministro si se puede hacer con seguridad y se llama.",
          "Olor a quemado, plástico fundido o marcas negras en el cuadro o en un enchufe. Chispas al conectar algo. Un interruptor o una toma caliente al tacto. Agua que ha entrado en contacto con la instalación, sea una gotera, una inundación o un escape sobre un enchufe. Un calambre al tocar un electrodoméstico o un grifo, que casi siempre significa que la puesta a tierra no está haciendo su trabajo. Y cualquier cable pelado o accesible.",
          "En todos esos casos, no vuelvas a subir lo que haya saltado. Rearmar un diferencial sobre un cortocircuito o sobre una instalación mojada es exactamente lo que no hay que hacer, porque el interruptor está haciendo su trabajo al negarse a quedarse arriba. Baja el general si tienes acceso seguro, ventila si hay olor y llama.",
        ],
      },
      {
        h2: "Qué contarle al electricista para acortar la visita",
        parrafos: [
          "Cuando llames, esta información hace que el técnico salga con el material adecuado y que el precio cerrado que te damos por teléfono sea más ajustado.",
          "Di qué ha bajado exactamente, si el ancho o uno de los estrechos. Si has hecho la prueba de subir uno a uno, di cuál es el circuito que hace saltar. Cuenta si el problema aparece siempre, solo con un aparato o solo cuando llueve, porque la humedad apunta a un sitio muy distinto que un electrodoméstico. Menciona la antigüedad aproximada de la instalación y si el cuadro tiene fusibles o interruptores. Y avisa si es vivienda, local o comunidad, porque cambia el material y también quién paga la factura.",
          "Una foto del cuadro por mensaje vale más que cualquier descripción. En muchos casos con eso ya sabemos qué nos vamos a encontrar antes de salir.",
        ],
      },
    ],
    faqs: [
      {
        pregunta: "¿Puedo volver a subir el diferencial si ha saltado?",
        respuesta:
          "Sí, salvo que huela a quemado, haya chispas o haya agua en contacto con la instalación. Si vuelve a saltar de inmediato, no insistas: hay una fuga real y rearmarlo una y otra vez no la resuelve.",
      },
      {
        pregunta: "¿Cómo sé si el corte es de la compañía?",
        respuesta:
          "Si no hay luz en la escalera, en la calle o en los edificios de al lado, el corte es de la distribuidora y hay que avisarles a ellos. Un electricista particular no puede intervenir en la red de distribución.",
      },
      {
        pregunta: "Se va la luz solo cuando enciendo el horno con la vitro. ¿Es avería?",
        respuesta:
          "No, es falta de potencia contratada: lo que actúa es el control de potencia del contador. Se resuelve subiendo potencia, y antes conviene comprobar si la derivación individual de tu vivienda admite más.",
      },
      {
        pregunta: "El diferencial me salta solo cuando llueve. ¿Qué significa?",
        respuesta:
          "Que hay humedad entrando en algún punto de la instalación: una caja exterior, un patio de luces, una fachada o un muro. Se localiza midiendo el aislamiento circuito por circuito. Secar y esperar no lo arregla.",
      },
      {
        pregunta: "Noto un calambre al tocar la lavadora. ¿Es urgente?",
        respuesta:
          "Sí. Significa que hay una derivación y que la puesta a tierra no está protegiendo como debería. Desenchufa el aparato, no lo uses y llama. Es de los avisos que atendemos con prioridad.",
      },
      {
        pregunta: "¿Cuánto tarda un electricista de urgencia en llegar?",
        respuesta:
          "En Barcelona ciudad solemos estar en 45-60 minutos, y en Sabadell en menos de 30 porque tenemos la base allí. En el resto del área metropolitana, entre 30 y 50 minutos según la zona.",
      },
    ],
    relacionados: ["electricista-urgente-barcelona", "electricistas-urgentes-24-horas"],
  },
  {
    slug: "mantenimiento-electrico-comunidad-vecinos",
    titulo: "Mantenimiento eléctrico de una comunidad: qué revisar",
    descripcion:
      "Qué partes de la instalación común hay que revisar, cada cuánto y quién asume el coste. Guía para presidentes y administradores de fincas.",
    fecha: "2026-09-04",
    resumen:
      "En una comunidad, la instalación eléctrica solo se mira cuando falla, y entonces sale cara. Esto es lo que conviene revisar, con qué periodicidad y dónde está la frontera entre lo común y lo privativo.",
    secciones: [
      {
        h2: "Dónde acaba la comunidad y dónde empieza tu casa",
        parrafos: [
          "Es el punto que más discusiones genera en las juntas, y en realidad la frontera es bastante clara: el contador.",
          "Desde el contador hacia el interior de tu vivienda o local, la instalación es privativa. El cuadro de tu casa, tus circuitos, tus enchufes y tus averías las paga el propietario. Desde el contador hacia atrás es instalación común y la paga la comunidad: la caja general de protección, la línea general de alimentación, la centralización de contadores, las derivaciones individuales que suben por los montantes, el cuadro de servicios comunes, el alumbrado de escalera y de párking, el ascensor, las bombas y los porteros automáticos.",
          "Hay un matiz que sorprende a mucha gente: la derivación individual, el cable que va desde la centralización hasta el cuadro de tu piso, es elemento común aunque solo te dé servicio a ti. Por eso cuando un vecino quiere subir potencia y esa línea no aguanta, la conversación acaba en la junta y no en su casa.",
        ],
      },
      {
        h2: "Qué revisar y cada cuánto",
        parrafos: [
          "No hay que revisarlo todo cada año. Esta es la periodicidad que recomendamos a los administradores con los que trabajamos, ordenada de más a menos frecuente.",
          "El alumbrado de emergencia conviene probarlo una vez al año, y es de las cosas que más fallan porque nadie las mira: las baterías se agotan en silencio y el equipo parece correcto hasta que hay un corte real. El cuadro de servicios comunes, con sus protecciones y el disparo de los diferenciales, también anual, y es una comprobación de diez minutos. La centralización de contadores y el estado de los montantes, cada dos o tres años como mucho, mirando calentamientos, empalmes y aislamientos degradados. La puesta a tierra del edificio, midiéndola, cada cinco años. Y el alumbrado de párking y garaje, anual, junto con la ventilación forzada si la hay.",
          "Aparte de esto están las revisiones obligatorias que ya tiene contratada la comunidad y que no hacemos nosotros: la del ascensor por su empresa mantenedora y la inspección periódica de la instalación eléctrica del edificio por un organismo de control, que aplica a garajes de cierto tamaño y a instalaciones de determinada potencia.",
        ],
        bullets: [
          "Alumbrado de emergencia: prueba anual, baterías incluidas",
          "Cuadro de servicios comunes y disparo de diferenciales: anual",
          "Centralización de contadores y montantes: cada dos o tres años",
          "Medición de la puesta a tierra del edificio: cada cinco años",
          "Alumbrado de escalera, párking y garaje: anual",
        ],
      },
      {
        h2: "Los tres problemas que más nos encontramos en fincas",
        parrafos: [
          "Después de años trabajando para comunidades del área de Barcelona, los avisos se repiten con mucha fidelidad.",
          "El primero es el ascensor instalado décadas después de construirse el edificio. Necesita línea propia desde la centralización, cuadro preparado y a menudo más potencia contratada para la comunidad. Cuando se hizo deprisa, aparecen los síntomas clásicos: el diferencial general de la finca salta sin patrón, o el alumbrado de escalera se va cada vez que el ascensor arranca porque comparten circuito.",
          "El segundo es el alumbrado de escalera y párking con instalación original. Portalámparas oxidados, temporizadores mecánicos que se quedan pegados y circuitos sin diferencial propio. Pasarlo a LED con detectores de presencia se amortiza rápido en consumo, pero lo importante es que se aprovecha para separar el circuito y dejarlo protegido.",
          "El tercero es la humedad en el cuarto de contadores y en los montantes, típica de fincas antiguas con patios interiores. Da derivaciones intermitentes que aparecen los días de lluvia, afectan a varios vecinos a la vez y son las más difíciles de diagnosticar si no se mide circuito por circuito.",
        ],
      },
      {
        h2: "Puntos de carga en el párking: hacerlo bien la primera vez",
        parrafos: [
          "Es la petición que más ha crecido en comunidades, y donde más dinero se tira por hacerlo mal. Un propietario tiene derecho a instalar su punto de carga sin que la junta lo apruebe, basta con comunicarlo por escrito. Eso es lo que dice la ley, y es correcto.",
          "El problema es lo que pasa después. Si cada vecino tira su línea por su cuenta según va comprando coche, el párking acaba con cinco instalaciones independientes hechas en cinco momentos distintos, sin criterio común y ocupando la capacidad disponible por orden de llegada. El sexto que llega se encuentra con que ya no hay potencia y con que la solución pasa por rehacer buena parte de lo anterior.",
          "La alternativa sensata es una preinstalación conjunta: una línea desde la centralización con capacidad calculada para todas las plazas, canalización preparada y un sistema de gestión de carga que reparta la potencia disponible entre los que estén cargando en cada momento. Cuesta menos por plaza que las instalaciones sueltas, no obliga a nadie a poner cargador ahora y evita la discusión dentro de tres años. Si en tu comunidad hay ya dos vecinos interesados, es el momento de plantearlo.",
        ],
      },
      {
        h2: "Cómo trabajamos con administradores de fincas",
        parrafos: [
          "Trabajamos con varios administradores del área de Barcelona y del Vallès, y el formato es siempre el mismo porque es lo que necesitan para justificar el gasto ante la junta.",
          "Empezamos con una visita técnica sin coste en la que revisamos la instalación común completa y dejamos un informe por escrito de qué está bien, qué hay que corregir y con qué prioridad. Lo que hay que hacer se presupuesta con precio cerrado, desglosado por partidas para que la junta pueda aprobar unas y aplazar otras. La factura va a nombre de la comunidad con CIF e IVA desglosado, y de cada intervención queda un parte firmado con lo que se ha hecho.",
          "En urgencias, para las comunidades con las que trabajamos habitualmente, lo primero que hacemos al llegar es determinar si la avería está en zona común o privativa, y lo dejamos indicado en el parte. Eso evita la discusión posterior sobre quién asume el coste, que es exactamente el tipo de conflicto que un administrador no necesita.",
        ],
      },
    ],
    faqs: [
      {
        pregunta: "¿Quién paga una avería en el montante de la finca?",
        respuesta:
          "La comunidad. Todo lo que está del contador hacia atrás, montantes y derivaciones individuales incluidos, es instalación común, aunque una derivación concreta solo dé servicio a una vivienda.",
      },
      {
        pregunta: "¿Cada cuánto hay que revisar el alumbrado de emergencia?",
        respuesta:
          "Una vez al año como mínimo, comprobando también el estado de las baterías. Es de los elementos que más fallan sin avisar, porque el equipo aparenta estar bien hasta que hay un corte real.",
      },
      {
        pregunta: "Un vecino quiere subir potencia y dicen que la línea no aguanta. ¿Quién lo paga?",
        respuesta:
          "La derivación individual es elemento común, así que su renovación corresponde en principio a la comunidad. En la práctica muchas juntas acuerdan que la asuma quien solicita la subida. Conviene tener el criterio acordado por escrito antes de que surja el caso.",
      },
      {
        pregunta: "¿Puede la junta impedirme instalar un punto de carga?",
        respuesta:
          "No. Basta con comunicarlo por escrito al presidente o al administrador. Otra cosa es que convenga hacerlo bien: si hay más vecinos interesados, una preinstalación conjunta sale más barata por plaza y evita quedarse sin capacidad disponible.",
      },
      {
        pregunta: "¿Hacéis contratos de mantenimiento para comunidades?",
        respuesta:
          "Sí, con revisión periódica de la instalación común, informe escrito de cada visita y prioridad de respuesta en urgencias. Empezamos siempre con una visita técnica sin coste para saber en qué estado está la finca.",
      },
      {
        pregunta: "¿Cómo facturáis a una comunidad?",
        respuesta:
          "A nombre de la comunidad, con CIF e IVA desglosado y las partidas detalladas, para que el administrador pueda justificarlo ante la junta. De cada intervención queda un parte firmado con lo ejecutado.",
      },
    ],
    relacionados: ["electricistas-para-empresas-y-comunidades", "instalaciones-electricas"],
  },
];

/** Del más reciente al más antiguo: es el orden del listado del blog. */
export const postsRecientes = [...posts].sort((a, b) =>
  b.fecha.localeCompare(a.fecha),
);

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
