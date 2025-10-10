import { Title } from '~/components/Title';
import { Section } from '~/components/Section';
import { Paragraph } from '~/components/Paragraph';
import type { Route } from './+types/professional';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Professional Projects' },
    {
      name: 'description',
      content:
        'This is my personal portfolio, so I can show businesses and people about what I have done',
    },
  ];
}

export default function Professional() {
  const projects = [
    {
      name: 'La Lorraine Bakery Group - Main Website',
      tech: 'Next.js, Contentful, Algolia',
      description:
        'Main corporate website with headless CMS integration and advanced search capabilities',
    },
    {
      name: 'La Lorraine Bakery Group - Careers Website',
      tech: 'Next.js, Contentful, Algolia, CVWarehouse',
      description:
        'Dedicated careers portal with job search and application system',
    },
    {
      name: 'Diptyque - E-commerce',
      tech: 'Nuxt.js, Vue.js, Magento',
      description:
        'Luxury fragrance e-commerce platform with elegant user experience',
    },
    {
      name: 'Swiss Sense - E-commerce',
      tech: 'Next.js, React.js, Magento',
      description:
        'Bed and mattress e-commerce platform with product configurator',
    },
    {
      name: 'Runnings - E-commerce',
      tech: 'PWA-Studio, Magento',
      description: 'Progressive web app for outdoor and sporting goods retail',
    },
    {
      name: 'Vitissimo Sport - E-commerce',
      tech: 'PWA-Studio, Magento',
      description:
        'Sports equipment e-commerce with advanced filtering and search',
    },
  ];

  return (
    <Section>
      <Title className='mb-6 text-center'>{'Professional Projects'}</Title>
      <Paragraph className='mb-4 text-lg'>
        {
          'Projects developed during my time at Vaimo Benelux (May 2021 - June 2025)'
        }
      </Paragraph>
      <div className='grid md:grid-cols-2 gap-6'>
        {projects.map((project, index) => (
          <div
            key={index}
            className='bg-slate-950 rounded-xl p-4 md:p-8 border border-cyan-500/50 shadow-lg shadow-cyan-300/40 md:text-xl leading-normal transition-all hover:scale-103 hover:shadow-xl hover:shadow-cyan-500/20'
          >
            <Title as='h3' className='mb-3'>
              {project.name}
            </Title>
            <Paragraph className='text-teal-400 mb-3 font-mono text-sm'>
              {project.tech}
            </Paragraph>
            <Paragraph>{project.description}</Paragraph>
          </div>
        ))}
      </div>
    </Section>
  );
}
