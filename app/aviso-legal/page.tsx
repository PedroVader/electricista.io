import type { Metadata } from "next";
import { config } from "@/data/config";

export const metadata: Metadata = {
  title: "Aviso legal",
  description: `Aviso legal de ${config.marca.nombre}, web de ${config.empresa.razonSocial}.`,
  alternates: { canonical: "/aviso-legal" },
  robots: { index: false },
};

// [PLACEHOLDER: revisar textos legales con asesoría antes de publicar]
export default function AvisoLegal() {
  const { empresa, marca, dominio, email, telefono } = config;
  return (
    <section className="bg-paper">
      <div className="prose mx-auto max-w-3xl px-4 py-16">
        <h1 className="font-display text-4xl font-bold text-ink">Aviso legal</h1>
        <div className="mt-8 space-y-6 text-slate">
          <p>
            En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de
            la Sociedad de la Información y de Comercio Electrónico (LSSI-CE),
            se informa de que el sitio web {dominio} (en adelante, «
            {marca.nombre}») es titularidad de:
          </p>
          <ul className="list-disc space-y-1 pl-6">
            <li>Titular: {empresa.razonSocial}</li>
            <li>
              Domicilio: {empresa.direccion.calle}, {empresa.direccion.cp}{" "}
              {empresa.direccion.ciudad} ({empresa.direccion.provincia})
            </li>
            <li>Email de contacto: {email}</li>
            <li>Teléfono: {telefono.display}</li>
          </ul>
          <h2 className="font-display text-2xl font-bold text-ink">
            Objeto del sitio web
          </h2>
          <p>
            {marca.nombre} tiene por objeto la información y contratación de
            servicios de instalación, mantenimiento y reparación eléctrica
            prestados por instaladores habilitados en Barcelona y su área
            metropolitana.
          </p>
          <h2 className="font-display text-2xl font-bold text-ink">
            Condiciones de uso
          </h2>
          <p>
            El acceso a este sitio web es gratuito y atribuye a quien lo
            realiza la condición de usuario, que acepta las presentes
            condiciones. El usuario se compromete a hacer un uso adecuado de
            los contenidos y a no emplearlos para actividades ilícitas o
            contrarias a la buena fe.
          </p>
          <h2 className="font-display text-2xl font-bold text-ink">
            Propiedad intelectual
          </h2>
          <p>
            Los contenidos de este sitio (textos, marcas, logotipos y diseño)
            son titularidad de {empresa.razonSocial} o de terceros que han
            autorizado su uso. Queda prohibida su reproducción sin
            autorización expresa.
          </p>
          <h2 className="font-display text-2xl font-bold text-ink">
            Imágenes del sitio
          </h2>
          <p>
            Las fotografías agrupadas bajo el epígrafe «Trabajos reales»
            corresponden a instalaciones ejecutadas por el equipo de{" "}
            {empresa.razonSocial} y no han sido generadas artificialmente.
          </p>
          <p>
            El resto de fotografías e ilustraciones del sitio, incluidas las
            imágenes de cabecera, tienen carácter meramente ilustrativo y pueden
            haber sido generadas o retocadas mediante herramientas de
            inteligencia artificial. En consecuencia, no reproducen
            necesariamente personas, instalaciones o trabajos reales de{" "}
            {empresa.razonSocial}, y no deben interpretarse como una
            representación exacta del servicio prestado. La información sobre
            servicios, plazos y condiciones recogida en los textos sí es real y
            vinculante en los términos del presupuesto que se entregue en cada
            caso.
          </p>
          <h2 className="font-display text-2xl font-bold text-ink">
            Responsabilidad
          </h2>
          <p>
            {empresa.razonSocial} no se hace responsable del mal uso que se
            realice de los contenidos de este sitio web ni de los daños
            derivados de circunstancias ajenas a su control.
          </p>
          <h2 className="font-display text-2xl font-bold text-ink">
            Legislación aplicable
          </h2>
          <p>
            Las presentes condiciones se rigen por la legislación española.
            Para cualquier controversia, las partes se someten a los juzgados
            y tribunales del domicilio del titular, salvo que la normativa de
            consumidores disponga otro fuero.
          </p>
        </div>
      </div>
    </section>
  );
}
