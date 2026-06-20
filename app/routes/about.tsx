import { Title } from '~/components/Title';
import { Section } from '~/components/Section';
import { Paragraph } from '~/components/Paragraph';
import { content } from '~/lib/about';

export default function About() {
  return (
    <Section>
      <Title className='text-center mb-6'>{content.title}</Title>
      <div className='bg-slate-950 rounded-2xl p-4 md:p-8 border border-cyan-500/50 shadow-lg shadow-cyan-300/40 md:text-xl leading-normal'>
        <Paragraph className='mb-6'>{content.paragraphOne}</Paragraph>
        <Paragraph className='mb-6'>{content.paragraphTwo}</Paragraph>
        <Paragraph className='mb-6'>{content.paragraphThree}</Paragraph>
        <Paragraph>{content.paragraphFour}</Paragraph>
      </div>
    </Section>
  );
}
