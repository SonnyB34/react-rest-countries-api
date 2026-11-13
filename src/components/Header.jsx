import { useState, useEffect } from 'react';

export default function Header() {
  // start with whatever mode was save last or start with light
  const [mode, setMode] = useState(localStorage.getItem('mode') || 'light');

  useEffect(() => {
    if (mode === 'dark') {
      document.documentElement.setAttribute('data-mode', 'dark');
    } else {
      document.documentElement.removeAttribute('data-mode');
    }
    localStorage.setItem('mode', mode);
  }, [mode]);

  const toggler = () => setMode(mode === 'dark' ? 'light' : 'dark');
  return (
    <header>
      <div className="container">
        <nav>
          <div className="logo">
            <h1>Where In The World</h1>
          </div>

          <button id="dark-btn" className="dark-btn" onClick={toggler}>
            <ion-icon
              name={mode === 'dark' ? 'moon' : 'moon-outline'}></ion-icon>
            {mode === 'dark' ? ' Light Mode' : ' Dark Mode'}
          </button>
        </nav>
      </div>
    </header>
  );
}
