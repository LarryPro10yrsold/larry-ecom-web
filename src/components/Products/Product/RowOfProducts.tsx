import { Box } from "@mui/material";

import Product from ".";

const products = [
  {
    image: "src/assets/a.jpeg",
    rates: 5,
    name: "raging frog",
    originalPrice: 50,
    discountPrice: 25,
    type: "madness",
  },
  {
    image: "src/assets/monke.jpeg",
    rates: 5,
    name: "legendary turtle",
    originalPrice: 50,
    discountPrice: 20,
    type: "animal",
  },
];
const products2 = [
  {
    image: "src/assets/e.jpeg",
    rates: 5,
    name: "panda",
    originalPrice: 200,
    discountPrice: 100,
    type: "animal",
  },
  {
    image: "src/assets/baby car.jpeg",
    rates: 4.5,
    name: "baby car",
    originalPrice: 80,
    discountPrice: 20,
    type: "car",
  },
];
// // const products = [
//   {
//     image: "src/assets/a.jpeg",
//     rates: 5,
//     name: "raging frog",
//     originalPrice: 50,
//     discountPrice: 25,
//     type: "madness",
//   },
//   {
//     image: "src/assets/monke.jpeg",
//     rates: 5,
//     name: "legendary turtle",
//     originalPrice: 50,
//     discountPrice: 20,
//     type: "animal",
//   },
// ];
// const products2 = [
//   {
//     image: "src/assets/e.jpeg",
//     rates: 5,
//     name: "panda",
//     originalPrice: 200,
//     discountPrice: 100,
//     type: "animal",
//   },
//   {
//     image: "src/assets/baby car.jpeg",
//     rates: 4.5,
//     name: "baby car",
//     originalPrice: 80,
//     discountPrice: 20,
//     type: "car",
//   },
// ];
// Using map() method to convert (or to map) this product list into React component

function RowOfProducts() {
  return (
    <Box sx={{ display: { xs: "block", sm: "flex" }, gap: "18px", my: "16px" }}>
      {" "}
      <Box
        sx={{
          display: { sm: "flex" },
          flexDirection: { sm: "column", md: "row" },
        }}
      >
        {products.map(function (data) {
          return (
            <Product
              image={data.image}
              rates={data.rates}
              name={data.name}
              originalPrice={data.originalPrice}
              discountPrice={0}
              type={data.type}
            />
          );
        })}{" "}
      </Box>
      <Box
        sx={{
          display: { sm: "flex" },
          flexDirection: { sm: "column", md: "row" },
        }}
      >
        {products2.map(function (data) {
          return (
            <Product
              image={data.image}
              rates={data.rates}
              name={data.name}
              originalPrice={data.originalPrice}
              discountPrice={0}
              type={data.type}
            />
          );
        })}{" "}
      </Box>
    </Box>
  );
}

export default RowOfProducts;
