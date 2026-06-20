import { Title } from '~/components/Title';
import { Section } from '~/components/Section';
import { Paragraph } from '~/components/Paragraph';
import { content, projects } from '~/lib/personal';

export default function Personal() {
  return (
    <Section>
      <Title className='mb-6 text-center'>{content.title}</Title>
      <Paragraph className='mb-4 text-lg'>{content.description}</Paragraph>
      <div className='grid md:grid-cols-2 gap-6'>
        {projects.map((project, index) => (
          <div
            key={index}
            className='bg-slate-950 rounded-xl p-4 md:p-8 border border-cyan-500/50 shadow-lg shadow-cyan-300/40 md:text-xl leading-normal transition-all hover:scale-103 hover:shadow-xl hover:shadow-cyan-500/20'
          >
            <div className='flex justify-between items-center mb-3'>
              <Title as='h3'>
                {project.link !== '' ? (
                  <a
                    href={project.link}
                    aria-label={project.name}
                    title={project.name}
                    target='_blank'
                    className='hover:underline'
                  >
                    {project.name}
                  </a>
                ) : (
                  project.name
                )}
              </Title>
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
