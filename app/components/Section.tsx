import type { ReactNode } from 'react';

interface SectionProps {
  className?: string;
  children: ReactNode;
}

export const Section = ({ children, className = '' }: SectionProps) => {
  return (
    <section className='min-h-screen flex items-center justify-center relative overflow-hidden py-20 px-6'>
      <div className={`max-w-5xl mx-auto w-full ${className}`}>{children}</div>
    </section>
  );
};
