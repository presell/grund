/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GelisleepFreeShippingSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GelisleepFreeShippingSvgIcon(
  props: GelisleepFreeShippingSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 216 216"}
      data-name={"Layer 1"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M116.64 199.55a2.94 2.94 0 00.86-.3c.29-.14.58-.3.86-.47l67.54-38.47a28.06 28.06 0 009.19-7.9q3.15-4.44 3.15-13.84l1-67.13c0-2.64.11-6-.35-7.74l-82.26 47.35zm-4.31 1.07v-89.57L26.11 59.44c-1 1.59-2.89 6.64-2.89 9.29v69.84q0 9.41 3.19 13.84a28.9 28.9 0 009.14 7.9l67.63 38.47.82.47c6.21 1.75 8.05 1.31 8.33 1.37zm2-92.92l38.24-22.41-86.65-52.13-31.66 18A22.88 22.88 0 0028.48 56zm45.79-26.6L197 60c-.95-2.29-2.35-3.62-9.75-8.83l-60.86-34.66a31.13 31.13 0 00-15.62-4.66 31.23 31.23 0 00-15.7 4.66L73.12 29.05z"
        }
        fill={"currentColor"}
        data-name={"SVGRepo iconCarrier"}
      ></path>
    </svg>
  );
}

export default GelisleepFreeShippingSvgIcon;
/* prettier-ignore-end */
