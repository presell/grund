/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type InstagramSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function InstagramSvgIcon(props: InstagramSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M16 3.243H8a5 5 0 00-5 5v8a5 5 0 005 5h8a5 5 0 005-5v-8a5 5 0 00-5-5zm3.25 13a3.26 3.26 0 01-3.25 3.25H8a3.26 3.26 0 01-3.25-3.25v-8A3.26 3.26 0 018 4.993h8a3.26 3.26 0 013.25 3.25v8zm-2.5-7.75a1 1 0 100-2 1 1 0 000 2zM12 7.743a4.5 4.5 0 104.5 4.5 4.49 4.49 0 00-4.5-4.5zm-2.75 4.5a2.75 2.75 0 105.5 0 2.75 2.75 0 00-5.5 0z"
        }
        fill={"currentColor"}
      ></path>

      <defs>
        <linearGradient
          id={"HaERraZ6S8Zua"}
          x1={"15.713"}
          y1={"-19.82"}
          x2={"27.29"}
          y2={"31.522"}
          gradientUnits={"userSpaceOnUse"}
        >
          <stop stopColor={"#fff"}></stop>

          <stop offset={"1"} stopColor={"#fff"} stopOpacity={"0"}></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

export default InstagramSvgIcon;
/* prettier-ignore-end */
