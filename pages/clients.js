import React from "react";
import Client from '@/sections/Client'
import { NextSeo } from "next-seo";

export default function Clients() {
  return (
    <>
      <NextSeo title="Clients" canonical="https://alyssacreative.co.uk/clients" />
      <section className="relative pb-20">
        <div className="flex items-center px-6 py-6 md:px-4 gap-x-yeat opacity-0">
          <h1 className="text-5xl uppercase">Clients</h1>
        </div>
        <div className="flex flex-col gap-y-4">
          <Client />
        </div>
      </section>
    </>
  );
}
