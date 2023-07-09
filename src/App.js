
import React from 'react';
import './App.css';
import Banner from './banner/Banner';
import About from './about/About';
import Navbar from './navbar/Navbar';
import Services from './services/Services';
import ServicesData from './services/ServicesData'

function App() {
  return (
    <div>
<Banner/>
<Navbar/>
<Services details={ServicesData} />
<About/>
    </div>
  );
    

}

export default App;
