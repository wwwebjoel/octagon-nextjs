import * as React from "react";

interface LayersProps extends React.SVGProps<SVGSVGElement> {}

const LayersSVG: React.FC<LayersProps> = (props) => {
  const fill = "#C4BFD7"
  return(<svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    className="w-full h-auto"
    x="0px"
    y="0px"
    viewBox="0 0 37.2 32.6"
    xmlSpace="preserve"
    {...props}
  >
    <g>
      <path
      style={{fill: fill}}
        className="st0"
        d="M10.4,32.6c-0.8-0.6-1.1-1.3-1.1-2.5c0.1-2.1,0-4.3,0-6.4c0-1.6,0.4-2.1,1.8-2.1c2.5,0,4.9,0,7.5,0v-7.1 c0-0.4,0-0.7,0-1.1c0-2.3,0.2-2.6,2.2-2.6c2,0,4,0,5.9,0h1.2V3.6C27.9,0,27.9,0,31,0c1.5,0,3,0,4.5,0c1,0,1.7,0.7,1.6,1.6 c-0.1,1.1-0.7,1.6-1.6,1.5c-1.6,0-3.2,0-5,0c0,1.5,0,3,0,4.5c0,1.4,0,2.9,0,4.3c0,1.5-0.5,2-1.7,2c-2.4,0-4.9,0-7.4,0 c0,0.5-0.1,0.9-0.1,1.4c0,2.3,0,4.6,0,6.9c0,2.1-0.3,2.5-2.2,2.5c-2.3,0-4.6,0-7.1,0c0,1.8,0,3.6,0,5.3c0,1.1-0.2,2-1.1,2.6H10.4z"
      />
      <path
      style={{fill: fill}}
        className="st0"
        d="M0,23c0.4-1,1-1.4,1.9-1.3c1.5,0.1,3,0,4.4,0c1.3,0,1.7,0.5,1.7,1.9c0,1.8,0,3.6,0,5.4c0,1.4-0.4,1.9-1.7,1.9 c-1.5,0-3,0-4.4,0C1,31,0.4,30.7,0,29.7V23z"
      />
      <path
      style={{fill: fill}}
        className="st0"
        d="M18.6,4.7c0-1,0-2,0-3C18.6,0.6,19.1,0,20,0c1.7,0,3.4,0,5.1,0c0.9,0,1.5,0.6,1.5,1.7c0,2,0,3.9,0,5.9 c0,1.1-0.6,1.7-1.6,1.7c-1.6,0-3.2,0-4.9,0c-1.1,0-1.5-0.6-1.6-1.8C18.6,6.6,18.6,5.7,18.6,4.7"
      />
      <path
      style={{fill: fill}}
        className="st0"
        d="M17.3,15.5c0,0.9,0,1.9,0,2.8c0,1.1-0.5,1.8-1.5,1.8c-1.7,0.1-3.4,0.1-5.1,0c-1,0-1.5-0.7-1.5-1.8 c0-1.9,0-3.8,0-5.7c0-1.3,0.5-1.8,1.6-1.8c1.6,0,3.2,0,4.9,0c1.1,0,1.5,0.5,1.6,1.8C17.4,13.6,17.3,14.6,17.3,15.5"
      />
    </g>
  </svg>)
};

export default LayersSVG;