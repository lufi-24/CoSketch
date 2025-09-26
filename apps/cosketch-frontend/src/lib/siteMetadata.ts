import { envSiteUrl } from '@/config';

if (!envSiteUrl) {
  throw new Error(
    '❌ NEXT_PUBLIC_SITE_URL is missing or empty! Check your .env file.',
  );
}

const SITE_URL = envSiteUrl.replace(/\/$/, '');

const siteMetadata = {
  title: 'COSKETCH',
  description:
    'A real-time collaborative sketching tool for teams to brainstorm, draw, and create together.',

  header: 'COSKETCH',

  slogan: `Sketch Together, Think Better`,

  developer: 'Narsi Bhati',

  siteUrl: SITE_URL,

  language: 'en-US',
  locale: 'en-US',

  socialBanner: `${SITE_URL}/images/social-banner.webp`,

  // social links
  github: 'https://github.com/Sudhanshu230310/CoSketch',
  linkedIn: 'https://www.linkedin.com/in/sudhanshu-394271297/',
  

  // contacts
  email: 'gaurs8688@gmail.com',
};

export default siteMetadata;
