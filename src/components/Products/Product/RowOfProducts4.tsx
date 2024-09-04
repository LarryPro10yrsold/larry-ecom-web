import { Box, Typography } from "@mui/material";
import React from "react";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

import Product from ".";

function RowOfProducts4() {
  return (
    <Box sx={{ display: "flex", gap: "18px", my: "16px" }}>
      <Product
        image="src/assets/a.jpeg"
        rates={
          <Box sx={{ display: "flex", mx: "28px", color: "#FFC300 " }}>
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarBorderIcon />
          </Box>
        }
      />{" "}
      <Product
        image="src/assets/a.jpeg"
        rates={
          <Box sx={{ display: "flex", mx: "28px", color: "#FFC300 " }}>
            <StarIcon /> <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarBorderIcon />
          </Box>
        }
      />{" "}
      <Product
        image="src/assets/a.jpeg"
        rates={
          <Box sx={{ display: "flex", mx: "28px", color: "#FFC300 " }}>
            <StarIcon />
            <StarIcon /> <StarIcon />
            <StarBorderIcon /> <StarBorderIcon />
          </Box>
        }
      />{" "}
      <Product
        image="src/assets/a.jpeg"
        rates={
          <Box sx={{ display: "flex", mx: "28px", color: "#FFC300 " }}>
            <StarIcon />
            <StarIcon />
            <StarBorderIcon /> <StarBorderIcon /> <StarBorderIcon />{" "}
          </Box>
        }
      />{" "}
    </Box>
  );
}

export default RowOfProducts4;
