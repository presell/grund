/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DownArrowSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DownArrowSvgIcon(props: DownArrowSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 222 448"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M150.998 313.94V12c0-6.628-5.373-12-12-12h-56c-6.627 0-12 5.372-12 12v301.94H24.94c-21.382 0-32.09 25.851-16.97 40.971l86.058 86.059c9.373 9.373 24.569 9.373 33.941 0l86.059-86.059c15.119-15.119 4.411-40.971-16.971-40.971h-46.058z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default DownArrowSvgIcon;
/* prettier-ignore-end */
