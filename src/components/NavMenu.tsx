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
      <div className="w-full h-full">
      <div className="w-100 text-center mt-10">
        <div className="font-didact text-3xl">Welcome to the<br /><span className="font-limelight text-8xl">Hotel Schmotel</span></div>
        <div className="font-didact text-xl">Nobody every checks out.</div>
      </div>
        {isAboveMdScreens ? (
          <div className="flex items-stretch mt-20">
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
          <div className="w-full ml-10">
            <button onClick={() => setIsNavToggled(!isNavToggled)}>
              {isNavToggled ? (
                <i className="fas fa-chevron-up"></i>
              ) : (
                <i className="fas fa-chevron-down"></i>
              )}
            </button>
          </div>
        )}
      </div>

      {!isAboveMdScreens && isNavToggled && (
        <div>
        <div className="w-full flex justify-center">
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