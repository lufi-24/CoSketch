import React from 'react';
import Image from 'next/image';
import siteMetadata from '@/lib/siteMetadata';
import { knewave } from '@/data/fonts';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link
      className='ml-1 flex items-center justify-center gap-3'
      href={'/'}
      scroll={false}
    >
      <Image
        src={'/images/logo.png'}
        alt={'CoSketch logo'}
        width={40}
        height={40}
        priority
        className='w-6 md:w-10'
      />

      <h1
        className={`${knewave.className} text-secondary text-2xl font-extrabold md:text-3xl`}
      >
        {siteMetadata.header}
      </h1>
    </Link>
  );
};

export default Logo;
