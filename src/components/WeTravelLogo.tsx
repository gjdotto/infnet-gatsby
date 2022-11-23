import React from "react";
import logo from "../images/wetravel.png"

export type WetravelLogoProps = {
  width?: string | number;
  height?: string | number;
};

export function WetravelLogo({ width, height }: WetravelLogoProps) {
  return (
    <img
      aria-label="Wetravel"
      src={logo}
      width="150"
      height="35"
      style={{ width, height, marginTop: "8px" }}
    >
    </img>
  );
}
