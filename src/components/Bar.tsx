import { useEffect, useState } from "react";
import { Link } from "react-scroll"
import { useWindowScroll } from "react-use";

function Bar({ sectionsId, className }: { sectionsId: string[], className?: string }) {
  const [selected, setSelected] = useState(sectionsId[0]);

  const { y: PageOfset } = useWindowScroll();

  useEffect(() => {
    sectionsId.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          setSelected(section);
        }
      }
    });
  }, [PageOfset, sectionsId]);

  return (
      <div className={"hidden fixed right-0 top-16 w-48 md:flex flex-col justify-center gap-2 items-end pr-8" + " " + className}>
        {sectionsId.map((section, index) => (
          <Link key={index} to={section} smooth={true} offset={-64} duration={800}>
            <div className="cursor-pointer flex gap-4 items-center">
              <div className={ "transition-all " + (section !== selected ? "text-gray-500 hover:text-white" : "")}>{section}</div>
              <div className={"w-3 h-3 bg-primary rounded-full " + (section === selected ? "animate-pulse" : "hidden")}></div>
            </div>
          </Link>
        ))}
      </div>
  )
}

export default Bar