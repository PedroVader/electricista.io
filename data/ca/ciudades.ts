import type { Ciudad } from "../tipos";

/**
 * Ciutats del vertical en català. Les pàgines /ca/lampista-{ciutat} es generen
 * des d'aquest arxiu amb generateStaticParams. El camp slugEs enllaça amb la
 * pàgina equivalent en castellà (hreflang).
 *
 * REGLA SEO: el bloc porQue és contingut ÚNIC per ciutat (100-150 paraules).
 * Prohibit clonar paràgrafs entre ciutats.
 */

export const ciudadesCa: Ciudad[] = [
  {
    slug: "lampista-barcelona",
    slugEs: "electricista-barcelona",
    nombre: "Barcelona",
    comarca: "Barcelonès",
    h1: "Lampista a Barcelona: instal·ladors habilitats als deu districtes",
    metaTitle: "Lampista a Barcelona | Avaries, butlletins i quadres",
    metaDescription:
      "Lampista a Barcelona, districte a districte: avaries, butlletins (CIE), quadres i ampliacions. Instal·ladors habilitats i preu tancat.",
    porQue: [
      "Barcelona té un dels parcs d'habitatge més antics de l'Estat. Més de la meitat dels pisos es van construir abans del 1980. En finques de l'Eixample, Gràcia o Ciutat Vella continuem trobant cablejat de fa cinquanta anys, quadres sense diferencial i butlletins que cap comercialitzadora accepta ja. És just la feina que fem cada dia com a lampistes: posar instal·lacions velles al dia, gestionar el butlletí i deixar-ho tot registrat.",
      "Ens movem pels deu districtes amb temps d'arribada de 45-60 minuts en urgències, també en zones on aparcar és complicat com Ciutat Vella o Gràcia. L'aparcament va a càrrec nostre, no teu. I si tens un local o administres finques a la ciutat, tenim línia preferent perquè un tall de llum no t'aturi el negoci.",
    ],
    tambienServicio: {
      intro:
        "A més de Barcelona ciutat cobrim cada dia els municipis del voltant. L'Hospitalet de Llobregat, Santa Coloma de Gramenet, Sant Adrià de Besòs, Esplugues i Cornellà. Si ets a l'àrea metropolitana i no veus el teu municipi, truca'ns igualment. Gairebé segur que hi arribem.",
      municipios: [
        "L'Hospitalet de Llobregat",
        "Santa Coloma de Gramenet",
        "Sant Adrià de Besòs",
        "Esplugues de Llobregat",
        "Cornellà de Llobregat",
      ],
    },
    zonas: {
      h2: "Lampista a Barcelona, districte a districte",
      intro:
        "Cada districte té el seu propi parc d'habitatges i les seves avaries típiques. Això és el que més fem a cada zona de la ciutat.",
      items: [
        {
          nombre: "Eixample",
          href: "/ca/lampista-eixample",
          texto:
            "Finques senyorials de principis del segle XX amb instal·lacions crescudes a pedaços: cablejat antic, quadres a l'entrada i butlletins caducats. Renovacions completes, CIE per a altes de llum i pujades de potència.",
        },
        {
          nombre: "Ciutat Vella",
          texto:
            "Edificis centenaris al Gòtic, el Born i el Raval: humitat, seccions de cable insuficients i molta rotació de locals. Legalitzem instal·lacions de comerços i reparem avaries en pisos amb instal·lació històrica.",
          href: "/ca/lampista-ciutat-vella",
        },
        {
          nombre: "Gràcia",
          href: "/ca/lampista-gracia",
          texto:
            "Finques estretes i pisos reformats a mitges on la potència es queda curta en electrificar la cuina. Pujades de potència, quadres nous i reformes d'instal·lació.",
        },
        {
          nombre: "Sants-Montjuïc",
          href: "/ca/lampista-sants",
          texto:
            "Blocs dels anys 50 a 70 a Sants, Hostafrancs i la Bordeta, molts encara amb fusibles. Canvis de quadre i adequacions per passar el butlletí.",
        },
        {
          nombre: "Sant Martí",
          href: "/ca/lampista-sant-marti",
          texto:
            "Del Poblenou i el 22@ amb oficines i lofts als barris del Besòs. Manteniment d'oficines, quadres de locals i línies dedicades per a climatització.",
        },
        {
          nombre: "Sant Andreu",
          href: "/ca/lampista-sant-andreu",
          texto:
            "Cases de poble del nucli antic i blocs de la Sagrera i el Bon Pastor. Instal·lacions vistes sobre regletes que demanen renovació completa amb butlletí inclòs.",
        },
        {
          nombre: "Nou Barris",
          texto:
            "Blocs dels 60 i 70 amb potències mínimes contractades: l'ICP salta amb dos aparells. Pujades de potència amb revisió de la derivació individual.",
          href: "/ca/lampista-nou-barris",
        },
        {
          nombre: "Horta-Guinardó",
          href: "/ca/lampista-horta",
          texto:
            "Carrers amb desnivell, cases amb jardí i finques petites. Il·luminació exterior, automatismes de portes i renovació d'instal·lacions antigues.",
        },
        {
          nombre: "Les Corts",
          href: "/ca/lampista-les-corts",
          texto:
            "Habitatge dels 70 i 80 i moltes oficines. Adequació de quadres, il·luminació de despatxos i revisions per a assegurances i llicències d'activitat.",
        },
        {
          nombre: "Sarrià-Sant Gervasi",
          href: "/ca/lampista-sarria-sant-gervasi",
          texto:
            "Cases grans i àtics amb clima, aerotèrmia i cotxe elèctric. Punts de recàrrega, ampliacions de potència i domòtica amb instal·lació legalitzada.",
        },
      ],
    },
    secciones: [
      {
        h2: "Un parc d'habitatge que envelleix més de pressa que la seva instal·lació",
        parrafos: [
          "Més de la meitat dels pisos de Barcelona es van construir abans del 1980, i una part important abans del 1960. Això vol dir que la instal·lació elèctrica de la majoria de llars de la ciutat es va dissenyar per a un ús domèstic que ja no existeix: unes bombetes, una ràdio i poca cosa més.",
          "El que ha passat des de llavors és que hem anat endollant coses sense que ningú recalculés res. Un habitatge mitjà d'avui té entre vint i trenta aparells connectats de manera permanent, cuina elèctrica en molts casos, climatització i cada cop més un cotxe per carregar. La instal·lació aguanta perquè el coure és pacient, no perquè estigui dimensionada.",
          "El resultat es veu en el tipus d'avisos que rebem. Diferencials que salten sense causa aparent, endolls que s'escalfen, magnetotèrmics que no distingeixen circuits perquè només n'hi ha dos per a tota la casa. Gairebé cap és una avaria puntual. Són el mateix problema de fons que treu el cap per llocs diferents.",
        ],
      },
      {
        h2: "Treballar en una ciutat densa: accés, horaris i comunitats",
        parrafos: [
          "Barcelona té particularitats logístiques que afecten com es fa la feina, i convé dir-les perquè són les que més fricció generen amb altres gremis.",
          "La primera és l'aparcament. En bona part de la ciutat no hi ha on aturar-se, i menys amb furgoneta. És problema nostre: aparquem on es pot i pugem el material a peu, i no ho repercutim a la factura. El que sí que demanem és que ens diguis si hi ha ascensor, perquè canvia el temps d'una instal·lació amb material pesant.",
          "La segona són les comunitats. En una ciutat de finques verticals, moltes feines toquen zona comuna encara que el client sigui un veí: passar una línia per l'escala, intervenir a la centralització de comptadors, portar un cable al garatge. Parlem nosaltres amb l'administrador i deixem per escrit què es farà, que és el que evita que la feina s'aturi a mig camí.",
          "I la tercera són els horaris. En finques amb activitat comercial als baixos o amb veïns que teletreballen, els talls de subministrament s'acorden amb antelació. Preferim començar més tard i no deixar ningú penjat sense avisar.",
        ],
      },
      {
        h2: "Els deu districtes, cadascun amb el seu patró",
        parrafos: [
          "Treballem a tota la ciutat, però no trobem el mateix a tot arreu. A l'Eixample i Ciutat Vella dominen les finques de principis del segle passat, amb instal·lacions que han crescut a pedaços i molt butlletí per a compravenda. A Gràcia i Sant Andreu, cases baixes d'antic poble amb quadres minúsculs. A Sants, Nou Barris i bona part de Sant Martí, blocs obrers dels cinquanta als setanta on el problema sol ser als muntants comunitaris. A les Corts i Sarrià-Sant Gervasi, comunitats ben mantingudes on la feina és a les zones comunes, i cases grans amb instal·lacions d'una altra escala.",
          "Si vols el detall de la teva zona, tenim pàgina pròpia per als districtes on més treballem, amb el que ens trobem carrer a carrer. I si el teu no hi és, truca'ns igualment: cobrim els deu.",
        ],
      },
    ],
    faqsLocales: [
      {
        pregunta: "Quant triga un lampista a arribar a Barcelona?",
        respuesta:
          "En urgències, entre 45 minuts i una hora a qualsevol districte. Per a feines programades, concertem dia i franja horària i la complim.",
      },
      {
        pregunta: "Treballeu en finques antigues de l'Eixample o Ciutat Vella?",
        respuesta:
          "Constantment. Instal·lacions antigues, quadres sense diferencial i butlletins caducats són el nostre pa de cada dia. Revisem, actualitzem i et gestionem el CIE amb un instal·lador habilitat.",
      },
      {
        pregunta: "Cobreu el desplaçament dins de Barcelona?",
        respuesta:
          "La sortida té un preu tancat que et diem per telèfon abans d'anar-hi, igual a tota Barcelona: sense recàrrecs per districte ni per aparcament, i sense extres en acabar.",
      },
      {
        pregunta: "Feu butlletins per a pisos de lloguer o turístics a Barcelona?",
        respuesta:
          "Sí. Si el pis fa temps que no té subministrament o la comercialitzadora rebutja el butlletí antic, el revisem, adaptem el que calgui i et gestionem el CIE en 24-48 h perquè puguis donar l'alta.",
      },
      {
        pregunta: "Treballeu de nit i en festius a Barcelona?",
        respuesta:
          "Sí, la guàrdia d'urgències és 24/7 també a Barcelona ciutat. L'horari afecta el preu i te'l diem per telèfon abans de sortir.",
      },
      {
        pregunta: "Ateneu locals i oficines a Barcelona?",
        respuesta:
          "Sí, i amb prioritat: un negoci sense llum perd diners cada hora. També fem manteniments periòdics i legalitzacions per a llicències d'activitat.",
      },
      {
        pregunta: "Sou lampistes o electricistes?",
        respuesta:
          "Les dues coses, perquè és el mateix ofici: en català se'n diu lampista i en castellà, electricista. A Barcelona la feina la fa sempre un instal·lador elèctric habilitat, que és qui pot signar el butlletí amb el seu número de registre.",
      },
    ],
    enlaceUrgente: {
      href: "/ca/electricista-urgent-barcelona",
      texto: "És urgent? Lampista de guàrdia a Barcelona ara mateix →",
    },
  },
  {
    slug: "lampista-sabadell",
    slugEs: "electricista-sabadell",
    nombre: "Sabadell",
    comarca: "Vallès Occidental",
    h1: "Lampista a Sabadell: electricistes habilitats, avaries i butlletins",
    metaTitle: "Lampista a Sabadell | Urgències 24h i butlletins (CIE)",
    metaDescription:
      "Lampista a Sabadell amb instal·ladors habilitats. Urgències 24 h, butlletins (CIE), avaries i quadres. Preu tancat abans de començar.",
    porQue: [
      "Sabadell és casa nostra: tenim la base a la ciutat, així que aquí els temps d'arribada del lampista són els més curts de tota la nostra zona de treball. En urgències solem ser a la teva porta en menys de mitja hora, tant si ets al Centre, la Creu Alta, Can Rull, Gràcia o la Concòrdia.",
      "Coneixem bé el parc d'habitatges local: blocs dels anys 60 i 70 amb instal·lacions que demanen renovació, pisos de l'Eixample sabadellenc amb quadres actualitzats a mitges i cases als barris del nord on el butlletí antic ja no serveix per pujar potència. També treballem per a la indústria i els tallers dels polígons de Sabadell, amb manteniments i ampliacions de potència per a maquinària.",
    ],
    tambienServicio: {
      intro:
        "Des de Sabadell donem servei diari a tot el Vallès Occidental proper. A Castellar del Vallès i Sant Quirze del Vallès atenem moltes cases unifamiliars, amb punts de recàrrega i ampliacions incloses, i a Barberà, Cerdanyola i Ripollet treballem tant en habitatge com en naus i locals. Mateix equip, mateixos terminis i mateix preu tancat que a Sabadell.",
      municipios: [
        "Castellar del Vallès",
        "Sant Quirze del Vallès",
        "Barberà del Vallès",
        "Cerdanyola del Vallès",
        "Ripollet",
      ],
    },
    zonas: {
      h2: "Lampista a Sabadell, barri a barri",
      intro:
        "Treballem cada dia a tots els barris de la ciutat. Això és el que més ens trobem a cada zona.",
      items: [
        {
          nombre: "Centre",
          texto:
            "Pisos senyorials i finques antigues al costat del Passeig: instal·lacions amb dècades al damunt i quadres per renovar. Renovació completa amb butlletí i pujades de potència.",
        },
        {
          nombre: "La Creu Alta",
          texto:
            "Cases de cós i blocs de postguerra: cablejat just i potències curtes. Quadres nous, derivacions per humitat i adequacions per al CIE.",
        },
        {
          nombre: "Can Rull i la Concòrdia",
          texto:
            "Blocs dels 60 i 70 amb la instal·lació original. Canvis de quadre, endolls sense presa de terra i pujades de potència per a cuina elèctrica.",
        },
        {
          nombre: "Gràcia i Can Feu",
          texto:
            "Habitatge familiar i tallers reconvertits. Ampliacions, il·luminació i punts de recàrrega en garatges particulars.",
        },
        {
          nombre: "Polígons Can Roqueta i Gràcia Sud",
          texto:
            "Naus i tallers amb trifàsica: manteniments, quadres industrials, ampliacions de potència per a maquinària i legalitzacions.",
        },
      ],
    },
    secciones: [
      {
        h2: "Som d'aquí, i això es nota en el temps d'arribada",
        parrafos: [
          "Tenim la base a Sabadell, al carrer Alcarria, i és l'única ciutat on podem prometre el que prometem sense matisos: en urgències solem ser a la teva porta en menys de mitja hora, i en feines programades podem ajustar la franja horària molt més que en qualsevol altre lloc.",
          "Té una segona conseqüència pràctica menys evident: aquí hi tornem. Si d'aquí a dos anys et falla alguna cosa del que vam instal·lar, el mateix equip pot passar-hi sense que sigui una expedició. Per a comunitats i comerços això val més que qualsevol descompte, perquè el que compres no és una reparació, és tenir algú a prop.",
          "També coneixem el terreny administratiu local, cosa que estalvia temps en llicències d'activitat i en gestions que depenen de l'ajuntament.",
        ],
      },
      {
        h2: "L'herència industrial i les seves instal·lacions",
        parrafos: [
          "Sabadell va ser una capital tèxtil i bona part del seu teixit construït ve d'aquí: naus reconvertides, vapors rehabilitats, blocs aixecats per allotjar els treballadors de les fàbriques i polígons que continuen en actiu.",
          "Als barris que van créixer al voltant de la indústria, com Can Rull, la Concòrdia o Torre-romeu, trobem el patró clàssic de l'habitatge obrer dels seixanta i setanta: superfícies ajustades, potència mínima heretada, quadres amb un sol diferencial i muntants comunitaris que es van quedar curts fa dècades. És on més canvis de quadre i més pujades de potència fem de tota la ciutat.",
          "Als polígons, Can Roqueta i Gràcia Sud sobretot, la feina és industrial: subministraments trifàsics, quadres de distribució de nau, maquinària amb motors i enllumenat de gran alçada. Aquí el que es valora és el manteniment preventiu, perquè una aturada de producció costa molt més que la revisió que l'hauria evitat.",
          "I a les naus rehabilitades com a habitatge o com a espai de treball, una mica de tot: instal·lacions industrials que cal adaptar a un ús que no estava previst quan es van construir.",
        ],
      },
      {
        h2: "Comunitats del Vallès: la feina que ningú mira",
        parrafos: [
          "A Sabadell i el seu entorn treballem amb força comunitats, i el patró es repeteix tant que val la pena explicar-lo. El pis individual sol estar acceptable. El que està desatès és la part comuna, perquè no és de ningú fins que falla.",
          "Els punts que més problemes donen són sempre els mateixos. El quadre de serveis comuns, ampliat per acumulació durant dècades fins que ningú sap què és cada cosa. L'enllumenat d'escala i garatge amb equips obsolets i consums que es mengen el pressupost de la comunitat. La línia de l'ascensor, moltes vegades sense protecció diferencial pròpia. I les bombes d'esgotament, que només es descobreix que no funcionen el dia de la tempesta.",
          "El que oferim a l'administrador és un informe escrit amb pressupost tancat i desglossat per partides, separant el que és urgent del que pot esperar a l'exercici següent. Una junta no aprova una despesa indefinida; sí que aprova un document concret.",
        ],
      },
    ],
    faqsLocales: [
      {
        pregunta: "Quant triga un lampista a arribar a Sabadell?",
        respuesta:
          "Menys que a cap altre lloc, perquè la nostra base és a Sabadell. En urgències, menys de 30 minuts.",
      },
      {
        pregunta: "Cobriu Castellar, Sant Quirze i rodalies?",
        respuesta:
          "Sí, cada dia: Castellar, Sant Quirze, Barberà, Cerdanyola i Ripollet, amb les mateixes condicions que a Sabadell.",
      },
      {
        pregunta: "Feu butlletins a Sabadell?",
        respuesta:
          "Sí. Treballem amb instal·ladors habilitats: revisem la instal·lació, se signa el CIE o el butlletí de reconeixement i el tramitem davant d'Indústria en 24-48 h.",
      },
      {
        pregunta: "Treballeu amb administradors de finques de Sabadell?",
        respuesta:
          "Sí: enllumenat d'escala, línia de l'ascensor, quadres comunitaris i garatges, amb pressupost tancat per a la junta i full de treball documentat.",
      },
      {
        pregunta: "Instal·leu punts de recàrrega en cases de Castellar o Sant Quirze?",
        respuesta:
          "Constantment. És la zona on més carregadors instal·lem, gairebé sempre en garatge propi, amb estudi de potència i legalització inclosos.",
      },
      {
        pregunta: "Sou lampistes o electricistes?",
        respuesta:
          "A Sabadell tothom diu lampista, i en castellà en diuen electricista: és exactament el mateix ofici. Qui ve a casa teva és un instal·lador elèctric habilitat, amb número de registre, i per això pot signar el butlletí si en necessites un.",
      },
    ],
  },
  {
    slug: "lampista-badalona",
    slugEs: "electricista-badalona",
    nombre: "Badalona",
    comarca: "Barcelonès",
    h1: "Lampista a Badalona: urgències i instal·ladors habilitats",
    metaTitle: "Lampista a Badalona | Urgències 24h i butlletins (CIE)",
    metaDescription:
      "Lampista a Badalona amb instal·ladors habilitats. Urgències 24 h, butlletins (CIE), avaries i quadres. Preu tancat abans de començar.",
    porQue: [
      "A Badalona el lampista treballa en dos fronts. El primer són els barris densos com Llefià, la Salut o Sant Roc, amb molts blocs dels anys 60 i 70. Instal·lacions justes de potència, quadres per renovar i butlletins antics que frenen qualsevol gestió amb la comercialitzadora. El segon és la primera línia de mar, on la humitat i el salnitre castiguen terminals, endolls exteriors i quadres de local, i generen derivacions que fan saltar el diferencial sense motiu aparent.",
      "Arribem a Badalona en 30-45 minuts en urgències, i donem servei tant a particulars com als comerços del Centre i del port. Si el teu local viu del dia a dia, prioritzem la teva avaria perquè no perdis ni una jornada.",
    ],
    tambienServicio: {
      intro:
        "Cobrim també els municipis que envolten Badalona. Sant Adrià de Besòs i Santa Coloma de Gramenet per la banda del Besòs, i Montgat i Tiana per la costa. A Montgat i Tiana atenem moltes cases amb jardí, on el que més ens demanen és il·luminació exterior, punts de recàrrega i ampliacions de potència.",
      municipios: [
        "Sant Adrià de Besòs",
        "Santa Coloma de Gramenet",
        "Montgat",
        "Tiana",
      ],
    },
    zonas: {
      h2: "Lampista a Badalona, barri a barri",
      intro:
        "De la primera línia de mar als polígons, cada zona de Badalona falla a la seva manera. Això és el que més resolem a cadascuna.",
      items: [
        {
          nombre: "Centre i Dalt de la Vila",
          texto:
            "Finques antigues i comerços: instal·lacions històriques, quadres petits i locals que renoven llicència. Butlletins i adequacions d'instal·lació.",
        },
        {
          nombre: "Llefià i La Salut",
          texto:
            "Blocs densos dels 60 i 70 amb potències mínimes: ICP que salta i quadres originals. Pujades de potència i canvis de quadre.",
        },
        {
          nombre: "Front marítim i Port",
          texto:
            "Salnitre i humitat: derivacions en endolls exteriors, terrasses de bars i quadres de locals. Localització de derivacions i substitució per material estanc.",
        },
        {
          nombre: "Canyadó i Manresà",
          texto:
            "Cases i baixos amb jardí a prop de la costa: il·luminació exterior, automatismes de portes i ampliacions d'instal·lació.",
        },
        {
          nombre: "Les Guixeres",
          texto:
            "Polígon amb naus i tallers: trifàsica, manteniment industrial i legalitzacions d'instal·lació davant d'Indústria.",
        },
      ],
    },
    secciones: [
      {
        h2: "El salnitre: per què a primera línia tot dura menys",
        parrafos: [
          "Badalona té cinc quilòmetres de façana marítima, i això introdueix una variable que en una ciutat d'interior no existeix: la corrosió salina. No és un detall menor ni una excusa comercial, és la causa directa de bona part de les avaries que atenem al front marítim i a Canyadó.",
          "El salnitre ataca els contactes metàl·lics, i ho fa a poc a poc i per dins. Un endoll exterior, una caixa de derivació en una terrassa o un quadre en un garatge a prop del mar acumulen una capa d'òxid que augmenta la resistència del contacte. Més resistència vol dir més calor, i més calor vol dir que el mecanisme es degrada encara més de pressa. És un cercle que acaba en un punt calent i, si ningú se'l mira, en un endoll cremat.",
          "El que canvia a la pràctica: a primera línia fem servir material estanc amb grau de protecció alt també en llocs on terra endins no caldria, caixes amb junta en lloc de caixes convencionals, i recomanem revisar els quadres exteriors amb més freqüència de l'habitual. Costa una mica més d'entrada i evita refer la instal·lació cada pocs anys.",
        ],
      },
      {
        h2: "Llefià, la Salut i Sant Roc: blocs dels seixanta i potència justa",
        parrafos: [
          "L'altra meitat de la feina a Badalona és als barris densos de la part alta, que van créixer molt de pressa entre els anys seixanta i setanta per acollir l'arribada massiva de població a la ciutat.",
          "El perfil constructiu és recognoscible. Blocs alts, pisos de superfície continguda i una instal·lació dimensionada per al just d'aquella època. El que trobem són quadres amb un o cap diferencial, cap presa de terra a l'habitatge i potència contractada al mínim heretat, que salta tan bon punt coincideixen la cuina i la rentadora.",
          "Hi ha a més un factor que complica les pujades de potència en aquests edificis: els muntants comunitaris. De poc serveix contractar més potència si la línia que arriba al teu pis no la pot transportar. Quan detectem que el problema és de l'edifici i no del pis, ho diem, encara que signifiqui que la feina es converteixi en una conversa amb la comunitat en lloc d'una factura ràpida.",
        ],
      },
      {
        h2: "Comerç de barri i locals de la Rambla",
        parrafos: [
          "Badalona té un comerç de proximitat molt viu, i els locals de barri comparteixen un problema: instal·lacions que van néixer com el baix d'un habitatge i que han anat assumint la càrrega d'una activitat comercial sense que ningú replantegés el conjunt.",
          "En hostaleria és on més es nota. Una cuina que ha anat incorporant equips, cambres frigorífiques penjades del circuit d'endolls generals, i climatització afegida l'últim estiu. Tan bon punt coincideix tot, salta. I saltar en hora de servei, o perdre el gènere d'una cambra un cap de setmana, costa bastant més que haver separat els circuits a temps.",
          "Treballem aquests locals fora de l'horari de servei i donem prioritat de resposta als que tenen gènere refrigerat. Si el local necessita legalització per a la seva llicència d'activitat, tramitem la documentació amb l'ajuntament.",
        ],
      },
    ],
    faqsLocales: [
      {
        pregunta: "Quant triga un lampista a arribar a Badalona?",
        respuesta:
          "En urgències, entre 30 i 45 minuts a qualsevol barri, del Centre a Llefià o Canyadó.",
      },
      {
        pregunta: "Visc a prop del mar i em salta el diferencial sovint. És normal?",
        respuesta:
          "És molt típic de la primera línia: el salnitre i la humitat provoquen derivacions en endolls i terminals. Es localitza, se substitueix el que està fet malbé i s'acaben els salts.",
      },
      {
        pregunta: "Treballeu amb comerços a Badalona?",
        respuesta:
          "Sí, tant avaries amb prioritat com manteniments i ampliacions de potència per a locals i hostaleria.",
      },
      {
        pregunta: "Feu butlletins per donar d'alta la llum en pisos antics de Badalona?",
        respuesta:
          "Sí, és del que més fem a Llefià, la Salut i el Centre: revisió de la instal·lació, adaptació si cal i CIE gestionat en 24-48 h.",
      },
      {
        pregunta: "Treballeu amb comunitats de veïns a Badalona?",
        respuesta:
          "Sí: enllumenat d'escala, ascensor, garatge i quadre comunitari, amb pressupost tancat per escrit per presentar a la junta.",
      },
      {
        pregunta: "Sou lampistes o electricistes?",
        respuesta:
          "Depèn de la llengua en què ho preguntis: lampista en català, electricista en castellà. L'ofici és el mateix. A Badalona qui fa la feina és un instal·lador elèctric habilitat, i és ell qui signa el butlletí quan la comercialitzadora te'l demana.",
      },
    ],
  },
  {
    slug: "lampista-mataro",
    slugEs: "electricista-mataro",
    nombre: "Mataró",
    comarca: "Maresme",
    h1: "Lampista a Mataró: urgències i instal·ladors habilitats",
    metaTitle: "Lampista a Mataró | Urgències 24h i butlletins (CIE)",
    metaDescription:
      "Lampista a Mataró amb instal·ladors habilitats. Urgències 24 h, butlletins (CIE), avaries i quadres. Preu tancat abans de començar.",
    porQue: [
      "Mataró combina un nucli antic amb edificis centenaris, eixamples de postguerra com Cerdanyola, el barri més poblat del Maresme, i zones noves al costat de la Via Europa. Cada zona falla a la seva manera, i el lampista ho nota: al Centre i l'Havana veiem instal·lacions antigues que necessiten renovació completa i butlletí; a Cerdanyola, quadres curts de potència per a la vida actual; i a les zones noves, sobretot ampliacions, domòtica i punts de recàrrega.",
      "Com que és la capital del Maresme, també ens truquen moltes segones residències de la comarca: cases que passen mesos tancades i apareixen amb derivacions per humitat o instal·lacions que no arrenquen. Les posem a punt i, si cal butlletí per reactivar el subministrament, te'l gestionem en 24-48 h.",
    ],
    tambienServicio: {
      intro:
        "Des de Mataró cobrim el Maresme proper: Argentona i Cabrera de Mar cap a l'interior, i la línia de costa de Vilassar de Mar, Premià de Mar i Sant Andreu de Llavaneres. A les urbanitzacions de Llavaneres i Argentona fem molta il·luminació exterior, automatismes de portes i punts de recàrrega per a cotxe elèctric.",
      municipios: [
        "Argentona",
        "Cabrera de Mar",
        "Vilassar de Mar",
        "Premià de Mar",
        "Sant Andreu de Llavaneres",
      ],
    },
    zonas: {
      h2: "Lampista a Mataró, barri a barri",
      intro:
        "Del nucli antic a la Via Europa, cada zona de Mataró demana una feina diferent. Això és el que més fem a cadascuna.",
      items: [
        {
          nombre: "Centre i l'Havana",
          texto:
            "Edificis centenaris del nucli antic: instal·lacions per renovar del tot, butlletins per a altes de llum i reformes de comerços.",
        },
        {
          nombre: "Cerdanyola",
          texto:
            "El barri més poblat del Maresme, amb blocs dels 60 i 70: quadres curts, potències mínimes i endolls sense terra. Canvis de quadre i pujades de potència.",
        },
        {
          nombre: "Via Europa i Parc Central",
          texto:
            "Habitatge recent amb clima i domòtica: ampliacions, línies dedicades i punts de recàrrega en garatges comunitaris.",
        },
        {
          nombre: "Rocafonda i El Palau",
          texto:
            "Blocs de postguerra amb la instal·lació original: adequacions per passar el butlletí i renovació de quadres.",
        },
        {
          nombre: "Polígons Pla d'en Boet i Mata-Rocafonda",
          texto:
            "Indústria i tallers: trifàsica, manteniments preventius i ampliacions de potència per a maquinària.",
        },
      ],
    },
    secciones: [
      {
        h2: "Segones residències: cases que passen mesos tancades",
        parrafos: [
          "Com a capital del Maresme, Mataró i la seva comarca concentren una quantitat important d'habitatge de temporada, i aquest ús intermitent genera un tipus d'avaria que gairebé no es veu en un habitatge habitual.",
          "Una casa tancada durant mesos acumula humitat sense que ningú ventili, i la humitat és el principal enemic de l'aïllament elèctric. El patró típic és el de la família que arriba al juny, puja el diferencial i no aguanta. O pitjor: aguanta, però hi ha una derivació instal·lada des de fa mesos que ningú ha detectat.",
          "A això s'hi sumen els efectes de l'abandonament: nius d'insectes i rosegadors en caixes de derivació i quadres exteriors, corrosió als mecanismes de terrasses i porxos, bombes de piscina que fa mig any que estan aturades i arrenquen forçant, i sistemes de reg enterrats que han passat l'hivern sota l'aigua.",
          "La nostra recomanació per a qui té una casa així és senzilla i estalvia ensurts: una revisió abans de la temporada, no el primer cap de setmana amb la casa plena. Mesurar l'aïllament dels circuits i comprovar el dispar del diferencial porta poc temps i evita començar les vacances sense llum.",
        ],
      },
      {
        h2: "Del nucli antic a la Via Europa: tres ciutats en una",
        parrafos: [
          "Mataró té un parc construït especialment variat per a la seva mida, i cada franja té el seu problema característic.",
          "El Centre i l'Havana són nucli antic, amb edificis que en alguns casos superen el segle. Aquí la feina és de renovació completa: instal·lacions que mai no van tenir presa de terra, quadres de fusibles encara en servei i molt butlletí associat a operacions de compravenda, perquè és la zona amb més rotació de propietat.",
          "Cerdanyola és una altra cosa. És el barri més poblat del Maresme i respon al model d'eixample de postguerra: blocs dels cinquanta als setanta, potències curtes i quadres que es van quedar petits tan bon punt van entrar la rentadora i l'aire condicionat.",
          "I la franja de la Via Europa i el Parc Central és habitatge relativament recent, amb instal·lació correcta d'origen. Allà no ens truquen per avaries, ens truquen per ampliacions: climatització, aerotèrmia, il·luminació i, cada cop més sovint, punts de recàrrega al garatge.",
        ],
      },
      {
        h2: "Indústria i comerç al Pla d'en Boet",
        parrafos: [
          "Mataró conserva activitat industrial i logística als seus polígons, i aquest client té necessitats diferents de les de l'habitatge.",
          "Treballem subministraments trifàsics, quadres de distribució de nau, enllumenat industrial i maquinària amb motors. Els encàrrecs més habituals són la renovació d'enllumenat a LED, que en una nau amb moltes hores d'ús s'amortitza ràpid, l'equilibrat de fases quan la càrrega ha crescut de manera desordenada, i el manteniment preventiu amb termografia del quadre general.",
          "Per a activitats industrials la legalització té requisits propis segons la potència i el tipus de local. Ens ocupem de la documentació tècnica i diem des del principi què exigeix el teu cas, que no sempre coincideix amb el que li van demanar al del costat.",
        ],
      },
    ],
    faqsLocales: [
      {
        pregunta: "Quant triga un lampista a arribar a Mataró?",
        respuesta:
          "En urgències, entre 40 minuts i una hora segons la zona. Per a feines programades, triem amb tu dia i franja.",
      },
      {
        pregunta: "Tinc una segona residència al Maresme. La reviseu?",
        respuesta:
          "Sí. És un encàrrec habitual: revisió completa abans de la temporada, reparació de derivacions per humitat i butlletí si la comercialitzadora el demana per reactivar l'alta.",
      },
      {
        pregunta: "Cobriu Premià, Vilassar i Llavaneres?",
        respuesta:
          "Sí, tota la franja de costa propera a Mataró i l'interior d'Argentona i Cabrera, amb les mateixes condicions.",
      },
      {
        pregunta: "Treballeu amb comerços del centre de Mataró?",
        respuesta:
          "Sí, amb prioritat en avaries i feines programades fora del teu horari d'obertura perquè no tanquis ni una hora.",
      },
      {
        pregunta: "Instal·leu punts de recàrrega a urbanitzacions de Llavaneres o Argentona?",
        respuesta:
          "Sí, és un encàrrec habitual a la zona: estudi de potència, instal·lació del carregador i legalització amb CIE inclosa.",
      },
      {
        pregunta: "Sou lampistes o electricistes?",
        respuesta:
          "Som el mateix: al Maresme se'n diu lampista i en castellà, electricista. No és cap ofici diferent. La feina la fa un instal·lador elèctric habilitat, que és l'únic que pot signar el butlletí de la teva instal·lació.",
      },
    ],
  },
  {
    slug: "lampista-granollers",
    slugEs: "electricista-granollers",
    nombre: "Granollers",
    comarca: "Vallès Oriental",
    h1: "Lampista a Granollers: urgències i instal·ladors habilitats",
    metaTitle: "Lampista a Granollers | Urgències 24h i butlletins (CIE)",
    metaDescription:
      "Lampista a Granollers amb instal·ladors habilitats. Urgències 24 h, butlletins (CIE), avaries i quadres. Preu tancat abans de començar.",
    porQue: [
      "Granollers és la capital del Vallès Oriental i es nota en el tipus de feina que fa el lampista: molt habitatge de nucli urbà amb instal·lacions per renovar, comerç al centre, a la zona de la Porxada i el mercat del dijous, que no es pot permetre un tall de llum, i una corona de polígons industrials, com Congost o Font del Ràdium, on fem manteniments, quadres trifàsics i ampliacions de potència per a naus.",
      "En habitatge, l'encàrrec més repetit és la posada al dia: quadres amb fusibles encara en servei, butlletins de fa dècades que la comercialitzadora ja no accepta i potències que es van quedar curtes en electrificar cuina o clima. Arribem a Granollers en 30-45 minuts en urgències, i cobrim també les urbanitzacions dels municipis veïns.",
    ],
    tambienServicio: {
      intro:
        "Des de Granollers donem servei a tot el Vallès Oriental proper. Mollet i Parets pel sud, les Franqueses al nord, Montornès al costat dels polígons del Besòs i Llinars cap al Montseny. A Llinars i les Franqueses treballem en moltes cases unifamiliars, amb il·luminació exterior, ampliacions i punts de recàrrega.",
      municipios: [
        "Mollet del Vallès",
        "Les Franqueses del Vallès",
        "Parets del Vallès",
        "Llinars del Vallès",
        "Montornès del Vallès",
      ],
    },
    zonas: {
      h2: "Lampista a Granollers, barri a barri",
      intro:
        "Del centre comercial als polígons del Congost, això és el que més treballem a cada zona de Granollers.",
      items: [
        {
          nombre: "Centre i la Porxada",
          texto:
            "Comerç i habitatge sobre locals: quadres petits, ampliacions per a hostaleria i butlletins per a traspassos i llicències d'activitat.",
        },
        {
          nombre: "Font Verda i Tres Torres",
          texto:
            "Blocs residencials dels 60 als 80: renovació de quadres, pujades de potència i adequació de la instal·lació per al CIE.",
        },
        {
          nombre: "Can Bassa i Palou",
          texto:
            "Habitatge familiar i baixos amb pati: il·luminació exterior, ampliacions d'instal·lació i punts de recàrrega.",
        },
        {
          nombre: "Polígons Congost i Font del Ràdium",
          texto:
            "Naus industrials: quadres trifàsics, manteniment preventiu i legalitzacions d'instal·lació davant d'Indústria.",
        },
        {
          nombre: "Corró i entorn de Les Franqueses",
          texto:
            "Unifamiliars i parcel·les: instal·lació completa en reformes, aerotèrmia i carregadors de cotxe elèctric.",
        },
      ],
    },
    secciones: [
      {
        h2: "Capital de comarca: molta empresa per metre quadrat",
        parrafos: [
          "Granollers és la capital del Vallès Oriental i funciona com a centre de serveis de tota la comarca. Això fa que aquí el repartiment entre feina domèstica i feina professional s'inclini més cap a la segona que en qualsevol altra de les nostres ciutats.",
          "La corona de polígons que envolta la ciutat, amb Congost i Font del Ràdium al capdavant, concentra indústria, logística i tallers. És un client exigent en un aspecte concret: la continuïtat. Una nau aturada per una fallada elèctrica no perd el cost de la reparació, perd el torn sencer, i per això el que es valora aquí no és el preu de la intervenció sinó el temps de resposta i el manteniment que evita l'aturada.",
          "Treballem amb termografia del quadre general per detectar punts calents abans que es converteixin en avaria, revisions programades a les aturades de producció i disponibilitat per a urgències. Facturem amb CIF, IVA desglossat i albarà signat de cada intervenció.",
        ],
      },
      {
        h2: "El comerç del centre i el mercat del dijous",
        parrafos: [
          "El centre de Granollers, al voltant de la Porxada, té un comerç tradicional fort, i el dijous la ciutat es converteix en el mercat de referència de la comarca des de fa segles.",
          "Per a un comerç del centre, un tall de llum en dia de mercat no és una molèstia: és la millor jornada de la setmana perduda. Donem prioritat de resposta als locals del nucli urbà i, sempre que es pot, programem les feines que requereixen tall per a principis de setmana.",
          "Els problemes habituals del comerç de nucli antic són els de sempre: instal·lacions que van començar sent domèstiques, quadres que han crescut per acumulació i falta de separació entre circuits de sala, cambres i climatització. Quan el local necessita adequació per a una llicència d'activitat, tramitem la legalització amb la documentació que demana l'ajuntament.",
          "Per a les parades del mercat i les instal·lacions temporals de la ciutat, muntem quadres provisionals amb proteccions en condicions, que és on més nyaps perillosos es veuen.",
        ],
      },
      {
        h2: "Habitatge de nucli urbà i la corona de les Franqueses",
        parrafos: [
          "En habitatge, Granollers presenta el perfil típic d'una ciutat mitjana catalana: nucli urbà amb edificis antics que demanen renovació completa, eixamples dels seixanta i setanta amb potències curtes, i una perifèria d'habitatge més recent i de menys densitat.",
          "A Corró i l'entorn de les Franqueses canvia el tipus d'encàrrec: hi ha més casa unifamiliar, i apareixen les necessitats pròpies de l'habitatge amb jardí, garatge propi i de vegades piscina. Instal·lacions exteriors amb material estanc, il·luminació d'accés, reg automàtic i punts de recàrrega, que en una casa amb garatge propi són de les instal·lacions més ràpides i senzilles que existeixen.",
          "Cobrim també els municipis de la comarca: les Franqueses, la Roca, Canovelles, Cardedeu, Llinars i la resta del Vallès Oriental, amb el mateix compromís de preu tancat abans de començar.",
        ],
      },
    ],
    faqsLocales: [
      {
        pregunta: "Quant triga un lampista a arribar a Granollers?",
        respuesta:
          "En urgències, entre 30 i 45 minuts. Cobrim també Mollet, Parets, les Franqueses, Montornès i Llinars amb temps similars.",
      },
      {
        pregunta: "Treballeu en naus i polígons del Vallès Oriental?",
        respuesta:
          "Sí: manteniment industrial, quadres trifàsics, ampliacions de potència i legalitzacions per a naus i tallers a Congost, Font del Ràdium i els polígons dels municipis veïns.",
      },
      {
        pregunta: "Feu butlletins a Granollers?",
        respuesta:
          "Sí. Revisem la instal·lació, el CIE el signa un instal·lador habilitat i el tramitem davant d'Indústria en 24-48 h.",
      },
      {
        pregunta: "Feu butlletins urgents a Granollers?",
        respuesta:
          "Els terminis normals són 24-48 h. Si tens una alta de llum aturada pel butlletí, digue'ns-ho en trucar i prioritzem la revisió.",
      },
      {
        pregunta: "Treballeu de matinada al Vallès Oriental?",
        respuesta:
          "Sí, la guàrdia d'urgències és 24/7 també a Granollers, Mollet, Parets, les Franqueses, Montornès i Llinars.",
      },
      {
        pregunta: "Sou lampistes o electricistes?",
        respuesta:
          "Si ho busques en català diràs lampista, i si ho busques en castellà, electricista: al Vallès Oriental es fan servir les dues paraules per al mateix ofici. Qui ve a fer la feina és un instal·lador elèctric habilitat que pot signar el butlletí amb el seu número de registre.",
      },
    ],
  },
  {
    slug: "lampista-hospitalet",
    slugEs: "electricista-hospitalet",
    nombre: "L'Hospitalet de Llobregat",
    comarca: "Barcelonès",
    h1: "Lampista a L'Hospitalet: urgències i instal·ladors habilitats",
    metaTitle: "Lampista a L'Hospitalet | Urgències 24h i butlletins",
    metaDescription:
      "Lampista a L'Hospitalet de Llobregat. Canvi de quadres, butlletins (CIE), avaries i urgències 24 h. Preu tancat abans de començar.",
    porQue: [
      "L'Hospitalet és la ciutat més densa de l'Estat, i això es nota en el seu parc d'habitatge. Barris com Collblanc, la Torrassa, Santa Eulàlia o Bellvitge van créixer a tota velocitat entre els anys cinquanta i setanta per allotjar l'arribada massiva de població, amb pisos de superfície molt ajustada i una instal·lació elèctrica pensada per al mínim d'aquella època. Per a un lampista, és el terreny on més quadres antics s'obren.",
      "La feina que més fem aquí és exactament aquesta: quadres de fusibles o amb un únic diferencial que cal substituir, habitatges sense presa de terra i potències contractades al mínim heretat, que salten tan bon punt la cuina i la rentadora coincideixen. Som a deu minuts per la Gran Via o la Ronda de Dalt, així que en urgències els temps són els mateixos que a Barcelona ciutat.",
    ],
    tambienServicio: {
      intro:
        "Des de L'Hospitalet cobrim la resta del Baix Llobregat proper i saltem a Barcelona en minuts. Treballem cada dia en tota aquesta franja.",
      municipios: [
        "Cornellà de Llobregat",
        "Esplugues de Llobregat",
        "Sant Joan Despí",
        "El Prat de Llobregat",
        "Barcelona",
      ],
    },
    zonas: {
      h2: "Feines habituals per barri de L'Hospitalet",
      intro:
        "La ciutat canvia molt d'un barri a l'altre, i el tipus d'avaria també.",
      items: [
        {
          nombre: "Collblanc i la Torrassa",
          texto:
            "La zona més densa i amb el parc més antic: substitució de quadres amb fusibles, preses de terra que no existeixen i butlletins per a altes de llum.",
        },
        {
          nombre: "Santa Eulàlia i Granvia Sud",
          texto:
            "Blocs dels seixanta i setanta amb potència curta: pujades de potència, línies noves de cuina i renovació de quadre.",
        },
        {
          nombre: "Bellvitge i Gornal",
          texto:
            "Grans blocs amb molta zona comuna: quadres de serveis comuns, enllumenat d'escala i pàrquing, i línies d'ascensor.",
        },
        {
          nombre: "Centre i Sant Josep",
          texto:
            "Comerç de carrer i oficines: separació de circuits, adequació per a llicències d'activitat i manteniment.",
        },
        {
          nombre: "La Marina i polígons",
          texto:
            "Naus, tallers i magatzems: subministraments trifàsics, quadres de distribució i enllumenat industrial a LED.",
        },
      ],
    },
    secciones: [
      {
        h2: "La ciutat més densa de l'Estat i la seva instal·lació elèctrica",
        parrafos: [
          "L'Hospitalet supera els 20.000 habitants per quilòmetre quadrat. Aquesta densitat no és una dada trivial: condiciona directament com són les instal·lacions que ens trobem.",
          "Vol dir edificis alts amb molts habitatges per escala, i per tant muntants comunitaris que suporten molta més càrrega de la que es va calcular quan es van construir. El símptoma clàssic són les caigudes de tensió a les plantes superiors i els veïns que no aconsegueixen pujar potència perquè la línia que els dona servei no ho admet.",
          "Vol dir també pisos petits on tot és a prop: la cuina, la rentadora i el bany penjant sovint del mateix circuit, quan el reglament actual demana que vagin separats. És la causa de bona part dels magnetotèrmics que salten cada dia a la ciutat.",
          "Quan ens truquen per un problema recurrent en una finca de L'Hospitalet, el primer que mirem és si el problema és del pis o de l'edifici. Dir-ho a temps evita que cada veí gasti pel seu compte en una solució que no arregla res.",
        ],
      },
      {
        h2: "Substitució de quadres: la feina estrella a la ciutat",
        parrafos: [
          "De tot el que fem a L'Hospitalet, la substitució de quadres antics és el més repetit, i té una explicació demogràfica senzilla. La major part del parc es va aixecar abans que el reglament actual existís.",
          "El que obrim habitualment són quadres amb dos o tres elements al costat de la porta, de vegades encara amb fusibles de porcellana, sense cap diferencial o amb un de sol governant tot l'habitatge. En aquest escenari, una fuita a la rentadora deixa sense llum la casa sencera i ningú sap per què.",
          "El canvi es resol en un matí, aprofitant el cablejat existent quan està en condicions. Surts amb circuits separats, un magnetotèrmic per circuit, presa de terra verificada i tot retolat. Si la gestió que tens pendent requereix butlletí, se signa en la mateixa feina.",
        ],
      },
      {
        h2: "Comunitats de Bellvitge i els grans blocs",
        parrafos: [
          "Bellvitge i Gornal tenen un model urbà propi, amb blocs de gran alçada i molta superfície comuna per comunitat. Allà la feina elèctrica s'assembla més a la d'un edifici d'oficines que a la d'una finca de barri.",
          "El que més ens encarreguen és la renovació de l'enllumenat d'escala i pàrquing amb lluminàries LED i detecció de presència, que en blocs d'aquestes dimensions es nota al primer rebut. Després, la posada al dia del quadre de serveis comuns, que sol haver crescut per acumulació durant dècades, i la revisió de les línies d'ascensor i de les bombes.",
          "Treballem amb administradors de finques de tota la ciutat. Lliurem informe escrit i pressupost tancat desglossat per partides, separant el que és urgent del que pot esperar, perquè la junta tingui alguna cosa concreta per votar.",
        ],
      },
    ],
    faqsLocales: [
      {
        pregunta: "Quant trigueu a arribar a L'Hospitalet?",
        respuesta:
          "En urgències, entre 30 i 45 minuts a qualsevol barri. Estem connectats per la Gran Via i la Ronda de Dalt, així que els temps són pràcticament els de Barcelona ciutat.",
      },
      {
        pregunta: "El meu pis de Collblanc no té presa de terra. Té solució?",
        respuesta:
          "Sí, i és més habitual del que sembla en el parc anterior als vuitanta. Es resol portant el conductor de protecció des del quadre fins als circuits i verificant la posada a terra de l'edifici. Sense presa de terra no hi ha butlletí possible, així que és el primer que cal arreglar si tens una gestió pendent.",
      },
      {
        pregunta: "Treballeu amb comunitats de Bellvitge?",
        respuesta:
          "Sí, és de les zones on més comunitats portem. Enllumenat comú, quadres de serveis, ascensor i bombes, amb informe i pressupost per partides per portar a junta.",
      },
      {
        pregunta: "Feu butlletins per a altes de llum a L'Hospitalet?",
        respuesta:
          "Constantment, és la ciutat amb més rotació de lloguer de la nostra zona. Revisem, adaptem l'imprescindible i et gestionem el CIE en 24-48 h amb un instal·lador habilitat.",
      },
      {
        pregunta: "Sou lampistes o electricistes?",
        respuesta:
          "Tant se val com ens diguis: lampista és la paraula catalana i electricista, la castellana, i a L'Hospitalet sentiràs les dues. L'ofici és un de sol. Qui t'obre el quadre és un instal·lador elèctric habilitat, i és qui pot signar el butlletí per a l'alta de llum.",
      },
    ],
  },
  {
    slug: "lampista-terrassa",
    slugEs: "electricista-terrassa",
    nombre: "Terrassa",
    comarca: "Vallès Occidental",
    h1: "Lampista a Terrassa: urgències i instal·ladors habilitats",
    metaTitle: "Lampista a Terrassa | Urgències 24h i butlletins (CIE)",
    metaDescription:
      "Lampista a Terrassa. Substitució de quadres, butlletins (CIE), avaries i urgències 24 h. Preu tancat abans de començar.",
    porQue: [
      "Terrassa és, amb Sabadell, la capital del Vallès Occidental, i les dues comparteixen el mateix origen industrial i el mateix tipus de parc construït. Hi treballem cada dia com a lampistes des de la nostra base de Sabadell, a quinze minuts per la C-58.",
      "El que ens trobem a la ciutat té dues cares. Als barris que van créixer amb la indústria tèxtil, com Ca n'Anglada, Sant Pere Nord o Torre-sana, blocs dels seixanta i setanta amb quadres per renovar i potències mínimes heretades. I al centre i els vapors rehabilitats, instal·lacions industrials adaptades a usos que no estaven previstos quan es van construir.",
    ],
    tambienServicio: {
      intro:
        "Des de Terrassa cobrim el Vallès Occidental sencer, i treballem cada dia als municipis del seu entorn.",
      municipios: [
        "Sabadell",
        "Rubí",
        "Sant Cugat del Vallès",
        "Castellar del Vallès",
        "Matadepera",
      ],
    },
    zonas: {
      h2: "Feines habituals per zona de Terrassa",
      intro: "Cada part de la ciutat té el seu encàrrec característic.",
      items: [
        {
          nombre: "Centre i Vapor Gran",
          texto:
            "Edificis antics i vapors rehabilitats: renovació completa d'instal·lació, butlletins per a compravenda i adequació de locals.",
        },
        {
          nombre: "Ca n'Anglada i Torre-sana",
          texto:
            "Blocs dels seixanta i setanta: substitució de quadres, preses de terra i pujades de potència per a cuines elèctriques.",
        },
        {
          nombre: "Sant Pere i Sant Pere Nord",
          texto:
            "Habitatge dens amb molta comunitat: enllumenat d'escala i pàrquing, quadres de serveis comuns i línies d'ascensor.",
        },
        {
          nombre: "Les Fonts i Can Parellada",
          texto:
            "Cases amb jardí i parcel·la: instal·lacions exteriors, il·luminació, reg i punts de recàrrega en garatge propi.",
        },
        {
          nombre: "Polígons Santa Margarida i Can Petit",
          texto:
            "Naus i tallers: subministraments trifàsics, quadres de distribució, equilibrat de fases i enllumenat industrial.",
        },
      ],
    },
    secciones: [
      {
        h2: "Els vapors: instal·lacions industrials amb usos nous",
        parrafos: [
          "Terrassa conserva un dels conjunts d'arquitectura industrial més importants de Catalunya, i bona part d'aquests vapors s'han anat reconvertint en habitatges, equipaments, oficines i espais de treball.",
          "Aquestes rehabilitacions plantegen un problema tècnic concret: la instal·lació d'origen era industrial, amb subministrament trifàsic, seccions pensades per a maquinària i una distribució que no té res a veure amb la que demana un ús residencial o d'oficines. Moltes conversions es van fer per fases i en anys diferents, així que el que hi ha avui és una superposició de criteris.",
          "Quan entrem en un edifici d'aquests, la primera tasca sol ser aixecar l'esquema real del que existeix, perquè la documentació disponible va deixar de ser certa fa diverses reformes. A partir d'aquí es decideix què s'aprofita i què es refà, i es deixa documentat per al següent.",
        ],
      },
      {
        h2: "Indústria activa: els polígons de Terrassa",
        parrafos: [
          "Més enllà del patrimoni, Terrassa manté activitat industrial real en polígons com Santa Margarida, Can Petit o Els Bellots. És un client amb prioritats diferents de les de l'habitatge.",
          "Aquí el que costa diners no és la reparació, és l'aturada. Per això la feina que més valor aporta és la preventiva: termografia del quadre general per localitzar punts calents abans que es converteixin en avaria, revisions programades aprofitant les aturades de producció, i equilibrat de fases quan la càrrega ha anat creixent de manera desordenada.",
          "També fem renovació d'enllumenat industrial a LED, que en una nau amb moltes hores d'encesa s'amortitza ràpid, i la documentació tècnica que exigeix cada activitat segons la seva potència i el seu tipus de local.",
        ],
      },
      {
        h2: "Quinze minuts des de la nostra base",
        parrafos: [
          "La nostra base és a Sabadell, així que Terrassa queda a un quart d'hora per la C-58. A la pràctica això vol dir dues coses.",
          "En urgències, temps d'arribada curts i reals, no la franja que sona millor per telèfon. I en feines programades, flexibilitat per ajustar la franja horària, que és el que agraeixen els comerços i els locals que no poden parar en hora punta.",
          "Coneixem a més el parc d'habitatge del Vallès Occidental perquè és on més treballem: les dues ciutats comparteixen el mateix origen industrial i els mateixos problemes heretats a les instal·lacions dels barris que van créixer al voltant de les fàbriques.",
        ],
      },
    ],
    faqsLocales: [
      {
        pregunta: "Quant trigueu a arribar a Terrassa?",
        respuesta:
          "En urgències, entre 30 i 40 minuts des de la nostra base de Sabadell per la C-58. En feines programades concertem dia i franja, i la complim.",
      },
      {
        pregunta: "Treballeu en naus i tallers dels polígons?",
        respuesta:
          "Sí. Subministraments trifàsics, quadres de nau, equilibrat de fases, enllumenat industrial i manteniment preventiu amb termografia. Facturem amb CIF i IVA desglossat i albarà de cada intervenció.",
      },
      {
        pregunta: "Visc en un vapor rehabilitat. Podeu amb la instal·lació?",
        respuesta:
          "És de les feines més interessants que fem a Terrassa. Aixequem primer l'esquema real del que hi ha, que gairebé mai coincideix amb els plànols, i a partir d'aquí decidim què s'aprofita i què es refà.",
      },
      {
        pregunta: "Feu butlletins a Terrassa?",
        respuesta:
          "Sí, amb els mateixos terminis que a la resta de la nostra zona: revisió i CIE en 24-48 h, signat per un instal·lador habilitat i tramitat davant d'Indústria.",
      },
      {
        pregunta: "Sou lampistes o electricistes?",
        respuesta:
          "A Terrassa, com a tot el Vallès, en diuen lampista; en castellà, electricista. És un sol ofici amb dos noms. El tècnic que ve és un instal·lador elèctric habilitat amb número de registre, i per tant pot signar el butlletí de la instal·lació.",
      },
    ],
  },
  {
    slug: "lampista-sant-cugat",
    slugEs: "electricista-sant-cugat",
    nombre: "Sant Cugat del Vallès",
    comarca: "Vallès Occidental",
    h1: "Lampista a Sant Cugat: urgències i instal·ladors habilitats",
    metaTitle: "Lampista a Sant Cugat | Urgències 24h i butlletins (CIE)",
    metaDescription:
      "Lampista a Sant Cugat amb instal·ladors habilitats. Cases, punts de recàrrega, butlletins (CIE) i urgències 24 h. Preu tancat abans de començar.",
    porQue: [
      "Sant Cugat és la ciutat de la nostra zona amb més habitatge unifamiliar, i això canvia del tot la feina del lampista. Aquí no dominen els pisos de seixanta metres amb potència curta, sinó cases amb jardí, piscina, reg, garatge i diversos cotxes, moltes a Valldoreix, Mira-sol, la Floresta i les Planes. Instal·lacions grans, amb quadres secundaris repartits i preses exteriors que pateixen la intempèrie.",
      "És també on més punts de recàrrega instal·lem: cases amb garatge propi on el carregador entra sense discussió de junta, i comunitats del centre i de Coll Favà que estan preparant el pàrquing per a diversos vehicles alhora. A això s'hi suma el teixit d'oficines i parcs empresarials de la zona de Sant Joan i l'estació, amb manteniments i ampliacions. Arribem des de Sabadell en 20-30 minuts.",
    ],
    tambienServicio: {
      intro:
        "Sant Cugat és la nostra porta al Vallès més residencial. Des d'aquí treballem cada dia a Valldoreix i Mira-sol, pugem a Rubí i a Terrassa per l'autopista i baixem a Cerdanyola i Barberà en qüestió de minuts. Mateix equip i mateix preu tancat a tots ells.",
      municipios: [
        "Rubí",
        "Cerdanyola del Vallès",
        "Barberà del Vallès",
        "Sabadell",
        "Terrassa",
      ],
    },
    zonas: {
      h2: "Lampista a Sant Cugat, zona a zona",
      intro:
        "El municipi és molt extens i cada nucli té el seu propi tipus d'instal·lació i d'avaria.",
      items: [
        {
          nombre: "Centre i Monestir",
          texto:
            "Pisos i cases de poble al nucli antic: instal·lacions amb dècades al damunt, quadres per renovar, butlletins per a compravenda i locals comercials de l'eix de vianants.",
        },
        {
          nombre: "Valldoreix",
          texto:
            "Parcel·les grans amb jardí i piscina: quadres secundaris, reg i enllumenat exterior, depuradores, preses estanques i punts de recàrrega en garatge propi.",
        },
        {
          nombre: "Mira-sol i la Floresta",
          texto:
            "Cases entre bosc, moltes ampliades per fases: circuits afegits sense criteri, derivacions per humitat i renovació completa amb butlletí.",
        },
        {
          nombre: "Coll Favà, Sant Joan i Volpelleres",
          texto:
            "Blocs i comunitats recents: pàrquings preparats per a diversos punts de recàrrega, quadres de serveis comuns i enllumenat de zones enjardinades.",
        },
        {
          nombre: "Parcs empresarials i oficines",
          texto:
            "Oficines i naus de l'entorn de l'estació i Can Sant Joan: manteniment, quadres de distribució, enllumenat LED i ampliacions de potència.",
        },
      ],
    },
    secciones: [
      {
        h2: "Cases amb jardí: la instal·lació que ningú mira fins que falla",
        parrafos: [
          "En una casa de Valldoreix o Mira-sol la instal·lació elèctrica no s'acaba al quadre del rebedor. Hi ha reg automàtic, enllumenat de jardí, bomba i depuradora de piscina, porta de garatge motoritzada, porter de la tanca i sovint un quadre secundari al soterrani o en un annex. Tot això viu a la intempèrie o a prop, i és la part que envelleix primer.",
          "El patró que més veiem és el de la casa ampliada per fases. Es va tancar un porxo, es va posar la piscina deu anys després i es va afegir l'aire condicionat més tard, i cada intervenció va penjar d'on hi havia lloc al quadre. El resultat és un quadre sense marge, circuits que barregen interior i exterior, i un diferencial general que salta quan plou i deixa a les fosques la casa sencera per culpa d'una presa del jardí.",
          "La feina aquí és posar ordre. Separar els circuits d'exterior en el seu propi diferencial perquè una humitat al jardí no et tiri la casa, revisar les preses estanques, comprovar la posada a terra, que en parcel·la sol ser millorable, i deixar el quadre amb marge per al que vingui després. Es fa en una o dues jornades i amb butlletí en acabar si la instal·lació ho requereix.",
        ],
      },
      {
        h2: "Punts de recàrrega: és on més n'instal·lem",
        parrafos: [
          "Sant Cugat concentra una de les densitats més altes de vehicle elèctric de l'àrea de Barcelona, i aquí el punt de recàrrega es resol de dues maneres molt diferents segons on visquis.",
          "En casa unifamiliar és l'escenari senzill: hi ha garatge propi, la línia surt del quadre de l'habitatge i l'única decisió de fons és si la potència contractada aguanta carregar mentre funciona la resta de la casa. Quan no aguanta, no sempre cal pujar potència: un sistema de gestió de càrrega adapta el consum del carregador al que sobra en cada moment, i surt millor que pagar més terme de potència tot l'any.",
          "En comunitat cal fer-ho bé des del principi. La llei permet instal·lar el punt de recàrrega sense que la junta ho aprovi, n'hi ha prou amb comunicar-ho, però això no vol dir tirar un cable com es pugui. El correcte és una preinstal·lació amb línia pròpia des de la centralització i capacitat perquè després vinguin altres veïns sense refer res. Als pàrquings de Coll Favà i Volpelleres ho hem fet ja diverses vegades, i surt molt més barata una preinstal·lació conjunta que cinc instal·lacions soltes.",
        ],
      },
      {
        h2: "Quant triguem a arribar i com treballem aquí",
        parrafos: [
          "La nostra base és a Sabadell, a vint minuts per la C-58 o per la B-30 segons l'hora. En urgències això vol dir entre 25 i 35 minuts al centre de Sant Cugat, una mica més als nuclis dispersos de la Floresta o les Planes, on l'accés és més lent. Preferim donar-te una franja que es compleix.",
          "En feines programades en cases treballem amb una particularitat que aquí importa: la majoria són habitatges ocupats i amb gent teletreballant. Organitzem els talls de subministrament per circuits i avisem amb antelació de quant durarà cadascun, perquè ningú es quedi sense llum a mitja reunió. És un detall que no costa res i que evita el 90% dels problemes.",
          "Per a les comunitats i les oficines dels parcs empresarials facturem amb CIF i IVA desglossat, i oferim revisió periòdica de la instal·lació amb informe per escrit. És la fórmula que fan servir la majoria d'administradors amb qui treballem al Vallès.",
        ],
      },
    ],
    faqsLocales: [
      {
        pregunta: "Quant triga un lampista a arribar a Sant Cugat?",
        respuesta:
          "En urgències, entre 25 i 35 minuts al centre des de la nostra base de Sabadell. A Valldoreix i Mira-sol, similar; a la Floresta i les Planes pot pujar una mica per l'accés.",
      },
      {
        pregunta: "Tinc casa amb piscina i jardí i em salta el diferencial quan plou. Què és?",
        respuesta:
          "Gairebé sempre una presa o una caixa de l'exterior que ha perdut estanquitat, o la bomba de la piscina. El problema de fons és que el jardí comparteix diferencial amb la casa. Es localitza mesurant circuit per circuit i es resol separant l'exterior en el seu propi diferencial.",
      },
      {
        pregunta: "Podeu instal·lar un punt de recàrrega a casa meva de Valldoreix?",
        respuesta:
          "Sí, és de les feines que més fem a Sant Cugat. Revisem el quadre i la potència contractada, i si la potència es queda justa et proposem un sistema de gestió de càrrega abans que pujar-la: sol sortir millor.",
      },
      {
        pregunta: "Visc en un pis de Coll Favà. Necessito permís de la comunitat per al carregador?",
        respuesta:
          "No necessites l'aprovació de la junta, n'hi ha prou amb comunicar-ho per escrit al president o a l'administrador. Ara bé, si hi ha més veïns interessats convé plantejar una preinstal·lació conjunta del pàrquing: surt bastant més barata que instal·lacions soltes.",
      },
      {
        pregunta: "Estic comprant una casa a Mira-sol. Reviso la instal·lació abans?",
        respuesta:
          "Sí, i abans de signar arres. En cases ampliades per fases és on més sorpreses apareixen: quadres sense marge, circuits barrejats i posades a terra insuficients. Saber-ho abans et dona marge per negociar qui assumeix l'adaptació.",
      },
      {
        pregunta: "Treballeu amb oficines i comunitats de Sant Cugat?",
        respuesta:
          "Sí: manteniment periòdic, quadres de serveis comuns, enllumenat LED i ampliacions de potència, amb factura amb CIF i IVA desglossat i informe escrit de cada revisió.",
      },
      {
        pregunta: "Sou lampistes o electricistes?",
        respuesta:
          "Les dues paraules volen dir el mateix: lampista en català, electricista en castellà. No hi ha cap diferència en l'ofici ni en la feina que fem a Sant Cugat. Qui puja a casa teva és un instal·lador elèctric habilitat, i és qui signa el butlletí quan la instal·lació ho requereix.",
      },
    ],
  },
];

export function getCiudadCa(slug: string): Ciudad | undefined {
  return ciudadesCa.find((c) => c.slug === slug);
}
