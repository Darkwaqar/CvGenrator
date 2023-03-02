"use client"
import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';

import { Resume } from './Resume';

export const Example = () => {
  const componentRef = useRef(null);

  return (
    <div>
      <ReactToPrint
        trigger={() => <button className='btn btn-primary m-2 block ml-auto'>Print this out!</button>}
        content={() => componentRef.current}
      />
      <Resume ref={componentRef} />
    </div>
  );
};