import {
  isRouteErrorResponse,
  Links,
  Meta,
  Scripts,
  ScrollRestoration,
} from 'react-router';
import type { Route } from './+types/root';
import './app.css';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import { Title } from '~/components/Title';
import { Paragraph } from '~/components/Paragraph';
import Home from '~/routes/home';
import About from '~/routes/about';
import Professional from '~/routes/professional';
import Personal from '~/routes/personal';
import Resume from '~/routes/resume';
import Contact from '~/routes/contact';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main className='min-h-screen'>
        <Home />
        <About />
        <Professional />
        <Personal />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = 'Oops!';
  let details = 'An unexpected error occurred.';
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? '404' : 'Error';
    details =
      error.status === 404
        ? 'The requested page could not be found.'
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className='min-h-screen flex flex-col items-center justify-center p-8'>
      <Title className='mb-4'>{message}</Title>
      <Paragraph className='mb-8'>{details}</Paragraph>
      {stack && (
        <pre className='w-full overflow-x-auto bg-slate-950 rounded-xl p-4 md:p-8 border border-cyan-500/50 shadow-lg shadow-cyan-300/40 leading-normal'>
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
