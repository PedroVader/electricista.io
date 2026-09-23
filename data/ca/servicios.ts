import type { CardExtra, Servicio } from "../tipos";

/**
 * Serveis del vertical en català. Les pàgines /ca/[slug] es generen des d'aquest
 * arxiu. Regla global: CAP import en euros publicat.
 */

export const serviciosCa: Servicio[] = [
  {
    slug: "electricistes-urgents-24-hores",
    slugEs: "electricistas-urgentes-24-horas",
    nombre: "Urgències 24h",
    card: {
      titulo: "Urgències 24h",
      linea: "Sense llum, curtcircuit o salta el diferencial: venim avui.",
      icono: "reloj",
      destacada: true,
      animada: true,
    },
    h1: "Electricistes urgents 24 hores a Barcelona i el Vallès",
    heroSub:
      "T'has quedat sense llum, fa olor de cremat o el diferencial no para de saltar. Truca'ns: et diem preu tancat per telèfon i sortim ara mateix.",
    heroImage: "/img/hero-urgencias-24h.jpg",
    metaTitle: "Electricistes urgents 24 hores a Barcelona i Vallès",
    metaDescription:
      "Electricistes 24 hores a Barcelona, Sabadell, Terrassa i tot el Vallès. Urgències elèctriques ateses avui, preu tancat abans de començar.",
    urgencias: true,
    queIncluye: [
      {
        titulo: "Diagnòstic al moment",
        texto:
          "Localitzem l'avaria tan bon punt arribem: diferencial, magnetotèrmic, derivació o curtcircuit.",
      },
      {
        titulo: "Reparació a la mateixa visita",
        texto:
          "A la majoria d'urgències deixem la instal·lació funcionant el mateix dia.",
      },
      {
        titulo: "Preu tancat per telèfon",
        texto:
          "Abans de sortir et diem què costa. Sense sorpreses en acabar, tampoc de matinada.",
      },
      {
        titulo: "Instal·lador habilitat",
        texto:
          "Qui ve és un instal·lador habilitat amb el seu número de registre, no un manetes. Si cal butlletí, ell el signa i nosaltres el tramitem.",
      },
    ],
    secciones: [
      {
        h2: "Urgències que atenem a qualsevol hora",
        parrafos: [
          "Una urgència elèctrica no espera a horari d'oficina. Aquestes són les trucades que més rebem:",
        ],
        bullets: [
          "Ha marxat la llum a tota la casa i no torna",
          "El diferencial salta cada cop que el puges",
          "Olor de cremat en endolls, quadre o regletes",
          "Espurnes en endollar o en encendre el llum",
          "Un curtcircuit ha deixat mitja casa sense corrent",
          "El local o la comunitat s'ha quedat sense subministrament",
        ],
      },
      {
        h2: "Com funciona una urgència amb nosaltres",
        parrafos: [
          "1. Ens truques i ens expliques què passa. Amb dos minuts n'hi ha prou.",
          "2. Et donem preu tancat de la sortida i el diagnòstic per telèfon.",
          "3. Surt l'electricista de guàrdia. Repara a la mateixa visita sempre que és possible.",
          "Si l'avaria destapa un problema més gran (quadre antic, instal·lació fora de normativa), t'ho expliquem i et passem pressupost tancat per escrit. Tu decideixes.",
        ],
      },
      {
        h2: "Què fer els primers cinc minuts",
        parrafos: [
          "Mentre arribem, el que facis ara importa. Aquestes són les pautes que donem per telèfon, per ordre de gravetat.",
          "Si fa olor de cremat o veus fum, abaixa l'interruptor general del quadre i no el tornis a pujar sota cap concepte, encara que sembli que ja no passa res. L'olor de plàstic calent vol dir que alguna cosa s'està degradant per dins, i tornar a donar tensió és exactament el que no s'ha de fer. Ventila i surt de l'habitació afectada.",
          "Si hi ha aigua en contacte amb la instal·lació, per una gotera o una inundació, talla el general abans de tocar res i no trepitgis la zona mullada fins que ho hagis fet. És la situació que més accidents domèstics provoca i la que la gent més subestima.",
          "Si algú ha rebut una descàrrega, no el toquis mentre continuï en contacte amb el corrent: talla primer el subministrament des del quadre i truca al 112. Una descàrrega que sembla lleu pot donar problemes de ritme cardíac hores després, així que és millor que ho valori un metge encara que la persona digui que està bé.",
          "I si simplement t'has quedat sense llum, comprova abans de res si els veïns també. Si és tota la finca o tot el carrer, és un tall de la distribuïdora i aquí no hi ha cap avaria teva a reparar.",
        ],
      },
      {
        h2: "Per què en resolem la majoria a la mateixa visita",
        parrafos: [
          "Una urgència que acaba en «demà torno amb la peça» no és una urgència resolta, és una visita cobrada. Per això l'electricista de guàrdia surt amb el material de recanvi habitual ja carregat.",
          "A la furgoneta hi van diferencials i magnetotèrmics dels calibres més usats, mecanismes d'endoll i interruptor, cable de les seccions habituals, material per refer caixes de derivació, portalàmpades i equips d'enllumenat, i l'instrumental de mesura per localitzar l'avaria en lloc d'anar provant: pinça amperimètrica, mesurador d'aïllament i detector de traces per seguir un cable per dins de la paret.",
          "Amb això resolem al moment la gran majoria d'avisos. El que no es pot improvisar és una peça específica d'un equip concret, un quadre complet a mida o una actuació que requereixi obra. En aquests casos deixem la instal·lació en situació segura i amb el màxim de servei possible, i et diem amb data quan es remata i per quant.",
        ],
      },
      {
        h2: "Urgències que no són urgències (i t'estalvien diners)",
        parrafos: [
          "Això no ens convé explicar-ho, però preferim dir-ho. No tot el que espanta necessita una sortida de guàrdia a les tres de la matinada, i una sortida nocturna o en festiu costa més que una visita programada l'endemà.",
          "Poden esperar a horari normal: un endoll concret que ha deixat de funcionar mentre la resta de la casa va bé, un llum o un punt d'enllumenat fos, un magnetotèrmic que només salta en fer servir un aparell determinat (n'hi ha prou amb no fer-lo servir), o el timbre i el porter automàtic espatllats. Res d'això empitjora per esperar unes hores.",
          "No poden esperar: qualsevol olor de cremat, espurnes, un quadre o un mecanisme calent al tacte, notar formigueig en tocar un electrodomèstic o una aixeta, aigua sobre la instal·lació, un local sense subministrament amb gènere refrigerat, i un ascensor o una bomba d'esgotament aturats en una comunitat.",
          "Quan truquis t'ho direm amb la mateixa franquesa. Si el teu cas pot esperar, t'ho diem i et donem hora per a l'endemà, encara que això vulgui dir facturar menys avui.",
        ],
      },
    ],
    faqs: [
      {
        pregunta: "De debò veniu avui?",
        respuesta:
          "Sí. Per a urgències tenim electricista de guàrdia cada dia. A Barcelona i àrea metropolitana el temps d'arribada habitual és de menys d'una hora.",
      },
      {
        pregunta: "Quant costa una urgència?",
        respuesta:
          "Depèn de l'horari i de l'avaria. Et donem el preu tancat per telèfon abans de sortir, i aquest és el preu. No publiquem tarifes perquè cada cas és diferent: demanar-lo no costa res.",
      },
      {
        pregunta: "Treballeu de nit i en festius?",
        respuesta:
          "Sí, 24 hores els 365 dies. L'horari afecta el preu i t'ho diem abans, no després.",
      },
      {
        pregunta: "Què faig mentre arriba l'electricista?",
        respuesta:
          "Si fa olor de cremat o hi ha espurnes, abaixa l'interruptor general del quadre i no el tornis a pujar. Desendolla el que hi havia connectat a la zona afectada.",
      },
    ],
  },
  {
    slug: "electricista-urgent-barcelona",
    slugEs: "electricista-urgente-barcelona",
    nombre: "Urgent Barcelona",
    card: {
      titulo: "Urgent a Barcelona",
      linea: "Electricista de guàrdia a Barcelona ciutat, avui mateix.",
      icono: "rapido",
    },
    h1: "Electricista urgent a Barcelona",
    heroSub:
      "Electricista de guàrdia a Barcelona ciutat. Arribem a qualsevol districte en menys d'una hora, amb preu tancat per telèfon.",
    heroImage: "/img/hero-urgente-barcelona.jpg",
    metaTitle: "Electricista urgent a Barcelona 24h, avui mateix",
    metaDescription:
      "Electricista urgent a Barcelona. Arribada en menys d'1h a qualsevol districte, 24 hores. Preu tancat per telèfon abans de sortir.",
    urgencias: true,
    queIncluye: [
      {
        titulo: "Cobertura a tot Barcelona",
        texto:
          "Eixample, Gràcia, Sants, Sant Martí, Sant Andreu, Les Corts, Sarrià-Sant Gervasi, Horta, Nou Barris i Ciutat Vella.",
      },
      {
        titulo: "Arribada en menys d'1 hora",
        texto:
          "L'electricista de guàrdia es mou per la ciutat. A la majoria d'avisos el lampista és a la teva porta en 45-60 minuts.",
      },
      {
        titulo: "Preu tancat per telèfon",
        texto:
          "Et diem el cost de la sortida i el diagnòstic abans d'anar-hi. Sense recàrrecs sorpresa en acabar.",
      },
      {
        titulo: "Reparació amb garantia",
        texto:
          "Instal·lador habilitat, materials homologats i garantia per escrit de la reparació.",
      },
    ],
    secciones: [
      {
        h2: "Urgències elèctriques en pisos i finques antigues de Barcelona",
        parrafos: [
          "Bona part de les urgències que atenem a Barcelona vénen d'instal·lacions amb dècades de vida: quadres sense diferencial, cablejat antic i derivacions que fan saltar la llum. És l'habitual en moltes finques de l'Eixample, Gràcia o Ciutat Vella.",
          "Reparem l'avaria avui i, si la teva instal·lació necessita una actualització per no repetir l'ensurt, t'ho diem amb un pressupost tancat a part. Mai no barregem les dues coses.",
        ],
      },
      {
        h2: "També atenem comerços i comunitats",
        parrafos: [
          "Un local sense llum perd diners cada hora. Donem prioritat a comerços, restaurants i comunitats de veïns amb el subministrament caigut. Si administres finques, guarda't el nostre telèfon: et resolem la urgència i t'enviem la factura com a empresa, amb l'IVA desglossat.",
        ],
      },
      {
        h2: "Urgències en finques antigues: què ens hi trobem",
        parrafos: [
          "Barcelona té un dels parcs d'habitatge més antics de l'Estat, i això marca el perfil de les urgències que atenem a la ciutat. No treballem igual en una finca del 1920 de l'Eixample que en una torre dels anys dos mil de Diagonal Mar.",
          "En finca antiga l'avaria gairebé mai no és on sembla. El quadre és al costat de la porta, les derivacions es van fer en dècades diferents i amb criteris diferents, i bona part del recorregut passa pel celobert, que és humit i mal ventilat. Localitzar el punt exacte exigeix mesurar circuit per circuit, i per això el diagnòstic és una part de la feina tan important com la reparació.",
          "Hi ha a més un factor que sorprèn molta gent: en finques amb instal·lació centenària és freqüent que l'avaria que t'ha deixat sense llum sigui el símptoma i no la causa. Reparem el que t'ha deixat a les fosques avui, et diem clarament què hem vist de la resta de la instal·lació, i t'ho pressupostem a part i per escrit. Mai no aprofitem una urgència per vendre una reforma.",
        ],
      },
      {
        h2: "Comunitats i locals: qui paga què",
        parrafos: [
          "És el dubte que més discussions genera quan la urgència passa en un edifici de veïns, i convé tenir-lo clar abans que passi.",
          "La frontera és al comptador. Del comptador cap a l'interior del teu habitatge o local, la instal·lació és privativa i el cost és del propietari. Del comptador cap enrere (muntants, centralització de comptadors, línia general d'alimentació, quadre de serveis comuns, enllumenat d'escala i pàrquing, ascensor, bombes) és instal·lació comuna i el cost és de la comunitat.",
          "A la pràctica, quan arribem a una urgència en una finca, el primer que determinem és de quin costat és l'avaria, i ho deixem per escrit al full de treball. Si és comuna, facturem a la comunitat amb CIF i IVA desglossat i amb el detall que necessita l'administrador per justificar-ho. Si és privativa, al propietari.",
          "Per a locals d'hostaleria i comerç donem prioritat de resposta, perquè un restaurant sense llum a les vuit del vespre o una cambra frigorífica aturada tenen un cost per hora que un habitatge no té.",
        ],
      },
      {
        h2: "Els deu districtes, amb temps realistes",
        parrafos: [
          "Cobrim tota la ciutat, però no totes les zones són a la mateixa distància ni tenen el mateix accés, i preferim dir-te una franja que es compleixi abans que una que soni bé.",
          "A la part central i plana de la ciutat (Eixample, Gràcia, Sants-Montjuïc, Sant Martí, Les Corts, Ciutat Vella) l'habitual són entre 30 i 45 minuts. A les zones altes i amb desnivell, com bona part d'Horta-Guinardó, Nou Barris i la part alta de Sarrià-Sant Gervasi, el temps puja una mica per accés i pendent. A Sant Andreu depèn força del punt exacte.",
          "L'aparcament a Barcelona és problema nostre, no teu, i no el repercutim a la factura. Si al teu carrer no hi ha manera de parar, aparquem on es pugui i pugem a peu amb el material.",
        ],
      },
    ],
    faqs: [
      {
        pregunta: "Quant triga un electricista urgent a arribar a Barcelona?",
        respuesta:
          "L'habitual és entre 45 minuts i una hora, segons el districte i l'hora del dia. Et donem una franja concreta en trucar.",
      },
      {
        pregunta: "Cobriu tota la ciutat?",
        respuesta:
          "Sí, els deu districtes. També L'Hospitalet de Llobregat, Badalona, Santa Coloma de Gramenet i la resta de l'àrea metropolitana.",
      },
      {
        pregunta: "Com sé quant em costarà?",
        respuesta:
          "T'ho diem per telèfon abans de sortir: preu tancat de sortida i diagnòstic, i preu tancat de la reparació tan bon punt veiem l'avaria. Res de tarifes ocultes.",
      },
    ],
  },
  {
    slug: "butlleti-electric",
    slugEs: "boletin-electrico",
    nombre: "Butlletí elèctric (CIE)",
    card: {
      titulo: "Butlletí elèctric (CIE)",
      linea: "Per a alta de llum, pujada de potència o reformes. En 24-48h.",
      icono: "boletin",
      destacada: true,
    },
    h1: "Butlletí elèctric (CIE) a Barcelona en 24-48 hores",
    heroSub:
      "Et demana la comercialitzadora un butlletí per donar d'alta la llum o pujar potència? El signa un instal·lador habilitat i el tramitem nosaltres. Preu tancat per endavant.",
    heroImage: "/img/hero-boletin.jpg",
    metaTitle: "Butlletí elèctric a Barcelona (CIE) en 24-48h",
    metaDescription:
      "Butlletí elèctric (CIE) a Barcelona en 24-48h. Instal·ladors habilitats: revisió, signatura i tramitació. Preu tancat abans de començar.",
    ctaFrecuente: true,
    queIncluye: [
      {
        titulo: "Revisió de la instal·lació",
        texto:
          "Un instal·lador habilitat comprova que la teva instal·lació compleix el reglament abans de signar res.",
      },
      {
        titulo: "Signatura del butlletí",
        texto:
          "L'instal·lador habilitat signa el CIE (Certificat d'Instal·lació Elèctrica) o el butlletí de reconeixement, segons el teu cas.",
      },
      {
        titulo: "Tramitació completa",
        texto:
          "El registrem davant d'Indústria i te'l deixem a punt per presentar a la teva comercialitzadora.",
      },
      {
        titulo: "Adaptacions si cal",
        texto:
          "Si la instal·lació no passa, et donem pressupost tancat del que cal perquè passi. Tu decideixes.",
      },
    ],
    secciones: [
      {
        h2: "Què és el butlletí elèctric i quan el necessites?",
        parrafos: [
          "El butlletí elèctric, oficialment CIE (Certificat d'Instal·lació Elèctrica), és el document que acredita que la teva instal·lació compleix el reglament. Només el pot signar un instal·lador habilitat.",
          "El necessites en aquests casos:",
        ],
        bullets: [
          "Alta de llum en un pis o local que fa temps que no té subministrament",
          "Pujada de potència contractada",
          "Reforma que toca la instal·lació elèctrica",
          "Instal·lacions antigues: la comercialitzadora pot exigir-lo si el teu butlletí té més de 20 anys",
          "Canvi d'ús de l'immoble (de local a habitatge, per exemple)",
        ],
      },
      {
        h2: "Butlletí blau i butlletí blanc: quin et demanen",
        parrafos: [
          "A Catalunya es parla de dos butlletins i es confonen molt. El butlletí blau és un reconeixement d'una instal·lació que ja existeix. L'instal·lador la revisa i certifica que pot continuar en servei. És el que demanen per a altes de llum en pisos antics on no s'ha fet obra.",
          "El butlletí blanc és el CIE pròpiament dit: es fa quan la instal·lació és nova o s'ha modificat (reforma, ampliació, pujada de potència amb canvis).",
          "Si no saps quin t'estan demanant, envia'ns el correu de la teva comercialitzadora i t'ho diem el mateix dia, sense compromís.",
        ],
      },
      {
        h2: "Qui pot signar un butlletí?",
        parrafos: [
          "Només un instal·lador elèctric habilitat, inscrit al registre d'empreses instal·ladores. Ni un manetes, ni un tècnic sense habilitació, ni l'administrador de la finca. Un butlletí signat per qui no toca no val davant d'Indústria ni davant de la teva comercialitzadora.",
          "Tots els butlletins que gestionem els signa un instal·lador habilitat inscrit al registre oficial, amb el seu número. Si ho vols comprovar, demana-nos-ho i et donem la dada abans de contractar: el registre d'instal·ladors és públic.",
        ],
      },
      {
        h2: "Quant costa i quant triga?",
        parrafos: [
          "El preu depèn de si la instal·lació passa la revisió a la primera o necessita adaptacions, i de la mida de l'habitatge o local. Per això no publiquem una xifra: et donem preu tancat per escrit abans de començar, en menys de 2 hores, i aquest és el preu.",
          "Els terminis sí que són estàndard. Revisió i signatura en 24-48 hores des de la teva trucada.",
        ],
      },
      {
        h2: "El butlletí caduca? Què passa amb la tramitació?",
        parrafos: [
          "El CIE no té una caducitat formal, però les comercialitzadores solen rebutjar butlletins de més de 20 anys en fer gestions. Si el teu és d'aquella època, compta que l'hauràs de renovar.",
          "De la tramitació ens n'ocupem nosaltres: registrem el certificat davant del departament d'Indústria de la Generalitat i et lliurem el document tal com te'l demana la teva comercialitzadora (Endesa, Iberdrola, Naturgy o qualsevol altra) per donar l'alta o ampliar potència. Tu només l'adjuntes a la teva gestió.",
        ],
      },
    ],
    faqs: [
      {
        pregunta: "Quant costa un butlletí elèctric a Barcelona?",
        respuesta:
          "Depèn de la mida de la instal·lació i de si necessita adaptacions per complir el reglament. Et donem preu tancat per escrit abans de començar, gratis i en menys de 2 hores.",
      },
      {
        pregunta: "Quant triga?",
        respuesta:
          "Revisió i signatura en 24-48 hores a la majoria de casos. Si cal fer adaptacions, el termini depèn de la feina i t'ho diem al pressupost.",
      },
      {
        pregunta: "Quina diferència hi ha entre butlletí blau i blanc?",
        respuesta:
          "El blau certifica una instal·lació existent que no s'ha modificat (reconeixement). El blanc (CIE) es fa per a instal·lacions noves o modificades. La teva comercialitzadora et dirà quin exigeix; si tens dubtes, t'ho aclarim gratis.",
      },
      {
        pregunta: "Em val un butlletí signat per un amic electricista?",
        respuesta:
          "Només si és instal·lador habilitat inscrit al registre. Si no, Indústria i la comercialitzadora el rebutjaran.",
      },
      {
        pregunta: "I si la meva instal·lació no passa la revisió?",
        respuesta:
          "T'expliquem exactament què falla i et donem pressupost tancat de les adaptacions. Sense compromís: el diagnòstic no t'obliga a fer l'obra amb nosaltres.",
      },
    ],
  },
  {
    slug: "averies-electriques",
    slugEs: "averias-electricas",
    nombre: "Avaries i curtcircuits",
    card: {
      titulo: "Avaries i curtcircuits",
      linea: "Salta la llum, endolls morts, olor de cremat. Ho trobem.",
      icono: "averia",
    },
    h1: "Avaries elèctriques a Barcelona: les trobem i les reparem",
    heroSub:
      "Marxa la llum, salta el diferencial, hi ha endolls que no funcionen. Localitzem la causa, et donem preu tancat i ho reparem.",
    heroImage: "/img/hero-averias.jpg",
    metaTitle: "Avaries elèctriques i curtcircuits a Barcelona",
    metaDescription:
      "Reparació d'avaries elèctriques a Barcelona: diferencial que salta, curtcircuits, endolls sense corrent. Preu tancat.",
    queIncluye: [
      {
        titulo: "Localització de l'avaria",
        texto:
          "Amb mesura i comprovació de circuits, no a ull. Trobem la causa, no només el símptoma.",
      },
      {
        titulo: "Reparació amb garantia",
        texto:
          "Substituïm el que està fet malbé amb material homologat i et deixem la instal·lació provada.",
      },
      {
        titulo: "Informe clar",
        texto:
          "T'expliquem què ha passat i com evitar que es repeteixi. Sense tecnicismes innecessaris.",
      },
      {
        titulo: "Preu tancat",
        texto:
          "Diagnòstic amb preu comunicat per endavant i reparació pressupostada abans de tocar res.",
      },
    ],
    secciones: [
      {
        h2: "Avaries que resolem cada setmana",
        parrafos: ["Si alguna d'aquestes et sona, és de les més comunes:"],
        bullets: [
          "El diferencial salta en connectar un electrodomèstic concret",
          "“Marxa la llum” de manera aleatòria, sobretot de nit",
          "Endolls o habitacions senceres sense corrent",
          "Llums que parpellegen o perden intensitat",
          "Curtcircuit després d'una obra, una gotera o un temporal",
          "Quadre que fa soroll, fa olor estranya o s'escalfa",
        ],
      },
      {
        h2: "Per què no convé esperar",
        parrafos: [
          "Una derivació o un cable fet malbé no s'arreglen sols: empitjoren. El que avui és un diferencial que salta de tant en tant pot acabar en un cable cremat dins de la paret. Com abans es localitza, més barata és la reparació.",
          "Si l'avaria és urgent (sense llum, olor de cremat, espurnes), passa a la nostra línia d'urgències 24h i venim avui.",
        ],
      },
      {
        h2: "Com localitzem una avaria: mesurar en lloc d'endevinar",
        parrafos: [
          "La diferència entre una reparació que dura i una que et torna el problema al cap de dues setmanes és gairebé sempre al diagnòstic. I un diagnòstic seriós és una mesura, no una inspecció visual.",
          "El mètode que seguim és sempre el mateix. Primer acotem: quin circuit està afectat i en quines condicions apareix la fallada. Després mesurem l'aïllament d'aquest circuit, que és el que revela si hi ha una fuita de corrent i de quina magnitud. Comprovem la continuïtat del conductor de protecció per saber si la presa de terra arriba de veritat fins al punt afectat. Verifiquem la caiguda de tensió sota càrrega, que és el que delata una connexió fluixa o una secció insuficient. I on cal seguir un cable per dins de la paret, fem servir detector de traces en lloc de picar a cegues.",
          "Tot això dóna números, no opinions. Amb aquests números sabem si el que tens és un mecanisme espatllat, una derivació per humitat, un empalmament mal fet o un problema de fons a la instal·lació. I tu saps per què t'estem proposant una cosa i no una altra.",
        ],
      },
      {
        h2: "Les avaries intermitents, que són les difícils",
        parrafos: [
          "L'avaria que apareix i desapareix és la que més vegades ens arriba després que algú altre hagi intentat arreglar-la. I té explicació: si la fallada no hi és quan l'electricista arriba, no hi ha res a mesurar.",
          "Les causes habituals d'una fallada intermitent són quatre: una connexió fluixa que fa contacte segons la temperatura o les vibracions, humitat que només apareix amb la pluja o en dutxar-se, un aparell que fuga únicament quan entra la seva resistència (el termo és l'exemple clàssic), i la degradació d'un mecanisme que encara no ha fallat del tot.",
          "El que fem en aquests casos és diferent: en lloc de buscar la fallada al moment, busquem el rastre que deixa. Un punt calent, un contacte oxidat, un valor d'aïllament que és baix però encara no dispara. Quan tot i així no apareix, podem deixar el circuit registrant per capturar l'esdeveniment quan passi.",
          "Si t'han vingut a mirar el mateix dues o tres vegades sense resultat, explica'ns-ho en trucar: ens estalvia repetir el camí que ja no va funcionar.",
        ],
      },
      {
        h2: "El que mai no fem en una reparació",
        parrafos: [
          "Hi ha dreceres que són habituals a l'ofici i que nosaltres no fem servir, perquè et deixen el problema ajornat en lloc de resolt:",
        ],
        bullets: [
          "Posar un magnetotèrmic de més calibre perquè deixi de saltar, deixant el cable treballant per sobre del seu límit",
          "Substituir un diferencial que dispara sense corregir abans la fuita que el fa disparar",
          "Empalmar fora de caixa de registre, encara que quedi amagat i ningú no ho vegi mai",
          "Donar per bona una presa de terra sense haver-la mesurat",
          "Aprofitar una avaria per vendre't una reforma que avui no et cal",
        ],
      },
    ],
    faqs: [
      {
        pregunta: "Quant costa trobar una avaria?",
        respuesta:
          "El diagnòstic té un preu tancat que et diem per telèfon abans d'anar-hi. La reparació es pressuposta a part quan sabem què falla, sempre per escrit i abans de començar.",
      },
      {
        pregunta: "El diferencial només salta de tant en tant. Val la pena trucar?",
        respuesta:
          "Sí. Un diferencial que salta de manera intermitent gairebé sempre és una derivació en un electrodomèstic o a la instal·lació. És de les avaries que més creixen si es deixen passar.",
      },
      {
        pregunta: "Podeu venir fora d'horari laboral?",
        respuesta:
          "Sí. Si no és urgent, concertem la visita quan et vagi bé, inclosa la franja de tarda. Si és urgent, tenim guàrdia 24h.",
      },
      {
        pregunta: "La reparació té garantia?",
        respuesta:
          "Sí, per escrit. Cobreix la mà d'obra i els materials que instal·lem.",
      },
    ],
  },
  {
    slug: "canvi-quadre-electric",
    slugEs: "cambio-cuadro-electrico",
    nombre: "Canvi de quadre elèctric",
    card: {
      titulo: "Canvi de quadre elèctric",
      linea: "Adéu als fusibles: quadre modern amb diferencial i PIA.",
      icono: "cuadro",
    },
    h1: "Canvi de quadre elèctric a Barcelona: seguretat al dia en un matí",
    heroSub:
      "Si el teu quadre té fusibles, no té diferencial o salta sense motiu, toca canviar-lo. Fem substitució de quadres antics i muntatge de quadres nous, en una visita i amb butlletí si el necessites.",
    heroImage: "/img/hero-cuadro.jpg",
    metaTitle: "Canvi i substitució de quadres elèctrics a Barcelona",
    metaDescription:
      "Substitució de quadres antics i muntatge de quadres nous a Barcelona. Instal·lat en un matí, amb butlletí (CIE) si el necessites.",
    queIncluye: [
      {
        titulo: "Quadre nou normalitzat",
        texto:
          "Diferencial, magnetotèrmics (PIA) per circuit i protecció contra sobretensions si la vols.",
      },
      {
        titulo: "Instal·lació en una visita",
        texto:
          "A la majoria d'habitatges, el canvi complet es fa en un matí. Et quedes sense llum només unes hores.",
      },
      {
        titulo: "Butlletí si el necessites",
        texto:
          "Treballem amb instal·ladors habilitats: si la teva gestió requereix CIE, es signa amb la mateixa feina.",
      },
      {
        titulo: "Retirada del quadre antic",
        texto: "Ens enduem el material vell i et deixem la zona neta.",
      },
    ],
    secciones: [
      {
        h2: "Senyals que el teu quadre necessita un canvi",
        parrafos: [
          "El quadre és el guardià de la teva instal·lació. Si és d'una altra època, no et protegeix com hauria de fer-ho:",
        ],
        bullets: [
          "Encara té fusibles de ceràmica o “ploms”",
          "No hi ha diferencial, o n'hi ha un de sol per a tota la casa",
          "Salta sencer quan endolles el forn i el rentaplats alhora",
          "El botó de prova del diferencial no dispara res",
          "Vols pujar potència o fer reforma i et demanen adaptar-lo",
        ],
      },
      {
        h2: "Com ho fem",
        parrafos: [
          "Primer et demanem una foto del quadre actual. Amb això i un parell de preguntes et donem pressupost tancat per escrit, gairebé sempre sense visita prèvia. El dia del canvi, el tall de llum dura unes hores, no dies.",
          "Deixem cada circuit retolat (cuina, llums, endolls, clima…) perquè sàpigues què és cada cosa, i provem la instal·lació completa amb tu davant.",
        ],
      },
      {
        h2: "Què porta dins un quadre nou",
        parrafos: [
          "Quan demanis pressupost per a un quadre, mira què estàs comprant. Dos pressupostos amb el mateix títol poden contenir coses molt diferents. Nosaltres muntem aparellatge Hager i Schneider, i protecció contra sobretensions Toscano. Això és el que porta un quadre d'habitatge estàndard:",
        ],
        bullets: [
          "Interruptor general automàtic, que permet tallar tot l'habitatge de cop",
          "Diferencial o diferencials segons el nombre de circuits, amb la prova de dispar verificada",
          "Un magnetotèrmic per circuit, dimensionat a la secció real del cable d'aquell circuit",
          "Circuits separats com a mínim per a enllumenat, endolls generals, cuina i forn, rentadora i bany, i climatització si n'hi ha",
          "Protecció contra sobretensions permanents i transitòries, molt recomanable a tota l'àrea de Barcelona",
          "Retolació de cada línia amb el que alimenta, perquè d'aquí a uns anys sàpigues què abaixar",
          "Comprovació final d'aïllament i continuïtat de terra, i garantia per escrit",
        ],
      },
      {
        h2: "Cal canviar-lo sencer o n'hi ha prou amb ampliar?",
        parrafos: [
          "No sempre cal substituir el quadre complet, i dir-ho ens costa feina facturada, però és la resposta honesta en força casos.",
          "N'hi ha prou amb ampliar o modificar quan el quadre és relativament modern, té diferencial que funciona, hi ha espai lliure al carril i el que necessites és afegir un circuit nou, per exemple per a una cuina d'inducció o un aire condicionat. Aquí s'afegeix el que falta i es deixa la resta com està.",
          "Cal substituir-lo sencer quan queden fusibles, quan no hi ha diferencial o n'hi ha un de sol per a tot l'habitatge, quan la caixa està plena i no admet cap element més, quan els magnetotèrmics no es corresponen amb la secció dels cables, o quan la instal·lació necessita butlletí i el quadre actual no el passarà.",
          "T'ho diem amb una foto del quadre obert, sense visita prèvia i sense cost. Envia'ns-la i el mateix dia saps en quin dels dos casos estàs.",
        ],
      },
      {
        h2: "Substitució, muntatge o ampliació: no és el mateix",
        parrafos: [
          "Ens arriben les tres peticions i convé distingir-les, perquè la feina i el preu no són els mateixos.",
          "La substitució d'un quadre antic és la més freqüent amb diferència. Hi ha una instal·lació en servei, amb el seu quadre de fusibles o amb un diferencial únic, i es canvia per un de normalitzat aprofitant el cablejat existent quan està en condicions. És la feina d'un matí de què parlem més amunt.",
          "El muntatge d'un quadre nou apareix en obra nova, en una reforma integral o quan es crea un subministrament que abans no existia, com el d'un local que se segrega. Aquí no hi ha res a aprofitar. Es dissenya el repartiment de circuits des de zero en funció del que hi haurà, i porta butlletí perquè la instal·lació és nova.",
          "L'ampliació és l'opció intermèdia i la més barata. El quadre actual està bé, té lloc lliure al carril i només cal afegir el circuit que falta. Si el teu cas és aquest t'ho direm, encara que ens doni menys feina.",
        ],
      },
      {
        h2: "Quadres de comunitat i de local",
        parrafos: [
          "No tot són habitatges. Una part important dels quadres que renovem són de serveis comuns i de locals d'activitat, i aquí les exigències canvien.",
          "En comunitats, el quadre de serveis comuns sol alimentar enllumenat d'escala i pàrquing, ascensor, grup de pressió, bomba d'esgotament, antena i porter. El problema clàssic és que ha anat creixent per acumulació durant dècades, sense que ningú replantegés el conjunt, i acaba sent un quadre on ningú no sap què és cada cosa. El refem ordenat i retolat, i lliurem a l'administrador l'esquema per escrit.",
          "En locals, el determinant és separar per activitat: cuina, cambres frigorífiques, climatització i sala han d'anar independents, i les cambres han de quedar en un circuit que no es pugui desconnectar per error en tancar. Si el local necessita legalització per a la seva llicència d'activitat, el certificat hi va inclòs i el tramitem nosaltres.",
        ],
      },
    ],
    faqs: [
      {
        pregunta: "Quant costa canviar un quadre elèctric?",
        respuesta:
          "Depèn del nombre de circuits i de l'estat de la instal·lació. Envia'ns una foto del quadre i et donem preu tancat per escrit en menys de 2 hores.",
      },
      {
        pregunta: "Quant de temps estaré sense llum?",
        respuesta:
          "En un habitatge tipus, entre 3 i 5 hores. T'avisem abans de tallar i et deixem tot funcionant el mateix dia.",
      },
      {
        pregunta: "Canviar el quadre requereix butlletí?",
        respuesta:
          "Si es modifica la instal·lació pot requerir CIE, sobretot si aprofites per pujar potència. Treballem amb instal·ladors habilitats, així que es signa amb la mateixa feina.",
      },
      {
        pregunta: "Val la pena afegir protecció contra sobretensions?",
        respuesta:
          "Si tens electrodomèstics de gamma mitjana-alta, ordinadors o teletreballes, sí: una sobretensió de xarxa els pot cremar i el protector costa molt menys que reposar-los.",
      },
      {
        pregunta: "Feu substitució de quadres elèctrics antics?",
        respuesta:
          "És la feina que més fem. Quadres de fusibles de porcellana, quadres amb un sol diferencial per a tota la casa i quadres plens que no admeten cap circuit més. Se substitueixen per un de normalitzat, amb un magnetotèrmic per circuit, i tot retolat abans de tancar.",
      },
      {
        pregunta: "I muntatge de quadres en obra nova o reforma integral?",
        respuesta:
          "També. En obra el repartiment de circuits es dissenya des de zero segons el que hi haurà a l'habitatge o el local, i la instal·lació es legalitza amb el seu certificat. Si ets reformista o constructor, coordinem directament amb l'obra.",
      },
    ],
  },
  {
    slug: "installacions-electriques",
    slugEs: "instalaciones-electricas",
    nombre: "Instal·lacions elèctriques",
    card: {
      titulo: "Instal·lacions elèctriques",
      linea: "Reformes, obra nova i ampliacions, amb butlletí en acabar.",
      icono: "instalacion",
    },
    h1: "Instal·lacions elèctriques a Barcelona: reformes, obra nova i ampliacions",
    heroSub:
      "Renovem la instal·lació d'un pis sencer, muntem la d'un habitatge nou o ampliem la que tens. Instal·lador habilitat, preu tancat i butlletí en acabar.",
    heroImage: "/img/hero-cuadro.jpg",
    metaTitle: "Instal·lacions elèctriques a Barcelona i Vallès",
    metaDescription:
      "Instal·lació elèctrica en pisos, cases i locals de Barcelona i el Vallès: reformes, obra nova i ampliacions, amb butlletí (CIE).",
    queIncluye: [
      {
        titulo: "Projecte i càlcul previ",
        texto:
          "Calculem circuits, seccions i proteccions segons el que connectaràs de veritat, no segons el mínim del reglament.",
      },
      {
        titulo: "Instal·lació completa",
        texto:
          "Derivació, quadre, circuits, mecanismes, il·luminació i presa de terra. Tot amb material homologat i detallat al pressupost.",
      },
      {
        titulo: "Proves i documentació",
        texto:
          "Dispar del diferencial, mesura d'aïllament i continuïtat de terra, amb circuits etiquetats i esquema del quadre.",
      },
      {
        titulo: "Butlletí elèctric (CIE)",
        texto:
          "El certificat el signa un instal·lador habilitat i nosaltres el tramitem davant d'Indústria. Sense ell, una instal·lació nova no es pot donar d'alta.",
      },
    ],
    secciones: [
      {
        h2: "Renovar la instal·lació d'un pis: què implica de veritat",
        parrafos: [
          "És la feina més habitual que ens demanen sota el nom d'instal·lació elèctrica, i gairebé sempre arriba per una de dues vies: una reforma integral o la constatació que la instal·lació actual ja no dóna més de si. En pisos anteriors als anys vuitanta, que són la majoria del parc de Barcelona i del Vallès, el normal és trobar dos o tres circuits per a tot l'habitatge, sense presa de terra i amb un quadre que no separa res.",
          "Una instal·lació al dia d'avui no és la mateixa casa amb cables nous. És separar en circuits independents l'enllumenat, els endolls generals, la cuina, el forn, la rentadora, el bany i l'aire condicionat, cadascun amb la seva protecció. És posar una presa de terra real i comprovar que mesura el que ha de mesurar. I és deixar el quadre amb espai per al que vingui després, que en els propers anys serà gairebé segur un punt de recàrrega o una bomba de calor.",
          "L'abast depèn molt de si l'habitatge està buit o habitat. En obra buida es fa d'una vegada, amb regates on toqui, i en un pis normal són entre tres i cinc dies. En habitatge habitat treballem per fases, deixant sempre la casa amb llum i amb circuits operatius al final de cada jornada, i aprofitant canalitzacions existents per reduir l'obra. Es triga una mica més, però pots continuar vivint-hi.",
        ],
      },
      {
        h2: "Obra nova, cases i locals",
        parrafos: [
          "En habitatge d'obra nova o en rehabilitació integral partim del càlcul: què es connectarà a cada estança, quina potència cal, quants circuits i amb quines seccions. És la part que més condiciona el resultat i la que més es despatxa de pressa en obres barates, amb el resultat previsible d'un quadre just des del primer dia.",
          "En casa unifamiliar la instal·lació s'estén més enllà de l'edifici: reg, enllumenat de jardí, piscina, porta de garatge, porter de tanca i sovint un quadre secundari. La nostra recomanació estàndard aquí és separar tot l'exterior en el seu propi diferencial, perquè una humitat en una presa del jardí no deixi la casa sencera a les fosques. És un canvi mínim al pressupost que evita la meitat de les avaries futures.",
          "En locals el criteri el marca l'activitat. Un comerç, una oficina i una cuina de restaurant necessiten proteccions i circuits diferents, i en molts casos enllumenat d'emergència i documentació específica per a la llicència. Ho deixem preparat perquè el tècnic que tramiti l'expedient no hagi de tornar a demanar-nos res.",
        ],
      },
      {
        h2: "Ampliacions: quan no cal refer-ho tot",
        parrafos: [
          "No tota instal·lació demana una renovació completa, i no la proposem quan no toca. Moltes vegades el problema és concret i la solució també: una línia nova per a la cuina d'inducció, un circuit per a l'aire condicionat, endolls en una habitació que només en té un, il·luminació d'un sostre que s'ha reformat o una presa de terra que mai no va existir.",
          "El criteri que fem servir per decidir entre ampliar i renovar és simple. Si el quadre té capacitat i espai, la derivació individual aguanta i el cablejat existent està en bon estat, s'amplia. Si el quadre està ple, el cablejat té la secció justa o la instal·lació barreja circuits, ampliar és llençar diners: cada afegit nou empitjora el conjunt i el problema de fons continua allà.",
          "Et diem en quin dels dos casos estàs a la primera visita, amb l'argument tècnic i sense adorns. I si és el segon, et donem el preu tancat de les dues opcions perquè decideixis tu.",
        ],
        bullets: [
          "Línia independent per a cuina d'inducció, forn o rentaplats",
          "Circuit nou per a aire condicionat o bomba de calor",
          "Endolls i punts de llum afegits després d'una reforma",
          "Presa de terra en habitatges que mai no n'han tingut",
          "Preparació del quadre per a un futur punt de recàrrega",
        ],
      },
      {
        h2: "Sense butlletí, la instal·lació no existeix per a la teva comercialitzadora",
        parrafos: [
          "Qualsevol instal·lació nova o modificada de manera substancial necessita un certificat d'instal·lació elèctrica, el CIE, signat per un instal·lador habilitat i registrat davant d'Indústria. Sense ell no es dóna d'alta un subministrament nou ni es tramita una pujada de potència, i en una compravenda pot aturar l'operació.",
          "A totes les nostres feines d'instal·lació el butlletí va inclòs al plantejament des del principi, no com un extra que apareix al final. En acabar et lliurem el certificat, l'esquema del quadre amb els circuits etiquetats i les mesures de les proves. Amb això pots contractar la potència que vulguis, vendre o llogar sense ensurts i, sobretot, saber què tens darrere la paret.",
        ],
      },
    ],
    faqs: [
      {
        pregunta: "Quant es triga a renovar la instal·lació d'un pis?",
        respuesta:
          "En habitatge buit, entre tres i cinc dies per a un pis mitjà. En habitatge habitat treballem per fases i s'allarga una mica, però la casa es queda sempre amb llum i amb circuits operatius al final de cada jornada.",
      },
      {
        pregunta: "Cal picar tota la casa?",
        respuesta:
          "No sempre. Aprofitem les canalitzacions existents quan admeten el cablejat nou i passem per cels rasos on n'hi ha. Les regates queden per als trams imprescindibles. En finques protegides fem servir canaleta tècnica i no toquem elements originals.",
      },
      {
        pregunta: "Puc viure a casa mentre feu la instal·lació?",
        respuesta:
          "Sí, és el més habitual. Organitzem la feina per circuits i per fases, avisem de cada tall amb antelació i deixem l'habitatge amb subministrament en acabar cada jornada.",
      },
      {
        pregunta: "Em cal un projecte d'enginyeria?",
        respuesta:
          "En habitatge normalment no: n'hi ha prou amb el certificat de l'instal·lador habilitat. Sí que el requereixen els locals de pública concurrència, les instal·lacions d'una certa potència i les industrials. Et diem a la primera visita si el teu cas el necessita.",
      },
      {
        pregunta: "Millor ampliar el que tinc o renovar-ho sencer?",
        respuesta:
          "Si el quadre té espai, la derivació individual aguanta i el cablejat està en bon estat, s'amplia. Si el quadre està ple, la secció és justa o els circuits estan barrejats, ampliar empitjora el conjunt. Et donem preu tancat de les dues opcions i decideixes tu.",
      },
      {
        pregunta: "El butlletí està inclòs?",
        respuesta:
          "Sí, va al plantejament des del principi en tota instal·lació nova o modificada. En acabar et lliurem el CIE signat per instal·lador habilitat, tramitat davant d'Indústria, juntament amb l'esquema del quadre i les mesures de les proves.",
      },
    ],
  },
  {
    slug: "punt-de-recarrega-cotxe-electric",
    slugEs: "instalacion-punto-de-carga-coche-electrico",
    nombre: "Punt de recàrrega cotxe elèctric",
    card: {
      titulo: "Punt de recàrrega",
      linea: "Carregador al teu garatge o comunitat, amb legalització inclosa.",
      icono: "carga",
    },
    h1: "Instal·lació de punt de recàrrega per a cotxe elèctric a Barcelona",
    heroSub:
      "Instal·lem el teu carregador en garatge privat o plaça de comunitat: estudi, instal·lació, legalització i butlletí. Tot amb preu tancat.",
    metaTitle: "Punt de recàrrega per a cotxe elèctric a Barcelona",
    metaDescription:
      "Instal·lació de punts de recàrrega per a cotxe elèctric a Barcelona: garatges privats i comunitats, amb legalització i CIE.",
    queIncluye: [
      {
        titulo: "Estudi previ",
        texto:
          "Valorem la teva instal·lació, la distància al comptador i la potència disponible abans de donar-te preu.",
      },
      {
        titulo: "Instal·lació completa",
        texto:
          "Carregador, cablejat, proteccions dedicades i configuració. Compatible amb els principals fabricants.",
      },
      {
        titulo: "Legalització i CIE",
        texto:
          "Tramitem la legalització de la instal·lació i et gestionem el butlletí. En comunitats, et guiem amb la notificació a la finca.",
      },
      {
        titulo: "Gestió d'ajuts",
        texto:
          "T'orientem sobre les subvencions vigents per a punts de recàrrega i et preparem la documentació tècnica.",
      },
    ],
    secciones: [
      {
        h2: "En una comunitat de veïns? És més fàcil del que et penses",
        parrafos: [
          "Per instal·lar un carregador a la teva plaça de pàrquing comunitària no necessites permís de la junta: la llei només t'obliga a comunicar-ho prèviament a la comunitat. Nosaltres et preparem l'escrit i resolem els dubtes tècnics de l'administrador si n'hi ha.",
          "La instal·lació va connectada al teu comptador, amb la seva pròpia protecció: tu pagues el teu consum i ningú més no es veu afectat.",
        ],
      },
      {
        h2: "Quin carregador et convé",
        parrafos: [
          "Depèn del teu cotxe, de la teva potència contractada i de quants quilòmetres fas al dia. A l'estudi previ et recomanem la potència de càrrega adequada, i si convé pujar la potència contractada t'ho diem clar, amb el tràmit inclòs al pressupost.",
        ],
      },
      {
        h2: "Tres escenaris, tres instal·lacions diferents",
        parrafos: [
          "No costa ni triga el mateix instal·lar un punt de recàrrega en una casa que a la plaça trenta-dos d'un pàrquing comunitari. Aquests són els tres casos que fem i què implica cadascun.",
          "En habitatge unifamiliar amb garatge propi és la instal·lació més senzilla que hi ha. El quadre és a pocs metres, s'estira una línia dedicada amb les seves proteccions i es legalitza. Es resol en una jornada, i rarament cal ampliar potència si es programa la càrrega nocturna.",
          "En plaça de pàrquing comunitari la feina és al recorregut. Cal portar la línia des del teu comptador, normalment centralitzat a la planta baixa, fins a la teva plaça, travessant zona comuna. Requereix comunicació prèvia a la comunitat, que no és el mateix que demanar permís, i acordar el traçat amb l'administrador perquè quedi endreçat.",
          "En flota d'empresa canvia l'escala. Diversos punts simultanis, gestió de càrrega entre vehicles per no disparar la potència contractada, identificació d'usuari per imputar consums i, gairebé sempre, subministrament trifàsic. Aquí l'estudi previ és la meitat de la feina.",
        ],
      },
      {
        h2: "Quina potència de càrrega et convé de veritat",
        parrafos: [
          "La temptació és contractar el carregador més potent disponible, i a la majoria de casos són diners mal gastats. La pregunta correcta no és quanta potència admet l'equip, sinó quantes hores tens el cotxe aturat.",
          "Si el cotxe dorm a casa entre deu i dotze hores cada nit, un punt de recàrrega domèstic convencional cobreix de sobres el quilometratge diari de gairebé qualsevol conductor urbà. Pujar a més potència només escurça un temps que de totes maneres passaries dormint, i en canvi et pot obligar a ampliar la potència contractada i pagar més terme fix els dotze mesos de l'any.",
          "La potència alta té sentit en casos concrets: vehicles amb bateries grans i ús intensiu, flotes que roten, habitatges amb dos cotxes elèctrics, o quan el cotxe només pot carregar en franges curtes.",
          "A l'estudi previ mirem el teu quilometratge real, la teva potència contractada, la teva corba de consum i les hores que el cotxe està aturat. Amb això et diem quin equip té sentit, sense casar-nos amb cap marca i sense vendre't potència que no faràs servir.",
        ],
      },
    ],
    faqs: [
      {
        pregunta: "Quant costa instal·lar un punt de recàrrega?",
        respuesta:
          "Depèn sobretot de la distància entre el teu comptador i la plaça, i del carregador escollit. Amb fotos i les teves dades de contracte solem tancar el preu sense visita; si cal visita tècnica, et diem el seu preu en concertar-la. El pressupost, sempre tancat per escrit.",
      },
      {
        pregunta: "Necessito permís de la comunitat?",
        respuesta:
          "No. Només cal comunicar-ho prèviament a la comunitat. Et preparem nosaltres la notificació.",
      },
      {
        pregunta: "Cal pujar la potència contractada?",
        respuesta:
          "No sempre: molts carregadors regulen la potència i carreguen de nit sense tocar el teu contracte. Ho valorem a l'estudi previ.",
      },
      {
        pregunta: "La instal·lació es legalitza?",
        respuesta:
          "Sí, sempre. L'instal·lador habilitat signa el CIE i registrem la instal·lació: el necessitaràs per a la garantia, l'assegurança i els ajuts públics.",
      },
    ],
  },
  {
    slug: "pujar-potencia-llum",
    slugEs: "subir-potencia-luz",
    nombre: "Pujar potència de llum",
    card: {
      titulo: "Pujada de potència",
      linea: "Salta la llum en fer servir dos aparells? Et gestionem la pujada.",
      icono: "potencia",
    },
    h1: "Pujar la potència de la llum a Barcelona, sense embolics",
    heroSub:
      "Si la llum salta quan encens dos aparells alhora, necessites més potència. Revisem la teva instal·lació, et gestionem el butlletí si cal i t'acompanyem en el tràmit.",
    heroImage: "/img/hero-potencia.jpg",
    metaTitle: "Pujar potència de llum a Barcelona | Butlletí inclòs",
    metaDescription:
      "Pujada de potència contractada a Barcelona. Revisió d'instal·lació, butlletí (CIE) i acompanyament en el tràmit amb la teva comercialitzadora.",
    queIncluye: [
      {
        titulo: "Diagnòstic de potència",
        texto:
          "Calculem la potència que necessites de veritat segons els teus aparells. De vegades la solució no és pujar, i t'ho direm.",
      },
      {
        titulo: "Revisió de la instal·lació",
        texto:
          "Comprovem que la teva instal·lació admet la nova potència: quadre, derivació individual i proteccions.",
      },
      {
        titulo: "Butlletí si te'l demanen",
        texto:
          "Per pujar potència, la comercialitzadora sol exigir CIE si el teu butlletí és antic. Te'l gestionem en 24-48h.",
      },
      {
        titulo: "Acompanyament en el tràmit",
        texto:
          "Et diem exactament què demanar a la teva comercialitzadora i quins documents adjuntar. Sense bucles amb el call center.",
      },
    ],
    secciones: [
      {
        h2: "Senyals que et falta potència",
        parrafos: ["És de les consultes més habituals, i es nota així:"],
        bullets: [
          "Salta l'ICP en fer servir forn i vitroceràmica alhora",
          "No pots posar la rentadora amb l'aire condicionat engegat",
          "Acabes de passar-te a cuina elèctrica o aerotèrmia",
          "Has instal·lat un punt de recàrrega per al cotxe",
        ],
      },
      {
        h2: "Compte: de vegades el problema no és la potència",
        parrafos: [
          "Abans de pagar més cada mes al terme fix, comprova-ho. Un magnetotèrmic envellit o un quadre mal repartit donen els mateixos símptomes que la falta de potència. A la visita mesurem el teu consum real i et diem amb dades si cal pujar potència, ajustar el quadre o les dues coses.",
        ],
      },
      {
        h2: "Quan la teva instal·lació no admet la potència que vols",
        parrafos: [
          "Aquesta és la conversa incòmoda del servei, i preferim tenir-la abans de començar que a mig tràmit.",
          "La potència que pots contractar no la decideixes tu ni la teva comercialitzadora: la marca el que suporta la teva instal·lació. I en pisos anteriors als anys vuitanta és freqüent que la instal·lació no doni per al que el propietari vol contractar. Els tres motius habituals són l'absència de presa de terra, seccions de cable insuficients per a la nova càrrega i un quadre que no admet els circuits que exigeix el reglament actual.",
          "Quan això passa cal adequar la instal·lació abans de signar el butlletí, i aquesta feina es pressuposta a part i per escrit. No la fiquem amagada dins del preu del butlletí, perquè són dues coses diferents i tens dret a decidir sobre cadascuna.",
          "El que sí que fem sempre és dir-t'ho a la primera visita, amb el que costa i per què. Si prefereixes no fer-ho, el diagnòstic és teu i te'l pots endur a una altra empresa: no et cobrem per la informació.",
        ],
      },
      {
        h2: "Els casos que més atenem",
        parrafos: [
          "Gairebé totes les pujades de potència que fem a Barcelona i el Vallès responen a un d'aquests quatre escenaris, i cadascun té la seva:",
          "La reforma de cuina que passa de gas a inducció és el més freqüent amb diferència. La inducció té una demanda alta i exigeix circuit propi, així que gairebé sempre arrossega línia nova, quadre i butlletí a més de la pujada.",
          "La instal·lació de climatització o aerotèrmia, sobretot quan se substitueix una calefacció de gas. Aquí l'important és dimensionar bé: els equips moderns arrenquen de manera progressiva i consumeixen menys del que la gent tem.",
          "El punt de recàrrega per al cotxe elèctric, on moltes vegades la pujada es pot evitar amb un equilibrador de càrrega i programant la recàrrega nocturna. Ho estudiem abans de proposar-te pagar més terme fix cada mes.",
          "I l'alta de subministrament en un pis que feia temps que estava buit, on la potència heretada sol ser la mínima de fa dècades i la comercialitzadora demana butlletí nou de totes maneres.",
        ],
      },
    ],
    faqs: [
      {
        pregunta: "Quant costa pujar la potència?",
        respuesta:
          "Té dues parts: els drets que cobra la distribuïdora a la teva factura i, si la teva instal·lació necessita butlletí o adaptacions, la nostra feina. De la nostra part et donem preu tancat per escrit abans de començar.",
      },
      {
        pregunta: "Sempre cal butlletí per pujar potència?",
        respuesta:
          "No sempre. Si el teu butlletí té menys de 20 anys i la instal·lació admet la nova potència, pot ser que no calgui. Si te'l demanen, te'l gestionem en 24-48h.",
      },
      {
        pregunta: "Quant triga el tràmit complet?",
        respuesta:
          "La nostra part, 24-48 hores. La comercialitzadora i la distribuïdora solen trigar entre uns dies i un parell de setmanes a aplicar el canvi.",
      },
    ],
  },
  {
    slug: "electricistes-empreses-comunitats",
    slugEs: "electricistas-para-empresas-y-comunidades",
    nombre: "Empreses i comunitats",
    card: {
      titulo: "Empreses i comunitats",
      linea: "Manteniment i avaries per a finques, oficines i locals.",
      icono: "empresa",
    },
    h1: "Electricistes per a empreses i comunitats a Barcelona",
    heroSub:
      "Manteniment elèctric, avaries i reformes per a comunitats de veïns, oficines, locals i hostaleria. Un mateix equip, resposta ràpida i factura amb l'IVA desglossat.",
    heroImage: "/img/hero-empresas.jpg",
    metaTitle: "Electricistes per a empreses i comunitats a Barcelona",
    metaDescription:
      "Servei elèctric per a empreses i comunitats a Barcelona: manteniments, urgències i reformes. Visita tècnica i proposta per escrit.",
    b2b: true,
    ctaLabel: "Demana una visita tècnica",
    queIncluye: [
      {
        titulo: "Manteniment periòdic",
        texto:
          "Revisions programades de quadres, enllumenat i proteccions. Menys avaries, menys ensurts i tot documentat.",
      },
      {
        titulo: "Urgències amb prioritat",
        texto:
          "Línia preferent per a clients amb manteniment: un local sense llum no pot esperar a l'endemà.",
      },
      {
        titulo: "Butlletins i legalitzacions",
        texto:
          "CIE per a locals, ampliacions de potència, legalització d'instal·lacions i certificats per a activitats.",
      },
      {
        titulo: "Facturació com a empresa",
        texto:
          "Factura amb CIF i IVA desglossat, pressupostos per escrit i un interlocutor únic per a tots els teus centres.",
      },
    ],
    secciones: [
      {
        h2: "Comunitats de veïns",
        parrafos: [
          "Enllumenat d'escala i garatge, línia de l'ascensor, porter automàtic, telecomunicacions, quadres comunitaris. Treballem amb administradors de finques de Barcelona i el Vallès: pressupost tancat per a la junta, avís previ als veïns i full de treball en acabar.",
          "Si administres diverses finques, un contracte de manteniment t'estalvia la gestió de buscar lampista cada vegada que alguna cosa falla.",
        ],
      },
      {
        h2: "Oficines, locals i hostaleria",
        parrafos: [
          "Quadres que es queden curts, ampliacions de potència per a cuines, il·luminació de sala i terrassa, revisions per a l'assegurança o la llicència d'activitat. Treballem fora del teu horari d'obertura quan la feina ho permet, perquè no tanquis ni una hora.",
        ],
      },
      {
        h2: "Com comencem",
        parrafos: [
          "Demana una visita tècnica. Veiem les teves instal·lacions, et diem què està bé, què és millorable i què és urgent, i et passem proposta per escrit: puntual o de manteniment periòdic. Sense permanències estranyes ni lletra petita.",
        ],
      },
      {
        h2: "Què inclou un contracte de manteniment",
        parrafos: [
          "El manteniment elèctric es ven moltes vegades com una quota sense contingut definit. El nostre se signa amb un abast concret i per escrit, perquè sàpigues exactament què estàs pagant:",
        ],
        bullets: [
          "Revisions periòdiques programades, amb la freqüència que fixem segons la teva instal·lació",
          "Termografia del quadre general per detectar punts calents abans que provoquin una avaria",
          "Mesura d'aïllament i verificació de dispar real dels diferencials",
          "Revisió de l'enllumenat d'emergència i la seva autonomia, que és el primer que mira una inspecció",
          "Informe escrit després de cada visita, amb el que s'ha revisat, el que s'ha corregit i el que convé preveure",
          "Prioritat de resposta en urgències per a clients amb contracte",
          "Interlocutor fix: parles sempre amb la mateixa persona, que ja coneix la teva instal·lació",
        ],
      },
      {
        h2: "Comunitats: com es porta una feina a junta",
        parrafos: [
          "Treballem amb força administradors de finques i sabem on s'encalla tot: una junta no pot aprovar una despesa que no està definida, així que els problemes es van ajornant any rere any mentre l'avaria continua allà.",
          "La nostra manera de resoldre-ho és donar a l'administrador un document que es pugui votar. Visita tècnica, informe de què està fallant i per què, i pressupost tancat desglossat per partides, separant el que és urgent del que pot esperar a l'exercici següent. Si hi ha diverses solucions possibles, les posem amb el seu cost perquè la junta triï amb criteri.",
          "Els encàrrecs més habituals en comunitats són la renovació de l'enllumenat comú a LED amb detecció de presència, la posada al dia del quadre de serveis comuns, la revisió de la línia d'ascensor i bombes, i la preinstal·lació de recàrrega en garatges. El de l'enllumenat és el que s'aprova més fàcilment, perquè l'estalvi es nota al primer rebut.",
        ],
      },
      {
        h2: "Facturació i documentació",
        parrafos: [
          "Per a una empresa o una comunitat, la feina no s'acaba quan la instal·lació funciona: s'acaba quan la paperassa està en ordre. És la part que més queixes genera amb altres proveïdors i a la qual donem la mateixa importància que a la reparació.",
          "Facturem sempre amb CIF i IVA desglossat, amb albarà signat de cada intervenció i amb el detall suficient perquè la teva gestoria o el teu administrador ho puguin imputar sense trucar-nos a preguntar. Les feines que ho requereixen surten amb el seu certificat d'instal·lació tramitat davant d'Indústria, i les que afecten llicències d'activitat amb la documentació tècnica que demana l'ajuntament.",
          "Si tens diverses seus, locals o finques, agrupem la facturació com et convingui i mantenim un històric per emplaçament, de manera que quan truquis per una avaria ja sabem què s'hi va fer l'última vegada.",
        ],
      },
    ],
    faqs: [
      {
        pregunta: "La visita tècnica té cost?",
        respuesta:
          "Sí, té un preu tancat que et diem en concertar-la, segons la mida de les instal·lacions a revisar. El que no té és compromís: la proposta que et passem després la valores amb calma.",
      },
      {
        pregunta: "Factureu a nom de l'empresa?",
        respuesta:
          "Sí, sempre: factura amb el vostre CIF i IVA desglossat, i pressupost previ per escrit per a la vostra comptabilitat.",
      },
      {
        pregunta: "Podeu treballar fora d'horari comercial?",
        respuesta:
          "Sí. En locals i oficines programem les feines de nit o en festiu quan convé, per no interrompre l'activitat.",
      },
      {
        pregunta: "Com funciona el manteniment periòdic?",
        respuesta:
          "Definim un calendari de revisions segons les teves instal·lacions. Cada visita queda documentada i els avisos entre revisions tenen resposta prioritària.",
      },
    ],
  },
  {
    slug: "butlleti-electric-sabadell",
    slugEs: "boletin-electrico-sabadell",
    nombre: "Butlletí elèctric a Sabadell",
    card: {
      titulo: "Butlletí elèctric a Sabadell",
      linea: "CIE signat i tramitat en 24-48h, amb base a la ciutat.",
      icono: "boletin",
    },
    local: {
      ciudad: "Sabadell",
      ciudadSlug: "lampista-sabadell",
      servicioPadre: "butlleti-electric",
    },
    h1: "Butlletí elèctric (CIE) a Sabadell en 24-48 hores",
    heroSub:
      "Tenim la base a Sabadell, així que aquí la revisió sol ser el mateix dia. Instal·lador habilitat, tramitació davant d'Indústria inclosa i preu tancat.",
    heroImage: "/img/hero-boletin.jpg",
    metaTitle: "Butlletí elèctric a Sabadell (CIE) en 24-48h",
    metaDescription:
      "Butlletí elèctric a Sabadell: revisió el mateix dia, signatura d'instal·lador habilitat i tramitació davant d'Indústria inclosa.",
    ctaFrecuente: true,
    queIncluye: [
      {
        titulo: "Revisió el mateix dia",
        texto:
          "Som a la ciutat. A la majoria d'encàrrecs de Sabadell podem passar a revisar la instal·lació el mateix dia, sense esperes d'agenda.",
      },
      {
        titulo: "Signatura d'instal·lador habilitat",
        texto:
          "El certificat el signa un instal·lador elèctric habilitat amb el seu número de registre. Ens el pots demanar abans de contractar.",
      },
      {
        titulo: "Tramitació inclosa",
        texto:
          "Presentem el certificat davant d'Indústria i et lliurem el document segellat a punt per a la teva comercialitzadora.",
      },
      {
        titulo: "Adaptacions, si cal",
        texto:
          "Si la instal·lació no passa tal com està, et diem què cal tocar amb preu tancat a part. Mai no ho donem per fet ni ho colem a la factura.",
      },
    ],
    secciones: [
      {
        h2: "Per què a Sabadell el butlletí surt més ràpid",
        parrafos: [
          "La nostra base és a Sabadell, al carrer Alcarria, i en el tràmit del butlletí això es nota més que en cap altre servei. El coll d'ampolla d'un CIE gairebé mai no és la signatura ni la tramitació, és quadrar la visita de revisió: algú ha de veure la instal·lació amb el pis obert abans que ningú certifiqui res.",
          "Com que som a la ciutat, aquesta visita a Sabadell sol encaixar el mateix dia o l'endemà, i no d'aquí a tres. A partir d'aquí, si la instal·lació passa, el certificat se signa i es tramita en 24-48 hores. Si no passa, saps què cal adaptar el mateix dia que et passem a veure, que és just el que necessites quan tens la mudança amb data.",
          "Treballem a tots els barris: Centre, Creu Alta, Can Rull, la Concòrdia, Gràcia, Can Feu, Torre-romeu i els polígons. I a Castellar, Sant Quirze, Barberà, Cerdanyola i Ripollet amb els mateixos terminis.",
        ],
      },
      {
        h2: "El parc d'habitatge de Sabadell i el que sol fallar a la revisió",
        parrafos: [
          "Després d'anys fent butlletins a la ciutat, els motius pels quals una instal·lació de Sabadell no passa a la primera es repeteixen amb força fidelitat, i gairebé tots tenen a veure amb l'època en què es va construir l'edifici.",
          "Als blocs dels seixanta i setanta de Can Rull, la Concòrdia o Torre-romeu, el problema habitual és l'absència de presa de terra i un quadre que continua sent de fusibles o té un sol diferencial per a tot l'habitatge. A les finques antigues del Centre i la Creu Alta apareix a més cablejat de secció curta i circuits que barregen enllumenat i endolls. I a les cases de cós, tan típiques de la ciutat, és freqüent trobar la instal·lació en superfície i ampliada per trams segons feia falta.",
          "Cap d'aquestes coses converteix el teu pis en un cas perdut. Gairebé sempre es resol amb un quadre nou, la presa de terra i la separació d'un parell de circuits, i es fa en un matí. L'important és saber-ho abans que la comercialitzadora t'aturi l'alta, no després.",
        ],
        bullets: [
          "Habitatge sense presa de terra: el més freqüent en blocs anteriors als vuitanta",
          "Quadre de fusibles o amb un únic diferencial per a tota la casa",
          "Circuits que barregen enllumenat i endolls, sense protecció independent",
          "Cablejat amb secció insuficient per a la potència que es vol contractar",
          "Derivació individual que no admet la pujada de potència sol·licitada",
        ],
      },
      {
        h2: "Quan et demanaran el CIE a Sabadell",
        parrafos: [
          "Els casos són els mateixos que a la resta de Catalunya, però convé tenir-los clars perquè gairebé ningú no pensa en el butlletí fins que l'hi exigeixen amb presses.",
          "El primer és donar d'alta la llum en un habitatge o local que fa temps que té el subministrament tallat, una cosa molt habitual en pisos que es venen després d'una herència. El segon és pujar la potència contractada, que als blocs antics de la ciutat és gairebé una constant quan algú posa cuina d'inducció. El tercer és després d'una reforma que hagi tocat la instal·lació. I el quart és quan el butlletí que consta és tan antic que la comercialitzadora directament no l'accepta.",
          "En els tres primers casos el certificat que necessites és el blanc, el CIE pròpiament dit. En el quart, quan la instal·lació no s'ha modificat i només cal acreditar que continua sent apta, sol bastar l'anomenat butlletí blau, que és un certificat de reconeixement. Et diem quin necessites a la primera trucada, i si hi ha dubtes ho consultem amb la teva comercialitzadora abans de signar res.",
        ],
      },
      {
        h2: "Locals, naus i polígons de Sabadell",
        parrafos: [
          "Sabadell té un teixit industrial i comercial molt viu, i una part important dels butlletins que fem aquí no són d'habitatge. Són locals que canvien de titular, tallers que amplien maquinària i naus de Can Roqueta o Gràcia Sud que necessiten documentació al dia per a una llicència d'activitat o per a un augment de potència.",
          "El plantejament és el mateix, però l'abast és més gran: cal revisar el quadre general i els secundaris, les proteccions d'acord amb l'activitat, l'enllumenat d'emergència i, en trifàsica, l'equilibrat de fases. Ho mirem en una visita tècnica sense cost, et donem preu tancat del conjunt i coordinem amb el tècnic que porti la teva llicència si n'hi ha.",
        ],
      },
    ],
    faqs: [
      {
        pregunta: "Quant triga el butlletí elèctric a Sabadell?",
        respuesta:
          "La revisió sol ser el mateix dia o l'endemà, perquè tenim la base a la ciutat. Des que la instal·lació està conforme, el certificat se signa i es tramita en 24-48 hores.",
      },
      {
        pregunta: "Aneu als barris i als municipis del voltant?",
        respuesta:
          "Sí: tots els barris de Sabadell, i amb els mateixos terminis a Castellar del Vallès, Sant Quirze, Barberà, Cerdanyola i Ripollet.",
      },
      {
        pregunta: "I si la meva instal·lació no passa la revisió?",
        respuesta:
          "Et diem exactament què cal adaptar, amb preu tancat a part i per escrit. Tu decideixes si ho fem nosaltres. Mai no donem per feta una adaptació ni la incloem sense avisar.",
      },
      {
        pregunta: "Necessito el butlletí blau, no el blanc. El feu?",
        respuesta:
          "Sí. El blau és un certificat de reconeixement per a instal·lacions existents que no s'han modificat; el blanc, el CIE, és per a instal·lació nova o modificada. Si no saps quin et demanen, ho consultem amb la teva comercialitzadora abans de signar res.",
      },
      {
        pregunta: "Qui signa el certificat?",
        respuesta:
          "Un instal·lador elèctric habilitat i inscrit al registre oficial, amb el seu número. Nosaltres coordinem el servei, donem el preu tancat i tramitem la documentació davant d'Indústria. Ens pots demanar el número de registre de qui signarà el teu.",
      },
      {
        pregunta: "Feu butlletins de naus i locals als polígons?",
        respuesta:
          "Sí, a Can Roqueta, Gràcia Sud i la resta de polígons de la ciutat. L'abast és més gran que en habitatge: quadre general i secundaris, proteccions segons activitat, emergències i equilibrat de fases en trifàsica. Comencem amb una visita tècnica sense cost.",
      },
    ],
  },
  {
    slug: "electricista-urgent-sabadell",
    slugEs: "electricista-urgente-sabadell",
    nombre: "Electricista urgent a Sabadell",
    card: {
      titulo: "Urgent a Sabadell",
      linea: "Guàrdia 24h amb base a la ciutat: mitja hora de mitjana.",
      icono: "rapido",
    },
    local: {
      ciudad: "Sabadell",
      ciudadSlug: "lampista-sabadell",
      servicioPadre: "electricistes-urgents-24-hores",
    },
    h1: "Electricista urgent a Sabadell, 24 hores",
    heroSub:
      "Som de Sabadell i tenim la base aquí. En urgències solem ser a la teva porta en menys de mitja hora, amb preu tancat per telèfon abans de sortir.",
    heroImage: "/img/hero-urgencias-24h.jpg",
    metaTitle: "Electricista urgent a Sabadell 24 hores",
    metaDescription:
      "Electricista urgent a Sabadell 24 hores. Base a la ciutat i arribada en menys de 30 minuts. Preu tancat per telèfon.",
    urgencias: true,
    queIncluye: [
      {
        titulo: "Mitja hora de mitjana",
        texto:
          "És l'única ciutat on tenim la base. A la majoria d'avisos de Sabadell el lampista hi és en menys de 30 minuts.",
      },
      {
        titulo: "24 hores, cada dia",
        texto:
          "Nits, caps de setmana i festius. Sempre hi ha un electricista de guàrdia disponible per a la ciutat i el seu entorn.",
      },
      {
        titulo: "Preu tancat per telèfon",
        texto:
          "Et diem el cost de la sortida i el diagnòstic abans de moure'ns, i el de la reparació abans de tocar res.",
      },
      {
        titulo: "Reparació amb garantia",
        texto:
          "Instal·lador habilitat, material homologat i garantia per escrit del que reparem.",
      },
    ],
    secciones: [
      {
        h2: "Què fer ara mateix si t'has quedat sense llum",
        parrafos: [
          "Abans de trucar a ningú, dos minuts de comprovació t'estalvien una visita en la meitat dels casos, i són segurs de fer.",
          "Mira el quadre i fixa't en què ha baixat. Si és l'interruptor ample amb un botó de prova, és el diferencial i hi ha una fuita: abaixa tots els magnetotèrmics, puja el diferencial i vés pujant els petits un a un fins que torni a saltar. L'últim que has pujat assenyala el circuit amb el problema; deixa'l abaixat i tindràs llum a la resta de la casa mentre esperes. Si el que ha baixat és un dels estrets, aquell circuit va sobrecarregat o té un curtcircuit: desendolla el que hi hagi connectat abans de tornar-lo a pujar.",
          "Si no ha saltat res i la casa està a les fosques, treu el cap a l'escala o truca a un veí. Quan el tall és de tota la finca o del carrer, és de la distribuïdora i aquí nosaltres no hi entrem. I si fa olor de cremat, hi ha espurnes o el quadre està calent, no toquis res: abaixa el general si ho pots fer sense risc i truca'ns.",
        ],
      },
      {
        h2: "Les urgències que més atenem a Sabadell",
        parrafos: [
          "El tipus d'avís canvia força segons el barri, i després d'anys de guàrdies a la ciutat el patró és força clar.",
          "A Can Rull, la Concòrdia i Torre-romeu, amb blocs dels seixanta i setanta, l'habitual és l'ICP que salta per potència curta i el quadre antic que ja no protegeix. Al Centre i la Creu Alta, amb finques més velles i cases de cós, apareixen les derivacions per humitat i el cablejat envellit, sobretot després de dies de pluja. A Gràcia i Can Feu, habitatge més familiar, moltes avaries vénen de circuits afegits en reformes antigues.",
          "A part hi ha els avisos de comerç i hostaleria del centre i dels polígons: un local sense llum perd diners cada hora que passa, i una cambra frigorífica aturada, gènere. A aquests els donem prioritat de resposta, igual que a les urgències amb risc (olor de cremat, espurnes o aigua en contacte amb la instal·lació).",
        ],
      },
      {
        h2: "Reparem avui, i la resta es pressuposta a part",
        parrafos: [
          "En una urgència estàs en la pitjor posició possible per decidir sobre una reforma: sense llum, amb presses i amb algú al davant. Per això separem sempre les dues coses.",
          "El que fem a la visita d'urgència és localitzar l'avaria, deixar-te el subministrament restablert amb seguretat i explicar-te què ha passat. Si en obrir el quadre veiem que la teva instal·lació té problemes de fons (falta de terra, fusibles, derivació individual justa), t'ho diem clar i t'ho pressupostem per escrit i a part, perquè ho decideixis amb calma un altre dia.",
          "Mai no aprofitem una urgència per vendre una renovació completa. I si la reparació d'avui fa innecessària una part del que t'havíem pressupostat, t'ho descomptem.",
        ],
      },
      {
        h2: "Cobertura: Sabadell i el Vallès proper",
        parrafos: [
          "Des de la base cobrim la ciutat sencera i els municipis de l'entorn amb temps molt continguts. A Sabadell el normal són menys de 30 minuts. A Castellar del Vallès, Sant Quirze, Barberà, Ripollet i Cerdanyola, entre 25 i 40 segons l'hora i el punt exacte. A Terrassa i Sant Cugat, una mica més.",
          "Si el teu avís és d'una comunitat de veïns o d'un local, digues-ho en trucar: canvia el material que carrega l'electricista i, en el cas de la comunitat, ens permet determinar des del principi si l'avaria és en zona comuna o privativa, que és el que després decideix qui paga la factura.",
        ],
      },
    ],
    faqs: [
      {
        pregunta: "Quant trigueu a arribar a Sabadell?",
        respuesta:
          "L'habitual és menys de 30 minuts, perquè tenim la base a la ciutat. En trucar et donem una franja concreta segons on siguis i l'hora.",
      },
      {
        pregunta: "Ateneu de matinada i en festius?",
        respuesta:
          "Sí, hi ha guàrdia les 24 hores tots els dies de l'any. El preu de la sortida en horari nocturn o festiu és diferent del d'horari laboral, i t'ho diem per telèfon abans de sortir.",
      },
      {
        pregunta: "Ha marxat la llum de tota la finca. És cosa vostra?",
        respuesta:
          "Si el tall afecta tota l'escala o el carrer, gairebé sempre és de la distribuïdora i cal avisar-los a ells. Si afecta només les zones comunes de la finca, sí que és feina nostra: revisem el quadre de serveis comuns i facturem a la comunitat.",
      },
      {
        pregunta: "Fa olor de cremat al quadre. Què faig?",
        respuesta:
          "No toquis res i no tornis a pujar el que hagi saltat. Si pots abaixar l'interruptor general sense risc, fes-ho, ventila i truca'ns. És dels avisos als quals donem prioritat absoluta.",
      },
      {
        pregunta: "Puc saber el preu abans que vingueu?",
        respuesta:
          "Sí, i és com treballem sempre. Et donem preu tancat de la sortida i el diagnòstic per telèfon, i el de la reparació tan bon punt l'electricista veu l'avaria, abans de tocar res.",
      },
    ],
  },
  {
    slug: "electricista-urgent-badalona",
    slugEs: "electricista-urgente-badalona",
    nombre: "Electricista urgent a Badalona",
    card: {
      titulo: "Urgent a Badalona",
      linea: "Guàrdia 24h a Badalona, Llefià, Centre i primera línia.",
      icono: "rapido",
    },
    local: {
      ciudad: "Badalona",
      ciudadSlug: "lampista-badalona",
      servicioPadre: "electricistes-urgents-24-hores",
    },
    h1: "Electricista urgent a Badalona, 24 hores",
    heroSub:
      "Electricista de guàrdia a Badalona tots els dies de l'any. Arribem en 30-45 minuts amb preu tancat per telèfon abans de sortir.",
    heroImage: "/img/hero-urgencias-24h.jpg",
    metaTitle: "Electricista urgent a Badalona 24 hores",
    metaDescription:
      "Electricista urgent a Badalona 24h: avaries, curtcircuits i talls de llum. Arribada en 30-45 minuts i preu tancat abans de sortir.",
    urgencias: true,
    queIncluye: [
      {
        titulo: "Arribada en 30-45 minuts",
        texto:
          "Cobertura de tota la ciutat: Centre, Llefià, La Salut, Sant Roc, Gorg, Canyadó i la primera línia de mar.",
      },
      {
        titulo: "24 hores, cada dia",
        texto:
          "Guàrdia real de nit, caps de setmana i festius, també a l'agost.",
      },
      {
        titulo: "Preu tancat per telèfon",
        texto:
          "Cost de sortida i diagnòstic abans de moure'ns. El de la reparació, abans de tocar res.",
      },
      {
        titulo: "Prioritat per a comerços",
        texto:
          "Locals i hostaleria del Centre i del port: cada hora sense llum costa diners i ho tractem com a tal.",
      },
    ],
    secciones: [
      {
        h2: "El salnitre: per què a Badalona salten més els diferencials",
        parrafos: [
          "Hi ha una causa d'avaria que a Badalona apareix moltíssim més que terra endins, i a molta gent la sorprèn: l'ambient marí. A la franja propera al mar, de Canyadó al port passant pel Centre, la humitat salina ataca els metalls de la instal·lació molt més ràpid que a la resta de l'àrea metropolitana.",
          "Es nota primer en el que és a fora: endolls de terrassa i balcó, caixes de registre exteriors, aplics i fanals de pati, terminals de quadres de local. El salnitre oxida els contactes, el contacte perd qualitat, apareix resistència i humitat on no hauria d'haver-n'hi, i el diferencial comença a saltar sense que ningú relacioni una cosa amb l'altra. El patró típic és un diferencial que salta els dies de llevant o després d'un temporal i que després sembla que s'arregla sol.",
          "Diagnosticar-ho bé exigeix mesurar l'aïllament circuit per circuit fins a trobar el punt, no anar canviant peces a veure si sona la flauta. I reparar-ho bé exigeix material adequat a l'ambient: caixes i mecanismes estancs de veritat i terminals protegits. Ho deixem indicat al pressupost perquè és la diferència entre resoldre-ho i tornar d'aquí a sis mesos.",
        ],
      },
      {
        h2: "Els blocs de Llefià, La Salut i Sant Roc",
        parrafos: [
          "L'altre gran front d'urgències a Badalona són els barris de blocs construïts entre els cinquanta i els setanta. Llefià, La Salut, Sant Roc, La Pau o Artigues comparteixen un mateix perfil: pisos petits, potències contractades al mínim heretat i quadres que en molts casos continuen sent els originals.",
          "L'avís més freqüent aquí no és una avaria, és una limitació: la casa es queda a les fosques en encendre el forn amb la vitro en marxa, i el que ha baixat és el control de potència. Això no es repara, es resol pujant potència, i en aquestes finques cal comprovar abans si la derivació individual n'admet més. El segon més freqüent és el quadre sense diferencial o amb un de sol per a tot l'habitatge, que converteix qualsevol fuita petita en una apagada completa.",
          "En aquests casos restablim el subministrament aquella mateixa nit deixant aïllat el circuit problemàtic, i et donem per escrit i a part el pressupost del que caldria perquè no es repeteixi. Sense pressió i sense barrejar-ho amb la factura de la urgència.",
        ],
      },
      {
        h2: "Comerços, hostaleria i comunitats",
        parrafos: [
          "Badalona té molt comerç de carrer al Centre, l'eix del Mercat i la zona del port, i per a un negoci la urgència elèctrica té un cost per hora que un habitatge no té. Per això donem prioritat a locals amb el subministrament caigut, i molt especialment a hostaleria amb cambres o cuina elèctrica aturada.",
          "En comunitats de veïns el primer que determinem en arribar és de quin costat del comptador és l'avaria, perquè això decideix qui paga. Del comptador cap a casa teva és privatiu i ho assumeix el propietari. Del comptador cap enrere (muntants, centralització, quadre de serveis comuns, enllumenat d'escala i pàrquing, ascensor, bombes) és comú i ho assumeix la comunitat. Ho deixem clar al full de treball i, si és comú, facturem a la comunitat amb CIF i IVA desglossat i amb el detall que necessita l'administrador.",
        ],
      },
      {
        h2: "Cobertura i temps reals a Badalona",
        parrafos: [
          "Arribem a Badalona en 30-45 minuts segons la zona i l'hora. La franja litoral i el Centre solen estar a la part baixa d'aquesta forquilla; els barris de la part alta, com Canyet o Pomar, a la part alta, per accés i pendent.",
          "Des de Badalona cobrim amb temps semblants Sant Adrià de Besòs, Santa Coloma de Gramenet, Montgat i Tiana, i enllacem amb Barcelona per la Ronda Litoral. En trucar et donem una franja concreta i t'avisem si ens en sortirem.",
        ],
      },
    ],
    faqs: [
      {
        pregunta: "Quant triga un electricista urgent a arribar a Badalona?",
        respuesta:
          "Entre 30 i 45 minuts segons la zona i l'hora. Al Centre i la franja de mar, més a prop de 30; a la part alta, com Canyet o Pomar, una mica més.",
      },
      {
        pregunta: "Visc a prop del mar i el diferencial em salta cada dos per tres. És normal?",
        respuesta:
          "És molt habitual a Badalona: el salnitre oxida terminals, endolls exteriors i caixes, i això provoca derivacions. Es localitza mesurant l'aïllament circuit per circuit i es resol substituint el punt afectat per material apte per a ambient marí.",
      },
      {
        pregunta: "Em marxa la llum en encendre el forn amb la vitro. És una avaria?",
        respuesta:
          "No, és falta de potència contractada: el que baixa és el control de potència. Es resol pujant potència, i als blocs antics de Llefià o Sant Roc cal comprovar abans si la derivació individual n'admet més.",
      },
      {
        pregunta: "L'avaria és de la comunitat. Com es factura?",
        respuesta:
          "Si és del comptador cap enrere (muntants, quadre de serveis comuns, enllumenat d'escala, ascensor) és instal·lació comuna i facturem a la comunitat amb CIF i IVA desglossat, amb el detall que necessita l'administrador. Ho deixem indicat al full de treball.",
      },
      {
        pregunta: "Tinc un bar sense llum. M'ateneu amb prioritat?",
        respuesta:
          "Sí. Els locals amb el subministrament caigut, i sobretot l'hostaleria amb cambres o cuina aturada, tenen prioritat de resposta per sobre de la resta d'avisos no perillosos.",
      },
    ],
  },
];

/** Cards de la home sense pàgina pròpia. Buit des que instal·lacions té landing. */
export const cardsExtraCa: CardExtra[] = [];

/** Serveis amb entitat pròpia: nav, footer, grid de la home i ZonasSection. */
export const serviciosGlobalesCa = serviciosCa.filter((s) => !s.local);

/** Landings de servei per ciutat. Fora del nav i del grid, però al footer. */
export const serviciosLocalesCa = serviciosCa.filter((s) => s.local);

/** Landings de servei per ciutat que pengen d'una ciutat concreta. */
export function serviciosDeCiudadCa(ciudadSlug: string): Servicio[] {
  return serviciosCa.filter((s) => s.local?.ciudadSlug === ciudadSlug);
}

/** Landings locals que pengen d'un servei pare. */
export function hijosDeServicioCa(slug: string): Servicio[] {
  return serviciosCa.filter((s) => s.local?.servicioPadre === slug);
}

export function getServicioCa(slug: string): Servicio | undefined {
  return serviciosCa.find((s) => s.slug === slug);
}
