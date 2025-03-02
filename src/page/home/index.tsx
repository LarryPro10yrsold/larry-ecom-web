import { Box } from "@mui/material";
import AllProducts from "../../components/AllProducts";
import Banner from "../../components/Banner";
import Header from "../../components/Header";

interface HomeInterface {
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  numberOfProducts: number;
  handleAddToCart: () => void;
}

function Home(props: HomeInterface) {
  const { isDarkMode, onToggleDarkMode, numberOfProducts, handleAddToCart } =
    props;
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
      <AllProducts isDarkMode={isDarkMode} onAddToCart={handleAddToCart} />
    </Box>
  );
}

export default Home;
