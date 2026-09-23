import type { FAQ } from "../tipos";

/** Copy en català de les pàgines fixes (home, pressupost, contacte). */

export const homeCa = {
  /** Title de marca i àrea (la keyword "lampista a Barcelona" és de
   *  /ca/lampista-barcelona, no de la home). El ganxo va davant a la
   *  description; el segell de Google s'afegeix des de config. */
  metaTitle: "Lampistes a Barcelona i Vallès | 24h i preu tancat",
  metaDescription:
    "Urgències 24h, arribada en 45-60 min i preu tancat abans de començar. Lampistes i electricistes a Barcelona, Sabadell, Terrassa i el Vallès.",
  serviciosIntro:
    "De l'endoll que fa espurnes al quadre complet d'una nau. Tria què et passa i t'expliquem com ho resolem, o truca'ns directament i ens ho expliques tu.",
  bandaUrgencias: {
    texto: "Hi ha un electricista de guàrdia ara mateix.",
    subtexto: "Sense llum, curtcircuit o olor de cremat: et diem el preu tancat per telèfon i sortim ja.",
  },
  boletinDestacado: {
    h2: "T'han demanat el butlletí elèctric?",
    parrafos: [
      "És el tràmit que més resolem. Si la teva comercialitzadora et demana un CIE per donar d'alta la llum, pujar potència o després d'una reforma, el tens en 24-48 hores: revisem la instal·lació, un instal·lador habilitat signa el certificat i nosaltres el tramitem davant d'Indústria. Tu només l'adjuntes a la teva gestió.",
    ],
    bullets: [
      "Butlletí blau (reconeixement) i blanc (CIE), segons el que et demanin",
      "Signat per un instal·lador habilitat, amb el seu número de registre",
      "Tramitació davant d'Indústria inclosa",
      "Llest en 24-48 hores en la majoria de casos",
    ],
    ctaTexto: "Tot sobre el butlletí elèctric",
    ctaHref: "/ca/butlleti-electric",
  },
  consejos: {
    h2: "Guies ràpides dels nostres lampistes",
    intro:
      "Els dubtes que ens pregunteu cada setmana, respostos sense embuts: què pots comprovar tu i quan toca trucar.",
    ctaTexto: "Veure tots els consells",
  },
  textoSeo: {
    h2: "Lampistes de confiança a Barcelona i la seva àrea metropolitana",
    parrafos: [
      "Som una empresa de serveis elèctrics amb base a Sabadell que treballa amb instal·ladors habilitats inscrits al registre. Això té una conseqüència pràctica per a tu: el teu butlletí elèctric (CIE) el signa qui legalment pot fer-ho, amb plena validesa davant d'Indústria i de la teva comercialitzadora, una cosa que cap “manetes” no et pot oferir. Treballem cada dia a Barcelona, Sabadell, Badalona, Mataró i Granollers, i als municipis de les seves comarques.",
      "Quina mena de feines fem? Tot el que penja d'un quadre elèctric: urgències que no poden esperar, avaries que fa setmanes que donen la llauna, butlletins per donar d'alta la llum o pujar potència, quadres antics amb fusibles que toca jubilar, punts de recàrrega per al cotxe elèctric, il·luminació i ampliacions per a reformes, i manteniment per a comunitats de veïns, oficines, comerços i restauració.",
      "La nostra manera de treballar és simple i no canvia mai: ens expliques què necessites, et donem un preu tancat per escrit en menys de 2 hores i, si t'encaixa, venim quan et vagi bé. El preu que acceptes és el que pagues. Si durant la feina apareix res d'imprevist, s'atura, se t'explica i es pressuposta a part. Totes les feines queden provades, recollides i amb garantia per escrit.",
      "Si és la primera vegada amb nosaltres, comença per on comença gairebé tothom: una trucada de dos minuts o el formulari de dalt. Sense compromís, sense visites comercials i sense sorpreses a la factura.",
    ],
  },
  porQue: {
    h2: "Per què veïns i empreses ens truquen a nosaltres",
    parrafos: [
      "Perquè fem el que gairebé ningú no fa en aquest ofici. Dir-te el preu abans, per escrit, i complir-lo. Quan truques a un lampista t'hi jugues dues coses: no saps qui vindrà ni quant acabaràs pagant. Aquí totes dues estan resoltes. Qui ve a casa teva o al teu negoci és un instal·lador habilitat amb el seu número de registre, no “un noi que conec”, i té capacitat legal per signar el teu butlletí. I el preu que acceptes és el preu que pagues, tancat per escrit abans de començar. Així treballem a cada avaria, cada quadre i cada instal·lació, sigui un pis a Gràcia o una nau a Granollers.",
    ],
    bullets: [
      "Preu tancat per escrit abans de començar",
      "Instal·lador habilitat, no “un manetes”",
      "Butlletí elèctric (CIE) en 24-48h",
      "El mateix electricista per a les teves properes feines",
    ],
  },
  comoFunciona: {
    h2: "Com funciona",
    pasos: [
      {
        titulo: "Ens truques o ens escrius",
        texto:
          "Explica'ns què necessites en dos minuts. Si pots, amb una foto n'hi ha prou per valorar la majoria de feines.",
      },
      {
        titulo: "Et donem preu tancat",
        texto:
          "Per escrit i en menys de 2 hores en horari laboral. Aquest preu no canvia en acabar.",
      },
      {
        titulo: "Venim avui o quan et vagi bé",
        texto:
          "Urgències, avui mateix. Feines programades, el dia i la franja que triïs. I complim l'hora.",
      },
    ],
  },
  zonas: {
    h2: "Treballem a tota l'àrea de Barcelona",
    intro:
      "Servei propi a Barcelona, Sabadell, Badalona, Mataró i Granollers, i cobertura diària a les seves comarques: Barcelonès, Vallès Occidental, Vallès Oriental i Maresme.",
  },
  faqs: [
    {
      pregunta: "Quant cobra un electricista per hora?",
      respuesta:
        "No treballem per hores, i amb raó. L'hora oberta és la porta a les sorpreses a la factura. Et donem un preu tancat per la feina completa abans de començar, per escrit. Demana'l gratis i el tens en menys de 2 hores.",
    },
    {
      pregunta: "El desplaçament es cobra?",
      respuesta:
        "Sí, la visita es cobra. Té un preu tancat que et diem per telèfon abans de venir, segons zona i horari. El que no hi ha són sorpreses: ho saps abans que surti el lampista, i la reparació es pressuposta per escrit abans de tocar res.",
    },
    {
      pregunta: "Què és el butlletí elèctric i quan el necessito?",
      respuesta:
        "És el certificat (CIE) que acredita que la teva instal·lació compleix el reglament, i només el pot signar un instal·lador habilitat. El necessites per donar d'alta la llum, pujar potència, després d'una reforma o si la instal·lació és antiga. Te'l gestionem en 24-48h.",
    },
    {
      pregunta: "Veniu avui mateix?",
      respuesta:
        "Si és urgent, sí: tenim electricista de guàrdia 24 hores, tots els dies. Si no corre pressa, concertem dia i franja horària i la complim.",
    },
    {
      pregunta: "Treballeu amb empreses i comunitats?",
      respuesta:
        "Sí: comunitats de veïns, oficines, locals i restauració, tant avaries puntuals com manteniments periòdics. Factura amb CIF i IVA desglossat i visita tècnica per valorar la instal·lació.",
    },
    {
      pregunta: "Doneu garantia?",
      respuesta:
        "Sí, per escrit, sobre la mà d'obra i els materials que instal·lem. Si alguna cosa nostra falla, tornem i ho resolem sense cost.",
    },
    {
      pregunta: "Qui fa la feina i qui signa el butlletí?",
      respuesta:
        "La feina l'executa un instal·lador elèctric habilitat, inscrit al registre oficial, i és ell qui signa el teu butlletí (CIE) amb el seu número. Nosaltres coordinem el servei, et donem el preu tancat i tramitem la documentació davant d'Indústria. Pots demanar-nos el número de registre de l'instal·lador que signarà el teu.",
    },
    {
      pregunta: "Sou lampistes?",
      respuesta:
        "Sí. En català se'n diu lampista i en castellà electricista: és el mateix ofici. La feina la fa sempre un instal·lador elèctric habilitat, que és qui pot signar el butlletí.",
    },
  ] as FAQ[],
  ctaFinal: {
    h2: "Demana pressupost sense compromís",
    texto:
      "Truca'ns i et diem el preu tancat, o deixa'ns les teves dades i et truquem nosaltres en menys de 2 hores en horari laboral.",
  },
};

export const presupuestoCa = {
  metaTitle: "Preu d'electricista: pressupost tancat gratis",
  metaDescription:
    "Quant costa un electricista a Barcelona? Et donem preu tancat per escrit en menys de 2h, gratis. Sense sorpreses en acabar.",
  h1: "Quant costa un electricista? Preu tancat, gratis i en menys de 2 hores",
  intro:
    "Resposta curta: depèn de la feina, i desconfia de qui et deixi anar una xifra sense saber què necessites. Resposta útil: demana'ns pressupost i en menys de 2 hores tens un preu tancat per escrit, sense compromís. Aquí t'expliquem de què depèn.",
  secciones: [
    {
      h2: "Quant costa un electricista?",
      parrafos: [
        "El preu d'una feina elèctrica depèn de quatre coses. Del tipus de feina, perquè no és el mateix canviar un endoll que un quadre complet. De la urgència i l'horari, perquè una guàrdia nocturna no costa el que costa una visita programada. Dels materials. I de si la feina requereix butlletí i la seva tramitació.",
        "Per això no publiquem tarifes. Una xifra solta, sense veure el teu cas, només serveix per endur-se sorpreses després. El nostre sistema és el contrari. Ens expliques què necessites i et donem un preu tancat per escrit abans de començar. Aquest preu ho inclou tot i no canvia en acabar.",
      ],
    },
    {
      h2: "Es cobra el desplaçament?",
      parrafos: [
        "Sí, la visita es cobra, i el seu preu tancat te'l diem per telèfon abans de venir. El que no trobaràs són conceptes que apareixen al final de la factura: el desplaçament el coneixes abans d'obrir la porta i la feina es pressuposta per escrit abans de començar. Si acceptes un preu, aquest és el preu.",
      ],
    },
    {
      h2: "Quant costa un butlletí elèctric?",
      parrafos: [
        "Depèn de la mida de la instal·lació i de si passa la revisió a la primera o necessita adaptacions. Et donem el preu tancat abans de començar. Els terminis sí que són estàndard: el tens en 24-48 hores. Tens tots els detalls a la nostra pàgina del butlletí elèctric.",
      ],
    },
    {
      h2: "I una urgència? Quant em costarà?",
      parrafos: [
        "També t'ho diem abans: quan truques, et donem el preu tancat de la sortida i el diagnòstic per telèfon, segons l'horari. I quan el lampista veu l'avaria, et dona el preu tancat de la reparació abans de tocar res. En cap moment avances sense saber quant costa.",
      ],
    },
    {
      h2: "Per què desconfiar de les tarifes publicades",
      parrafos: [
        "Quan busques quant costa un electricista, el primer que surt són llistes de preus per concepte. Tant per canviar un endoll, tant per punt de llum. Sonen tranquil·litzadores i gairebé mai no s'assemblen a la factura final.",
        "El motiu és que aquestes tarifes descriuen una operació en el buit, i la feina elèctrica gairebé mai no passa en el buit. Canviar un endoll costa el que costa si al darrere hi ha una caixa de registre accessible i un circuit en condicions. Si el mecanisme està cremat perquè el cable que l'alimenta té poca secció, canviar l'endoll no arregla res i la feina real és una altra. La tarifa publicada no sap en quin dels dos casos ets. Nosaltres, amb una foto i dues preguntes, gairebé sempre sí.",
        "Hi ha, a més, una raó menys amable. Una tarifa baixa i cridanera serveix per aconseguir la visita, i la conversa sobre el preu real passa quan ja tens el tècnic a casa i la instal·lació oberta. És la posició amb menys capacitat de negociació possible.",
        "La nostra alternativa no és més cara per definició: és que saps el número abans, per escrit, i decideixes amb calma i sense ningú al davant.",
      ],
    },
    {
      h2: "Què inclou sempre un preu tancat nostre",
      parrafos: [
        "Perquè puguis comparar amb altres pressupostos, això és el que va dins del número que et donem i que no apareixerà després com a extra:",
      ],
      bullets: [
        "La mà d'obra completa de la feina descrita, sense límit d'hores",
        "Els materials necessaris, homologats i detallats al pressupost",
        "Les proves finals: dispar del diferencial, aïllament i continuïtat de terra",
        "La retirada del material substituït i la neteja de la zona de treball",
        "La garantia per escrit sobre mà d'obra i materials instal·lats",
        "L'IVA, indicat de manera desglossada i no amagat al total",
      ],
    },
    {
      h2: "Què pot canviar el preu (i com ho gestionem)",
      parrafos: [
        "Ser honestos amb el preu tancat obliga a dir també en quins casos pot aparèixer un cost addicional, perquè prometre que mai no passa res seria mentir.",
        "El que pot aparèixer és l'imprevisible: en obrir una paret apareix una instal·lació diferent de la que hi havia al plànol, un cable que semblava sa resulta estar malmès en un tram ocult, o el mecanisme que calia substituir arrossega un problema al circuit que l'alimenta.",
        "Quan això passa, el procediment és sempre el mateix: s'atura la feina, t'ho ensenyem, t'expliquem què implica i et passem un pressupost a part per a aquesta part concreta. Tu decideixes si es fa ara, més endavant o amb una altra empresa. El que mai no fem és continuar i presentar-te la sorpresa a la factura.",
        "El preu que vas acceptar per a la feina original continua sent aquest, es faci o no l'afegit.",
      ],
    },
    {
      h2: "Quan demanar pressupost i quan trucar directament",
      parrafos: [
        "Si la feina pot esperar, el formulari és la millor opció: ens dones el context amb calma i reps el preu per escrit en menys de 2 hores en horari laboral. Si tens fotos, pots enviar-nos-les per WhatsApp. És el camí dels butlletins, els canvis de quadre, les pujades de potència, els punts de recàrrega i qualsevol instal·lació programada.",
        "Si hi ha risc, truca i no esperis: olor de cremat, espurnes, un mecanisme calent al tacte, pessigolleig en tocar un electrodomèstic, aigua sobre la instal·lació o un local amb gènere refrigerat sense subministrament. En aquests casos el preu de la sortida te'l donem per telèfon al moment i sortim.",
        "I si dubtes de en quin dels dos grups ets, truca igualment. Preguntar-ho no costa res i et direm amb franquesa si el teu cas pot esperar a demà, encara que això signifiqui facturar menys avui.",
      ],
    },
  ],
  faqs: [
    {
      pregunta: "El pressupost és gratis de debò?",
      respuesta:
        "El pressupost sí: la majoria de feines les pressupostem amb una trucada i alguna foto, sense visita prèvia, gratis i sense compromís. T'arriba per escrit en menys de 2 hores en horari laboral. Si cal visita de diagnòstic, aquesta té un preu tancat que t'avisem abans.",
    },
    {
      pregunta: "El preu pot canviar en acabar la feina?",
      respuesta:
        "No. És la base de la nostra manera de treballar: preu tancat per escrit abans de començar. Si durant la feina aparegués res d'imprevisible, s'atura, se t'explica i es pressuposta a part. Mai no et trobaràs un extra a la factura.",
    },
    {
      pregunta: "Cobreu per hores?",
      respuesta:
        "No. Pressupostem per feina completa. L'hora oberta trasllada el risc al client; el preu tancat ens obliga a nosaltres a treballar bé i ràpid.",
    },
    {
      pregunta: "Què necessiteu per donar-me preu?",
      respuesta:
        "Què necessites, a quin municipi i, si és possible, una o dues fotos. Amb això tanquem preu en la gran majoria de casos. Si la feina és gran, concertem una visita tècnica amb preu avisat per endavant.",
    },
    {
      pregunta: "Quant de temps em manteniu el preu?",
      respuesta:
        "Els nostres pressupostos tenen una validesa indicada al mateix document, habitualment d'un mes. Si l'acceptes dins d'aquest termini, el preu és el que hi posa, encara que el material hagi pujat entremig.",
    },
    {
      pregunta: "S'ha de pagar res per endavant?",
      respuesta:
        "En feines domèstiques habituals, no: es paga en acabar, amb la feina provada i funcionant. En instal·lacions grans que requereixen demanar material específic pot haver-hi una provisió inicial, i en aquest cas es diu des del pressupost, mai sobre la marxa.",
    },
    {
      pregunta: "Quines formes de pagament accepteu?",
      respuesta:
        "Targeta, transferència i efectiu. Sempre amb factura, i amb IVA desglossat. Si ets empresa o comunitat, facturem amb CIF i amb el detall que necessiti la teva gestoria o el teu administrador.",
    },
    {
      pregunta: "Puc demanar pressupost només per comparar?",
      respuesta:
        "Sí, i ens sembla raonable que ho facis. Demanar preu no et compromet a res i no rebràs trucades insistint. Si compares, mira què inclou cada pressupost i no només el total. La diferència és gairebé sempre als materials, a les proves finals i en si la garantia va per escrit.",
    },
  ] as FAQ[],
};

export const contactoCa = {
  metaTitle: "Contacte | Pressupost gratis en menys de 2h",
  metaDescription:
    "Demana pressupost gratis als nostres lampistes: et responem en menys de 2 hores en horari laboral. Urgències ateses 24h per telèfon.",
  h1: "Demana pressupost gratis",
  intro:
    "Explica'ns què necessites i et truquem en menys de 2 hores en horari laboral amb un preu tancat. És urgent? No esperis el formulari: truca'ns, hi ha un electricista de guàrdia ara mateix.",
  secciones: [
    {
      h2: "Què passa després que ens escriguis",
      parrafos: [
        "Res d'esperes sense notícies ni de comercials insistint. El procés és sempre el mateix i el pots seguir sense trucar-nos tu:",
        "1. Rebem el teu missatge i el llegeix una persona, no un robot. Si ens has enviat fotos per WhatsApp, millor: amb una o dues es valora la majoria de feines sense necessitat de visita.",
        "2. Et truquem en menys de 2 hores en horari laboral per entendre bé el cas. Solen bastar dos o tres minuts.",
        "3. T'enviem el preu tancat per escrit, amb el que inclou i el que no. Aquest preu no canvia en acabar.",
        "4. Si t'encaixa, acordem dia i franja horària. I complim l'hora: si anem amb retard, t'avisem abans que sigui tard.",
        "Si la feina és gran o hi ha massa incògnites per tancar preu a distància, et proposem una visita tècnica i et diem el seu cost per endavant. Mai no apareix una visita cobrada que no hagis acceptat abans.",
      ],
    },
    {
      h2: "Horaris: quan responem i quan sortim",
      parrafos: [
        "Hi ha dues coses que la gent barreja, i afecten el que pots esperar de nosaltres segons l'hora a què escriguis.",
        "Les urgències s'atenen 24 hores, tots els dies de l'any, festius inclosos. Si t'has quedat sense llum, fa olor de cremat o hi ha espurnes, truca al telèfon a qualsevol hora: hi ha un electricista de guàrdia i et diem el preu tancat de la sortida abans de moure'ns.",
        "Els pressupostos i les feines programades es gestionen en horari laboral. Si ens escrius un dissabte a la tarda, et respondrem dilluns al matí. Preferim dir-ho clar a prometre una resposta immediata que no donarem.",
        "Per a comunitats, empreses i locals amb contracte de manteniment hi ha prioritat de resposta i un interlocutor fix que ja coneix la vostra instal·lació.",
      ],
    },
    {
      h2: "Què explicar-nos perquè el pressupost sigui exacte",
      parrafos: [
        "Com millor entenguem el cas, més ajustat serà el preu i menys sorpreses hi haurà. Amb això n'hi ha prou:",
      ],
      bullets: [
        "Què et passa o què necessites, en llenguatge normal: no cal que facis servir termes tècnics",
        "A quin municipi i, si és urgent, a quin carrer o barri",
        "Si és habitatge, local, oficina o zona comuna d'una comunitat",
        "Una o dues fotos per WhatsApp: del quadre elèctric, de l'endoll o del punt afectat, sense desmuntar ni tocar la instal·lació",
        "Si hi ha ascensor i si l'accés té alguna particularitat",
        "Si tens data límit, per una mudança, una alta de llum o una obertura",
      ],
    },
  ],
  faqs: [
    {
      pregunta: "Quant trigueu a respondre?",
      respuesta:
        "Menys de 2 hores en horari laboral. Fora d'aquest horari, el formulari es contesta el següent dia hàbil. Les urgències són una altra cosa: per a això hi ha el telèfon, que s'atén 24 hores tots els dies de l'any.",
    },
    {
      pregunta: "El pressupost té cap cost o compromís?",
      respuesta:
        "Cap. La majoria de feines les pressupostem amb una trucada i alguna foto, sense visita prèvia i sense compromís. Si el cas requereix visita tècnica, et diem el seu preu abans de venir i decideixes tu.",
    },
    {
      pregunta: "Puc escriure-us per WhatsApp?",
      respuesta:
        "Sí, i per a molts casos és el més pràctic perquè pots enviar fotos directament. Tens el botó a qualsevol pàgina. Per a una urgència, millor trucar: és més ràpid i et donem preu al moment.",
    },
    {
      pregunta: "Ateneu en català?",
      respuesta:
        "Sí, en català i en castellà, tant per telèfon com per escrit. Digue'ns què prefereixes i cap problema.",
    },
    {
      pregunta: "Quines zones cobriu?",
      respuesta:
        "Barcelona ciutat i els seus deu districtes, Sabadell, Badalona, Mataró i Granollers, a més dels municipis del Barcelonès, el Vallès Occidental, el Vallès Oriental i el Maresme. Si el teu municipi no hi apareix però és en aquesta àrea, truca'ns igualment i t'ho confirmem.",
    },
    {
      pregunta: "Què faig amb les meves dades si canvio d'opinió?",
      respuesta:
        "Escriu-nos al correu de contacte i les eliminem. Només fem servir el que ens dones per respondre't el pressupost: no cedim dades a tercers ni et posarem en cap llista de correu.",
    },
  ] as FAQ[],
};
