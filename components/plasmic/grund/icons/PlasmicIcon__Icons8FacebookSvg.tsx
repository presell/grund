/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icons8FacebookSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icons8FacebookSvgIcon(props: Icons8FacebookSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 50 50"}
      height={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {})
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M41 4H9C6.24 4 4 6.24 4 9v32c0 2.76 2.24 5 5 5h32c2.76 0 5-2.24 5-5V9c0-2.76-2.24-5-5-5zm-4 15h-2c-2.14 0-3 .5-3 2v3h5l-1 5h-4v15h-5V29h-4v-5h4v-3c0-4 2-7 6-7 2.9 0 4 1 4 1v4z"
        }
      ></path>
    </svg>
  );
}

export default Icons8FacebookSvgIcon;
/* prettier-ignore-end */
