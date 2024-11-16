import { Box, Typography } from "@mui/material";
import React from "react";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

import Product from ".";

function RowOfProducts4() {
  return (
    <Box sx={{ display: { xs: "block", sm: "flex" }, gap: "18px", my: "16px" }}>
      {" "}
      <Box
        sx={{
          display: { sm: "block", md: "flex", lg: "flex", xl: "flex" },
          gap: "18px",
          my: "16px",
        }}
      >
        <Product
          image="src/assets/a.jpeg"
          rates={2}
          name="hello!!"
          originalPrice={200}
          discountPrice={100}
          type="greeting"
        />{" "}
        <Product
          image="src/assets/a.jpeg"
          rates={2}
          name="hello!!"
          originalPrice={200}
          discountPrice={100}
          type="greeting"
        />{" "}
        <Product
          image="src/assets/a.jpeg"
          rates={2}
          name="hello!!"
          originalPrice={200}
          discountPrice={100}
          type="greeting"
        />{" "}
        <Product
          image="src/assets/a.jpeg"
          rates={2}
          name="hello!!"
          originalPrice={200}
          discountPrice={100}
          type="greeting"
        />{" "}
      </Box>
    </Box>
  );
}

export default RowOfProducts4;
