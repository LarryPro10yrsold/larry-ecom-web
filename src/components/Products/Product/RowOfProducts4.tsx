import { Box } from "@mui/material";
import Product from ".";

interface RowOfProductsInterface {
  onAddToCart: () => void;
}

const products = [
  {
    image: "src/assets/walterdawg.webp",
    rates: 5,
    name: "walter dog",
    originalPrice: 50,
    discountPrice: 20,
    type: "dog",
  },
  {
    image: "src/assets/walter.webp",
    rates: 5,
    name: "walter white",
    originalPrice: 60,
    discountPrice: 30,
    type: "human",
  },
];

const products2 = [
  {
    image: "src/assets/mrbeast.jpg",
    rates: 5,
    name: "mrbeast",
    originalPrice: 250,
    discountPrice: 150,
    type: "happy human",
  },
  {
    image: "src/assets/rock.jpg",
    rates: 5,
    name: "pancake man",
    originalPrice: 100,
    discountPrice: 20,
    type: "hungry human",
  },
];

function RowOfProducts4({ onAddToCart }: RowOfProductsInterface) {
  return (
    <Box
      sx={{
        display: { sm: "block", md: "flex", lg: "flex", xl: "flex" },
        gap: "18px",
        my: { sm: "0px", md: "16px" },
        mx: { md: "0px", lg: "0px" },
      }}
    >
      {/* First Row of Products */}
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
            onAddToCart={onAddToCart}
          />
        ))}
      </Box>

      {/* Second Row of Products */}
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
            onAddToCart={onAddToCart}
          />
        ))}
      </Box>
    </Box>
  );
}

export default RowOfProducts4;
