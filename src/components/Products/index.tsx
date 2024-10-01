import { Box, Typography } from "@mui/material";
import RowOfProducts from "./Product/RowOfProducts";
import RowOfProducts2 from "./Product/RowOfProducts2";

function Products() {
  return (
    <Box
      sx={{
        mx: { sm: "80px", md: "15px", lg: "20px", xl: "0px" },
        mt: "32px",
      }}
    >
      {" "}
      <Typography fontSize="36px" fontWeight="600">
        Trending Products
      </Typography>{" "}
      <RowOfProducts /> <RowOfProducts2 />
    </Box>
  );
}

export default Products;
