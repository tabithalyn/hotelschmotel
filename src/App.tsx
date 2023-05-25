import { useState, useEffect } from "react";
import Booking from "./components/Booking";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavMenu from "./components/NavMenu";
import Information from "./components/Information";
import { CurrentSection } from "./types";

function App() {
  const [currentSection, setCurrentSection] = useState<CurrentSection>(CurrentSection['Home']);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setCurrentSection(CurrentSection['Home']);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <NavMenu
      isTopOfPage={isTopOfPage}
      currentSection={currentSection}
      setCurrentSection={setCurrentSection}
    />
    <Header />
    <Information setCurrentSection={setCurrentSection} />
    <Booking setCurrentSection={setCurrentSection} />
    <Contact setCurrentSection={setCurrentSection} />
    <Footer />
    </>
  );
}

export default App;
