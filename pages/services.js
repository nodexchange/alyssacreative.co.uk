import React from "react";
import { NextSeo } from "next-seo";
import ServicesSection from '@/sections/Services';

export default function Services() {
  return (
    <>
      <NextSeo title="Services" canonical="https://alyssacreative.co.uk/services" />
      <section className="relative pb-20">
        <div className="flex items-center px-6 py-6 md:px-4 gap-x-yeat">
          <h1 className="text-5xl uppercase">Services</h1>
        </div>
        <div className="flex flex-col gap-y-4">
          <ServicesSection />
        </div>
      </section>
    </>
  );
}
