import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEO Title',
  description: 'SEO description',
  keywords: ['About Page', 'Tuberquia', 'Información', '...'],
};

const AboutPage = () => {
  return <span className="text-7xl">AbountPage</span>;
};

export default AboutPage;
