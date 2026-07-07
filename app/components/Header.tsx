import { Download } from 'lucide-react';
import { Title } from './Title';

export default function Header() {
  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-950 to-slate-950'>
      <nav className='max-w-6xl mx-auto px-6 py-4 flex justify-between items-center'>
        <Title as='h3' className='tracking-tighter'>
          <a
            href='#home'
            aria-label='Martine Boulanger logo'
            title='logo'
            className='scroll-smooth'
          >
            {'MB'}
          </a>
        </Title>
        {/* Download CV Button */}
        <div className='flex gap-2.5 md:gap-5'>
          <a
            href='/CV - Martine Boulanger.pdf'
            download
            aria-label='Dutch CV'
            title='Dutch CV'
            className='inline-flex items-center px-4 py-2 bg-gradient-to-r from-sky-400 to-teal-400 text-white font-semibold rounded-full shadow-lg hover:from-sky-500 hover:to-teal-500 hover:scale-105 transition-all duration-300'
          >
            <Download size={18} />
            <span className='ml-2'>{'Dutch CV'}</span>
          </a>
          <a
            href='/CV - English - Martine Boulanger.pdf'
            download
            aria-label='English CV'
            title='English CV'
            className='inline-flex items-center px-4 py-2 bg-gradient-to-r from-sky-400 to-teal-400 text-white font-semibold rounded-full shadow-lg hover:from-sky-500 hover:to-teal-500 hover:scale-105 transition-all duration-300'
          >
            <Download size={18} />
            <span className='ml-2'>{'English CV'}</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
