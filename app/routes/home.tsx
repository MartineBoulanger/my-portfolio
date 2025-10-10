import { Link } from 'react-router';
import { Linkedin, Mail } from 'lucide-react';
import { Title } from '~/components/Title';
import { Section } from '~/components/Section';
import { Paragraph } from '~/components/Paragraph';
import type { Route } from './+types/home';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Martine's portfolio" },
    {
      name: 'description',
      content:
        'This is my personal portfolio, so I can show businesses and people about what I have done',
    },
  ];
}

export default function Home() {
  const links = [
    {
      href: 'mailto:martine.boulanger@gmail.com',
      icon: Mail,
      label: 'Email',
    },
    {
      href: 'https://www.linkedin.com/in/martine-boulanger/',
      icon: Linkedin,
      label: 'LinkedIn',
    },
  ];

  return (
    <Section className='text-center'>
      <Title className='text-6xl md:text-8xl mb-4 animate-pulse'>
        {'Martine Boulanger'}
      </Title>
      <Title as='h2' className='mb-6'>
        {'Front-End Developer'}
      </Title>
      <Paragraph className='text-lg max-w-xl mx-auto'>
        {
          'Crafting beautiful, accessible, and performant web experiences with modern technologies'
        }
      </Paragraph>
      <div className='flex gap-4 justify-center mt-8'>
        {links.map(({ href, icon: Icon, label }) => (
          <Link
            key={label}
            to={href}
            target={href.startsWith('http') ? '_blank' : '_self'}
            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className='link-button'
          >
            <Icon size={24} />
          </Link>
        ))}
      </div>
    </Section>
  );
}
