import { config } from "@/data/config";
import { ciudades } from "@/data/ciudades";
import type { FAQ } from "@/data/tipos";

/** Constructores de JSON-LD. El tipo de negocio (Electrician) es configurable
 *  aquí para el multi-vertical (Plumber, Locksmith...). */

const TIPO_NEGOCIO = "Electrician";

export function schemaNegocio() {
  const { empresa, telefono, dominio, marca, email } = config;
  return {
    "@context": "https://schema.org",
    "@type": TIPO_NEGOCIO,
    name: marca.nombre,
    legalName: empresa.razonSocial,
    url: dominio,
    telephone: telefono.numero,
    email,
    address: {
      "@type": "PostalAddress",
      streetAddress: empresa.direccion.calle,
      postalCode: empresa.direccion.cp,
      addressLocality: empresa.direccion.ciudad,
      addressRegion: empresa.direccion.provincia,
      addressCountry: empresa.direccion.pais,
    },
    areaServed: [
      ...ciudades.map((c) => ({ "@type": "City", name: c.nombre })),
      ...ciudades.flatMap((c) =>
        c.tambienServicio.municipios.map((m) => ({ "@type": "City", name: m })),
      ),
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  };
}

export function schemaFAQ(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.pregunta,
      acceptedAnswer: { "@type": "Answer", text: f.respuesta },
    })),
  };
}

export function schemaBreadcrumb(items: { nombre: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.nombre,
      item: `${config.dominio}${item.url}`,
    })),
  };
}
