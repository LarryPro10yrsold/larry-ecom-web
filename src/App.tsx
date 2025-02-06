import React, { useState } from "react";
import { Box, createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import Header from "./components/Header";
import Banner from "./components/Banner";
import AllProducts from "./components/AllProducts";
function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [numberOfProducts, setNumberOfProducts] = useState(0);

  const onToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleAddToCart = () => {
    setNumberOfProducts(numberOfProducts + 1);
  };

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
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
    </ThemeProvider>
  );
}

export default App;
