'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../motion/presets';
import Container from '../Container';
import { Display1, Body } from '../typography';

export const Hero: React.FC = () => {
  return (
    <Container size="showcase" className="py-20">
      <motion.section initial="hidden" animate="visible" variants={fadeIn} className="max-w-3xl">
        <Display1>AiONIQ — design x AI for product-grade interfaces</Display1>
        <Body className="mt-6 text-lg text-muted">We build thoughtful design systems, intelligent UX, and production web-apps that feel premium.</Body>
        <div className="mt-8 flex gap-4">
          <a className="inline-block px-5 py-3 rounded-md border border-border" href="/contact">Get in touch</a>
          <a className="inline-block px-5 py-3 rounded-md bg-primary text-primary-foreground" href="/work">View work</a>
        </div>
      </motion.section>
    </Container>
  );
};

export default Hero;

