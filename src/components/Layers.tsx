import { useSelector } from "react-redux";
import OctagonSVG from "./images/Octagon";

const Layers = () => {
    const activeMenuItem = useSelector(
      (state: any) => state.entities.header.activeMenuItem
    );
  
    const menuItems = {
      roots: 4,
      foundations: 3,
      expressions: 2,
      environment: 2,
      essence: 2,
      contributions: 1,
      constellations: 0,
      distortions: 2,
    };
    return (
      <div className="items-center flex flex-col pt-40 pl-5 pr-10">
        {Array.from({ length: 5 }, (_, i) => {
          const isActive = Object.entries(menuItems).some(
            ([key, value]) => activeMenuItem === key && i === value
          );
  
          return (
            <div key={i} className="relative" style={{ zIndex: 10 - i }}>
              <OctagonSVG active={isActive} width="200px" marginTop="-150px" />
            </div>
          );
        })}
      </div>
    );
  };
  
  export default Layers;