export default function Footer() {
  return (
    <footer className='bg-gray-950 py-2.5 text-center text-xs md:text-sm'>
      <p>
        &copy;{new Date().getFullYear()}
        {' Martine Boulanger - built with React-Router & TailwindCSS'}
      </p>
    </footer>
  );
}
