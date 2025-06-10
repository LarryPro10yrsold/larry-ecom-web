import { Box, Typography } from "@mui/material";
import Offer from "../Offer";
import RowOfProducts3 from "../Products/Product/RowOfProducts3";
import RowOfProducts4 from "../Products/Product/RowOfProducts4";
import AdditionalOptions from "../AdditionalOptions";
import CreditBanner from "../CreditBanner";
import RowOfProducts2 from "../Products/Product/RowOfProducts2";
import RowOfProducts from "../Products/Product/RowOfProducts";

interface AllProductsProps {
  isDarkMode: boolean;
  onAddToCart: () => void;
  products: ProductInterface[];
}
interface ProductInterface {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  images: string[];
}
function AllProducts(props: AllProductsProps) {
  const { isDarkMode, onAddToCart, products } = props;

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
        <Typography
          fontSize="36px"
          fontWeight="600"
          sx={{ ml: { xs: "15px", sm: 0 } }}
        >
          Trending Products
        </Typography>{" "}
        <RowOfProducts
          products={products}
          isDarkMode={isDarkMode}
          onAddToCart={onAddToCart}
        />
        <RowOfProducts2
          products={products}
          isDarkMode={isDarkMode}
          onAddToCart={onAddToCart}
        />
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
        <RowOfProducts3
          products={products}
          isDarkMode={isDarkMode}
          onAddToCart={onAddToCart}
        />
        <RowOfProducts4
          products={products}
          isDarkMode={isDarkMode}
          onAddToCart={onAddToCart}
        />
      </Box>{" "}
      <CreditBanner />
    </Box>
  );
}

export default AllProducts;
