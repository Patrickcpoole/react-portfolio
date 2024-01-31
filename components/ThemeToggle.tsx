// components/ThemeToggle.tsx
import { useEffect, useState } from 'react';

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<string>('light');


  const toggleTheme = (): void => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';

    // Toggle theme class on the document
    document.documentElement.classList.toggle('dark', newTheme === 'dark');

    // Save theme preference to local storage
    localStorage.setItem('theme', newTheme);

    // Update state
    setTheme(newTheme);
  };

  return (
    <button onClick={toggleTheme} className="px-4 py-2 bg-gray-800 text-white rounded">
      {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
    </button>
  );
};

export default ThemeToggle;
