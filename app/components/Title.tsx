import type { ReactNode } from 'react';

type HeadingTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface HeadingProps extends React.ComponentPropsWithoutRef<'h1'> {
  as?: HeadingTags;
  children: ReactNode;
}

const sizes = {
  h1: 'text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-sky-400 to-teal-400 bg-clip-text text-transparent pb-4',
  h2: 'text-3xl md:text-4xl font-bold text-teal-400',
  h3: 'text-2xl font-semibold text-sky-400',
  h4: 'text-xl font-semibold text-cyan-400',
  h5: 'text-lg font-medium',
  h6: 'text-base font-medium',
} as const;

export const Title = ({
  as: Tag = 'h1',
  className = '',
  children,
  ...props
}: HeadingProps) => {
  return (
    <Tag className={`${sizes[Tag]} ${className}`} {...props}>
      {children}
    </Tag>
  );
};
