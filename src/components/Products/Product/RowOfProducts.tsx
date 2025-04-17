import { Box } from "@mui/material";
import Product from ".";
import { useEffect, useState } from "react";
import axios from "axios";

const products = [
  {
    id: 1,
    image: "src/assets/a.jpeg",
    rates: 5,
    name: "raging frog",
    originalPrice: 50,
    discountPrice: 25,
    type: "madness",
  },
  {
    id: 2,
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
    id: 3,
    image: "src/assets/e.jpeg",
    rates: 5,
    name: "panda",
    originalPrice: 200,
    discountPrice: 100,
    type: "animal",
  },
  {
    id: 4,
    image: "src/assets/baby car.jpeg",
    rates: 4.5,
    name: "baby car",
    originalPrice: 80,
    discountPrice: 20,
    type: "car",
  },
];

function RowOfProducts() {
  const [similarProducts, setSimilarProducts] = useState([]);
  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/category/beauty`)
      .then((res: { data: any }) => {
        setSimilarProducts(res.data.products);
      });
  }, []);
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
              key={data.id}
              image={data.image}
              rates={data.rates}
              name={data.name}
              originalPrice={data.originalPrice}
              discountPrice={0}
              type={data.type}
              id={data.id}
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
              key={data.id}
              image={data.image}
              rates={data.rates}
              name={data.name}
              originalPrice={data.originalPrice}
              discountPrice={0}
              type={data.type}
              id={data.id}
            />
          );
        })}{" "}
      </Box>
    </Box>
  );
}

export default RowOfProducts;
