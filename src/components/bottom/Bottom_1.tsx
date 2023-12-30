"use client";

import React from 'react';

function Bottom_1() {
  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div onClick={backToTop} className='w-full text-center bg-[#485769] py-3 text-sm font-semibold text-white cursor-pointer'>Back to Top</div>
  );
}

export default Bottom_1;
