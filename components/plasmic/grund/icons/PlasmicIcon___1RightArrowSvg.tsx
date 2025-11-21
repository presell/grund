/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _1RightArrowSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _1RightArrowSvgIcon(props: _1RightArrowSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 448 222"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M313.94 71.002H12c-6.628 0-12 5.373-12 12v56c0 6.627 5.372 12 12 12h301.94v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941L354.911 7.973c-15.119-15.119-40.971-4.411-40.971 16.97v46.059z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _1RightArrowSvgIcon;
/* prettier-ignore-end */
