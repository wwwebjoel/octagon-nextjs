import React from "react";
import SingleHexColor from "@/components/colorPicker/SingleHexColor";

const colors = [
    "#FEFFFE", "#EBEBEB", "#D6D6D6", "#C2C2C2", "#ADADAD", "#999", "#858585", "#707070", "#5C5C5C", "#474747",
    "#333", "#000", "#00374A", "#011D57", "#11053B", "#2E063D", "#3C071B", "#5C0701", "#5A1C00", "#583300",
    "#563D00", "#666100", "#4F5504", "#263E0F", "#004D65", "#012F7B", "#1A0A52", "#450D59", "#551029", "#831100",
    "#7B2900", "#7A4A00", "#785800", "#8D8602", "#6F760A", "#38571A", "#016E8F", "#0042A9", "#2C0977", "#61187C",
    "#791A3D", "#B51A00", "#AD3E00", "#A96800", "#A67B01", "#C4BC00", "#9BA50E", "#4E7A27", "#008CB4", "#0056D6",
    "#371A94", "#7A219E", "#99244F", "#E22400", "#DA5100", "#D38301", "#D19D01", "#F5EC00", "#C3D117", "#669D34",
    "#00A1D8", "#0061FD", "#4D22B2", "#982ABC", "#B92D5D", "#FF4015", "#FF6A00", "#FFAB01", "#FCC700", "#FEFB41",
    "#D9EC37", "#76BB40", "#01C7FC", "#3A87FD", "#5E30EB", "#BE38F3", "#E63B7A", "#FE6250", "#FE8648", "#FEB43F",
    "#FECB3E", "#FFF76B", "#E4EF65", "#96D35F", "#52D6FC", "#74A7FF", "#864FFD", "#D357FE", "#EE719E", "#FF8C82",
    "#FEA57D", "#FEC777", "#FED977", "#FFF994", "#EAF28F", "#B1DD8B", "#93E3FC", "#A7C6FF", "#B18CFE", "#E292FE",
    "#F4A4C0", "#FFB5AF", "#FFC5AB", "#FED9A8", "#FDE4A8", "#FFFBB9", "#F1F7B7", "#CDE8B5", "#CBF0FF", "#D2E2FE",
    "#D8C9FE", "#EFCAFE", "#F9D3E0", "#FFDAD8", "#FFE2D6", "#FEECD4", "#FEF1D5", "#FDFBDD", "#F6FADB", "#DEEED4"
];
function HexColors({index}: {index:number}) {

    return (
       <div className={`grid grid-cols-12 gap-0 rounded-lg overflow-hidden`}>
           {
               colors.map(color=>{
                   return(<React.Fragment key={color}>
                        <SingleHexColor color={color} index={index} />
                       </React.Fragment>
                   )
               })
           }</div>
    );
}

export default HexColors;
