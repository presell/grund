/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type XLogoSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function XLogoSvgIcon(props: XLogoSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 512 510"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g clipPath={"url(#CegiB-U0gcIma)"}>
        <path
          d={
            "M396.39 0H115.61C51.76 0 0 51.76 0 115.61v278.42c0 63.85 51.76 115.61 115.61 115.61h280.78c63.85 0 115.61-51.76 115.61-115.61V115.61C512 51.76 460.24 0 396.39 0z"
          }
          fill={"#000"}
        ></path>

        <path
          d={
            "M323.739 148.352h36.12l-78.91 90.2 92.83 122.73h-72.69l-56.93-74.43-65.15 74.43h-36.14l84.4-96.47-89.05-116.46h74.53l51.46 68.04 59.53-68.04zm-12.68 191.31h20.02l-129.2-170.82h-21.48l130.66 170.82z"
          }
          fill={"#fff"}
        ></path>
      </g>

      <defs>
        <clipPath id={"CegiB-U0gcIma"}>
          <path fill={"#fff"} d={"M0 0h512v509.64H0z"}></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default XLogoSvgIcon;
/* prettier-ignore-end */
