/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Pinterest113SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Pinterest113SvgIcon(props: Pinterest113SvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      xmlSpace={"preserve"}
      viewBox={"0 0 256 256"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M72.595 254.307c9.596-8.017 25.13-34.44 28.631-47.905 1.886-7.253 9.658-36.85 9.658-36.85 5.055 9.638 19.822 17.798 35.53 17.798 46.753 0 80.439-42.996 80.439-96.417-.003-51.21-41.793-89.526-95.568-89.526-66.892 0-102.422 44.906-102.422 93.803 0 22.736 12.103 51.04 31.466 60.053 2.937 1.365 4.508.764 5.185-2.074.514-2.156 3.127-12.682 4.305-17.58.376-1.565.19-2.91-1.076-4.445-6.404-7.767-11.535-22.053-11.535-35.375 0-34.19 25.888-67.272 69.994-67.272 38.081 0 64.748 25.95 64.748 63.065 0 41.934-21.176 70.984-48.728 70.984-15.216 0-26.608-12.583-22.955-28.01 4.37-18.428 12.839-38.312 12.839-51.612 0-11.906-6.39-21.836-19.614-21.836-15.556 0-28.05 16.093-28.05 37.645 0 13.73 4.637 23.014 4.637 23.014S74.717 186.72 71.901 198.82c-3.116 13.387-1.894 32.248-.537 44.51l1.231 10.977z"
        }
        fill={"currentColor"}
        fillRule={"nonzero"}
        opacity={"1"}
      ></path>
    </svg>
  );
}

export default Pinterest113SvgIcon;
/* prettier-ignore-end */
