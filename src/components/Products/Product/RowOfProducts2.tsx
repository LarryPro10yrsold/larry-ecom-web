import { Box } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

import Product from ".";

interface BannerInterface {
  onAddToCart: () => void;
}

function RowOfProducts2(props: BannerInterface) {
  const { onAddToCart } = props;
  return (
    <Box sx={{ display: { xs: "block", sm: "flex" }, gap: "18px", my: "16px" }}>
      {" "}
      <Box
        sx={{
          display: { sm: "block", md: "flex", lg: "flex", xl: "flex" },
          gap: "18px",
          my: { sm: "0px", md: "16px" },
          mx: { md: "0px", lg: "0px" },
        }}
      >
        <Box sx={{ display: { sm: "flex", md: "flex" }, gap: "18px" }}>
          <Product
            image="src/assets/q.webp"
            rates={5}
            name="mac display"
            originalPrice={10000}
            discountPrice={5000}
            type="device"
            onAddToCart={onAddToCart}
          />{" "}
          <Product
            image="src/assets/w.jpg"
            rates={4.5}
            name="ipad"
            originalPrice={2000}
            discountPrice={1000}
            type="device"
            onAddToCart={onAddToCart}
          />{" "}
        </Box>{" "}
        <Box sx={{ display: { sm: "flex", md: "flex" }, gap: "18px" }}>
          <Product
            image="src/assets/water.webp"
            rates={5}
            name="water"
            originalPrice={5}
            discountPrice={3}
            type="refreshment"
            onAddToCart={onAddToCart}
          />{" "}
          <Product
            image="src/assets/chill.jpg"
            rates={5}
            name="chill dog"
            originalPrice={50}
            discountPrice={30}
            type="animal"
            onAddToCart={onAddToCart}
          />{" "}
        </Box>
      </Box>{" "}
    </Box>
  );
}

export default RowOfProducts2;
