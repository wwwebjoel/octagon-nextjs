import React from "react";

function RightArrow() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`w-full max-w-[32px]`}
            fill="none"
            viewBox="0 0 32 32"
        >
            <mask
                id="mask0_159_28064"
                style={{maskType: "alpha"}}
                width="32"
                height="32"
                x="0"
                y="0"
                maskUnits="userSpaceOnUse"
            >
                <path fill="#D9D9D9" d="M0 0H32V32H0z"></path>
            </mask>
            <g mask="url(#mask0_159_28064)">
                <path
                    fill="#fff"
                    d="M21.567 17.334H5.334v-2.667h16.233L14.1 7.201 16 5.334l10.667 10.667L16 26.667l-1.9-1.866 7.467-7.467z"
                ></path>
            </g>
        </svg>
    );
}

export default RightArrow;
