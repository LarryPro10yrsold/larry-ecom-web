import { Box, Typography } from "@mui/material";
import Product from "./Product";

function Products() {
  return (
    <Box sx={{ mx: "370px", mt: "32px" }}>
      {" "}
      <Typography fontSize="36px" fontWeight="600">
        Trending Products
      </Typography>{" "}
      <Box sx={{ display: "flex", gap: "18px" }}>
        <Product /> <Product /> <Product /> <Product />
      </Box>{" "}
      <Box sx={{ display: "flex", gap: "18px", mt: "22px" }}>
        <Product /> <Product /> <Product /> <Product />
      </Box>{" "}
      <Box sx={{ display: "flex", gap: "18px", mt: "22px" }}>
        <Product /> <Product /> <Product /> <Product />
      </Box>
    </Box>
  );
}

export default Products;
