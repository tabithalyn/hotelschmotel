import { useState } from "react";
import useMediaQuery from "../useMediaQuery";
import Link from "./Link";
import { CurrentSection } from "../types";

type Props = {
  currentSection: CurrentSection;
  setCurrentSection: (value: CurrentSection) => void;
}

export default function NavMenu({ currentSection, setCurrentSection }: Props) {
  const [isNavToggled, setIsNavToggled] = useState<boolean>(false);
  const isAboveMdScreens = useMediaQuery("(min-width: 860px)");

  return (
    <>
    <nav>
      <div className="w-full h-full">
      <div className="w-100 text-center pt-10 pb-20 relative">
        <div className="font-didact text-3xl">Welcome to the<br /><span className="font-limelight text-8xl">Hotel Schmotel</span></div>
        <div className="font-didact text-xl">Nobody every checks out.</div>
      </div>
        {isAboveMdScreens ? (
          <div className="w-full flex items-stretch">
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
      )}
    </nav>
    </>
  );
}