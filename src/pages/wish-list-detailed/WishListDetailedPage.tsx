import type { FC } from "react";
import { useParams } from "react-router-dom";
import { Page } from "@/components/page";
import { WishListDetailed } from "@/modules/wish-list-detailed";

type WishListDetailedPageParams = "wishListId";

export const WishListDetailedPage: FC = () => {
  const { wishListId: wishListIdParam } = useParams<WishListDetailedPageParams>();
  const wishListId = Number(wishListIdParam);

  return (
    <Page>
      <WishListDetailed wishListId={wishListId} />
    </Page>
  );
};
