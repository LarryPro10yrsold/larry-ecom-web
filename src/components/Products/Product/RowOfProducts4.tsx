import { Box } from "@mui/material";

import Product from ".";
interface RowOfProductsInterface {
  onAddToCart: () => void;
}
function RowOfProducts4(props: RowOfProductsInterface) {
  const { onAddToCart } = props;
  return (
    <Box sx={{ display: { xs: "block", sm: "flex" }, gap: "18px", my: "16px" }}>
      {" "}
      <Box
        sx={{
          display: { sm: "block", md: "flex", lg: "flex", xl: "flex" },
          gap: "18px",
          my: { sm: "0px", md: "16px" },
          mx: { md: "19px", lg: "0px" },
        }}
      >
        <Box sx={{ display: { sm: "flex", md: "flex" }, gap: "18px" }}>
          <Product
            image="src/assets/walterdawg.webp"
            rates={5}
            name="walter dog"
            originalPrice={50}
            discountPrice={20}
            type="dog"
            onAddToCart={onAddToCart}
          />{" "}
          <Product
            image="src/assets/walter.webp"
            rates={5}
            name="walter white"
            originalPrice={60}
            discountPrice={30}
            type="human"
            onAddToCart={onAddToCart}
          />{" "}
        </Box>{" "}
        <Box sx={{ display: { sm: "flex", md: "flex" }, gap: "18px" }}>
          <Product
            image="src/assets/mrbeast.jpg"
            rates={5}
            name="mrbeast"
            originalPrice={250}
            discountPrice={150}
            type="happy human"
            onAddToCart={onAddToCart}
          />{" "}
          <Product
            image="src/assets/rock.jpg"
            rates={5}
            name="pancake man"
            originalPrice={100}
            discountPrice={20}
            type="hungry human"
            onAddToCart={onAddToCart}
          />{" "}
        </Box>
      </Box>{" "}
    </Box>
  );
}

export default RowOfProducts4;
