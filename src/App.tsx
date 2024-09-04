import { Box, Typography } from "@mui/material";
import Header from "./components/Header";
import Banner from "./components/Banner";
import AdditionalOptions from "./components/AdditionalOptions/MiniOptions";
import Products from "./components/Products";

function App() {
  return (
    <Box sx={{ margin: "0px" }}>
      <Header />
      <Banner />
      <AdditionalOptions />
      <Products />
    </Box>
  );
}

export default App;
