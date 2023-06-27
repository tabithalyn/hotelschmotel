import { useEffect, useState } from "react";
import NavMenu from "./NavMenu";
import { CurrentSection } from "@/types";

const useSticky = () => {
  const [stickyClass, setStickyClass] = useState('relative');

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);

    return () => {
      window.removeEventListener('scroll', stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      const windowHeight = window.scrollY;
      windowHeight > 500 ? setStickyClass('fixed top-0 left-0 z-50') : setStickyClass('relative');
    }
  };

  return (
    <>
      <div className={`h-16 w-full bg-gray-200 ${stickyClass}`}>
        <NavMenu isTopOfPage={false} currentSection={"home"} setCurrentSection={setCurrentSection} />
      </div>
    </>
  );
}

export default useSticky;
