import React from 'react';
import Image from 'next/image';
import Img from '@/images/transparent.jpg';
import PropTypes from 'prop-types';

const Transparent = (props) => {
  return (
    <>
      {/* Transparent Process */}
      <div className="flex flex-wrap lg:gap-8 lg:mt-auto">
        <Image
          width={400}
          height={200}
          className="w-full"
          src={Img}
          alt="An image displaying a social media feed on a mobile phone managed by AS Creative."
        />
      </div>

      <div className="flex flex-col items-start xl:pl-16 relative">
        <div className="bg-blue-50 w-[10rem] h-[8rem] left-0 absolute rounded-br-[5rem]" />
        {/* <Fade right> */}
        <h3 className="text-l md:text-xl lg:text-2xl font-bold leading-tight text-gray-800 z-10 pt-2">
          Transparent Process
        </h3>
        <p className="mt-4 text-base leading-relaxed text-gray-600 z-10">
          We are a full-service marketing and brand development agency. <br />{' '}
          We provide assistance in areas of research, design, development, and
          digital marketing.
        </p>

        {/* </Fade> */}
      </div>
    </>
  );
};

Transparent.propTypes = {};

export default Transparent;
