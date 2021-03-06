import * as React from "react";

function SvgIconHamburger(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} {...props}>
      <g fill="none" fillRule="evenodd">
        <path
          fill="#FFF"
          stroke="#2C2830"
          strokeWidth={1.5}
          d="M.75.75h30.5v30.5H.75z"
        />
        <path d="M8 10h16v1.5H8zm0 5h16v1.5H8zm0 5h16v1.5H8z" fill="#2C2830" />
      </g>
    </svg>
  );
}

export default SvgIconHamburger;
