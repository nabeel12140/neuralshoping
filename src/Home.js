import React from 'react'
import Firstsection from './Components/Firstsection';
import Services from './Components/Services';
import Trusted from './Components/Trusted';
import Menuelist from './Components/Menuelist';
import FeatureProduct from './Components/FeatureProduct';

const Home = () => {
  
  return (
    <>
  <Firstsection/>
  <Menuelist/>
  <FeatureProduct/>
  <Services/>
  <Trusted/> 
  </>
  );
};

export default Home;
