import type { FC } from "react";
import { WishListCard } from "@/components/wish-list-card";
import type { WishList } from "../types";

const wishListsArray: WishList[] = [
  {
    id: 1,
    title: "🎂",
    description: "Мирославу 1 годик",
  },
];

export const WishLists: FC = () => {
  return (
    <>
      {wishListsArray.map(({ id, title, description }) => (
        <WishListCard key={id} title={title} description={description} />
      ))}
    </>
  );
};
