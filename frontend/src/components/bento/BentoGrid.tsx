'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '../motion/presets';

type Item = { id: string; title: string; desc: string };

export const BentoGrid: React.FC<{ items: Item[] }> = ({ items }) => {
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map(item => (
        <motion.div key={item.id} variants={fadeIn} className="p-6 border rounded-lg" style={{ borderColor: 'var(--border)' }}>
          <h3 className="font-medium mb-2">{item.title}</h3>
          <p className="text-sm text-muted">{item.desc}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default BentoGrid;

