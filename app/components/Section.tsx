import type { ReactNode } from 'react';

interface SectionProps {
  className?: string;
  id?: string;
  children: ReactNode;
}

export const Section = ({
  children,
  id = '',
  className = '',
}: SectionProps) => {
  return (
    <section
      className='min-h-screen flex items-center justify-center relative overflow-hidden py-20 px-6'
      id={id}
    >
      <div className={`max-w-5xl mx-auto w-full ${className}`}>{children}</div>
    </section>
  );
};
