import React from 'react';
import Image from 'next/image';
import Img from '@/images/response.jpg';
import PropTypes from 'prop-types';

const Response = (props) => {
  return (
    <>
      {/* Fast Response Times */}
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
          Fast Response Times
        </h3>
        <p className="mt-4 text-base leading-relaxed text-gray-600 z-10">
          At AS Creative, we understand that time is of the essence. No matter
          the query or concern, we guarantee a rapid response, so you can get
          back to business without delay.
        </p>

        {/* </Fade> */}
      </div>
    </>
  );
};

Response.propTypes = {};

export default Response;
