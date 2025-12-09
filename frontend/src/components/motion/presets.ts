import { Variants } from 'framer-motion';

const easing = [0.2, 0.9, 0.22, 1];

export const fadeIn: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: easing } }
};

export const lift: Variants = {
  rest: { y: 0, boxShadow: '0px 0px 0px rgba(0,0,0,0)' },
  hover: { y: -6, transition: { duration: 0.18, ease: easing } }
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.06 } }
};
