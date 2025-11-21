/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CUpSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CUpSvgIcon(props: CUpSvgIconProps) {
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
          "M20.302 0h257.3c17.8 0 26.7 21.5 14.1 34.1l-128.6 128.7c-7.8 7.8-20.5 7.8-28.3 0L6.202 34.1C-6.398 21.5 2.502 0 20.302 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CUpSvgIcon;
/* prettier-ignore-end */
