export default function CountryCard({ country, onClick }) {
  return (
    <button className="country-item" onClick={onClick}>
      <img src={country.flag.url_png} alt={country.names.common} />
      <div className="country-info">
        <h2 className="country-name">{country.names.common}</h2>
        <p>
          <strong>Population</strong>: {country.population}
        </p>
        <p>
          <strong>Region</strong>: {country.region}
        </p>
        <p>
          <strong>Capital</strong>: {country.capitals?.[0]?.name ?? 'N/A'}
        </p>
      </div>
    </button>
  );
}
