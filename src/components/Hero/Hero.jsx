import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { heroVideo, smallHeroVideo } from '../../utils';
import { useWindowResize } from '../../hooks/useWindowResize';

const Hero = () => {
  const currentSize = useWindowResize();
  const getVideoSrc = () => (currentSize < 760 ? smallHeroVideo : heroVideo);

  useGSAP(() => {
    gsap.to('#hero', {
      opacity: 1,
      delay: 1.5,
    });
    gsap.to('#cta', {
      y: -50,
      opacity: 1,
      delay: 1.5,
    });
  }, []);
  return (
    <section className='w-full nav-height bg-black relative'>
      <div className='h-5/6 w-full flex-center flex-col'>
        <p className='hero-title' id='hero'>
          iPhone 15 Pro {currentSize}
        </p>
        <div className='md:w-10/12 w-9/12'>
          <video muted autoPlay playsInline key={getVideoSrc()} className='pointer-events-none'>
            <source src={getVideoSrc()} type='video/mp4' />
          </video>
        </div>
      </div>
      <div id='cta' className='flex flex-col items-center opacity-0 translate-y-20'>
        <a href='#hightlights' className='btn'>
          Buy
        </a>
        <p className='front-normal text-xl'>From $199/month or $999</p>
      </div>
    </section>
  );
};

export default Hero;
