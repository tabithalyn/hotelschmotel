import { useState } from "react";
import useMediaQuery from "../useMediaQuery";
import Link from "./Link";
import { CurrentSection } from "../types";

type Props = {
  isTopOfPage: boolean;
  currentSection: CurrentSection;
  setCurrentSection: (value: CurrentSection) => void;
}

export default function NavMenu({ currentSection, setCurrentSection }: Props) {
  const [isNavToggled, setIsNavToggled] = useState<boolean>(false);
  const isAboveMdScreens = useMediaQuery("(min-width: 860px)");

  return (
    <nav>
      <div className="navigation">
      <div className="nav">
        <div className="nav-title">Welcome to the<br /><span>Hotel Schmotel</span></div>
        <div className="nav-subtitle">Nobody every checks out.</div>
      </div>
        {isAboveMdScreens ? (
          <div className="navbar">
            <Link
              section="Home"
              currentSection={currentSection}
              setCurrentSection={setCurrentSection}
            />
            <Link
              section="Information"
              currentSection={currentSection}
              setCurrentSection={setCurrentSection}
            />
            <Link
              section="Booking"
              currentSection={currentSection}
              setCurrentSection={setCurrentSection}
            />
            <Link
              section="Contact"
              currentSection={currentSection}
              setCurrentSection={setCurrentSection}
            />
          </div>
        ) : (
          <button onClick={() => setIsNavToggled(!isNavToggled)}>
            <i className = "fas fa-bars"></i>
          </button>
        )}
      </div>

      {!isAboveMdScreens && isNavToggled && (
        <div>
          <button onClick={() => setIsNavToggled(!isNavToggled)}>
            <i className = "fas fa-bars"></i>
          </button>
        <div className="navbar">
          <Link
            section="Home"
            currentSection={currentSection}
            setCurrentSection={setCurrentSection}
          />
          <Link
            section="Information"
            currentSection={currentSection}
            setCurrentSection={setCurrentSection}
          />
          <Link
            section="Booking"
            currentSection={currentSection}
            setCurrentSection={setCurrentSection}
          />
          <Link
            section="Contact"
            currentSection={currentSection}
            setCurrentSection={setCurrentSection}
          />
        </div>
        </div>
      )}
    </nav>
  );
}