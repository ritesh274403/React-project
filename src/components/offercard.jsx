import React from 'react';
import Button from './Button';

const Offercard = () => {
  return (
    <div className="offer-card bg-white p-4 rounded-md shadow-md">
      <h5 className="text-xl font-bold mb-2 bg-green-600">Upto 60% off on Appliances</h5>
      <img className="w-full mb-0 ml-4" src="/AmazonLogo.png" alt="Amazon Logo" />
      <h6 className="text-sm text-gray-500 mb-4">Upto 60% off on Summer Appliances</h6>
      <Button className="bg-blue-500 text-white py-0 px-0 rounded-full" name={'Grab Now'} />
    </div>
  );
};

export default Offercard;
