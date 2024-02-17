import type { FC } from "react";
import { WishListCard } from "@/components/wish-list-card";

interface WishList {
  id: number;
  title: string;
  description: string;
}

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
