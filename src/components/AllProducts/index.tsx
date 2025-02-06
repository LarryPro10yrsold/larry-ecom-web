import { Box, Typography } from "@mui/material";
import Products from "../Products";
import Offer from "../Offer";
import RowOfProducts3 from "../Products/Product/RowOfProducts3";
import RowOfProducts4 from "../Products/Product/RowOfProducts4";
import AdditionalOptions from "../AdditionalOptions";
import CreditBanner from "../CreditBanner";

interface BannerInterface {
  isDarkMode: boolean;
  onAddToCart: () => void;
}

function AllProducts(props: BannerInterface) {
  const { isDarkMode, onAddToCart } = props;
  return (
    <Box
      sx={{
        backgroundColor: isDarkMode ? "rgb(30 41 59)" : "white",
        color: isDarkMode ? "white" : "black",
      }}
    >
      {" "}
      <AdditionalOptions isDarkMode={isDarkMode} />{" "}
      <Box
        sx={{
          mx: { xs: "20px", sm: "0px", md: "0px", lg: "20px", xl: "370px" },
          mt: "32px",
        }}
      >
        <Products onAddToCart={onAddToCart} isDarkMode={false} />
      </Box>
      <Offer isDarkMode={isDarkMode} />
      <Box
        sx={{
          mx: { xs: "20px", sm: "80px", md: "15px", lg: "20px", xl: "370px" },
          mt: "32px",
        }}
      >
        <Typography
          fontSize="36px"
          fontWeight="600"
          sx={{ ml: { xs: "15px", sm: 0 } }}
        >
          New Arrivals
        </Typography>
        <RowOfProducts3 onAddToCart={onAddToCart} />
        <RowOfProducts4 onAddToCart={onAddToCart} />
      </Box>{" "}
      <CreditBanner />
    </Box>
  );
}

export default AllProducts;
