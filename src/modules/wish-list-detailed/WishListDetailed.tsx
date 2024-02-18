import type { FC } from "react";
import type { WishList } from "../types";
import { Header } from "./Header";
import { Typography } from "@mui/material";

interface WishListDetailedProps {
  wishListId: number;
}

export const WishListDetailed: FC<WishListDetailedProps> = ({ wishListId }) => {
  const wishList: WishList = {
    id: wishListId,
    title: wishListId.toString(),
    description: `Wish list #${wishListId}`,
  };

  return (
    <>
      <Header title={wishList.title} />
      <Typography>{wishList.description}</Typography>
    </>
  );
};
