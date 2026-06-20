import { Link } from 'react-router';
import { Title } from '~/components/Title';
import { Section } from '~/components/Section';
import { Paragraph } from '~/components/Paragraph';
import type { Route } from './+types/home';
import { links, content, metadata } from '~/lib/home';

export function meta({}: Route.MetaArgs) {
  return [
    { title: metadata.title },
    {
      name: 'description',
      content: metadata.descriptionContent,
    },
  ];
}

export default function Home() {
  return (
    <Section className='text-center' id='home'>
      <Title className='text-6xl md:text-8xl mb-4 animate-pulse'>
        {content.title}
      </Title>
      <Title as='h2' className='mb-6'>
        {content.subTitle}
      </Title>
      <Paragraph className='text-lg max-w-xl mx-auto'>
        {content.description}
      </Paragraph>
      <div className='flex gap-4 justify-center mt-8'>
        {links.map(({ href, icon: Icon, label }) => (
          <Link
            key={label}
            to={href}
            target={href.startsWith('http') ? '_blank' : '_self'}
            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className='link-button'
            aria-label={label}
            title={label}
          >
            <Icon size={24} />
          </Link>
        ))}
      </div>
    </Section>
  );
}
