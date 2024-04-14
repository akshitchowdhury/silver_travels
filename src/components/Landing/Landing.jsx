import React from 'react';
import './Landing.css';
import landingBg from '../../assets/explore.png';
import landingBg2 from '../../assets/rightLogo.png';
import ExploreButton from './ExploreButton';
import choices from './Choices';



const Landing = () => {



    return (
    <div className="landing h-full flex flex-row sm:flex-col lg:flex-row md:flex-col ">
      <div className="left w-full h-screen ">
        
          <img src={landingBg} alt="Left Logo" className="w-full h-full object-cover" 
            style={{marginBottom: '7%'}}
          />
          
            <ExploreButton options ={choices.choice1} />
        
      </div>
      <div className="right w-full h-screen ">
        
          <img src={landingBg2} alt="Right Logo" className="w-full h-full object-cover" 
            style={{marginBottom: '17%'}}
          />
          <ExploreButton options ={choices.choice2} />
        
      </div>
    </div>
  );
};

export default Landing;
