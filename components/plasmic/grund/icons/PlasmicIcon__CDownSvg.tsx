/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CDownSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CDownSvgIcon(props: CDownSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 298 169"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M277.3 168.652H20c-17.8 0-26.7-21.5-14.1-34.1l128.6-128.7c7.8-7.8 20.5-7.8 28.3 0l128.6 128.7c12.6 12.6 3.7 34.1-14.1 34.1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CDownSvgIcon;
/* prettier-ignore-end */
