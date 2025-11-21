/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ApprovedHighlightSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ApprovedHighlightSvgIcon(props: ApprovedHighlightSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      xmlnsXlink={"http://www.w3.org/1999/xlink"}
      fill={"none"}
      viewBox={"0 0 267 9"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g clipPath={"url(#a)"}>
        <mask
          id={"b"}
          width={"267"}
          height={"9"}
          x={"0"}
          y={"0"}
          maskUnits={"userSpaceOnUse"}
          style={{
            maskType: 'luminance"'
          }}
        >
          <path fill={"#fff"} d={"M267 0H0v9h267z"}></path>
        </mask>

        <g mask={"url(#b)"}>
          <path
            fill={"#002868"}
            d={
              "M0 8.213c33.125-1.87 66.25-5.78 132.5-7.48s100.7 0 132.5.68c6.36.136-5.035 1.938-5.3 2.04"
            }
          ></path>
        </g>
      </g>

      <defs>
        <clipPath id={"a"}>
          <path fill={"#fff"} d={"M0 0h267v9H0z"}></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default ApprovedHighlightSvgIcon;
/* prettier-ignore-end */
