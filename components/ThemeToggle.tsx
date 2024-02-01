// components/ThemeToggle.tsx
import { useEffect, useState } from 'react';
import { IoMoon } from "react-icons/io5";
import { IoSunnySharp } from "react-icons/io5";


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

  console.log('theme in theme toggle', theme);

  return (
    <div
      className={`relative w-16 h-8 rounded-full bg-gray-300 dark:bg-gray-700 p-1 cursor-pointer ${
        theme === 'dark' ? 'bg-green-400' : 'bg-[#fae9b2] '
      }`}
      onClick={toggleTheme}
    >
      <div
        className={`absolute left-0 w-6 h-6 rounded-full   transition-transform transform ${
          theme === 'dark' ? 'translate-x-9' : 'translate-x-0'
        }`}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          {theme === 'dark' ? (
                <div className=' bg-[#24aeef] p-1 rounded-full '>
            <IoMoon  color='white' size='1em' />
          </div>
          ) : (
            <div className='ml-2 bg-[#f3c137] p-1 rounded-full '>
            <IoSunnySharp color='white' size='1em' />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ThemeToggle;
