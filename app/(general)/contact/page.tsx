import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Page',
  description: 'Esta es la página de contactos de la empresa',
  keywords: ['Usuarios', 'telefonos', 'calls'],
};

const ContactPage = () => {
  return <span className="text-7xl">ContactPages</span>;
};

export default ContactPage;
