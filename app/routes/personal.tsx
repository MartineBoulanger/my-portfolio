import { Title } from '~/components/Title';
import { Section } from '~/components/Section';
import { Paragraph } from '~/components/Paragraph';
import type { Route } from './+types/personal';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Personal Projects' },
    {
      name: 'description',
      content:
        'This is my personal portfolio, so I can show businesses and people about what I have done',
    },
  ];
}

export default function Personal() {
  const projects = [
    {
      name: 'Pet Masters League',
      tech: 'Next.js, Supabase, MongoDB, Cloudinary, Custom CMS',
      description:
        'World of Warcraft pet battle leagues platform with statistics, and rankings, and user guides',
      status: 'In Production',
    },
    {
      name: 'Custom Images Manager',
      tech: 'Node.js, Express.js, Cloudinary',
      description:
        'Custom images backend server for managing images with Cloudinary integration',
      status: 'In Progress',
    },
    {
      name: 'News and Articles website',
      tech: 'Drupal',
      description:
        'Website with news and articles about anything, this is a learning project to explore Drupal CMS',
      status: 'Planning',
    },
  ];

  return (
    <Section>
      <Title className='mb-6 text-center'>{'Personal Projects'}</Title>
      <Paragraph className='mb-4 text-lg'>
        {
          'Personal projects, and side experiments to explore new technologies and creative ideas'
        }
      </Paragraph>
      <div className='grid md:grid-cols-2 gap-6'>
        {projects.map((project, index) => (
          <div
            key={index}
            className='bg-slate-950 rounded-xl p-4 md:p-8 border border-cyan-500/50 shadow-lg shadow-cyan-300/40 md:text-xl leading-normal transition-all hover:scale-103 hover:shadow-xl hover:shadow-cyan-500/20'
          >
            <div className='flex justify-between items-center mb-3'>
              <Title as='h3'>{project.name}</Title>
              <span className='text-xs bg-cyan-800 px-2 py-1 rounded-full'>
                {project.status}
              </span>
            </div>
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
