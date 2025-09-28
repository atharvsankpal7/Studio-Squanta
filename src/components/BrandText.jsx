import React from 'react';
import Container from './ui/Container';

export default function BrandHero() {
  return (
    <Container className="min-h-screen lg:h-[89rem] bg-gradient-to-b from-black via-black/80  to-black flex items-center justify-center ">
      <div className=" mx-auto text-center">
        <h2 className="font-alan-sans text-5xl sm:text-7xl md:text-8xl lg:text-[10.9375rem]  font-bold leading-tight capitalize">
          <span className="text-white/75">Giving your </span>
          <span className="text-[#00FF26] block">brand </span>
          <span className="text-white/75">wings to </span>
          <span className="text-white/75 block">rise & shine</span>
        </h2>
      </div>
    </Container>
  );
}
