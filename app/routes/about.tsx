import { Title } from '~/components/Title';
import { Section } from '~/components/Section';
import { Paragraph } from '~/components/Paragraph';
import type { Route } from './+types/about';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'About me' },
    {
      name: 'description',
      content:
        'This is my personal portfolio, so I can show businesses and people about what I have done',
    },
  ];
}

export default function About() {
  return (
    <Section>
      <Title className='text-center mb-6'>{'Me as developer'}</Title>
      <div className='bg-slate-950 rounded-2xl p-4 md:p-8 border border-cyan-500/50 shadow-lg shadow-cyan-300/40 md:text-xl leading-normal'>
        <Paragraph className='mb-6'>
          {
            'Dynamic Front-end Developer with 4 years of experience in creating innovative web solutions and enhancing user experiences. Proficient in HTML, CSS, and JavaScript, leveraging frameworks such as Next.js and React.js to deliver high-quality websites.'
          }
        </Paragraph>
        <Paragraph className='mb-6'>
          {
            'Known for a collaborative spirit and a problem-solving mindset, consistently striving to master new technologies and contribute effectively in team environments.'
          }
        </Paragraph>
        <Paragraph>
          {
            'Also known for the loyalty, trustworthiness, and friendliness to the company and coworkers. Always there to help and support others, creating a positive work environment.'
          }
        </Paragraph>
      </div>
    </Section>
  );
}
