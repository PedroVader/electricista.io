/**
 * Textos de marca en català que substitueixen els equivalents de
 * /data/config.ts a les pàgines sota /ca. La resta de la configuració
 * (telèfon, adreça, ressenyes, analytics...) es comparteix amb el castellà.
 */

export const configCa = {
  /** Eyebrow i claims principals del hero de la home */
  hero: {
    eyebrow: "Lampistes i electricistes a Barcelona i tot el Vallès",
    h1: "Lampistes professionals amb butlletí. Avui mateix si és urgent.",
    sub: "Avaries, urgències 24h, butlletins elèctrics, quadres i qualsevol instal·lació. Pressupost clar abans de començar.",
  },

  /** Claims de confiança del hero (trust badges). Mateixes icones que l'original. */
  badges: [
    { icono: "reloj", texto: "Urgències 24h" },
    { icono: "check", texto: "Instal·ladors habilitats" },
    { icono: "boletin", texto: "Gestionem el teu butlletí (CIE)" },
    { icono: "rapido", texto: "Pressupost en menys de 2h" },
    { icono: "precio", texto: "Preu tancat abans de començar" },
  ],

  footer: {
    lineaFinal:
      "Treballem amb instal·ladors elèctrics habilitats. Gestionem i tramitem el teu butlletí elèctric (CIE).",
    disclaimerImagenes:
      "Les fotos de l'apartat «Feines reals» són d'instal·lacions fetes pel nostre equip. La resta d'imatges són il·lustratives i poden haver estat generades o retocades amb intel·ligència artificial.",
  },

  formulario: {
    mensajeExito: "Rebut. Et truquem en menys de 2 h en horari laboral.",
  },

  /** Text preomplert en obrir WhatsApp (admet *negreta* i salts de línia) */
  whatsappMensaje: [
    "Hola, us escric des d'electricista.io.",
    "",
    "*Necessito:* ",
    "*Zona:* ",
    "*Urgent:* sí / no",
    "",
    "Si tinc fotos, les adjunto a continuació.",
  ].join("\n"),
};

export type ConfigCa = typeof configCa;
