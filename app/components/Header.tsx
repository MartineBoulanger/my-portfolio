import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { NavLink } from 'react-router';
import { Title } from './Title';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    'Home',
    'About',
    'Professional',
    'Personal',
    'Resume',
    'Contact',
  ];

  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-950 to-slate-950'>
      <nav className='max-w-6xl mx-auto px-6 py-4 flex justify-between items-center'>
        <Title as='h3' className='tracking-tighter'>
          {'MB'}
        </Title>
        <div>
          <div className='hidden md:flex gap-6'>
            {navItems.map((item) => (
              <NavLink
                key={item}
                to={`/${item === 'Home' ? '' : item.toLowerCase()}`}
                className='hover:text-teal-400 transition-all ease-in-out duration-500'
              >
                {item}
              </NavLink>
            ))}
          </div>
          <div>
            <button
              className='md:hidden p-2 rounded-md hover:bg-slate-700 transition'
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              <span className='sr-only'>Open menu</span>
            </button>
          </div>
          {isMenuOpen && (
            <div className='absolute top-full right-0 bg-gradient-to-r from-blue-950 to-slate-950 shadow-lg shadow-cyan-300/40 md:hidden w-full'>
              {navItems.map((item) => (
                <NavLink
                  key={item}
                  to={`/${item === 'Home' ? '' : item.toLowerCase()}`}
                  className='block px-6 py-2.5 hover:bg-slate-700 border-b last:border-0 border-b-slate-900'
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </NavLink>
              ))}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
