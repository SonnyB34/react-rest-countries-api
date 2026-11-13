import { useState, useEffect } from 'react';
import Header from './components/Header';
import Filters from './components/Filters';
import CountryCard from './components/CountryCard';
import CountryDetails from './components/CountryDetails';
import './App.css';

export default function App() {
  const [everyCountry, setEveryCountry] = useState([]);
  const [search, setSearch] = useState('');
  const [region, setRegion] = useState('');
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Run only once when the app first appears
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        let offset = 0;
        let more = true;
        const all = [];

        while (more) {
          const response = await fetch(
            `/api/countries?limit=100&offset=${offset}`,
          );
          if (!response.ok)
            throw new Error(`HTTP error! Status: ${response.status}`);

          const json = await response.json();
          all.push(...json.data.objects);
          more = json.data.meta.more;
          offset += 100;
        }

        setEveryCountry(all);
      } catch (err) {
        console.error('Error fetching country data:', err);
        setError('Could not load Countries..');
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  const visibleCountries = everyCountry
    .filter((c) => !region || c.region?.toLowerCase() === region)
    .filter((c) =>
      c.names.common.toLowerCase().includes(search.toLowerCase().trim()),
    );
  return (
    <>
      <Header />
      <main>
        <div
          id="countries-container"
          className="countries-container"
          style={{ display: 'grid' }}>
          {visibleCountries.map((country) => (
            <CountryCard
              key={country.codes.aplha_3}
              country={country}
              onClick={() => setSelected(country)}
            />
          ))}
        </div>
      </main>
    </>
  );
}
