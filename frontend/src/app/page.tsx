import React from 'react';
import Hero from '../components/hero/Hero';
import BentoGrid from '../components/bento/BentoGrid';

const SAMPLE_ITEMS = [
  { id: '1', title: 'Product UI', desc: 'Design systems and interfaces for product teams.' },
  { id: '2', title: 'Brand Systems', desc: 'Visual identity and brand language.' },
  { id: '3', title: 'AI Integration', desc: 'Intelligent features and agent workflows.' },
  { id: '4', title: 'High-end Web Apps', desc: 'Fast, responsive, production-ready SPAs.' },
  { id: '5', title: '3D & Motion', desc: 'Meaningful 3D and carefully animated UI.' },
  { id: '6', title: 'Strategy', desc: 'Product to market fit and delivery planning.' }
];

export default function Home() {
  return (
    <div>
      <Hero />
      <section className="py-16">
        <div className="max-w-container-visual mx-auto px-4">
          <h2 className="text-h2 font-display mb-6">What we do</h2>
          <BentoGrid items={SAMPLE_ITEMS} />
        </div>
      </section>
    </div>
  );
}

