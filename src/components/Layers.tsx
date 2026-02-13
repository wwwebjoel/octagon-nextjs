import { useSelector } from "react-redux";
import OctagonSVG from "./images/Octagon";

const Layers = () => {
    const activeMenuItem = useSelector(
      (state: any) => state.entities.header.activeMenuItem
    );
  
    const menuItems: Record<string, number> = {
      about: 2,
      skills: 2,
      projects: 1,
      "web dev": 3,
      tools: 3,
      automation: 2,
      services: 1,
      contact: 0,
    };
    return (
      <div className="items-center flex flex-col pt-40 pl-5 pr-10 w-full max-w-[200px] m-auto">
        {Array.from({ length: 5 }, (_, i) => {
          const isActive = Object.entries(menuItems).some(
            ([key, value]) => activeMenuItem === key && i === value
          );
  
          return (
            <div key={i} className="relative w-full" style={{ zIndex: 10 - i }}>
              <OctagonSVG active={isActive} width="100%" marginTop="-72%" />
            </div>
          );
        })}
      </div>
    );
  };
  
  export default Layers;