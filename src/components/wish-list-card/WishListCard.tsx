import type { FC } from "react";
import { Card, CardContent, Typography } from "@mui/material";

interface WishListCardProps {
  title: string;
  description: string;
}

export const WishListCard: FC<WishListCardProps> = ({ title, description }) => {
  return (
    <Card>
      <CardContent>
        <Typography>{title}</Typography>
        <Typography>{description}</Typography>
      </CardContent>
    </Card>
  );
};
