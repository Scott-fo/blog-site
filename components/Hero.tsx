import Link from 'next/link';
import React from 'react';

function Hero() {
  return (
    <Link href="https://unsplash.com/@mk__s">
      
        <div className='flex justify-between items-center border-y shadow py-10 lg:py-0 bg-header-banner bg-cover bg-center h-96'>
        <div className='flex justify-between items-center bg-black/30 h-96 bg-cover w-full'>
            <div className='px-10 space-y-5 bg-black-' >
                <h1 className='text-6xl max-w-xl font-serif text-white'>Welcome to my blog!</h1>
                <h2 className='text-xl max-w-xl font-serif text-white'> This page contains information about me, in-progress and completed projects, and thoughts on interesting things that I am reading.</h2>
                <h3 className='text-l font-serif text-yellow-500'>- Scott Foster</h3>
            </div>
        </div>
      </div>
    </Link>
  );
}

export default Hero;
