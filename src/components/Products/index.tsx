import { Box, Typography } from "@mui/material";
import RowOfProducts from "./Product/RowOfProducts";
import RowOfProducts2 from "./Product/RowOfProducts2";

interface BannerInterface {
  isDarkMode: boolean;
  onAddToCart: () => void;
}

function Products(props: BannerInterface) {
  const { onAddToCart } = props;
  return (
    <Box
      sx={{
        mx: { sm: "80px", md: "15px", lg: "20px", xl: "0px" },
        mt: "32px",
      }}
    >
      {" "}
      <Typography
        fontSize="36px"
        fontWeight="600"
        sx={{ ml: { xs: "15px", sm: 0 } }}
      >
        Trending Products
      </Typography>{" "}
      <RowOfProducts />
      <RowOfProducts2 />
    </Box>
  );
}

export default Products;
