import { Box } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

import Product from ".";

function RowOfProducts() {
  return (
    <Box sx={{ display: { xs: "block", sm: "flex" }, gap: "18px", my: "16px" }}>
      {" "}
      <Box
        sx={{
          display: { sm: "block", md: "flex", lg: "flex", xl: "flex" },
          gap: "18px",
          my: "16px",
        }}
      >
        <Product
          image="src/assets/a.jpeg"
          rates={2}
          name="hello!!"
          originalPrice={200}
          discountPrice={100}
          type="greeting"
        />{" "}
        <Product
          image="src/assets/a.jpeg"
          rates={2}
          name="hello!!"
          originalPrice={200}
          discountPrice={100}
          type="greeting"
        />{" "}
        <Product
          image="src/assets/a.jpeg"
          rates={2}
          name="hello!!"
          originalPrice={200}
          discountPrice={100}
          type="greeting"
        />{" "}
        <Product
          image="src/assets/a.jpeg"
          rates={2}
          name="hello!!"
          originalPrice={1}
          discountPrice={0.5}
          type="greeting"
        />{" "}
      </Box>{" "}
    </Box>
  );
}

export default RowOfProducts;
