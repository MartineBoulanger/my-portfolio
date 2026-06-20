import { Title } from '~/components/Title';
import { Section } from '~/components/Section';
import { Paragraph } from '~/components/Paragraph';
import {
  sections,
  experiences,
  educations,
  skills,
  languages,
  hobbies,
} from '~/lib/resume';

export default function Resume() {
  return (
    <>
      {/* Experience Section */}
      <Section>
        <Title className='mb-6 text-center'>{sections.workTitle}</Title>
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
          {sections.educationTitle}
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
          {sections.skillsTitle}
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
          {sections.languagesTitle}
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
          {sections.hobbiesTitle}
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
