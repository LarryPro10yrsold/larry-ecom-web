import { Box } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

import Product from ".";

function RowOfProducts3() {
  return (
    <Box sx={{ display: { xs: "block", sm: "flex" }, gap: "18px", my: "16px" }}>
      {" "}
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
        originalPrice={200}
        discountPrice={100}
        type="greeting"
      />{" "}
    </Box>
  );
}

export default RowOfProducts3;
