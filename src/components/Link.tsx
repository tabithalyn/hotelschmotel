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
      className={`${currentSection === lowerCaseSection ? "anchor-link-selected" : "anchor-link"}`}
      href={`#${lowerCaseSection}`}
      onClick={() => setCurrentSection(lowerCaseSection)}
    >
      {section}
    </AnchorLink>
  );
}

export default Link;