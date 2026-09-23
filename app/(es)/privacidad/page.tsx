import type { Metadata } from "next";
import { config } from "@/data/config";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description: `Política de privacidad de ${config.marca.nombre}.`,
  alternates: { canonical: "/privacidad" },
  robots: { index: false },
};

// [PLACEHOLDER: revisar textos legales con asesoría antes de publicar]
export default function Privacidad() {
  const { empresa, email } = config;
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="font-display text-4xl font-bold text-ink">
          Política de privacidad
        </h1>
        <div className="mt-8 space-y-6 text-slate">
          <h2 className="font-display text-2xl font-bold text-ink">
            Responsable del tratamiento
          </h2>
          <p>
            {empresa.razonSocial}, con domicilio en {empresa.direccion.calle},{" "}
            {empresa.direccion.cp} {empresa.direccion.ciudad} (
            {empresa.direccion.provincia}). Email: {email}.
          </p>
          <h2 className="font-display text-2xl font-bold text-ink">
            Datos que tratamos y finalidad
          </h2>
          <p>
            A través del formulario de presupuesto recogemos tu nombre,
            teléfono, ciudad y la descripción del trabajo que necesitas. Los
            usamos exclusivamente para contactarte y prepararte un
            presupuesto. Si nos llamas, tratamos tu número para gestionar tu
            solicitud.
          </p>
          <h2 className="font-display text-2xl font-bold text-ink">
            Base jurídica
          </h2>
          <p>
            La base del tratamiento es la aplicación de medidas
            precontractuales a petición tuya (art. 6.1.b RGPD): nos das tus
            datos para que te preparemos un presupuesto.
          </p>
          <h2 className="font-display text-2xl font-bold text-ink">
            Conservación y destinatarios
          </h2>
          <p>
            Conservamos los datos el tiempo necesario para gestionar tu
            solicitud y las obligaciones legales derivadas. No cedemos tus
            datos a terceros, salvo obligación legal. El formulario se procesa
            a través de Netlify, nuestro proveedor de alojamiento, que actúa
            como encargado del tratamiento.
          </p>
          <h2 className="font-display text-2xl font-bold text-ink">
            Tus derechos
          </h2>
          <p>
            Puedes ejercer tus derechos de acceso, rectificación, supresión,
            oposición, limitación y portabilidad escribiendo a {email}.
            También puedes reclamar ante la Agencia Española de Protección de
            Datos (aepd.es).
          </p>
        </div>
      </div>
    </section>
  );
}
