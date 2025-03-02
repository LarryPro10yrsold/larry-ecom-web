import { Box, Divider, Typography } from "@mui/material";
import { useState } from "react";
import Header from "../../components/Header";
import Review from "./review";
import Information from "./information";
import RowOfProducts4 from "../../components/Products/Product/RowOfProducts4";
import CreditBanner from "../../components/CreditBanner";

function Product() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [numberOfProducts, setNumberOfProducts] = useState(0);

  const onToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Box>
      <Header
        isDarkMode={isDarkMode}
        onToggleDarkMode={onToggleDarkMode}
        numberOfProducts={numberOfProducts}
      />
      <Box
        sx={{
          display: "flex",
          marginTop: "32px",
          justifyContent: "center",
          fontWeight: "500",
          gap: "30px",
        }}
      >
        <Box sx={{ width: "493px", mt: "100px" }}>
          <img src="src/assets/monke.jpeg" alt="e" style={{ width: "100%" }} />
        </Box>
        <Information />{" "}
        <Box>
          <Typography sx={{ fontWeight: "510", fontSize: "1.7rem" }}>
            Reviews
          </Typography>
          <Review username="username bla bla" />{" "}
          <Review username="username bla bla" />{" "}
          <Review username="username bla bla" />{" "}
          <Review username="username bla bla" />{" "}
          <Review username="username bla bla" />
        </Box>
      </Box>
      <Box
        sx={{ display: "flex", marginTop: "32px", justifyContent: "center" }}
      >
        <Divider sx={{ width: "1569px" }} />
      </Box>{" "}
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ mt: "32px" }}>
          <Typography
            fontSize="36px"
            fontWeight="600"
            sx={{ ml: { xs: "15px", sm: 0 } }}
          >
            New Arrivals
          </Typography>
          <RowOfProducts4
            onAddToCart={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        </Box>
      </Box>{" "}
      <CreditBanner />
    </Box>
  );
}

export default Product;
