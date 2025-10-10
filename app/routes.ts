import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),
  route('about', 'routes/about.tsx'),
  route('contact', 'routes/contact.tsx'),
  route('personal', 'routes/personal.tsx'),
  route('professional', 'routes/professional.tsx'),
  route('resume', 'routes/resume.tsx'),
] satisfies RouteConfig;
