import type { FC } from "react";
import { Page } from "@/components/page";
import { WishLists } from "@/modules/wish-lists";

export const HomePage: FC = () => {
  return (
    <Page>
      <WishLists />
    </Page>
  );
};
