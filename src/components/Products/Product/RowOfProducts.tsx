import { Box } from "@mui/material";

import Product from ".";
interface BannerInterface {
  onAddToCart: () => void;
}
function RowOfProducts(props: BannerInterface) {
  const { onAddToCart } = props;
  return (
    <Box sx={{ display: { xs: "block", sm: "flex" }, gap: "18px", my: "16px" }}>
      {" "}
      <Box
        sx={{
          display: { sm: "block", md: "flex", lg: "flex", xl: "flex" },
          gap: "18px",
          my: { sm: "0px", md: "16px" },
          mx: { xs: "0px", sm: "0px", lg: "0px" },
        }}
      >
        <Box sx={{ display: { sm: "flex", md: "flex" }, gap: "18px" }}>
          <Product
            image="src/assets/a.jpeg"
            rates={5}
            name="raging frog"
            originalPrice={50}
            discountPrice={25}
            type="madness"
            onAddToCart={onAddToCart}
          />{" "}
          <Product
            image="src/assets/monke.jpeg"
            rates={5}
            name="legendary turtle"
            originalPrice={50}
            discountPrice={20}
            type="animal"
            onAddToCart={onAddToCart}
          />{" "}
        </Box>{" "}
        <Box sx={{ display: { sm: "flex", md: "flex" }, gap: "18px" }}>
          <Product
            image="src/assets/e.jpeg"
            rates={5}
            name="panda"
            originalPrice={200}
            discountPrice={100}
            type="animal"
            onAddToCart={onAddToCart}
          />{" "}
          <Product
            image="src/assets/t.jpg"
            rates={4.5}
            name="baby car"
            originalPrice={80}
            discountPrice={20}
            type="car"
            onAddToCart={onAddToCart}
          />{" "}
        </Box>
      </Box>{" "}
    </Box>
  );
}

export default RowOfProducts;
