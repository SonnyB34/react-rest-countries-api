export default function CountryDetails({ country: c, everyCountry, onBack }) {
  const nativeName =
    object.values(c.names.native ?? {})[0]?.common ?? c.names.common;
  const capital = c.capitals.map((cap) => cap.name).join(', ') || 'N/A';
  const tld = c.tlds?.[0] ?? 'N/A';
  const currencies =
    Object.values(c.currencies ?? {})
      .map((cur) => cur.name ?? cur)
      .join(', ') || 'N/A';
  const languages =
    (c.languages ?? [])
      .map((l) => l.name ?? l.english_name ?? l.native_name)
      .join(', ') || 'N/A';

  const borderNames = (c.borders ?? []).map(
    (code) =>
      everyCountry.find((x) => x.codes.alpha_3 === code)?.names.common ?? code,
  );

  return (
    <>
      <button id="backbtn" className="backbtn" onClick={onBack}>
        <ion-icon name="arrow-back-outline"></ion-icon>Back
      </button>

      <div className="country-information">
        <div className="country-flag">
          <img src={c.flag?.url_png ?? ''} alt={`${c.names.common} flag`} />
        </div>

        <div className="country-details">
          <h1></h1>
        </div>
      </div>
    </>
  );
}
