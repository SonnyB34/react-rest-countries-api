export default function Filters({
  search,
  onSearchChange,
  region,
  onRegionChange,
}) {
  return (
    <div className="user-inputs">
      <div className="search">
        <ion-icon name="search-outline"></ion-icon>
        <input
          type="text"
          id="search-input"
          placeholder="Search A Country..."
          value={search} // the box shows our saved state
          onChange={(e) => onSearchChange(e.target.value)} // typing updates the state
        />
      </div>

      <div className="selection">
        <select
          name="filter-input"
          id="filter-input"
          value={region}
          onChange={(e) => onRegionChange(e.target.value)}>
          <option value="">Filter by Region</option>
          <option value="africa">Africa</option>
          <option value="americas">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
}
