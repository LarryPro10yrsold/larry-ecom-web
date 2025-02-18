import { Box } from "@mui/material";
import Product from ".";

const products = [
  {
    image: "src/assets/doge.jpeg",
    rates: 5,
    name: "doge",
    originalPrice: 80,
    discountPrice: 50,
    type: "dog",
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
    image: "src/assets/water.webp",
    rates: 5,
    name: "water",
    originalPrice: 5,
    discountPrice: 3,
    type: "refreshment",
  },
  {
    image: "src/assets/chill.jpg",
    rates: 5,
    name: "chill dog",
    originalPrice: 50,
    discountPrice: 30,
    type: "animal",
  },
];

function RowOfProducts3() {
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
        {products.map((data, index) => (
          <Product
            key={index}
            image={data.image}
            rates={data.rates}
            name={data.name}
            originalPrice={data.originalPrice}
            discountPrice={data.discountPrice}
            type={data.type}
          />
        ))}
      </Box>

      <Box sx={{ display: { sm: "flex", md: "flex" }, gap: "18px" }}>
        {products2.map((data, index) => (
          <Product
            key={index}
            image={data.image}
            rates={data.rates}
            name={data.name}
            originalPrice={data.originalPrice}
            discountPrice={data.discountPrice}
            type={data.type}
          />
        ))}
      </Box>
    </Box>
  );
}

export default RowOfProducts3;
