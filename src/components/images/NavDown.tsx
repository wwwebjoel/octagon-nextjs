import React from "react";

function NavDown() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
        >
            <mask
                id="mask0_174_38358"
                style={{ maskType: "alpha" }}
                width="24"
                height="24"
                x="0"
                y="0"
                maskUnits="userSpaceOnUse"
            >
                <path fill="#D9D9D9" d="M0 0H24V24H0z"></path>
            </mask>
            <g mask="url(#mask0_174_38358)">
                <path
                    fill="#fff"
                    d="M12 15.375l-6-6 1.4-1.4 4.6 4.6 4.6-4.6 1.4 1.4-6 6z"
                ></path>
            </g>
        </svg>
    );
}

export default NavDown;
