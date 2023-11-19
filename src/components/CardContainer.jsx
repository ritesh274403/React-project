import React from 'react';
import Offercard from './offercard';

const CardContainer = () => {
  return (
    <div className='card-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
      <Offercard />
      <Offercard />
      <Offercard />
      <Offercard />
      <Offercard />
      <Offercard />
      <Offercard />
      <Offercard />
    </div>
  );
};

export default CardContainer;
