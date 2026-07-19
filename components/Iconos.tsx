/**
 * Set de iconos handcrafted del sitio, dibujados a mano sobre retícula
 * 24×24 (trazo 1.8, remates redondeados). Sin dependencias externas.
 * Los nombres se referencian desde /data — añadir aquí los que pida
 * un vertical nuevo.
 */

type IconoProps = {
  nombre: string;
  className?: string;
};

const paths: Record<string, React.ReactNode> = {
  /* Urgencias 24h: reloj con marcas de cuadrante */
  reloj: (
    <>
      <circle cx="12" cy="12" r="8.25" />
      <path d="M12 7.5V12l3.1 1.9" />
      <path d="M12 4.6v.01M19.4 12h.01M12 19.4v.01M4.6 12h.01" />
    </>
  ),
  /* Instaladores habilitados: escudo con check */
  check: (
    <>
      <path d="M12 3.25 18.75 5.7v5.05c0 4.35-2.85 7.55-6.75 9.05-3.9-1.5-6.75-4.7-6.75-9.05V5.7L12 3.25z" />
      <path d="m9 11.7 2.2 2.2 3.8-4.7" />
    </>
  ),
  /* Boletín (CIE): documento con sello de validación */
  boletin: (
    <>
      <rect x="5.5" y="3.5" width="13" height="17" rx="1.5" />
      <path d="M8.75 8h6.5M8.75 11.5h6.5M8.75 15h2.75" />
      <circle cx="15.1" cy="16.1" r="2.45" />
      <path d="m14.1 16.2.75.75 1.45-1.7" />
    </>
  ),
  /* Presupuesto en <2h: cronómetro */
  rapido: (
    <>
      <circle cx="12" cy="13.5" r="6.75" />
      <path d="M10.25 3.5h3.5M12 3.5v3.25" />
      <path d="m12 13.5 2.7-2.7" />
      <path d="m17.9 6.6 1.3 1.3" />
    </>
  ),
  /* Precio cerrado: etiqueta con ojal */
  precio: (
    <>
      <path d="M13 3.5h5.75a1.75 1.75 0 0 1 1.75 1.75V11l-9.1 9.1a1.9 1.9 0 0 1-2.7 0l-4.8-4.8a1.9 1.9 0 0 1 0-2.7L13 3.5z" />
      <circle cx="16.6" cy="7.4" r="1.35" />
    </>
  ),
  /* Averías: triángulo de aviso */
  averia: (
    <>
      <path d="M10.4 4.4a1.85 1.85 0 0 1 3.2 0l7.05 12.2a1.85 1.85 0 0 1-1.6 2.78H4.95a1.85 1.85 0 0 1-1.6-2.78L10.4 4.4z" />
      <path d="M12 9.25v4.25M12 16.55v.01" />
    </>
  ),
  /* Cuadro eléctrico: caja con magnetotérmicos y piloto */
  cuadro: (
    <>
      <rect x="4.25" y="3.75" width="15.5" height="16.5" rx="1.75" />
      <path d="M4.25 13.5h15.5" />
      <path d="M8.25 7v3.25M12 7v3.25M15.75 7v3.25" />
      <path d="M7.6 17h.01M11 17h5.4" />
    </>
  ),
  /* Punto de carga: poste con pantalla y manguera */
  carga: (
    <>
      <rect x="4.75" y="3.75" width="8" height="16.5" rx="1.5" />
      <rect x="7" y="6.5" width="3.5" height="3.5" rx="0.5" />
      <path d="M3.5 20.25h10.5" />
      <path d="M12.75 12.5h1.5a2.25 2.25 0 0 1 2.25 2.25v2a1.9 1.9 0 0 0 1.9 1.9h.35" />
      <path d="M20.4 16.4v4.2" />
    </>
  ),
  /* Subida de potencia: manómetro con aguja */
  potencia: (
    <>
      <path d="M4.5 16.75a7.5 7.5 0 0 1 15 0" />
      <path d="m12 16.75 3.4-4.2" />
      <path d="M12 6.9v1.5M7 9l1.05 1.05M17 9l-1.05 1.05" />
      <path d="M4.5 20.25h15" />
    </>
  ),
  /* Empresas y comunidades: dos edificios con ventanas */
  empresa: (
    <>
      <path d="M3.75 20.25h16.5" />
      <path d="M5.5 20.25V6.25A1.25 1.25 0 0 1 6.75 5h5.5a1.25 1.25 0 0 1 1.25 1.25v14" />
      <path d="M13.5 20.25V11h3.75a1.25 1.25 0 0 1 1.25 1.25v8" />
      <path d="M8 8.5h2M8 11.75h2M8 15h2M16 14.25h.01M16 17h.01" />
    </>
  ),
  /* Instalaciones nuevas: llave inglesa */
  instalacion: (
    <>
      <path d="M20.9 6.1a5.2 5.2 0 0 1-6.9 6.4L7.3 19.2a2.05 2.05 0 0 1-2.9-2.9l6.7-6.7a5.2 5.2 0 0 1 6.4-6.9l-3.3 3.3.5 2.9 2.9.5 3.3-3.3z" />
    </>
  ),
  telefono: (
    <path d="M5 4h4l2 5-2.5 1.5a12 12 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
  ),
  /* Logo oficial de WhatsApp (glifo relleno, no trazo) */
  whatsapp: (
    <path
      fill="currentColor"
      stroke="none"
      d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"
    />
  ),
  pin: (
    <>
      <path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  flecha: <path d="M5 12h14m-6-6 6 6-6 6" />,
  chevron: <path d="m6 9 6 6 6-6" />,
};

export function Icono({ nombre, className = "h-6 w-6" }: IconoProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[nombre] ?? paths.check}
    </svg>
  );
}
