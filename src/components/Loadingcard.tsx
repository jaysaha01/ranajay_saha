import React from "react";
import Skeleton from "@mui/material/Skeleton";

const loadingcard = () => {
  return (
    <div>
      <div className="carding is-loading">
        <div className="imagee">
          <Skeleton variant="rectangular" className="firstscal" />
        </div>
        <div className="contentt">
          <Skeleton animation="wave" height={20} width="100%" />
          <Skeleton animation="wave" height={100} width="100%" />
        </div>
      </div>
    </div>
  );
};

export default loadingcard;
