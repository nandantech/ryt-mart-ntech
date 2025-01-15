import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import Card from "@mui/material/Card";

const CardSkeleton = () => {
  return (
    <Card sx={{ minWidth: 300, margin: "10px" }}>
      <Skeleton variant="rectangular" height={140} />
      <Skeleton
        variant="text"
        sx={{ fontSize: "1.6rem", width: "80px", margin: "8px 0 5px 10px" }}
      />
      <Skeleton
        variant="text"
        sx={{ fontSize: "1rem", margin: "0px 10px 1px 10px" }}
      />
      <Skeleton
        variant="text"
        sx={{ fontSize: "1rem", width: "50px", margin: "0px 0 10px 10px" }}
      />
      <Skeleton
        variant="rounded"
        height={60}
        width={120}
        sx={{ margin: "20px 10px" }}
      />
    </Card>
  );
};

export default CardSkeleton;
