import type { FC } from "react";
import classNames from "classnames";
import { Box, type BoxProps } from "@mui/material";
import style from "./style.module.scss";

export const Page: FC<BoxProps> = ({ className, ...props }) => {
  const classNameInner = classNames(className, style.page);
  return <Box className={classNameInner} {...props} />;
};
