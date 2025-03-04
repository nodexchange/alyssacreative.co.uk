import React from "react";
import Image from "next/image";
import { NextSeo } from "next-seo";

export default function Faq() {
  return (
    <>
      <NextSeo title="FAQ" canonical="https://www.alyssacreative.co.uk/faq" />
      <section className="relative pb-20">
        <div className="flex items-center px-6 py-6 md:px-4 gap-x-yeat opacity-0">
          <h1 className="text-5xl uppercase">FAQ</h1>
        </div>
        <div className="grid px-6 gap-x-12 gap-y-4 md:px-4 md:grid-cols-2">
          <Image
            width={400}
            height={200}
            src="/images/coming-soon.png"
            alt="Photo of myself"
            priority
          />
          <div className="flex flex-col gap-y-4">
            <p>Coming Soon!</p>
            <hr className="-mb-1" />
          </div>
        </div>
      </section>
    </>
  );
}
