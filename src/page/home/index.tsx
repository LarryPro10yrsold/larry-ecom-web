import { Box } from "@mui/material";
import AllProducts from "../../components/AllProducts";
import Banner from "../../components/Banner";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import axios from "axios";

// Define the Product interface if it's not already defined elsewhere
interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

interface HomeInterface {
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  numberOfProducts: number;
  handleAddToCart: () => void;
}

function Home(props: HomeInterface) {
  const { isDarkMode, onToggleDarkMode, numberOfProducts, handleAddToCart } =
    props;
  const [similarProducts, setSimilarProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products?limit=24`).then((res) => {
      setSimilarProducts(res.data.products);
    });
  }, []);

  return (
    <Box
      sx={{
        margin: "0px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: { sm: "100%" },
      }}
    >
      <Header
        isDarkMode={isDarkMode}
        onToggleDarkMode={onToggleDarkMode}
        numberOfProducts={numberOfProducts}
      />

      <Banner isDarkMode={isDarkMode} />

      <AllProducts
        isDarkMode={isDarkMode}
        onAddToCart={handleAddToCart}
        products={similarProducts}
      />
    </Box>
  );
}

export default Home;
