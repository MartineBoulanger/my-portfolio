import { Phone, MapPin, Github } from 'lucide-react';
import { Link } from 'react-router';
import { Title } from '~/components/Title';
import { Section } from '~/components/Section';
import { Paragraph } from '~/components/Paragraph';
import type { Route } from './+types/contact';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Contact me' },
    {
      name: 'description',
      content:
        'This is my personal portfolio, so I can show businesses and people about what I have done',
    },
  ];
}

export default function Contact() {
  const buttonsLinks = [
    {
      href: 'mailto:martine.boulanger@gmail.com',
      label: 'Send me an email',
      type: 'email',
    },
    {
      href: 'https://www.linkedin.com/in/martine-boulanger/',
      label: 'Connect on LinkedIn',
      type: 'linkedin',
    },
  ];

  const otherLinks = [
    {
      href: 'https://maps.app.goo.gl/o36ikamaDMSyFHCu5',
      icon: MapPin,
      label: 'Location',
      name: 'Hermalle-sous-Argenteau, Belgium',
    },
    {
      href: 'https://github.com/MartineBoulanger',
      icon: Github,
      label: 'GitHub',
      name: 'https://github.com/MartineBoulanger',
    },
  ];

  return (
    <Section className='text-center'>
      <Title className='mb-6 text-center'>{"Let's Connect"}</Title>
      <Paragraph className='text-xl mb-12'>
        {"I'm currently open to new opportunities and exciting projects!"}
      </Paragraph>
      <div className='flex flex-col md:flex-row gap-6 justify-center mb-8'>
        {buttonsLinks.map(({ href, label, type }, index) => (
          <Link
            key={index}
            to={href}
            target={href.startsWith('http') ? '_blank' : '_self'}
            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className={`${type === 'email' ? 'bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform' : 'bg-gradient-to-r from-blue-500 to-indigo-800 px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform'}`}
          >
            {label}
          </Link>
        ))}
      </div>
      <div className='flex flex-col md:flex-row gap-6 md:gap-8 flex-wrap items-center justify-center'>
        {otherLinks.map(({ href, icon: Icon, label, name }) => (
          <Link
            key={label}
            to={href}
            target={href.startsWith('http') ? '_blank' : '_self'}
            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className='flex items-center gap-2 hover:text-teal-400 transition-all ease-in-out duration-500'
          >
            <Icon className='text-sky-400' size={20} />
            <span>{name}</span>
          </Link>
        ))}
        <div className='flex items-center gap-2 hover:text-teal-400 transition-all ease-in-out duration-500'>
          <Phone className='text-sky-400' size={20} />
          <span>{'+32 496/90 85 87'}</span>
        </div>
      </div>
    </Section>
  );
}
