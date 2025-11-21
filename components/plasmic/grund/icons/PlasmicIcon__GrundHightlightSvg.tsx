/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GrundHightlightSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GrundHightlightSvgIcon(props: GrundHightlightSvgIconProps) {
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
          id={"c"}
          width={"267"}
          height={"9"}
          x={"0"}
          y={"0"}
          maskUnits={"userSpaceOnUse"}
          style={{
            maskType: 'luminance"'
          }}
        >
          <use xlinkHref={"#b"}></use>
        </mask>

        <g mask={"url(#c)"}>
          <mask
            id={"d"}
            width={"267"}
            height={"9"}
            x={"0"}
            y={"0"}
            maskUnits={"userSpaceOnUse"}
            style={{
              maskType: 'luminance"'
            }}
          >
            <use xlinkHref={"#b"}></use>
          </mask>

          <g mask={"url(#d)"}>
            <mask
              id={"e"}
              width={"267"}
              height={"9"}
              x={"0"}
              y={"0"}
              maskUnits={"userSpaceOnUse"}
              style={{
                maskType: 'luminance"'
              }}
            >
              <use xlinkHref={"#b"}></use>
            </mask>

            <g mask={"url(#e)"}>
              <path
                fill={"#1C3863"}
                d={
                  "M0 8.213c33.125-1.87 66.25-5.78 132.5-7.48s100.7 0 132.5.68c6.36.136-5.035 1.938-5.3 2.04"
                }
              ></path>
            </g>
          </g>
        </g>
      </g>

      <defs>
        <clipPath id={"a"}>
          <path fill={"#fff"} d={"M0 0h267v9H0z"}></path>
        </clipPath>

        <path id={"b"} fill={"#fff"} d={"M267 0H0v9h267z"}></path>
      </defs>
    </svg>
  );
}

export default GrundHightlightSvgIcon;
/* prettier-ignore-end */
