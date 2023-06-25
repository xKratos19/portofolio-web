import { useEffect } from 'react';
import { BrowserRouter } from "react-router-dom";
// import { ReactGA } from 'react-ga4';

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";


const App = () => {

    // ReactGA.initialize("G-D94KCFSKJH");

    // useEffect(() => {
    // ReactGA.send("pageview");
    // }, [])

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        {/* <Works /> */}
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;