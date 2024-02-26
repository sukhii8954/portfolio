

import './App.css';

import { Navbar } from './Components/Navbar';
import { Hero } from './Components/Hero';
import { About } from './Components/About';
import { Experience } from './Components/Experience';
import { Projects } from './Components/Projects';
import { Contact } from './Components/Contact';
import { Sidecontact } from './Components/Sidecontact';



function App() {


  return (
    <>
     <div  className='bg-[#04152d]'>

  
      <Navbar/>
      <Hero/>
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>
      <Sidecontact/>
      
     </div>
    </>
  );
}

export default App;
