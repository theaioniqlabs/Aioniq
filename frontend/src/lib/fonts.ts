/**
 * Google Sans Flex font loader using Next.js font optimization
 * Variable font with axes: GRAD, ROND, opsz, slnt, wdth, wght
 */
import localFont from 'next/font/local'

export const googleSansFlex = localFont({
  src: '../../public/fonts/GoogleSansFlex-Variable.ttf',
  variable: '--font-google-sans-flex',
  display: 'swap',
  weight: '100 900',
  style: 'normal',
})

