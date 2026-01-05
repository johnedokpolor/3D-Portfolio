import { BrowserRouter } from "react-router-dom";

import { About, Contact, Hero, Navbar, Tech, Works } from "./components";
import { StarsCanvas } from "./components/canvas";
// import "./index.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className=" bg-center bg-no-repeat bg-hero-pattern">
          <Navbar />
          <Hero />
        </div>
        {/* <About />
        <Tech />
        <Works />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div> */}
      </div>
    </BrowserRouter>
  );
};

export default App;
