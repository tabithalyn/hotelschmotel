import { useState } from "react";
import Booking from "./components/Booking";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavMenu from "./components/NavMenu";
import Information from "./components/Information";
import { CurrentSection } from "./types";

function App() {
  const [currentSection, setCurrentSection] = useState<CurrentSection>(CurrentSection['Home']);


  return (
    <>
    <NavMenu
      currentSection={currentSection}
      setCurrentSection={setCurrentSection}
    />
    <Header />
    <Information setCurrentSection={setCurrentSection} />
    <Booking setCurrentSection={setCurrentSection} />
    <Contact setCurrentSection={setCurrentSection} />
    <Footer />
    <button id="scroll-to-top">&#x2912;</button>
    </>
  );
}

export default App;
