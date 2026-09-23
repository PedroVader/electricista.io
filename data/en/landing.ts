import type { FAQ } from "../tipos";

/**
 * Landing de captación en inglés (/en). Una sola página, pensada para
 * residentes extranjeros en Barcelona y el Vallès que buscan
 * "English speaking electrician Barcelona". No es una traducción del sitio:
 * explica lo que un recién llegado no sabe (el boletín, la potencia
 * contratada, la comunidad) y lleva al teléfono o al formulario.
 */
export const landingEn = {
  metaTitle: "English-speaking electrician in Barcelona | 24h, fixed price",
  metaDescription:
    "Licensed electricians in Barcelona, Sabadell and the Vallès who speak English. 24h emergencies, electrical certificates (boletín), fuse boxes and EV chargers. Fixed price in writing before we start.",
  hero: {
    eyebrow: "English-speaking electricians in Barcelona and the Vallès",
    h1: "An electrician in Barcelona who speaks your language. Today if it's urgent.",
    sub: "Emergencies 24 hours a day, electrical certificates for your utility contract, fuse box upgrades and any installation. Clear fixed price before we start, explained in English.",
  },
  badges: [
    { icono: "reloj", texto: "24h emergencies" },
    { icono: "check", texto: "Licensed installers" },
    { icono: "boletin", texto: "We handle your certificate (CIE)" },
    { icono: "rapido", texto: "Quote within 2 hours" },
    { icono: "precio", texto: "Fixed price before we start" },
  ],
  porQue: {
    h2: "Why expats and international companies call us",
    parrafos: [
      "Calling an electrician in a country whose paperwork you don't know is a gamble twice over: you don't know who will turn up, and you don't know what the bill will be. We solve both. The person who comes to your flat or office is a licensed electrical installer with a registration number, and the price you accept is the price you pay, in writing, before anyone touches anything. We explain what we found and what we did in plain English, and we send the invoice with VAT itemised so you can claim it or pass it on to your landlord.",
    ],
    bullets: [
      "Fixed price in writing before we start",
      "Licensed installer, not a handyman",
      "Electrical certificate (boletín, CIE) in 24-48h",
      "Invoices in your name or your company's, VAT itemised",
    ],
  },
  servicios: {
    h2: "What we can do for you",
    intro: "From a socket that sparks to the full electrical fit-out of an office. Pick what's happening or just call and tell us.",
    items: [
      {
        icono: "reloj",
        titulo: "24-hour emergencies",
        texto: "No power, a burning smell or a breaker that keeps tripping. We give you a fixed call-out price on the phone and come out today.",
        slugEs: "electricistas-urgentes-24-horas",
      },
      {
        icono: "boletin",
        titulo: "Electrical certificate (boletín / CIE)",
        texto: "The document your electricity provider asks for to connect the supply, raise your contracted power or after a renovation. Signed by a licensed installer and filed with the Catalan authority for you.",
        slugEs: "boletin-electrico",
      },
      {
        icono: "averia",
        titulo: "Faults and tripping breakers",
        texto: "We measure, we don't guess: insulation, earth continuity and the exact circuit at fault, usually in one visit.",
        slugEs: "averias-electricas",
      },
      {
        icono: "cuadro",
        titulo: "Fuse box (consumer unit) replacement",
        texto: "Old boxes with ceramic fuses or no RCD replaced with a modern, labelled unit that protects people and equipment.",
        slugEs: "cambio-cuadro-electrico",
      },
      {
        icono: "potencia",
        titulo: "Raising your contracted power",
        texto: "If the power cuts out when you switch on the oven and the air conditioning, you probably need more contracted power (potencia). We check the installation and handle the certificate.",
        slugEs: "subir-potencia-luz",
      },
      {
        icono: "carga",
        titulo: "EV charger installation",
        texto: "Home and community car parks. We deal with the building's administrator and the paperwork so the charger is legal from day one.",
        slugEs: "instalacion-punto-de-carga-coche-electrico",
      },
      {
        icono: "empresa",
        titulo: "Offices, shops and buildings",
        texto: "Maintenance and works for companies and homeowners' associations (comunidades). One contact who knows your installation.",
        slugEs: "electricistas-para-empresas-y-comunidades",
      },
      {
        icono: "instalacion",
        titulo: "Renovations and new installations",
        texto: "Full or partial rewiring, lighting, dedicated lines for kitchens and air conditioning. Certified when finished.",
        slugEs: "instalaciones-electricas",
      },
    ],
  },
  boletin: {
    h2: "The boletín, explained for newcomers",
    parrafos: [
      "In Spain, to sign a new electricity contract, raise the power you have contracted or reconnect a supply that has been cut off, the utility company will often ask you for a boletín eléctrico, formally a Certificado de Instalación Eléctrica (CIE). It certifies that the installation in your flat meets the regulations. Only a licensed installer registered with the Catalan government can sign it.",
      "This catches out a lot of people who have just bought or rented an older flat in Barcelona: the estate agent didn't mention it, the utility won't connect the supply without it, and the moving date is already fixed. We inspect the installation, fix only what is strictly needed to pass, have the certificate signed by a licensed installer and file it with the authority. In most cases you have it within 24 to 48 hours.",
    ],
    bullets: [
      "We tell you on the phone whether your case actually needs one",
      "Inspection, minimum adaptations and certificate in one fixed quote",
      "Filed with Indústria for you; you just attach it to your utility application",
      "Also for landlords: certificate for a flat you rent out",
    ],
  },
  comoFunciona: {
    h2: "How it works",
    pasos: [
      {
        titulo: "Call us or send a message",
        texto: "Tell us what's happening in two minutes, in English. A photo of the fuse box or the problem is enough for most quotes. WhatsApp works too.",
      },
      {
        titulo: "You get a fixed price",
        texto: "In writing and within 2 hours during business hours. That price does not change when the job is finished.",
      },
      {
        titulo: "We come today or when it suits you",
        texto: "Emergencies, the same day. Planned jobs, the day and time slot you choose. And we keep to the time.",
      },
    ],
  },
  zonas: {
    h2: "Where we work",
    texto: "Barcelona city and all ten districts, plus Sabadell, Terrassa, Sant Cugat, Badalona, Mataró, Granollers and L'Hospitalet, and the towns around them in the Vallès and the Maresme. If you're in the Barcelona metropolitan area and don't see your town, call anyway: we almost certainly cover it.",
    ciudades: ["Barcelona", "Sabadell", "Terrassa", "Sant Cugat del Vallès", "Badalona", "Mataró", "Granollers", "L'Hospitalet de Llobregat"],
  },
  faqs: [
    {
      pregunta: "Do your electricians speak English?",
      respuesta:
        "Yes. The person who answers the phone and coordinates your job speaks English, and your quote and invoice can be sent in English. If anything on site needs a fuller explanation, we're a phone call away.",
    },
    {
      pregunta: "How much does an electrician cost in Barcelona?",
      respuesta:
        "It depends on the job, and you should be wary of anyone who gives you a figure without knowing what you need. What we do is give you a fixed price in writing before we start, within 2 hours during business hours. That price includes labour, materials, final tests and VAT, and it doesn't change when we finish.",
    },
    {
      pregunta: "Is the call-out charged?",
      respuesta:
        "Yes, but you know the amount before we set off: we tell you the fixed price of the visit on the phone, according to the area and the time of day. The repair itself is then quoted in writing before we touch anything.",
    },
    {
      pregunta: "What is a boletín and do I need one?",
      respuesta:
        "It's the electrical installation certificate (CIE) that utility companies ask for to connect a supply, raise the contracted power or after a renovation. If your flat is old or the previous contract was cancelled, you will probably need one. Call us and we'll tell you in a minute whether your case needs it.",
    },
    {
      pregunta: "Can you invoice my company or my landlord?",
      respuesta:
        "Yes. We invoice with your company's tax number (CIF) or your own NIE, with VAT itemised. If the work is in a rented flat, we can put the invoice in the landlord's name if they are the one paying.",
    },
    {
      pregunta: "My power trips when I use the oven and the air conditioning. Is it a fault?",
      respuesta:
        "Usually not. In Spain you contract a maximum power (potencia) with your utility, and if you exceed it the supply cuts out. Older flats often have a very low figure contracted. Raising it is a paperwork job with the utility that sometimes requires a certificate; we check the installation and handle it for you.",
    },
    {
      pregunta: "Do you work in homeowners' associations (comunidades)?",
      respuesta:
        "Yes, and it's often needed even for a job in your own flat, for instance to run a cable to the car park for an EV charger. We speak to the building administrator, put in writing what will be done and take care of the community side.",
    },
    {
      pregunta: "How fast can you come in an emergency?",
      respuesta:
        "Within Barcelona, usually 45 to 60 minutes. In Sabadell, Terrassa and the rest of the Vallès, similar. We give you a realistic time window when you call, and a fixed call-out price.",
    },
  ] as FAQ[],
  ctaFinal: {
    h2: "Shall we sort it out?",
    texto: "Call us for a fixed price, or leave your details and we'll call you back within 2 hours during business hours. Emergencies are answered 24 hours a day.",
  },
};
