import { Phone } from 'lucide-react';
import { Link } from 'react-router';
import { Title } from '~/components/Title';
import { Section } from '~/components/Section';
import { Paragraph } from '~/components/Paragraph';
import { content, buttonsLinks, otherLinks } from '~/lib/contact';

export default function Contact() {
  return (
    <Section className='text-center'>
      <Title className='mb-6 text-center'>{content.title}</Title>
      <Paragraph className='text-xl mb-12'>{content.description}</Paragraph>
      <div className='flex flex-col md:flex-row gap-6 justify-center mb-8'>
        {buttonsLinks.map(({ href, label, type }, index) => (
          <Link
            key={index}
            to={href}
            target={href.startsWith('http') ? '_blank' : '_self'}
            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className={`${type === 'email' ? 'bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all ease-in-out duration-300' : 'bg-gradient-to-r from-blue-500 to-indigo-800 px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all ease-in-out duration-300'}`}
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
        <div className='flex items-center gap-2'>
          <Phone className='text-sky-400' size={20} />
          <span>{content.phonenumber}</span>
        </div>
      </div>
    </Section>
  );
}
