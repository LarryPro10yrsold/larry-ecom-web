import { Box } from "@mui/material";

import Product from ".";
interface BannerInterface {
  onAddToCart: () => void;
}
function RowOfProducts3(props: BannerInterface) {
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
            image="src/assets/doge.jpeg"
            rates={5}
            name="doge"
            originalPrice={80}
            discountPrice={50}
            type="dog"
            onAddToCart={onAddToCart}
          />{" "}
          <Product
            image="src/assets/minions.jpg"
            rates={5}
            name="minions"
            originalPrice={75}
            discountPrice={30}
            type="happy"
            onAddToCart={onAddToCart}
          />{" "}
        </Box>{" "}
        <Box sx={{ display: { sm: "flex", md: "flex" }, gap: "18px" }}>
          <Product
            image="src/assets/gru.jpeg"
            rates={4.5}
            name="gru"
            originalPrice={200}
            discountPrice={100}
            type="happy"
            onAddToCart={onAddToCart}
          />{" "}
          <Product
            image="src/assets/sonik.jpeg"
            rates={3.5}
            name="sonik"
            originalPrice={150}
            discountPrice={30}
            type="animal"
            onAddToCart={onAddToCart}
          />{" "}
        </Box>
      </Box>{" "}
    </Box>
  );
}

export default RowOfProducts3;
