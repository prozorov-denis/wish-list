import type { FC } from "react";
import { WishListCard } from "@/components/wish-list-card";
import type { WishList } from "../types";
import { Link } from "react-router-dom";

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
        <Link key={id} to={`/wish-list/${id}`}>
          <WishListCard title={title} description={description} />
        </Link>
      ))}
    </>
  );
};
