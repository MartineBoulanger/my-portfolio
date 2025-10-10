import { Download } from 'lucide-react';
import { Title } from '~/components/Title';
import { Section } from '~/components/Section';
import { Paragraph } from '~/components/Paragraph';
import type { Route } from './+types/resume';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'My resume' },
    {
      name: 'description',
      content:
        'This is my personal portfolio, so I can show businesses and people about what I have done',
    },
  ];
}

export default function Resume() {
  const experiences = [
    {
      role: 'Front-end Developer',
      company: 'Vaimo Benelux, Genk, Belgium',
      period: 'May 2021 - June 2025',
      details: [
        'Developed and maintained e-commerce websites using Magento, PWA-Studio, Next.js, and Nuxt.js',
        'Collaborated with cross-functional teams to deliver high-quality solutions',
        'Optimized website performance and ensured responsiveness across devices',
        'Implemented SEO best practices to improve search engine rankings',
        'Integrated third-party services and APIs to enhance website functionality',
        'Implementing GTM and GA integrations as third-party contact person',
        'Bug fixing, issue resolution, and testing implementations with Jest',
        'Ensuring excellent folder architecture, composable components, performance, and accessibility',
        'Contributing innovative solutions for client requirements',
      ],
    },
  ];

  const educations = [
    {
      name: 'Front-End Developer',
      institution: 'CVO de Verdieping, Heusden-Zolder, Belgium',
      period: '2020-2021',
    },
    {
      name: 'HBO5 Graduaat Informatica',
      institution: 'PCVO Limburg, Hasselt, Belgium',
      period: '2017-2019',
    },
  ];

  const skills = [
    { name: 'HTML & CSS', level: 100 },
    { name: 'JavaScript', level: 100 },
    { name: 'TypeScript', level: 80 },
    { name: 'React.js & Next.js', level: 90 },
    { name: 'Vue.js & Nuxt.js', level: 75 },
    { name: 'Contentful CMS', level: 85 },
    { name: 'Algolia', level: 50 },
    { name: 'Cloudinary', level: 40 },
    { name: 'Git', level: 90 },
    { name: 'PHP, Laravel', level: 20 },
    { name: 'MySQL', level: 40 },
    { name: 'MongoDB, Supabase, etc', level: 50 },
    { name: 'Drupal', level: 20 },
    { name: 'Python', level: 5 },
  ];

  const languages = [
    { name: 'Dutch', level: '(C2) Expert', native: true },
    { name: 'English', level: '(C1) Autonomous', native: false },
    { name: 'French', level: '(A1) Debutant', native: false },
  ];

  const hobbies = [
    'Gaming',
    'Writing',
    'Reading',
    'Painting & Drawing',
    'Diamond Painting',
    'Embroidery',
    'Music',
    'Films & Series',
    'History',
    'Traveling',
    'Hiking',
    'Animals & Nature',
  ];

  return (
    <>
      {/* Download CV Button */}
      <div className='fixed top-20 right-4 md:right-6 z-50'>
        <a
          href='/MartineBoulangerCV.pdf'
          download
          className='inline-flex items-center px-2 md:px-6 py-2 md:py-3 bg-gradient-to-r from-sky-400 to-teal-400 text-white font-semibold rounded-lg shadow-lg hover:from-sky-500 hover:to-teal-500 hover:scale-105 transition-all duration-300'
        >
          <Download size={18} />
          <span className='hidden md:block md:ml-2'>{'Download my CV'}</span>
        </a>
      </div>

      {/* Experience Section */}
      <Section>
        <Title className='mb-6 text-center'>{'Work Experiences'}</Title>
        <div className='space-y-6'>
          {experiences.map((exp, index) => (
            <div
              key={index}
              className='bg-slate-950 rounded-2xl p-4 md:p-8 border border-cyan-500/50 shadow-lg shadow-cyan-300/40 md:text-xl leading-normal'
            >
              <div className='flex flex-wrap justify-between items-start mb-3'>
                <div>
                  <Title as='h3'>{exp.role}</Title>
                  <Paragraph className='text-lg'>{exp.company}</Paragraph>
                </div>
                <span className='text-teal-400'>{exp.period}</span>
              </div>
              <ul className='list-disc list-inside text-base md:ml-6 space-y-1'>
                {exp.details.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Education Section */}
      <Section>
        <Title
          as='h2'
          className='text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-sky-400 to-teal-400 bg-clip-text text-transparent pb-4 mb-6 text-center'
        >
          {'Educations'}
        </Title>
        <div className='space-y-6'>
          {educations.map((edu, index) => (
            <div
              key={index}
              className='bg-slate-950 rounded-2xl p-4 md:p-8 border border-cyan-500/50 shadow-lg shadow-cyan-300/40 md:text-xl leading-normal'
            >
              <div className='flex flex-wrap justify-between items-start'>
                <div>
                  <Title as='h3'>{edu.name}</Title>
                  <Paragraph className='text-lg'>{edu.institution}</Paragraph>
                </div>
                <span className='text-teal-400'>{edu.period}</span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Skills section */}
      <Section>
        <Title
          as='h2'
          className='text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-sky-400 to-teal-400 bg-clip-text text-transparent pb-4 mb-6 text-center'
        >
          {'Technical Skills'}
        </Title>
        <div className='grid md:grid-cols-2 gap-4 md:gap-8 bg-slate-950 rounded-2xl p-4 md:p-8 border border-cyan-500/50 shadow-lg shadow-cyan-300/40 md:text-xl leading-normal'>
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className='space-y-2'
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className='flex justify-between'>
                <span>{skill.name}</span>
                <span className='text-teal-400'>
                  {skill.level}
                  {'%'}
                </span>
              </div>
              <div className='h-3 bg-slate-700 rounded-full overflow-hidden'>
                <div
                  className='h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-1000 ease-out'
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Languages Section */}
      <Section>
        <Title
          as='h2'
          className='text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-sky-400 to-teal-400 bg-clip-text text-transparent pb-4 mb-6 text-center'
        >
          {'Languages'}
        </Title>
        <div className='flex flex-wrap items-center justify-center gap-6'>
          {languages.map((lang, index) => (
            <div
              key={index}
              className='w-80 bg-slate-950 rounded-2xl p-4 md:p-8 border border-cyan-500/50 shadow-lg shadow-cyan-300/40 md:text-xl leading-normal'
            >
              <div className='flex justify-between items-start'>
                <div>
                  <Title as='h3'>{lang.name}</Title>
                  <Paragraph className='text-lg'>{lang.level}</Paragraph>
                </div>
                <span className='text-teal-400'>
                  {lang.native ? 'Native' : ''}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Hobbies Section */}
      <Section>
        <Title
          as='h2'
          className='text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-sky-400 to-teal-400 bg-clip-text text-transparent pb-4 mb-6 text-center'
        >
          {'Hobbies & Interests'}
        </Title>
        <div className='flex flex-wrap items-center justify-center gap-6'>
          {hobbies.map((hobby, index) => (
            <div
              key={index}
              className='w-80 bg-slate-950 rounded-2xl p-4 md:p-8 border border-cyan-500/50 shadow-lg shadow-cyan-300/40 md:text-xl leading-normal text-center'
            >
              <Paragraph>{hobby}</Paragraph>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
