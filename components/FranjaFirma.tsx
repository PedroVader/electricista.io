/** Elemento firma: franja diagonal de obra (§3.3 del SPEC). */
export function FranjaFirma({ fina = false }: { fina?: boolean }) {
  return (
    <div
      className={fina ? "franja-firma-fina" : "franja-firma"}
      aria-hidden="true"
    />
  );
}
