import React from "react";
import { NextSeo } from "next-seo";
import AboutSection from '@/sections/About';

export default function About() {
  return (
    <>
      <NextSeo title="About" canonical="https://alyssacreative.co.uk/about" />
      <section className="relative">
        <div className="flex items-center px-6 py-6 md:px-4 gap-x-yeat opacity-0">
          <h1 className="text-5xl uppercase">About</h1>
        </div>
        <div className="flex flex-col gap-y-4">
          <AboutSection />
        </div>
      </section>
    </>
  );
}
