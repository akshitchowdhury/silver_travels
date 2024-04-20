import React from 'react';
import ticket from '../../assets/serviceLogo1.png';
import hotel from '../../assets/serviceLogo2.png';
import plane from '../../assets/serviceLogo3.jpg';
import bags from '../../assets/serviceLogo3.png';

import './ServiceCard.css'
import { Link } from 'react-router-dom';
import Scard from './Scard';

const ServiceCard = () => {
  return (
    <>
      <div class="self-center mt-8 text-5xl font-bold tracking-wider text-center text-white max-w-[90%] mx-auto" style={{
        marginTop: '10%'
      }}>
   Create your next memory with us at Silver Line Travels.. 
</div>
  <Scard/>

    
      
    </>
  );
};

export default ServiceCard;
