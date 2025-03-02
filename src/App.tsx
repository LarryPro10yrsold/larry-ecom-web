import React, { useState } from "react";
import { Box, createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Home from "./page/home";
import Product from "./page/product";

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
      <Routes>
        <Route
          path="/"
          element={
            <Home
              isDarkMode={isDarkMode}
              onToggleDarkMode={onToggleDarkMode}
              numberOfProducts={numberOfProducts}
              handleAddToCart={handleAddToCart}
            />
          }
        />
        <Route path="/product" element={<Product />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
