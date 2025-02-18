import { Box } from "@mui/material";

import Product from ".";
const products = [
  {
    image: "src/assets/q.webp",
    rates: 5,
    name: "mac display",
    originalPrice: 10000,
    discountPrice: 5000,
    type: "device",
  },
  {
    image: "src/assets/w.jpg",
    rates: 4.5,
    name: "ipad",
    originalPrice: 2000,
    discountPrice: 1000,
    type: "device",
  },
];
const products2 = [
  {
    image2: "src/assets/water.webp",
    rates2: 5,
    name2: "water",
    originalPrice2: 5,
    discountPrice2: 3,
    type2: "refreshment",
  },
  {
    image2: "src/assets/chill.jpg",
    rates2: 5,
    name2: "chill dog",
    originalPrice2: 50,
    discountPrice2: 30,
    type2: "animal",
  },
];

function RowOfProducts2() {
  return (
    <Box
      sx={{
        display: { sm: "block", md: "flex", lg: "flex", xl: "flex" },
        gap: "18px",
        my: { sm: "0px", md: "16px" },
        mx: { md: "0px", lg: "0px" },
      }}
    >
      <Box sx={{ display: { sm: "flex", md: "flex" }, gap: "18px" }}>
        {products.map(function (data) {
          return (
            <Product
              image={data.image}
              rates={data.rates}
              name={data.name}
              originalPrice={data.originalPrice}
              discountPrice={data.discountPrice}
              type={data.type}
            />
          );
        })}{" "}
      </Box>{" "}
      <Box sx={{ display: { sm: "flex", md: "flex" }, gap: "18px" }}>
        {products2.map(function (data) {
          return (
            <Product
              image={data.image2}
              rates={data.rates2}
              name={data.name2}
              originalPrice={data.originalPrice2}
              discountPrice={data.discountPrice2}
              type={data.type2}
            />
          );
        })}{" "}
      </Box>
    </Box>
  );
}

export default RowOfProducts2;
