import { ArrowBack } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import type { FC } from "react";
import { Link } from "react-router-dom";
import style from "./style.module.scss";

interface HeaderProps {
  title: string;
}

export const Header: FC<HeaderProps> = ({ title }) => {
  return (
    <Box className={style.header}>
      <Link to="/">
        <IconButton>
          <ArrowBack />
        </IconButton>
      </Link>

      <Typography>{title}</Typography>
    </Box>
  );
};
