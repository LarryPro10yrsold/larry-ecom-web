import { StrictMode, useEffect, useState } from "react";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Home from "./page/home";
import ProductDetail from "./page/product";
import axios from "axios";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [numberOfProducts, setNumberOfProducts] = useState(0);
  const [similarProducts, setSimilarProducts] = useState([]);
  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products?limit=24`)
      .then((res: { data: any }) => {
        setSimilarProducts(res.data.products);
        console.log("app.tsx`");
      });
  }, []);

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
    <StrictMode>
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
          <Route path="/product/:productId" element={<ProductDetail />} />
        </Routes>
      </ThemeProvider>
    </StrictMode>
  );
}

export default App;
