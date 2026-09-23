import type { Ciudad } from "../tipos";

/**
 * Landings de districte de Barcelona en català (versió /ca). Mateixa
 * plantilla que les ciutats i pengen de /ca/lampista-barcelona mitjançant
 * el camp padre. El camp slugEs enllaça amb la pàgina equivalent en castellà.
 */

const padre = { nombre: "Barcelona", slug: "lampista-barcelona" };

export const distritosCa: Ciudad[] = [
  {
    slug: "lampista-eixample",
    slugEs: "electricista-eixample",
    nombre: "Eixample",
    comarca: "Barcelona",
    padre,
    h1: "Lampista a l'Eixample: urgències i instal·ladors habilitats",
    metaTitle: "Lampista a l'Eixample (Barcelona) | Urgències 24h",
    metaDescription:
      "Lampistes i electricistes habilitats a l'Eixample. Finques antigues, butlletins (CIE), quadres i urgències 24h. Preu tancat abans de començar.",
    porQue: [
      "L'Eixample concentra el parc de finques regies més gran de Barcelona. Edificis del 1900 al 1930, sostres alts, instal·lacions que han anat creixent a pedaços durant un segle i quadres al costat de la porta que ja no protegeixen res. És el districte on més sovint treballa el nostre lampista, i d'aquí surt bona part dels butlletins que gestionem: pisos que es venen o es lloguen i que no passen la revisió de la comercialitzadora.",
      "Treballem amb cura en finques amb elements protegits: regates mínimes, motllures respectades i canaleta allà on no es pot obrir paret. En urgències arribem en 30-45 minuts a qualsevol punt del districte, del Fort Pienc a l'Esquerra, i l'aparcament és problema nostre, no teu.",
    ],
    tambienServicio: {
      intro:
        "Des de l'Eixample ens movem als districtes del voltant en pocs minuts: Gràcia i Sant Martí per dalt i per mar, Ciutat Vella per baix i Les Corts per la Diagonal. I, és clar, a la resta de Barcelona.",
      municipios: ["Gràcia", "Sant Martí", "Ciutat Vella", "Les Corts", "Sants"],
    },
    zonas: {
      h2: "Feines habituals per zona de l'Eixample",
      intro:
        "El districte és gran i cada zona té el seu patró d'avaries. Això és el que més fem a cadascuna.",
      items: [
        {
          nombre: "La Dreta de l'Eixample",
          texto:
            "Finques senyorials amb instal·lació centenària: renovació completa, butlletins per a compravenda i quadres nous amb protecció per a despatxos i consultes.",
        },
        {
          nombre: "L'Antiga i la Nova Esquerra",
          texto:
            "Pisos reformats a mitges on la potència es queda curta: pujades de potència, línies noves de cuina i adequacions per al CIE.",
        },
        {
          nombre: "Sant Antoni",
          texto:
            "Comerç i restauració en plena efervescència: ampliacions de potència per a cuines, quadres de local i legalitzacions per a llicències.",
        },
        {
          nombre: "Sagrada Família",
          texto:
            "Blocs dels anys 50 als 70 amb fusibles encara en servei: canvis de quadre, preses de terra i derivacions que fan saltar el diferencial.",
        },
        {
          nombre: "Fort Pienc",
          texto:
            "Habitatge dels 70 i 80 al costat de Glòries: renovació de quadres, línies per a climatització i punts de recàrrega en pàrquings comunitaris.",
        },
      ],
    },
    secciones: [
      {
        h2: "La instal·lació centenària d'una finca de l'Eixample",
        parrafos: [
          "Les finques de l'Eixample Cerdà es van aixecar entre el 1900 i el 1930, quan l'electricitat era un luxe per donar llum a quatre bombetes. Tot el que hi ha avui en aquests pisos (cuina, rentadora, aire condicionat, ordinadors) penja d'una instal·lació que mai no es va dissenyar per a això i que ha anat creixent a pedaços durant un segle.",
          "El patró es repeteix. Una columna muntant antiga que puja pel celobert, derivacions fetes en dècades diferents i amb criteris diferents, cablejat de secció curta amagat sota les motllures i, moltes vegades, cap presa de terra. Als pisos on algú va reformar la cuina als anys noranta hi apareix, a més, una línia nova ben feta convivint amb una altra dels anys cinquanta, sense que ningú separés mai els circuits.",
          "El celobert mereix un capítol a part perquè és l'origen d'una part important de les urgències del districte. És humit, mal ventilat i hi passen tant els baixants com bona part de les derivacions. Quan l'aïllament cedeix allà, el diferencial comença a saltar els dies de pluja i ningú relaciona una cosa amb l'altra.",
          "En aquestes finques gairebé mai no cal refer-ho tot de cop, i no ho proposem. La feina és separar circuits, posar un quadre que protegeixi de veritat, resoldre la presa de terra i substituir els trams compromesos. Respectant la finca, que és el que més ens pregunten.",
        ],
      },
      {
        h2: "Obra en finca catalogada: com treballem sense trencar",
        parrafos: [
          "Bona part de l'Eixample està protegit, i molts propietaris donen per fet que renovar la instal·lació implica aixecar motllures, picar parets de mosaic o sacrificar un sostre amb enteixinat. A la pràctica gairebé mai no és així, però exigeix treballar d'una altra manera i amb més temps de planificació.",
          "Aprofitem els tubs i les canalitzacions existents sempre que admetin el cablejat nou. Passem pels cels rasos de les zones ja reformades, gairebé sempre bany i cuina. Allà on no es pot obrir paret fem servir canaleta tècnica de perfil discret. I les regates queden per als trams curts i imprescindibles. Els paviments hidràulics i les fusteries originals no es toquen.",
          "Quan l'actuació afecta elements comuns de la finca, parlem nosaltres amb l'administrador i li entreguem per escrit què es farà i com. És un pas que als propietaris els estalvia discussions a la junta i que fem sense cost, perquè ens evita problemes a tots.",
        ],
      },
      {
        h2: "Per què l'Eixample és el districte que més butlletins genera",
        parrafos: [
          "De tots els CIE que gestionem a Barcelona, l'Eixample s'endú la part més gran, i no és casualitat. S'hi ajunten tres factors: és el districte amb més operacions de compravenda i lloguer, té el parc d'habitatge més antic en mans privades, i els seus butlletins originals, quan existeixen, són de fa dècades.",
          "La seqüència es repeteix cada setmana. Algú compra o lloga un pis, va a donar d'alta la llum, i la comercialitzadora li demana un butlletí perquè el que consta és anterior als anys vuitanta o directament no n'hi ha cap. És llavors quan ens truquen, normalment amb pressa, perquè la mudança ja té data.",
          "El nostre consell si ets al mig d'una operació: no esperis al dia de l'alta. Amb una visita de revisió saps en una estona si la instal·lació passa tal com està o què cal tocar, i això et dona marge per negociar qui assumeix l'adaptació abans de signar. Fer-ho després és tenir la mateixa despesa sense cap capacitat de negociar.",
        ],
      },
    ],
    faqsLocales: [
      {
        pregunta: "Podeu passar cable sense picar les motllures ni el paviment hidràulic?",
        respuesta:
          "En la majoria de casos, sí. Aprofitem els tubs existents, passem pels cels rasos de banys i cuina, i fem servir canaleta tècnica discreta allà on no es pot obrir paret. Les regates es reserven per a trams curts i imprescindibles. Els paviments hidràulics i les fusteries originals no es toquen.",
      },
      {
        pregunta: "Estic comprant un pis a l'Eixample. Quan reviso la instal·lació?",
        respuesta:
          "Abans de signar, no després. Amb una visita saps si la instal·lació passa tal com està o què caldria adaptar, i això et dona marge per negociar qui assumeix aquest cost. Fer-ho després és la mateixa despesa sense cap capacitat de negociar.",
      },
      {
        pregunta: "El diferencial em salta només quan plou. És normal en aquestes finques?",
        respuesta:
          "És molt freqüent aquí, i l'origen és gairebé sempre al celobert. És humit, està mal ventilat i hi passa bona part de les derivacions de la finca. Es localitza mesurant l'aïllament circuit per circuit, i es resol substituint el tram afectat. Assecar i esperar no serveix.",
      },
      {
        pregunta: "Quant triga un lampista a arribar a l'Eixample?",
        respuesta:
          "En urgències, entre 30 i 45 minuts a qualsevol zona del districte. En feines programades, concertem franja i la complim.",
      },
      {
        pregunta: "La meva finca està catalogada. Podeu renovar la instal·lació?",
        respuesta:
          "Sí, ho fem sovint a l'Eixample: regates mínimes, motllures i fusteries respectades, i canaleta tècnica allà on no es pot obrir paret. Tot amb butlletí en acabar.",
      },
      {
        pregunta: "Feu butlletins per vendre o llogar un pis a l'Eixample?",
        respuesta:
          "Sí, és l'encàrrec estrella del districte: revisem la instal·lació, adaptem l'imprescindible i et gestionem el CIE en 24-48h.",
      },
      {
        pregunta: "Sou lampistes o electricistes?",
        respuesta:
          "Les dues coses: en català sempre s'ha dit lampista i en castellà electricista, però l'ofici és el mateix. A l'Eixample, com a tot arreu, la feina la fa un instal·lador elèctric habilitat, que és qui pot signar el butlletí amb el seu número de registre.",
      },
    ],
  },
  {
    slug: "lampista-gracia",
    slugEs: "electricista-gracia",
    nombre: "Gràcia",
    comarca: "Barcelona",
    padre,
    h1: "Lampista a Gràcia: urgències i instal·ladors habilitats",
    metaTitle: "Lampista a Gràcia (Barcelona) | Urgències 24h",
    metaDescription:
      "Lampistes i electricistes habilitats a Gràcia. Finques petites, reformes, butlletins (CIE) i urgències 24h. Preu tancat abans de començar.",
    porQue: [
      "La Vila de Gràcia és un poble dins de Barcelona i les seves finques ho reflecteixen: edificis estrets, sense ascensor, amb instal·lacions petites que es van quedar en una altra època. L'encàrrec típic que rep el nostre lampista al barri és el pis acabat de llogar o de comprar per gent jove que vol electrificar la cuina i descobreix que la potència i el quadre no donen per a més.",
      "Els carrers estrets i les places no ens frenen: anem a peu des d'on es pugui aparcar, de manera que el temps d'arribada en urgències es manté en 30-45 minuts. També atenem els comerços i restaurants de les places, amb feines fora d'horari per no interrompre el servei.",
    ],
    tambienServicio: {
      intro:
        "Cobrim tot el districte de Gràcia, de la Vila a Vallcarca, i saltem en minuts als districtes veïns: l'Eixample per baix, Horta-Guinardó per l'est i Sarrià-Sant Gervasi per l'oest.",
      municipios: ["Eixample", "Horta-Guinardó", "Sarrià-Sant Gervasi"],
    },
    zonas: {
      h2: "Feines habituals per zona de Gràcia",
      intro: "Cada part del districte té el seu encàrrec típic. Aquests són els nostres.",
      items: [
        {
          nombre: "Vila de Gràcia",
          texto:
            "Finques estretes amb potència curta: pujades de potència, quadres nous i reformes d'instal·lació en pisos petits. Comerços de plaça amb ampliacions per a restauració.",
        },
        {
          nombre: "La Salut",
          texto:
            "Pendents i finques al costat del Park Güell: instal·lacions antigues, derivacions per humitat i renovació de quadres.",
        },
        {
          nombre: "Vallcarca i els Penitents",
          texto:
            "Cases amb jardí i blocs en desnivell: il·luminació exterior, automatismes i ampliacions d'instal·lació.",
        },
        {
          nombre: "El Coll i Camp d'en Grassot",
          texto:
            "Blocs dels anys 60 i 70: canvis de quadre, preses de terra i adequacions per passar el butlletí.",
        },
      ],
    },
    secciones: [
      {
        h2: "La casa de poble de Gràcia i el seu quadre de joguina",
        parrafos: [
          "Gràcia va ser municipi independent fins al 1897 i el seu teixit urbà continua sent el d'un poble: cases baixes de dues i tres plantes, finques estretes d'una sola escala, i pisos que originalment eren habitatges obrers de dimensions molt contingudes. Això condiciona del tot la feina elèctrica al barri.",
          "El quadre típic d'una casa de la Vila és minúscul: dos o tres elements al costat de la porta d'entrada, sovint dins d'un armari o tapat per un quadre decoratiu, amb un sol diferencial per a tot l'habitatge quan n'hi ha. Les caixes de derivació són on es va poder, no on tocava, i el cablejat va sovint sobre regleta vista pintada del color de la paret, invisible fins que la mires de prop.",
          "L'encàrrec estrella del barri arriba amb la gent jove que compra o lloga una d'aquestes cases i vol una cuina elèctrica en condicions. Aquí apareix el xoc: la potència contractada és la mínima heretada de fa trenta anys, no hi ha circuit propi de cuina, i el quadre no admet ni un element més. Es resol bé, però cal fer les tres coses alhora (línia nova, quadre i potència) i explicar-ho des del principi perquè no hi hagi sorpreses.",
        ],
      },
      {
        h2: "Baixos comercials i terrasses de plaça",
        parrafos: [
          "Les places de Gràcia concentren una densitat de bars i restaurants que no té cap altre barri de la seva mida, i aquests locals treballen amb instal·lacions que en molts casos van néixer com el baix d'una casa particular.",
          "Els problemes que més atenem aquí són de sobrecàrrega: cuines que han anat incorporant equips sense que ningú recalculés res, cambres frigorífiques penjades d'un circuit d'endolls, i quadres de local on conviuen la instal·lació del menjador, la de la cuina i la de la terrassa sense cap separació clara. A l'estiu, quan l'aire condicionat entra a l'equació, és quan salta tot.",
          "Treballem aquests locals fora d'horari de servei, normalment al matí ben d'hora o el dia de tancament, perquè aturar una cuina en hora punta costa més que qualsevol reparació. Per a terrasses i vetlladors muntem preses estanques i protecció específica per a intempèrie, que és el que exigeix tenir consum permanent al carrer.",
          "Si el teu local necessita legalització per a una llicència d'activitat, el certificat va inclòs en la mateixa feina i el tramitem nosaltres.",
        ],
      },
      {
        h2: "Festa Major i altres instal·lacions temporals",
        parrafos: [
          "A l'agost Gràcia munta la decoració de carrer més ambiciosa de la ciutat, i darrere de cada carrer guarnit hi ha una instal·lació elèctrica provisional que ha d'aguantar una setmana d'ús intensiu a la intempèrie.",
          "Les comissions ho resolen amb voluntaris i bona voluntat, i funciona. Però hi ha una part que hauria de revisar algú habilitat. D'on s'agafa el corrent, quina protecció diferencial té aquesta presa, com estan fets els empalmaments que queden a l'abast de la gent, i si el cablejat aeri és a l'alçada que toca i ben subjectat.",
          "Donem servei a comissions, associacions de veïns i comerços per a aquesta mena de muntatges temporals: revisió prèvia, quadre provisional amb proteccions en condicions i disponibilitat durant els dies de festa per si alguna cosa falla. No és la nostra feina més habitual, però és la que més ens agrada.",
        ],
      },
    ],
    faqsLocales: [
      {
        pregunta: "Vull posar inducció en una casa de la Vila. Què implica?",
        respuesta:
          "Tres coses alhora, gairebé sempre. Línia nova amb circuit propi per a la cuina, un quadre capaç d'admetre-la i pujada de potència amb el seu butlletí. T'ho tanquem tot en un mateix pressupost per escrit, perquè no apareguin sorpreses a mitja feina.",
      },
      {
        pregunta: "Treballeu durant la Festa Major?",
        respuesta:
          "Sí, i donem servei a comissions i associacions per als muntatges de carrer: revisió prèvia de la presa, quadre provisional amb proteccions en condicions i disponibilitat durant els dies de festa. També atenem urgències amb normalitat aquests dies.",
      },
      {
        pregunta: "La meva finca no té ascensor i el quadre és en un quartet. Hi ha recàrrec?",
        respuesta:
          "No. Ni per escales, ni per accés difícil, ni per aparcar lluny. El preu tancat que et donem per telèfon és el que pagues.",
      },
      {
        pregunta: "Quant triga un lampista a arribar a Gràcia?",
        respuesta:
          "Entre 30 i 45 minuts en urgències, també a la Vila i els seus carrers estrets: aparquem on es pot i seguim a peu.",
      },
      {
        pregunta: "Vull electrificar la cuina d'un pis antic de Gràcia. Què necessito?",
        respuesta:
          "Línia nova de cuina, quadre a l'alçada i, segons el cas, pujada de potència amb butlletí. T'ho tanquem tot en un mateix pressupost per escrit.",
      },
      {
        pregunta: "Treballeu als bars i restaurants de les places?",
        respuesta:
          "Sí, amb feines programades fora del teu horari de servei i urgències amb prioritat perquè no hagis d'aturar la cuina.",
      },
      {
        pregunta: "Sou lampistes o electricistes?",
        respuesta:
          "A Gràcia la gent encara demana un lampista, i és exactament el que som: lampista és el nom en català del que en castellà se'n diu electricista. Qui ve a casa teva és un instal·lador elèctric habilitat, i per això pot signar el butlletí si en necessites un.",
      },
    ],
  },
  {
    slug: "lampista-sants",
    slugEs: "electricista-sants",
    nombre: "Sants",
    comarca: "Barcelona",
    padre,
    h1: "Lampista a Sants: urgències i instal·ladors habilitats",
    metaTitle: "Lampista a Sants (Barcelona) | Urgències 24h",
    metaDescription:
      "Lampistes i electricistes habilitats a Sants, Hostafrancs i la Bordeta. Quadres antics, butlletins (CIE) i urgències 24h. Preu tancat.",
    porQue: [
      "Sants, Hostafrancs i la Bordeta comparteixen el mateix parc d'habitatges: blocs dels anys 50 als 70 aixecats al voltant de la indústria, molts amb els fusibles originals i sense presa de terra a mitja casa. El canvi de quadre és la feina que més fa el nostre lampista al districte, seguida de les adequacions per passar el butlletí en pisos que fa dècades que no es toquen.",
      "El comerç de la carretera de Sants i l'entorn de l'estació també ens donen feina cada dia: locals que renoven llicència, ampliacions de potència i avaries amb prioritat per no haver d'abaixar la persiana. En urgències arribem en 30-45 minuts a qualsevol punt del districte.",
    ],
    tambienServicio: {
      intro:
        "Des de Sants cobrim tot el districte de Sants-Montjuïc, inclosos la Marina i el Poble-sec, i arribem en minuts a Les Corts, l'Eixample i l'Hospitalet de Llobregat, que és a un pas.",
      municipios: ["Les Corts", "Eixample", "Poble-sec i la Marina", "L'Hospitalet de Llobregat"],
    },
    zonas: {
      h2: "Feines habituals per zona de Sants",
      intro: "Això és el que més resolem a cada part del districte.",
      items: [
        {
          nombre: "Sants i Sants-Badal",
          texto:
            "Blocs de postguerra amb fusibles i cablejat just: canvis de quadre, preses de terra i renovació completa amb butlletí.",
        },
        {
          nombre: "Hostafrancs",
          texto:
            "Comerç i habitatge sobre locals: ampliacions de potència, quadres de local i legalitzacions per a llicències d'activitat.",
        },
        {
          nombre: "La Bordeta",
          texto:
            "Cases de cos i blocs baixos: instal·lacions vistes per renovar, derivacions i pujades de potència per a cuina elèctrica.",
        },
        {
          nombre: "Entorn de l'estació i Fira",
          texto:
            "Oficines, hotels i locals de pas: manteniment, revisions per a assegurances i avaries ateses amb prioritat.",
        },
      ],
    },
    secciones: [
      {
        h2: "Blocs obrers dels anys cinquanta i els seus muntants comunitaris",
        parrafos: [
          "Sants, Hostafrancs i la Bordeta van créixer al voltant de la indústria i el seu parc d'habitatge ho reflecteix: blocs aixecats entre els anys cinquanta i setanta per allotjar treballadors, construïts de pressa, amb superfícies ajustades i una instal·lació elèctrica pensada per al mínim.",
          "La particularitat tècnica d'aquests edificis és a la part comuna. Molts conserven la centralització de comptadors original i els muntants que pugen per l'escala amb seccions que avui es queden curtes per al que consumeixen els pisos. El símptoma és recognoscible: caigudes de tensió a les plantes altes, llums que parpellegen quan arrenca l'ascensor i veïns que no poden pujar potència perquè la línia que els dona servei no ho admet.",
          "Aquí la feina interessant no és el pis, és l'edifici. Quan una comunitat de Sants ens truca per un problema recurrent, el primer que proposem és revisar la centralització i els muntants abans que cada veí es gasti diners pel seu compte en una solució individual que no resoldrà res. És una conversa menys còmoda però molt més honesta.",
        ],
      },
      {
        h2: "Comunitats: el que es pot resoldre en una junta",
        parrafos: [
          "Treballem amb força administradors de finques del districte, i hi ha un patró que es repeteix: la comunitat conviu durant anys amb una avaria intermitent a les zones comunes perquè ningú sap quant costarà arreglar-la i la junta no vol aprovar un xec en blanc.",
          "El que fem és a l'inrevés: visita tècnica, informe per escrit de què està fallant i pressupost tancat desglossat per partides, perquè l'administrador pugui portar a la junta un document concret i votable. Si hi ha partides que poden esperar, es diu quines i per què.",
          "Les feines que més ens encarreguen les comunitats de Sants són la renovació de l'enllumenat d'escala i pàrquing amb detecció de presència, la posada al dia del quadre de serveis comuns, la revisió de la línia de l'ascensor i la preinstal·lació de recàrrega en garatges on ja hi ha veïns preguntant pel cotxe elèctric.",
          "Facturem a la comunitat amb CIF i IVA desglossat i, si la feina ho requereix, amb el certificat corresponent.",
        ],
      },
      {
        h2: "L'entorn de l'estació i la Fira: locals i trifàsica",
        parrafos: [
          "La franja que va de Sants Estació a la Fira de Montjuïc concentra un tipus de client diferent del de la resta del districte: comerç de pas, restauració amb horaris llargs, oficines petites i magatzems.",
          "Aquí el normal és el subministrament trifàsic, que és una altra lliga. Quan un local trifàsic està mal equilibrat, amb gairebé tota la càrrega penjant d'una de les tres fases, dona problemes que semblen una avaria. Proteccions que salten sense motiu aparent, motors que rendeixen malament, consums més alts del que tocaria. Equilibrar fases és de les feines que més agraeix un local i de les que menys es demanen, perquè gairebé ningú sap que existeix.",
          "També és zona d'obertures i traspassos constants, amb la urgència típica de qui té data d'inauguració. En aquests casos el que marca la diferència és la legalització: adequar la instal·lació a l'activitat real i tramitar el certificat que demana l'ajuntament per a la llicència, sense que la paperassa es converteixi en el coll d'ampolla.",
        ],
      },
    ],
    faqsLocales: [
      {
        pregunta: "La meva comunitat té caigudes de tensió als pisos alts. Què és?",
        respuesta:
          "Són els muntants. La línia que puja per l'escala té una secció que es va quedar curta per al que consumeixen avui els pisos, i es nota més amunt perquè la caiguda s'acumula amb la distància. És un problema de l'edifici, no del teu habitatge. Revisa-ho abans que cada veí es gasti diners pel seu compte en solucions que no ho arreglen.",
      },
      {
        pregunta: "Pressuposteu per portar-ho a una junta de veïns?",
        respuesta:
          "Sí, i és com preferim treballar amb comunitats. Visita tècnica, informe escrit de què falla i pressupost tancat desglossat per partides, separant l'urgent del que pot esperar. Una junta no aprova una despesa indefinida; sí que aprova un document concret i votable.",
      },
      {
        pregunta: "Tinc un local amb subministrament trifàsic i salten les proteccions sense motiu.",
        respuesta:
          "És el símptoma clàssic de fases mal equilibrades, amb gairebé tota la càrrega penjant d'una de les tres. Es mesura i es redistribueix. De passada, sol arreglar consums més alts del que correspon. És de les feines que més agraeix un local i de les que menys es demanen.",
      },
      {
        pregunta: "Quant triga un lampista a arribar a Sants?",
        respuesta:
          "En urgències, entre 30 i 45 minuts a Sants, Hostafrancs, la Bordeta o Badal.",
      },
      {
        pregunta: "El meu pis de Sants encara té els ploms. És urgent canviar-los?",
        respuesta:
          "No és una urgència, però sí una prioritat: un quadre amb fusibles no et protegeix de derivacions ni de contactes. El canvi es fa en un matí i et passem preu tancat amb una foto del quadre.",
      },
      {
        pregunta: "Feu butlletins a Sants per donar d'alta la llum?",
        respuesta:
          "Sí, cada dia: revisió, adequació de l'imprescindible i CIE en 24-48h, amb la tramitació inclosa.",
      },
      {
        pregunta: "Sou lampistes o electricistes?",
        respuesta:
          "És el mateix ofici amb dos noms: lampista en català, electricista en castellà. Qui fa la feina és un instal·lador elèctric habilitat, amb número de registre, i pot signar el butlletí quan la instal·lació el necessita.",
      },
    ],
  },
  {
    slug: "lampista-sant-marti",
    slugEs: "electricista-sant-marti",
    nombre: "Sant Martí",
    comarca: "Barcelona",
    padre,
    h1: "Lampista a Sant Martí: urgències i instal·ladors habilitats",
    metaTitle: "Lampista a Sant Martí (Barcelona) | Urgències 24h",
    metaDescription:
      "Lampistes i electricistes habilitats a Sant Martí: Poblenou, 22@, Clot i la Verneda. Oficines, lofts, butlletins i urgències 24h. Preu tancat.",
    porQue: [
      "Sant Martí és el districte amb més contrastos de Barcelona per a un lampista. Al Poblenou i al 22@ treballem en oficines, lofts i antigues fàbriques reconvertides, que hereten instal·lacions trifàsiques industrials. Al Clot, al Camp de l'Arpa i a la Verneda, en blocs residencials dels anys 60 i 70 amb les avaries clàssiques d'aquella època. Quadres curts, potències mínimes i endolls sense terra.",
      "Per a les empreses del 22@ oferim manteniment amb interlocutor únic i factura amb IVA desglossat; per als veïns, el mateix servei de sempre: preu tancat per escrit i urgències en menys d'una hora a tot el districte.",
    ],
    tambienServicio: {
      intro:
        "Cobrim tot Sant Martí, del front marítim de la Vila Olímpica a la Verneda, i saltem en minuts a Sant Andreu, l'Eixample i Sant Adrià de Besòs.",
      municipios: ["Sant Andreu", "Eixample", "Sant Adrià de Besòs"],
    },
    zonas: {
      h2: "Feines habituals per zona de Sant Martí",
      intro: "Del loft industrial al bloc de barri, això és el que més fem.",
      items: [
        {
          nombre: "Poblenou i 22@",
          texto:
            "Oficines i lofts en fàbriques reconvertides: quadres trifàsics, manteniment d'empresa, il·luminació tècnica i legalitzacions.",
        },
        {
          nombre: "Vila Olímpica i front marítim",
          texto:
            "Habitatge dels anys 90 amb clima: línies dedicades, renovació de quadres i derivacions per salnitre en terrasses i exteriors.",
        },
        {
          nombre: "El Clot i Camp de l'Arpa",
          texto:
            "Blocs dels anys 60 i 70: canvis de quadre, pujades de potència i adequacions per al butlletí.",
        },
        {
          nombre: "La Verneda i la Pau",
          texto:
            "Habitatge de postguerra amb potències mínimes: l'ICP salta amb dos aparells. Pujades de potència i revisió de derivacions individuals.",
        },
      ],
    },
    secciones: [
      {
        h2: "Poblenou i el 22@: naus rehabilitades i oficines",
        parrafos: [
          "Sant Martí és el districte on més feina d'empresa fem, i el motiu és el 22@. L'antiga trama industrial del Poblenou s'ha anat convertint en oficines, estudis, coworkings i lofts, però moltes d'aquestes rehabilitacions conviuen encara amb part de la instal·lació original de la nau.",
          "L'escenari típic és una planta diàfana de diversos centenars de metres amb subministrament trifàsic, un quadre general antic i una distribució que ha anat canviant cada vegada que hi ha entrat un llogater nou. Cada reforma hi va afegir preses, línies de dades i climatització, i gairebé cap no va documentar res. Quan arribem, la primera tasca sol ser aixecar l'esquema real del que hi ha, perquè el plànol que existeix va deixar de ser cert fa tres arrendataris.",
          "La feina aquí té un component de manteniment que no existeix en habitatge: revisions periòdiques, termografia del quadre per detectar punts calents abans que es converteixin en avaria, i disponibilitat de resposta ràpida, perquè una oficina de seixanta persones sense llum és una factura de nòmina aturada.",
          "Facturem amb CIF, IVA desglossat i albarà signat de cada intervenció, que és el que necessiten les empreses per als seus propis controls.",
        ],
      },
      {
        h2: "Vila Olímpica i Diagonal Mar: torres dels anys noranta",
        parrafos: [
          "L'altra meitat del districte és completament diferent. La Vila Olímpica es va construir per al 1992 i Diagonal Mar és dels anys dos mil: són edificis moderns, amb una instal·lació correcta d'origen i una problemàtica que no té res a veure amb la del Poblenou industrial.",
          "El que envelleix en aquestes torres no és el cablejat, és l'equipament. Ens truquen per renovar sistemes de climatització per conductes que tenen trenta anys, per actualitzar la domòtica de primera generació que ja no té recanvis ni suport, i sobretot per instal·lar punts de recàrrega en pàrquings comunitaris de grans dimensions.",
          "Els garatges d'aquestes finques són el cas més interessant: tenen moltes places, la demanda de recàrrega creix cada any i les instal·lacions improvisades plaça per plaça acaben sent un desastre difícil d'ordenar. Quan la comunitat s'ho planteja a temps, una canalització comuna ben dimensionada permet que cada veí es connecti al seu propi comptador quan li toqui, sense haver de tornar a obrir el garatge cada vegada.",
        ],
      },
      {
        h2: "El Clot, la Verneda i el Sant Martí de sempre",
        parrafos: [
          "Entre el 22@ i el front marítim hi queda la part del districte on viu la majoria de la gent, i allà la feina és la d'un barri residencial normal: blocs dels seixanta i setanta al Clot, el Camp de l'Arpa i la Verneda, amb quadres que demanen relleu i potències heretades d'una altra època.",
          "És la zona del districte on més canvis de quadre i més pujades de potència fem, i gairebé sempre pel mateix. Reformes de cuina que passen de gas a inducció, i aparells d'aire condicionat instal·lats sense que ningú comprovi si la instal·lació aguanta el que se li demana.",
          "Atenem urgències a tot el districte amb el mateix temps de resposta, tant si la trucada ve d'una oficina del 22@ com d'un tercer sense ascensor de la Verneda. I el preu de la sortida es diu per telèfon abans de moure'ns, aquí i a qualsevol altre lloc.",
        ],
      },
    ],
    faqsLocales: [
      {
        pregunta: "Tinc una oficina al 22@ i no existeix el plànol de la instal·lació.",
        respuesta:
          "És l'habitual en naus rehabilitades que han passat per diversos arrendataris. Aixequem l'esquema real del que hi ha abans de tocar res i te l'entreguem documentat. Aquest plànol és el que evita que la següent reforma torni a començar a cegues.",
      },
      {
        pregunta: "La nostra comunitat vol punts de recàrrega per a diversos veïns.",
        respuesta:
          "És la millor manera de fer-ho. Una canalització comuna ben dimensionada permet que cada veí es connecti al seu propi comptador quan li toqui, sense haver de tornar a obrir el garatge cada vegada. Surt força més barat que tres instal·lacions individuals en tres anys.",
      },
      {
        pregunta: "Ateneu igual de ràpid a la Verneda que al Poblenou?",
        respuesta:
          "Sí, el temps de resposta és el mateix a tot el districte. I el preu de la sortida es diu per telèfon abans de moure'ns, tant si la trucada ve d'una oficina com d'un tercer sense ascensor.",
      },
      {
        pregunta: "Quant triga un lampista a arribar a Sant Martí?",
        respuesta:
          "En urgències, entre 30 minuts i una hora segons la zona, del Poblenou a la Verneda.",
      },
      {
        pregunta: "Porteu el manteniment elèctric d'oficines al 22@?",
        respuesta:
          "Sí: revisions programades, avaries amb prioritat, il·luminació i ampliacions, amb contracte de manteniment i IVA desglossat.",
      },
      {
        pregunta: "Tinc un loft en una antiga fàbrica del Poblenou. Treballeu amb trifàsica?",
        respuesta:
          "Sí, és habitual al barri: adaptem instal·lacions trifàsiques heretades, les legalitzem i les deixem amb les proteccions al dia.",
      },
      {
        pregunta: "Sou lampistes o electricistes?",
        respuesta:
          "Digues-ne com vulguis. En català se n'ha dit sempre lampista i en castellà electricista, i parlem del mateix ofici. La feina, sigui una oficina del 22@ o un pis de la Verneda, la fa un instal·lador elèctric habilitat que pot signar el butlletí.",
      },
    ],
  },
  {
    slug: "lampista-sant-andreu",
    slugEs: "electricista-sant-andreu",
    nombre: "Sant Andreu",
    comarca: "Barcelona",
    padre,
    h1: "Lampista a Sant Andreu: urgències i instal·ladors habilitats",
    metaTitle: "Lampista a Sant Andreu (Barcelona) | Urgències 24h",
    metaDescription:
      "Lampistes i electricistes habilitats a Sant Andreu, la Sagrera i Bon Pastor. Instal·lacions antigues, butlletins i urgències 24h. Preu tancat.",
    porQue: [
      "El nucli antic de Sant Andreu conserva cases de poble amb instal·lacions vistes sobre regletes que demanen una renovació completa, mentre que la Sagrera i el Bon Pastor combinen blocs de postguerra amb habitatge nou arribat amb les obres de l'estació. Aquesta barreja marca la feina diària del nostre lampista: renovacions integrals amb butlletí al nucli antic i quadres, potències i derivacions als blocs.",
      "En urgències arribem en 30-45 minuts a tot el districte, inclosa Trinitat Vella. I si tens un comerç al carrer Gran de Sant Andreu, prioritzem la teva avaria perquè obris amb normalitat.",
    ],
    tambienServicio: {
      intro:
        "Cobrim tot el districte i el seu entorn immediat: Nou Barris a l'altra banda de la Meridiana, Sant Martí cap a mar i Santa Coloma de Gramenet travessant el Besòs.",
      municipios: ["Nou Barris", "Sant Martí", "Santa Coloma de Gramenet"],
    },
    zonas: {
      h2: "Feines habituals per zona de Sant Andreu",
      intro: "Això és el que més fem a cada part del districte.",
      items: [
        {
          nombre: "Casc antic de Sant Andreu",
          texto:
            "Cases de poble amb instal·lació vista sobre regletes: renovacions completes amb butlletí i quadres nous respectant l'estètica.",
        },
        {
          nombre: "La Sagrera",
          texto:
            "Blocs dels anys 60 al costat d'habitatge nou: canvis de quadre al vell, línies de clima i punts de recàrrega al nou.",
        },
        {
          nombre: "Bon Pastor i Baró de Viver",
          texto:
            "Habitatge de postguerra renovat per fases: adequacions per al butlletí, preses de terra i pujades de potència.",
        },
        {
          nombre: "Trinitat Vella",
          texto:
            "Blocs amb potències mínimes: revisió de la derivació individual, pujades de potència i reparació d'avaries recurrents.",
        },
      ],
    },
    secciones: [
      {
        h2: "Cases de poble amb instal·lació vista",
        parrafos: [
          "Sant Andreu de Palomar va ser municipi propi fins al 1897 i el seu nucli antic encara ho sembla: carrers estrets, cases baixes de planta i pis, moltes encara en mans de la mateixa família des de fa generacions. És un dels teixits amb la instal·lació elèctrica més antiga que trobem a Barcelona.",
          "El característic d'aquestes cases és la instal·lació vista. Cablejat sobre regletes de fusta o de plàstic que recorre les parets per sobre del sòcol o sota el sostre, empalmaments fets a la vista i caixes que no es van tancar mai. Estar a la vista no és en si el problema. El dolent és el que sol venir amb això: sense presa de terra, amb seccions curtes i amb un quadre reduït a un parell de fusibles.",
          "Renovar una casa així són diversos dies de feina, i gairebé mai no interessa fer-ho tot de cop. El que proposem és un ordre. Primer quadre i presa de terra, que és el que et protegeix. Després els circuits de cuina i bany, on es concentren la càrrega i el risc. La resta, quan toqui. Pressupostat per fases, per escrit, i sense que la primera t'obligui a contractar les següents.",
        ],
      },
      {
        h2: "La Sagrera: obra nova i pàrquings preparats per recarregar",
        parrafos: [
          "El nord del districte fa dues dècades que està en obres al voltant de l'estació de la Sagrera, i això ha portat promocions d'habitatge nou que conviuen paret per paret amb el Sant Andreu de tota la vida.",
          "En obra recent la feina canvia del tot: la instal·lació és correcta i està documentada, així que el que ens demanen són ampliacions i millores. Punts de recàrrega a la plaça de garatge, línies per a climatització o aerotèrmia, il·luminació de terrasses i, a les comunitats, la posada en marxa de la preinstal·lació de recàrrega que moltes promocions van deixar feta però sense rematar.",
          "Aquest últim punt genera força confusió entre veïns: tenir preinstal·lació no vol dir tenir el punt de recàrrega a punt per fer servir. Vol dir que la canalització i la previsió de potència estan fetes, que és la part cara, però falta la línia pròpia des del teu comptador, l'equip i la seva legalització. És una bona notícia (la feina és molt més ràpida i senzilla) però no és gratis ni automàtic.",
        ],
      },
      {
        h2: "Bon Pastor i Baró de Viver: naus, tallers i trifàsica",
        parrafos: [
          "A l'extrem del districte, al costat del Besòs, hi queda teixit industrial en actiu: tallers, magatzems, petites indústries i naus que donen servei a tota la ciutat. És un client diferent i amb necessitats diferents.",
          "Aquí treballem subministraments trifàsics, maquinària amb motors, quadres de distribució de nau i enllumenat industrial. Els encàrrecs més freqüents són la renovació de l'enllumenat a LED, que en una nau amb moltes hores d'ús s'amortitza ràpid, la posada al dia de quadres que s'han quedat per sota de la càrrega instal·lada, i el manteniment preventiu perquè una aturada de producció no depengui de la sort.",
          "Per a activitats industrials la legalització té els seus propis requisits segons la potència i el tipus de local. Ens encarreguem de la documentació tècnica i de la tramitació, i diem des del principi què exigeix el teu cas concret, que no sempre és el mateix que li van demanar al veí.",
        ],
      },
    ],
    faqsLocales: [
      {
        pregunta: "Casa meva té el cable a la vista sobre regletes. És perillós?",
        respuesta:
          "Estar a la vista no és en si el problema. El preocupant és el que sol acompanyar-ho: falta de presa de terra, seccions curtes i un quadre amb dos fusibles. Ho revisem i et diem què és urgent i què pot esperar, amb pressupost per fases perquè no hagis de fer-ho tot de cop.",
      },
      {
        pregunta: "La meva promoció té preinstal·lació de recàrrega. Ja puc carregar el cotxe?",
        respuesta:
          "Encara no. La preinstal·lació vol dir que la canalització i la previsió de potència estan fetes, que és la part cara. Falta la línia pròpia des del teu comptador, l'equip i la seva legalització. És una bona notícia perquè la feina és molt més ràpida, però no és automàtic ni gratuït.",
      },
      {
        pregunta: "Treballeu en naus i tallers del Bon Pastor?",
        respuesta:
          "Sí. Subministraments trifàsics, quadres de nau, enllumenat industrial i maquinària amb motors, a més de manteniment preventiu. Facturem amb CIF i IVA desglossat i ens ocupem de la documentació tècnica que exigeixi la teva activitat.",
      },
      {
        pregunta: "Quant triga un lampista a arribar a Sant Andreu?",
        respuesta:
          "En urgències, entre 30 i 45 minuts a tot el districte, incloses Trinitat Vella i Bon Pastor.",
      },
      {
        pregunta: "Casa meva, al nucli antic, té la instal·lació vista amb cables antics. Es pot renovar sense destrossar-la?",
        respuesta:
          "Sí: combinem regates on es pot amb canaleta i motllura on no, i deixem la instal·lació legalitzada amb el seu butlletí. És l'encàrrec típic del barri.",
      },
      {
        pregunta: "Ateneu els comerços del carrer Gran?",
        respuesta:
          "Sí, amb prioritat en avaries i feines fora d'horari comercial per no interrompre la venda.",
      },
      {
        pregunta: "Sou lampistes o electricistes?",
        respuesta:
          "Som lampistes, que és com s'ha dit tota la vida a Sant Andreu, i electricistes, que és com ho busca la gent en castellà. No hi ha cap diferència: qui ve és un instal·lador elèctric habilitat i pot signar el butlletí de la teva instal·lació.",
      },
    ],
  },
  {
    slug: "lampista-les-corts",
    slugEs: "electricista-les-corts",
    nombre: "Les Corts",
    comarca: "Barcelona",
    padre,
    h1: "Lampista a Les Corts: urgències i instal·ladors habilitats",
    metaTitle: "Lampista a Les Corts (Barcelona) | Urgències 24h",
    metaDescription:
      "Lampistes i electricistes habilitats a Les Corts i Pedralbes. Oficines, comunitats, punts de recàrrega i urgències 24h. Preu tancat.",
    porQue: [
      "Les Corts combina l'habitatge dels anys 70 i 80 més ben conservat de Barcelona amb la densitat d'oficines més gran de la Diagonal. Per a les comunitats, el nostre lampista treballa quadres comunitaris, enllumenat d'escala i garatges; per a les empreses, manteniment amb revisions programades i factura amb IVA desglossat; i a Pedralbes, cases grans amb clima, domòtica i cotxe elèctric.",
      "El punt de recàrrega és l'encàrrec que més creix al districte: pàrquings comunitaris grans on instal·lem el carregador connectat al teu comptador, amb la notificació a la comunitat preparada per nosaltres i la legalització inclosa.",
    ],
    tambienServicio: {
      intro:
        "Cobrim tot Les Corts i Pedralbes, i arribem en minuts a Sarrià-Sant Gervasi, l'Eixample, Sants i l'Hospitalet de Llobregat per la Gran Via de Carles III.",
      municipios: ["Sarrià-Sant Gervasi", "Eixample", "Sants", "L'Hospitalet de Llobregat"],
    },
    zonas: {
      h2: "Feines habituals per zona de Les Corts",
      intro: "Això és el que més fem a cada part del districte.",
      items: [
        {
          nombre: "Les Corts centre",
          texto:
            "Habitatge dels anys 70 i 80: renovació de quadres, línies de climatització i adequacions per al butlletí en compravendes.",
        },
        {
          nombre: "La Maternitat i Sant Ramon",
          texto:
            "Comunitats grans amb garatge: quadres comunitaris, enllumenat d'escala amb LED i punts de recàrrega en places de pàrquing.",
        },
        {
          nombre: "Pedralbes",
          texto:
            "Cases i àtics amb clima, aerotèrmia i jardí: domòtica, il·luminació exterior i carregadors de cotxe elèctric legalitzats.",
        },
        {
          nombre: "Eix Diagonal",
          texto:
            "Oficines i despatxos: manteniment programat, il·luminació tècnica i revisions per a assegurances i llicències.",
        },
      ],
    },
    secciones: [
      {
        h2: "Comunitats dels setanta i vuitanta: la feina és a les zones comunes",
        parrafos: [
          "Les Corts té un dels parcs d'habitatge més ben conservats de Barcelona: blocs dels anys setanta i vuitanta, amb bones superfícies, comunitats organitzades i administradors professionals. Això canvia el tipus de feina que fem al districte.",
          "En una finca de Les Corts el pis individual sol estar raonablement bé. La feina es concentra a la part comuna, que és la que ningú mira fins que falla. Quadres de serveis comuns muntats als vuitanta i ampliats sense criteri. Enllumenat d'escala i pàrquing amb equips obsolets i consums alts. Línies d'ascensor sense protecció diferencial pròpia. I grups de pressió i bombes d'esgotament connectats de manera provisional que fa quinze anys que és definitiva.",
          "L'encàrrec que més ens demanen aquí és la renovació completa de l'enllumenat comú amb lluminàries LED i detecció de presència. És la feina amb el retorn més clar que pot aprovar una comunitat: abaixa el consum de manera immediata, elimina el manteniment de substituir tubs i làmpades cada temporada, i millora la seguretat en pàrquings i replans. Ho pressupostem per escrit i desglossat perquè es pugui portar a junta sense discussió.",
        ],
      },
      {
        h2: "Zona universitària: pisos compartits i sobrecàrrega",
        parrafos: [
          "La franja que envolta el campus concentra una densitat enorme de pisos compartits, i allà apareix un patró que no es veu en cap altre lloc del districte.",
          "Un habitatge dissenyat als setanta per a una família de quatre persones amb dos o tres electrodomèstics passa a allotjar cinc estudiants, cadascun amb el seu ordinador, el seu radiador elèctric a l'hivern i la seva rutina pròpia. El resultat és una instal·lació funcionant al límit tot el dia, regletes encadenades a les habitacions i un quadre que no distingeix circuits. Les trucades per endolls que s'escalfen i magnetotèrmics que salten cada dia venen gairebé sempre d'aquí.",
          "El que resol el problema no és pujar potència sense més, que és el primer que demana tothom: és repartir la càrrega en circuits separats i substituir el quadre. Treballem força per a propietaris que lloguen per habitacions i que prefereixen deixar la instal·lació en condicions abans que atendre una avaria cada mes.",
          "Si ets propietari i llogues, tingues present que la instal·lació és responsabilitat teva, no del llogater, i que un incendi d'origen elèctric en un habitatge mal mantingut és un problema seriós davant de l'assegurança.",
        ],
      },
      {
        h2: "Oficines de la Diagonal i locals de Pedralbes",
        parrafos: [
          "La Diagonal al seu pas per Les Corts concentra la densitat d'oficines més gran de la ciutat juntament amb el 22@, i a Pedralbes hi ha un comerç i una restauració de nivell alt amb exigències pròpies.",
          "En oficines la feina habitual és l'adequació de plantes quan canvia el llogater o la distribució. Llocs de treball nous, línies de dades, enllumenat i climatització. Amb la particularitat que gairebé sempre cal fer-ho amb l'edifici en funcionament i en horari restringit.",
          "En locals de restauració la clau és la potència i la separació de circuits: cuina, cambres frigorífiques, climatització i sala han d'anar cadascuna pel seu costat, i les cambres han de quedar en un circuit que no es pugui desconnectar per error. És el detall que evita trobar-te el gènere perdut un dilluns al matí.",
          "Manteniment amb revisions programades i prioritat de resposta per a clients amb contracte, perquè en restauració una avaria a mitja tarda són diners comptats.",
        ],
      },
    ],
    faqsLocales: [
      {
        pregunta: "Llogo un pis per habitacions i salten els automàtics cada dia.",
        respuesta:
          "És el patró de la zona universitària: una instal·lació pensada per a una família suportant cinc usuaris amb els seus equips i radiadors. Pujar potència sense més no ho arregla; el que ho resol és repartir la càrrega en circuits separats i substituir el quadre. Tingues en compte que la instal·lació és responsabilitat del propietari, no del llogater.",
      },
      {
        pregunta: "Quant s'estalvia canviant l'enllumenat comú a LED amb detectors?",
        respuesta:
          "Depèn de les hores d'encesa i dels equips actuals, però és la feina amb el retorn més clar que pot aprovar una comunitat: es nota al primer rebut i elimina el manteniment de reposar tubs cada temporada. T'ho pressupostem desglossat per portar-ho a junta.",
      },
      {
        pregunta: "Tenim un restaurant i vam perdre el gènere de la cambra.",
        respuesta:
          "Passa quan la cambra comparteix circuit amb una altra cosa i algú el desconnecta en tancar, o quan salta una protecció compartida. La solució és deixar les cambres en un circuit independent que no es pugui tallar per error, separat de cuina, climatització i sala.",
      },
      {
        pregunta: "Quant triga un lampista a arribar a Les Corts?",
        respuesta:
          "En urgències, entre 30 i 45 minuts a tot el districte, Pedralbes inclosa.",
      },
      {
        pregunta: "Instal·leu punts de recàrrega en pàrquings comunitaris de Les Corts?",
        respuesta:
          "Sí, és del que més fem al districte: carregador connectat al teu comptador, notificació a la comunitat preparada per nosaltres i legalització amb CIE inclosa.",
      },
      {
        pregunta: "Treballeu amb administradors de finques de la zona?",
        respuesta:
          "Sí: pressupost tancat per a la junta, avís als veïns, comunicat de feina en acabar i manteniments periòdics si la finca ho vol.",
      },
      {
        pregunta: "Sou lampistes o electricistes?",
        respuesta:
          "Lampista i electricista són la mateixa professió: una paraula és catalana i l'altra castellana. El que importa és que la persona que et fa la feina sigui un instal·lador elèctric habilitat, perquè només així pot signar el butlletí. Els nostres ho són.",
      },
    ],
  },
  {
    slug: "lampista-sarria-sant-gervasi",
    slugEs: "electricista-sarria-sant-gervasi",
    nombre: "Sarrià-Sant Gervasi",
    comarca: "Barcelona",
    padre,
    h1: "Lampista a Sarrià-Sant Gervasi: urgències i instal·ladors habilitats",
    metaTitle: "Lampista a Sarrià-Sant Gervasi | Urgències 24h",
    metaDescription:
      "Lampistes i electricistes habilitats a Sarrià, Sant Gervasi i el Putxet. Domòtica, aerotèrmia, punts de recàrrega i urgències 24h. Preu tancat.",
    porQue: [
      "Sarrià-Sant Gervasi és el districte de les cases grans. Torres amb jardí a Sarrià i Les Tres Torres, pisos amplis a Galvany i el Putxet, i una demanda creixent d'aerotèrmia, clima per conductes i cotxe elèctric. Aquest perfil demana un lampista que dimensioni bé les instal·lacions. Ampliacions de potència, quadres amb proteccions per zones i línies dedicades, que instal·lem i legalitzem amb el seu CIE.",
      "També conservem l'antic: finques senyorials de principis del segle XX a Sant Gervasi amb instal·lació centenària que renovem respectant motllures i fusteries. En urgències arribem en 30-45 minuts a tot el districte, també a la part alta.",
    ],
    tambienServicio: {
      intro:
        "Cobrim tot el districte, de la Bonanova a Galvany, i arribem en minuts a Gràcia, Les Corts i l'Eixample. Per la ronda de Dalt, també a Horta i a Sant Cugat del Vallès.",
      municipios: ["Gràcia", "Les Corts", "Eixample", "Horta-Guinardó"],
    },
    zonas: {
      h2: "Feines habituals per zona de Sarrià-Sant Gervasi",
      intro: "Això és el que més fem a cada part del districte.",
      items: [
        {
          nombre: "Sarrià i Les Tres Torres",
          texto:
            "Torres amb jardí: aerotèrmia, il·luminació exterior, automatismes, domòtica i carregadors de cotxe elèctric legalitzats.",
        },
        {
          nombre: "Sant Gervasi-Galvany",
          texto:
            "Pisos amplis en finques senyorials: renovació completa d'instal·lacions centenàries amb butlletí, respectant l'estètica original.",
        },
        {
          nombre: "El Putxet i el Farró",
          texto:
            "Finques de mitjana alçada amb instal·lacions dels anys 60 i 70: canvis de quadre, pujades de potència i línies de clima.",
        },
        {
          nombre: "La Bonanova",
          texto:
            "Habitatge ampli amb reformes de qualitat: instal·lació completa en reformes, quadres per zones i protecció contra sobretensions.",
        },
      ],
    },
    secciones: [
      {
        h2: "Cases amb jardí: una altra escala d'instal·lació",
        parrafos: [
          "Sarrià, Les Tres Torres i Pedralbes concentren el nombre més gran d'habitatges unifamiliars de Barcelona, i una casa no és un pis gran: és una instal·lació d'una altra categoria, amb necessitats que en un pis simplement no existeixen.",
          "El primer que canvia és la potència. Entre climatització, cuina completa, bomba de piscina, reg automàtic, il·luminació exterior i un o dos cotxes elèctrics, és habitual arribar a demandes que exigeixen subministrament trifàsic. I amb la trifàsica arriba l'equilibrat de fases, que en un habitatge mal repartit provoca disparaments que semblen avaries i no ho són.",
          "El segon és que bona part de la instal·lació és a la intempèrie. Jardí, porxo, piscina, garatge exterior i accessos requereixen material estanc, canalització soterrada en condicions i proteccions específiques. És on més nyaps heretats trobem: preses d'interior col·locades en un porxo, cables de reg soterrats sense tub i focus de jardí alimentats des de l'endoll d'una terrassa.",
          "I el tercer és la piscina, que té reglamentació pròpia. Les distàncies de seguretat, la protecció diferencial d'alta sensibilitat i les connexions equipotencials no són opcionals ni interpretables. És de les poques coses en aquest ofici on no hi ha marge per al criteri personal.",
        ],
      },
      {
        h2: "Domòtica i automatització: què compensa i què no",
        parrafos: [
          "És el districte on més ens pregunten per domòtica, i també on més instal·lacions abandonades trobem: sistemes que es van muntar fa deu o quinze anys, que van costar molts diners i que avui ningú fa servir perquè el fabricant va desaparèixer, l'aplicació va deixar d'actualitzar-se o simplement va resultar més incòmode que un interruptor.",
          "La nostra opinió, després d'arreglar-ne unes quantes: l'automatització que compensa és la que resol un problema real i continua funcionant encara que caigui internet. Control de reg i d'il·luminació exterior per horari, gestió de la càrrega del cotxe per aprofitar les hores barates, control de clima per zones i detecció de fuites d'aigua amb tall automàtic. Tot això estalvia diners o evita un desastre.",
          "El que solem desaconsellar és l'automatització per catàleg: persianes connectades que ja funcionaven bé amb el seu interruptor, escenes d'il·luminació que ningú recorda com s'activen i sistemes tancats que et lliguen a un únic proveïdor per sempre. Si una cosa només la pot reparar qui la va instal·lar, tens un problema esperant data.",
          "Treballem amb protocols oberts i deixem sempre el control manual funcionant en paral·lel. Si un dia el sistema falla, la casa continua tenint llum com qualsevol altra.",
        ],
      },
      {
        h2: "El Putxet i Galvany: pisos grans en finques senyorials",
        parrafos: [
          "La part més urbana del districte, entre Balmes i el Putxet, té un parc de pisos amplis en finques de qualitat, moltes dels anys trenta als seixanta, amb superfícies que superen amb escreix la mitjana de la ciutat.",
          "El problema típic d'aquests pisos és la desproporció entre la mida de l'habitatge i la mida de la seva instal·lació. Dos-cents metres amb quatre circuits, un sol diferencial per a tot i endolls comptats a les habitacions, perquè quan es va construir ningú va preveure que en un dormitori faria falta més d'una presa.",
          "La reforma elèctrica d'un pis així és una feina de diversos dies, i val la pena plantejar-la juntament amb qualsevol altra obra que s'hagi de fer. Si has de canviar terres o tocar sostres, és el moment de refer la instal·lació amb la meitat de cost en paleteria. Si no hi ha obra prevista, es pot fer igualment amb les tècniques de mínima intervenció que fem servir en finques protegides.",
        ],
      },
    ],
    faqsLocales: [
      {
        pregunta: "Tinc piscina. Què exigeix exactament la normativa?",
        respuesta:
          "Distàncies de seguretat respecte al vas, protecció diferencial d'alta sensibilitat i connexions equipotencials de totes les parts metàl·liques. No són recomanacions interpretables: és del poc que hi ha en aquest ofici on no hi ha marge per al criteri personal. Ho revisem i ho deixem conforme, amb el seu certificat.",
      },
      {
        pregunta: "La meva domòtica és de fa quinze anys i ja no la fa servir ningú.",
        respuesta:
          "És el més comú que trobem al districte. Valorem què es pot recuperar amb protocols oberts i què convé substituir, i sempre deixem el control manual funcionant en paral·lel. Si un sistema només el pot reparar qui el va instal·lar, tens un problema esperant data.",
      },
      {
        pregunta: "Necessito trifàsica en una casa unifamiliar?",
        respuesta:
          "Depèn del que hagis de fer funcionar alhora: climatització, cuina completa, bomba de piscina, reg, il·luminació exterior i un o dos cotxes elèctrics. Ho calculem amb el teu consum real abans de proposar-te res, perquè passar-se de potència és pagar més terme fix els dotze mesos de l'any.",
      },
      {
        pregunta: "Quant triga un lampista a arribar a Sarrià o Sant Gervasi?",
        respuesta:
          "En urgències, entre 30 i 45 minuts, també a la part alta del districte.",
      },
      {
        pregunta: "Vull aerotèrmia i un carregador de cotxe. Em dona la potència?",
        respuesta:
          "Ho calculem amb els teus consums reals: moltes vegades n'hi ha prou optimitzant el quadre i programant càrregues; si cal ampliar potència, gestionem el tràmit i el butlletí.",
      },
      {
        pregunta: "Instal·leu domòtica?",
        respuesta:
          "Sí: il·luminació, persianes i clima integrats, sempre sobre una instal·lació ben dimensionada i legalitzada. T'assessorem sobre quin sistema encaixa amb casa teva.",
      },
      {
        pregunta: "Sou lampistes o electricistes?",
        respuesta:
          "Les dues paraules volen dir el mateix: lampista en català, electricista en castellà. Sigui una casa de Sarrià amb piscina o un pis de Galvany, qui hi treballa és un instal·lador elèctric habilitat, i per tant pot signar el butlletí de la instal·lació.",
      },
    ],
  },
  {
    slug: "lampista-horta",
    slugEs: "electricista-horta",
    nombre: "Horta",
    comarca: "Barcelona",
    padre,
    h1: "Lampista a Horta: urgències i instal·ladors habilitats",
    metaTitle: "Lampista a Horta (Barcelona) | Urgències 24h",
    metaDescription:
      "Lampistes i electricistes habilitats a Horta-Guinardó: Horta, el Carmel i el Guinardó. Instal·lacions antigues, butlletins i urgències 24h.",
    porQue: [
      "Horta-Guinardó és el districte dels desnivells: cases amb jardí i passatges a Horta i la Font d'en Fargues, i blocs dels anys 50 als 70 penjats del vessant al Carmel i al Guinardó. A les cases, el nostre lampista fa molta il·luminació exterior, automatismes de portes i renovació d'instal·lacions antigues; als blocs, canvis de quadre, preses de terra i pujades de potència.",
      "L'orografia no canvia els terminis: en urgències arribem en 30-45 minuts a qualsevol punt del districte, del nucli antic d'Horta a la Teixonera. I com a tot Barcelona, preu tancat per telèfon abans de sortir.",
    ],
    tambienServicio: {
      intro:
        "Cobrim tot Horta-Guinardó i el seu entorn: Gràcia i l'Eixample vessant avall, Nou Barris a l'altra banda de la ronda i Sant Andreu per la Meridiana.",
      municipios: ["Gràcia", "Nou Barris", "Sant Andreu", "Eixample"],
    },
    zonas: {
      h2: "Feines habituals per zona d'Horta-Guinardó",
      intro: "Això és el que més fem a cada part del districte.",
      items: [
        {
          nombre: "Horta i la Font d'en Fargues",
          texto:
            "Cases amb jardí i passatges: il·luminació exterior, automatismes de portes, ampliacions i renovació d'instal·lacions antigues.",
        },
        {
          nombre: "El Carmel i la Teixonera",
          texto:
            "Blocs dels anys 50 als 70 en vessant: quadres originals per canviar, potències mínimes i derivacions recurrents.",
        },
        {
          nombre: "El Guinardó",
          texto:
            "Finques de mitjana alçada: adequacions per al butlletí, preses de terra i línies noves per a cuina i clima.",
        },
        {
          nombre: "La Vall d'Hebron",
          texto:
            "Habitatge dels anys 70 al costat d'equipaments: renovació de quadres, il·luminació de comunitats i garatges.",
        },
      ],
    },
    secciones: [
      {
        h2: "El districte del desnivell: instal·lacions que pateixen la intempèrie",
        parrafos: [
          "Horta-Guinardó s'enfila per la falda de Collserola i aquesta geografia condiciona la feina elèctrica més del que sembla. Cases amb jardí en desnivell, passatges, escales públiques, parcel·les on el garatge és vint metres per sota de l'habitatge i murs de contenció a tot arreu.",
          "La conseqüència pràctica és que aquí hi ha molta més instal·lació a la intempèrie que en un districte pla: línies que travessen un jardí en pendent, il·luminació d'escales i accessos exteriors, preses en porxos i trasters, i canalitzacions soterrades que fa dècades que suporten filtracions cada vegada que plou fort.",
          "És també el districte on més avaries per humitat atenem, i amb un patró molt marcat. Apareixen a la tardor amb les primeres pluges fortes, desapareixen a l'estiu i tornen l'any següent una mica pitjor. Quan algú ens diu que el seu diferencial salta només a l'hivern, hi ha aigua entrant per una canalització exterior o per un mur.",
          "Reparar bé això passa per substituir el tram afectat amb material estanc i canalització nova, no per assecar i esperar. Això segon funciona fins a la següent tempesta.",
        ],
      },
      {
        h2: "El Carmel i la Teixonera: blocs penjats de la muntanya",
        parrafos: [
          "La part alta del districte es va construir de pressa entre els anys cinquanta i setanta per acollir la immigració que arribava a Barcelona, i molts d'aquells blocs continuen dempeus amb la seva instal·lació original o poc més.",
          "El que trobem aquí. Quadres amb fusibles o amb un únic diferencial. Cap presa de terra a tot l'habitatge. Seccions de cable insuficients. I muntants comunitaris que es van quedar curts fa dècades. És la zona de Barcelona on més quadres complets canviem, i on més vegades hem d'explicar que pujar la potència contractada no serveix de res si la instal·lació de la casa no la pot transportar.",
          "Hi ha una circumstància local que t'interessa conèixer. Moltes d'aquestes finques tenen l'accés complicat, amb escales públiques, carrers sense sortida i pendents forts. No és un problema per a nosaltres i no ho cobrem a part, però explica que en una urgència triguem una mica més que a la part baixa del districte. Quan truques et donem una franja realista, no la que sona millor.",
        ],
      },
      {
        h2: "Vall d'Hebron i la Font d'en Fargues: equipaments i cases",
        parrafos: [
          "El districte combina dues realitats més: la zona de grans equipaments al voltant de la Vall d'Hebron, amb hospitals, instal·lacions esportives i residències, i els barris de cases amb jardí de la Font d'en Fargues i Sant Genís, de teixit molt més residencial.",
          "Per a l'entorn d'equipaments treballem sobretot amb empreses de serveis, clíniques privades i residències, on el que es valora és la disponibilitat i la traçabilitat: revisions programades, informe escrit de cada intervenció i capacitat de resposta ràpida, perquè en un centre amb persones dependents un tall de subministrament no és una molèstia, és un risc.",
          "A les cases de la Font d'en Fargues la feina s'assembla a la de Sarrià, a una altra escala. Instal·lacions exteriors, il·luminació de jardí, ampliacions per a climatització i, cada vegada més, punts de recàrrega en garatges particulars. Aquests últims són de les instal·lacions més ràpides que existeixen quan la casa té garatge propi. Línia directa des del teu quadre i llestos.",
        ],
      },
    ],
    faqsLocales: [
      {
        pregunta: "El diferencial em salta només a l'hivern, amb les pluges.",
        respuesta:
          "És el patró més característic del districte. Gairebé sempre hi ha aigua entrant per una canalització exterior o per un mur de contenció, i l'aïllament es degrada una mica més cada temporada. Es resol substituint el tram afectat amb material estanc i canalització nova; assecar i esperar només funciona fins a la següent tempesta.",
      },
      {
        pregunta: "Visc al Carmel i pujar la potència no ha solucionat res.",
        respuesta:
          "És freqüent aquí. Contractar més potència no serveix si la instal·lació de la casa o el muntant de l'edifici no la poden transportar. Abans de tocar la potència convé comprovar la secció dels cables i l'estat del quadre, i dir-t'ho encara que signifiqui que la feina sigui una altra.",
      },
      {
        pregunta: "El meu carrer és d'escales i no s'hi pot aparcar. Trigueu més?",
        respuesta:
          "Una mica més que a la part baixa del districte, sí, i per això et donem una franja realista quan truques en lloc de la que sona millor. El que no canvia és el preu: l'accés difícil no porta recàrrec.",
      },
      {
        pregunta: "Quant triga un lampista a arribar a Horta o al Carmel?",
        respuesta:
          "En urgències, entre 30 i 45 minuts a qualsevol punt del districte, pujades incloses.",
      },
      {
        pregunta: "Tinc una casa amb jardí a Horta. Feu il·luminació exterior?",
        respuesta:
          "Sí, és un clàssic del barri: il·luminació de jardí i façana amb material estanc, automatismes de portes i reg, tot sobre línies protegides.",
      },
      {
        pregunta: "Feu butlletins al Guinardó i al Carmel?",
        respuesta:
          "Sí, cada dia: revisió de la instal·lació, adequació de l'imprescindible i CIE en 24-48h amb tramitació inclosa.",
      },
      {
        pregunta: "Sou lampistes o electricistes?",
        respuesta:
          "Al barri se'n diu lampista i, en castellà, electricista, però és un sol ofici. Qui puja a Horta o al Carmel a fer la feina és un instal·lador elèctric habilitat, amb número de registre, i pot signar el butlletí que et demani la comercialitzadora.",
      },
    ],
  },
  {
    slug: "lampista-ciutat-vella",
    slugEs: "electricista-ciutat-vella",
    nombre: "Ciutat Vella",
    comarca: "Barcelona",
    padre,
    h1: "Lampista a Ciutat Vella: urgències i instal·ladors habilitats",
    metaTitle: "Lampista a Ciutat Vella (Barcelona) | Urgències 24h",
    metaDescription:
      "Lampistes a Ciutat Vella: Raval, Gòtic, Born i Barceloneta. Finques antigues, locals, butlletins (CIE) i urgències 24h.",
    porQue: [
      "Ciutat Vella té el parc d'edificis més antic de Barcelona, i moltes de les seves instal·lacions elèctriques també. Finques del segle XVIII i XIX al Gòtic i al Born, blocs de postguerra al Raval i les cases estretes de la Barceloneta comparteixen un mateix problema que el nostre lampista veu cada setmana: cablejat sense secció per al que avui s'hi connecta, cap presa de terra i humitat a tot arreu, sigui del subsol, del mar o dels patis interiors.",
      "A això s'hi suma que aquí l'habitatge conviu amb la concentració més gran de locals i restaurants de la ciutat. Legalitzem instal·lacions per a llicències d'activitat, resolem urgències en cuines i comerços amb prioritat, i ens movem a peu pels carrers on no entra el cotxe. Arribem en 30-45 minuts a qualsevol punt del districte.",
    ],
    tambienServicio: {
      intro:
        "Des de Ciutat Vella pugem a l'Eixample i a Sant Antoni en minuts, i pel litoral arribem a la Vila Olímpica i al Poblenou, a Sant Martí. Per l'altra banda, al Poble-sec i a Sants.",
      municipios: ["Eixample", "Sant Martí", "Sants", "Gràcia"],
    },
    zonas: {
      h2: "Feines habituals per barri de Ciutat Vella",
      intro:
        "Quatre barris molt diferents entre si, amb un patró d'avaries propi a cadascun.",
      items: [
        {
          nombre: "El Raval",
          texto:
            "La zona més densa i amb més rotació d'habitatge: quadres amb fusibles, comptadors compartits que cal individualitzar i butlletins per a altes de llum després de cada canvi de llogater.",
        },
        {
          nombre: "El Gòtic",
          texto:
            "Finques medievals i del XIX rehabilitades a mitges: derivacions per humitat de mur, instal·lació en superfície on no es pot picar i legalitzacions de locals i pisos turístics.",
        },
        {
          nombre: "Sant Pere, Santa Caterina i la Ribera",
          texto:
            "El Born concentra restaurants, tallers i lofts: ampliacions de potència per a cuines, quadres de local i separació de circuits en pisos reformats sobre estructura antiga.",
        },
        {
          nombre: "La Barceloneta",
          texto:
            "Pisos petits a un pas del mar: salnitre a endolls i quadres, terminals oxidats, pujades de potència en habitatges amb el mínim contractat i avaries en locals de primera línia.",
        },
      ],
    },
    secciones: [
      {
        h2: "Instal·lacions elèctriques en finques de dos i tres segles",
        parrafos: [
          "Al Gòtic i al Born treballem en edificis que ja eren dempeus quan va arribar l'electricitat. La instal·lació s'hi va afegir a posteriori, en molts casos en superfície i sobre murs de pedra o de maçoneria d'un metre de gruix, i des de llavors s'ha anat ampliant a pedaços: un tram dels anys cinquanta, un altre d'una reforma dels noranta i un tercer de l'última vegada que algú va canviar la cuina.",
          "El que trobem més sovint és cablejat amb la secció justa per a un parell de bombetes alimentant avui un pis sencer, sense presa de terra i amb un quadre que a vegades continua sent de fusibles ceràmics. Afegeix-hi murs que suen humitat del subsol i patis interiors mínims, i tens la causa de bona part dels diferencials que salten sense motiu aparent al districte.",
          "Renovar la instal·lació en aquestes finques gairebé mai no passa per picar. Moltes estan protegides i en d'altres no compensa obrir murs de pedra. Treballem amb canalització vista de qualitat, tub metàl·lic o canaleta tècnica segons l'acabat, aprofitant passos existents i cels rasos de banys i cuines. El resultat compleix el reglament, permet signar el butlletí i respecta l'edifici.",
        ],
      },
      {
        h2: "Locals, restaurants i llicències d'activitat",
        parrafos: [
          "Ciutat Vella és el districte amb més locals per metre quadrat de la ciutat, i bona part de la nostra feina aquí és per a negocis. El cas típic és un traspàs: entra un nou titular, l'ajuntament o el tècnic que tramita la llicència demana la instal·lació elèctrica al dia, i apareix que el local fa vint anys que funciona amb una instal·lació que mai no es va legalitzar.",
          "Revisem el que hi ha, adaptem l'imprescindible (quadre amb les proteccions que exigeix l'activitat, circuits separats per a cuina, fred i enllumenat, enllumenat d'emergència) i deixem la documentació a punt perquè el tècnic la incorpori a l'expedient. En restauració el punt crític és gairebé sempre la potència: una cuina elèctrica o una cambra nova no caben en un subministrament pensat per a una botiga de barri.",
          "Per als locals en funcionament donem prioritat de resposta en urgències. Un restaurant del Born sense llum un divendres a la nit o una cambra aturada al Raval tenen un cost per hora que no admet esperar a demà.",
        ],
      },
      {
        h2: "Carrers de vianants, pisos turístics i altres particularitats",
        parrafos: [
          "Treballar a Ciutat Vella té una logística pròpia. Bona part del districte és de vianants o té l'accés restringit a vehicles, i el lampista acaba carregant el material a peu des del punt més proper on es pot parar. Ho expliquem perquè afecta com organitzem les visites, no el preu: l'accés és problema nostre i no el repercutim.",
          "Una altra particularitat són els habitatges d'ús turístic i els pisos de lloguer amb molta rotació. Cada canvi de titular en el contracte de la llum pot acabar en una petició de butlletí per part de la comercialitzadora, i al Raval i al Gòtic és una de les gestions que més fem. Si administres diversos pisos, et convé tenir la instal·lació revisada abans que la comercialitzadora t'aturi una alta amb el llogater esperant.",
          "A la Barceloneta l'enemic és el salnitre. Endolls exteriors, terminals de quadre i caixes de registre s'oxiden molt abans que a la resta de la ciutat, i les derivacions que provoquen es confonen amb avaries d'electrodomèstics. Aquí fem servir material amb protecció adequada a l'ambient marí i ho deixem indicat al pressupost.",
        ],
      },
    ],
    faqsLocales: [
      {
        pregunta: "Quant triga un lampista a arribar a Ciutat Vella?",
        respuesta:
          "En urgències, entre 30 i 45 minuts a qualsevol barri del districte. En carrers de vianants o amb accés restringit aparquem on es pot i pugem a peu amb el material, sense cost afegit.",
      },
      {
        pregunta: "La meva finca del Gòtic està protegida. Es pot renovar la instal·lació?",
        respuesta:
          "Sí. Treballem amb canalització vista de qualitat, tub metàl·lic o canaleta tècnica segons l'acabat, i aprofitem els passos existents. Sense picar murs de pedra i amb butlletí en acabar.",
      },
      {
        pregunta: "Obriré un local al Born. Què necessito per a la llicència?",
        respuesta:
          "Una instal·lació elèctrica legalitzada i d'acord amb l'activitat: quadre amb les proteccions que exigeix, circuits separats i enllumenat d'emergència. Revisem el local, adaptem el que calgui i deixem la documentació a punt per al tècnic que tramita l'expedient.",
      },
      {
        pregunta: "A la Barceloneta em salta el diferencial cada pocs dies. Què passa?",
        respuesta:
          "Gairebé sempre és salnitre: terminals, endolls exteriors i caixes s'oxiden i provoquen derivacions. Es localitza mesurant circuit per circuit i es resol substituint el punt afectat per material apte per a ambient marí.",
      },
      {
        pregunta: "Gestiono pisos de lloguer al Raval. Feu butlletins per a les altes?",
        respuesta:
          "Sí, és una de les gestions més freqüents del districte. Revisem la instal·lació, adaptem l'imprescindible i gestionem el CIE en 24-48 hores perquè l'alta no es quedi aturada.",
      },
      {
        pregunta: "Treballeu en pisos amb comptador compartit?",
        respuesta:
          "Sí. En finques antigues del Raval i del Gòtic encara hi ha subministraments compartits entre habitatges. Estudiem la individualització, preparem la derivació i el quadre de cada habitatge i gestionem el butlletí perquè cadascun tingui el seu contracte.",
      },
      {
        pregunta: "Sou lampistes o electricistes?",
        respuesta:
          "Som el mateix: lampista és la paraula catalana i electricista, la castellana. El que compta al Raval, al Gòtic o a la Barceloneta és que la feina la faci un instal·lador elèctric habilitat, que és qui pot signar el butlletí. Amb nosaltres és sempre així.",
      },
    ],
  },
  {
    slug: "lampista-nou-barris",
    slugEs: "electricista-nou-barris",
    nombre: "Nou Barris",
    comarca: "Barcelona",
    padre,
    h1: "Lampista a Nou Barris: urgències i instal·ladors habilitats",
    metaTitle: "Lampista a Nou Barris (Barcelona) | Urgències 24h",
    metaDescription:
      "Lampistes a Nou Barris: canvis de quadre, pujades de potència, butlletins (CIE) i urgències 24h. Preu tancat abans de començar.",
    porQue: [
      "Nou Barris es va construir majoritàriament entre els anys cinquanta i setanta, en polígons d'habitatge aixecats de pressa per allotjar els qui arribaven a treballar a Barcelona. Verdum, la Trinitat Nova, Canyelles, la Guineueta o Ciutat Meridiana comparteixen pisos petits, instal·lacions pensades per al mínim d'aquella època i potències contractades que avui salten així que coincideixen la vitro i la rentadora. És feina de lampista de cada dia.",
      "És el districte on més quadres de fusibles substituïm i on més pujades de potència gestionem, moltes amb revisió de la derivació individual perquè la línia original no admet més. Treballem cada dia en finques que estan rehabilitant la instal·lació comuna, als comerços de la Via Júlia i Fabra i Puig i a les cases de la part alta. En urgències arribem en 40-50 minuts segons el barri i el pendent.",
    ],
    tambienServicio: {
      intro:
        "Des de Nou Barris baixem a Horta-Guinardó i a Sant Andreu en pocs minuts, i per la Meridiana i la Ronda de Dalt saltem a Santa Coloma de Gramenet i a Montcada i Reixac. També cobrim la resta de Barcelona.",
      municipios: ["Horta-Guinardó", "Sant Andreu", "Santa Coloma de Gramenet", "Gràcia"],
    },
    zonas: {
      h2: "Feines habituals per barri de Nou Barris",
      intro:
        "Tretze barris amb històries de construcció diferents, i per tant amb avaries diferents.",
      items: [
        {
          nombre: "Verdum, Prosperitat i la Guineueta",
          texto:
            "Blocs dels anys 50 i 60 amb la instal·lació original: quadres de fusibles, habitatges sense presa de terra i pujades de potència amb revisió de la derivació individual.",
        },
        {
          nombre: "Trinitat Nova i Canyelles",
          texto:
            "Polígons en plena renovació: instal·lacions comunes rehabilitades, línies noves per a ascensors afegits a posteriori i quadres de serveis comuns.",
        },
        {
          nombre: "Ciutat Meridiana, Torre Baró i Vallbona",
          texto:
            "La zona alta, sobre el vessant de Collserola: habitatges amb derivacions per humitat, quadres per substituir i accessos que allarguen una mica el temps d'arribada.",
        },
        {
          nombre: "Porta, Vilapicina i el Turó de la Peira",
          texto:
            "Finques rehabilitades després de dècades d'obres estructurals: renovació completa de la instal·lació, butlletins per a compravenda i adequacions per al CIE.",
        },
        {
          nombre: "Via Júlia i Fabra i Puig",
          texto:
            "Comerç de barri i restauració: separació de circuits, quadres de local, ampliacions de potència i legalitzacions per a llicències d'activitat.",
        },
      ],
    },
    secciones: [
      {
        h2: "Pisos dels polígons: potència curta i quadre de fusibles",
        parrafos: [
          "La majoria dels pisos de Nou Barris van néixer amb una instal·lació calculada per a una nevera, una ràdio i quatre bombetes. Seixanta anys després alimenten vitroceràmica, forn, rentadora, assecadora, aire condicionat i una casa sencera de carregadors. El resultat és sempre el mateix: l'ICP salta a les hores de més consum i al quadre continua havent-hi fusibles o, com a molt, un únic diferencial per a tot l'habitatge.",
          "Pujar la potència sembla la solució ràpida, i a vegades ho és. Però en moltes finques del districte la derivació individual, que és el cable que va des del comptador fins al teu quadre, no té secció per admetre'n més. La comercialitzadora et demanarà butlletí per a la pujada i l'instal·lador no el pot signar si la línia no aguanta. Per això aquí revisem sempre la derivació abans de dir-te si n'hi ha prou amb la pujada o cal renovar aquest tram.",
          "Quan toca renovar, ho fem en un matí: derivació nova si fa falta, quadre amb diferencial i magnetotèrmics per circuit, presa de terra on no n'hi ha i butlletí perquè la pujada es tramiti sense entrebancs. És la feina que més fem a Verdum, Prosperitat i la Guineueta.",
        ],
      },
      {
        h2: "Finques rehabilitades i ascensors afegits després",
        parrafos: [
          "Nou Barris ha viscut més rehabilitació que gairebé qualsevol altre districte de Barcelona. Al Turó de la Peira es van reconstruir blocs sencers per problemes estructurals i a la Trinitat Nova, Canyelles o Ciutat Meridiana s'han renovat façanes, cobertes i elements comuns amb ajuts públics. Moltes d'aquestes obres van tocar la instal·lació elèctrica comuna, però no sempre la de cada habitatge.",
          "El cas més freqüent és l'ascensor. Centenars de finques del districte el van instal·lar dècades després de construir-se, i aquesta màquina necessita una línia pròpia des de la centralització de comptadors, un quadre de serveis comuns preparat i sovint un augment de potència del subministrament de la comunitat. Quan es va fer de pressa, apareixen els problemes: diferencial de la comunitat que salta, enllumenat d'escala que comparteix circuit amb l'ascensor o proteccions que no corresponen.",
          "Per a les comunitats del districte revisem la instal·lació comuna completa, deixem per escrit què està bé i què cal corregir, i pressupostem amb preu tancat i factura amb CIF i IVA desglossat. Si la finca és al mig d'una rehabilitació, ens coordinem amb l'empresa d'obra i amb l'administrador perquè la part elèctrica no endarrereixi la resta.",
        ],
      },
      {
        h2: "La part alta: humitat, pendent i temps d'arribada",
        parrafos: [
          "Ciutat Meridiana, Torre Baró i Vallbona pengen del vessant de Collserola, i això condiciona dues coses. La primera és la humitat: murs en contacte amb el terreny, patis que no ventilen i baixos on la instal·lació pateix derivacions que a la resta de la ciutat no apareixen. Quan el diferencial d'un habitatge de la zona alta salta sense motiu, el primer que mesurem és l'aïllament dels circuits que passen per murs de contenció.",
          "La segona és l'accés. Els carrers són estrets i amb molt pendent, i en urgències el temps d'arribada puja respecte al pla del districte. Preferim dir-te 50 minuts i arribar en 45 que prometre't mitja hora i fallar. L'aparcament, com a tot Barcelona, és problema nostre.",
          "En aquestes zones treballem també en moltes cases unifamiliars i autoconstruïdes de Torre Baró i Vallbona, amb instal·lacions que mai no van passar per un instal·lador i que ara, amb la primera venda o herència, necessiten un butlletí. Revisem, adaptem l'imprescindible i gestionem el CIE perquè l'operació no es quedi aturada.",
        ],
      },
    ],
    faqsLocales: [
      {
        pregunta: "Quant triga un lampista a arribar a Nou Barris?",
        respuesta:
          "En urgències, entre 40 i 50 minuts segons el barri. A la part plana (Porta, Vilapicina, Prosperitat) una mica menys; a Ciutat Meridiana, Torre Baró i Vallbona, una mica més pel pendent i l'accés.",
      },
      {
        pregunta: "Em salta l'ICP amb la vitro i la rentadora. N'hi ha prou pujant la potència?",
        respuesta:
          "Depèn de la derivació individual. En moltes finques dels anys 60 i 70 del districte aquest cable no admet més potència i cal renovar-lo abans que l'instal·lador pugui signar el butlletí de la pujada. Ho revisem a la primera visita i et diem quin és el teu cas.",
      },
      {
        pregunta: "El meu quadre encara té fusibles. És urgent canviar-lo?",
        respuesta:
          "No és una urgència d'avui, però sí una prioritat: un quadre de fusibles no protegeix les persones davant de fuites de corrent. El substituïm en un matí per un amb diferencial i magnetotèrmics per circuit, i aprofitem per resoldre la presa de terra.",
      },
      {
        pregunta: "Som una comunitat amb ascensor afegit i salta el diferencial general. Ho podeu mirar?",
        respuesta:
          "Sí, és un problema habitual a Nou Barris. Revisem la línia de l'ascensor, el quadre de serveis comuns i les proteccions, et deixem un informe per escrit i pressupostem amb preu tancat i factura per a la comunitat.",
      },
      {
        pregunta: "Tinc una casa a Torre Baró sense butlletí i la vull vendre. Què faig?",
        respuesta:
          "Revisem la instal·lació, adaptem l'imprescindible perquè compleixi el reglament i gestionem el CIE en 24-48 hores des que la instal·lació està a punt. Convé fer-ho abans de signar les arres per no bloquejar l'operació.",
      },
      {
        pregunta: "Treballeu als comerços de la Via Júlia i Fabra i Puig?",
        respuesta:
          "Sí, cada dia: quadres de local, ampliacions de potència, separació de circuits i legalitzacions per a llicències d'activitat. Per a negocis en funcionament donem prioritat de resposta en urgències.",
      },
      {
        pregunta: "Sou lampistes o electricistes?",
        respuesta:
          "Lampista o electricista, com prefereixis: en català s'ha dit sempre lampista i en castellà electricista, i és exactament el mateix ofici. A Nou Barris la feina la fa un instal·lador elèctric habilitat que pot signar el butlletí de la pujada de potència o de l'alta.",
      },
    ],
  },
];

export function getDistritoCa(slug: string): Ciudad | undefined {
  return distritosCa.find((d) => d.slug === slug);
}
