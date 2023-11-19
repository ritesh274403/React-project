import React from 'react';

const Offertag = () => {
  return (
    <div className="mb-8"> 
      <div className="offer-tag flex space-x-4">
        <button className="bg-blue-500 text-red py-2 px-4 rounded-full hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
          Popular Coupon
        </button>
        <button className="bg-green-500 text-grey py-2 px-4 rounded-full hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300">
          Ending Soon
        </button>
        <button className="bg-purple-500 text-blue py-2 px-4 rounded-full hover:bg-purple-600 focus:outline-none focus:ring focus:border-purple-300">
          Latest Coupon
        </button>
      </div>
    </div>
  );
};

export default Offertag;
