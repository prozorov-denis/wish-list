import type { FC } from "react";
import { WishListCard } from "@/components/wish-list-card";
import type { WishList } from "../types";

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
      <WishListCard title={wishList.title} description={wishList.description} />
    </>
  );
};
