import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing Page',
  description: 'Esta es la pagina de precios de mi servicio',
};

const PricingPage = () => {
  return <span className="text-7xl">PricingPage</span>;
};

export default PricingPage;
