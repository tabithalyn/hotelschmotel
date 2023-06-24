import { CurrentSection } from "../types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  section: string;
  currentSection: CurrentSection;
  setCurrentSection: (value:CurrentSection) => void;
}

const Link = ({ section, currentSection, setCurrentSection }: Props) => {
  const lowerCaseSection = section.toLowerCase() as CurrentSection;

  return (
    <AnchorLink
      className={`${currentSection === lowerCaseSection ? "bg-stone-900 text-stone-200 w-1/4 text-center p-3" : "text-red-950 w-1/4 text-center p-3 hover:bg-red-900"}`}
      href={`#${lowerCaseSection}`}
      onClick={() => setCurrentSection(lowerCaseSection)}
    >
      {section}
    </AnchorLink>
  );
}

export default Link;