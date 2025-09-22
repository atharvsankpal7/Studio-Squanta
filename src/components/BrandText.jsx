import React from 'react';

export default function BrandHero() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-black/80  to-black flex items-center justify-center px-6 md:px-12 lg:px-24 py-24">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-orbitron text-6xl sm:text-7xl md:text-8xl lg:text-9xl  font-bold leading-tight capitalize">
          <span className="text-white/75">Giving your </span>
          <span className="text-[#00FF26] block">brand </span>
          <span className="text-white/75">wings to </span>
          <span className="text-white/75 block">rise & shine</span>
        </h2>
      </div>
    </section>
  );
}
