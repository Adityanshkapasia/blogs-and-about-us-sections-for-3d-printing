import Image from 'next/image';
import { Parallax } from '@/components/parallax';
import { StickyTile } from '@/components/sticky-tile';
import { CompanyFeatures } from '@/components/company-features';
import { Values } from '@/components/values';
import { Founders } from '@/components/founders';
import { Prototyping } from '@/components/prototyping';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Parallax */}
      <Parallax
        backgroundImage="https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        height="100vh"
      >
        <div className="text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Shaping the Future,<br />One Layer at a Time
          </h1>
          <p className="text-xl md:text-2xl">Innovative 3D Printing Solutions</p>
        </div>
      </Parallax>

      {/* Company Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">Who We Are</h2>
          <p className="text-xl text-center max-w-3xl mx-auto">
            At PrintCraft3D, we're passionate about bringing ideas to life through the power of 3D printing. 
            Our journey began with a simple belief: everyone should have access to the tools that turn imagination into reality.
          </p>
        </div>
      </section>

      {/* Company Features with Sticky Tile Effect */}
      <StickyTile>
        <CompanyFeatures />
      </StickyTile>

      {/* Values and Ethics */}
      <Values />

      {/* Prototyping Services */}
      <Prototyping />

      {/* Founders Section */}
      <Founders />
    </div>
  );
}