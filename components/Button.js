import React from 'react';
import Link from 'next/link';

const Button = ({ title, href }) => {
  return (
    <div className="mt-10 ">
      <button
        title=""
        className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-acblue-light hover:bg-acblue-dark focus:bg-acblue-dark">
        <Link href={href}>{title}</Link>
      </button>
    </div>
  );
}

export default Button;
