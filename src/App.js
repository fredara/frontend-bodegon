import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Principal from './Components/Principal/Principal';
import BestSellers from './Components/BestSellers/BestSellers';
import Info from './Components/Info/Info';
import Catalago from './Components/Catalago/Catalago';
import PiePagina from './Components/PiePagina/PiePagina';

function App() {
  return (
    <div>
      <Navbar />
      <Principal />
      <BestSellers />
      <Info />
      <Catalago />
      <PiePagina />
    </div>
  );
}

export default App;
