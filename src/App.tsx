import { Box, Typography } from "@mui/material";
import Header from "./components/Header";
import Banner from "./components/Banner";
import AdditionalOptions from "./components/AdditionalOptions";
import Products from "./components/Products";
import Offer from "./components/Offer";
import RowOfProducts4 from "./components/Products/Product/RowOfProducts4";
import RowOfProducts3 from "./components/Products/Product/RowOfProducts3";
import CreditBanner from "./components/CreditBanner";

function App() {
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
      <Header />
      <Banner />
      <AdditionalOptions />
      <Box
        sx={{
          mx: { xs: "40px", sm: "0px", md: "0px", lg: "20px", xl: "370px" },
          mt: "32px",
        }}
      >
        <Products />
      </Box>
      <Offer />{" "}
      <Box
        sx={{
          mx: { xs: "40px", sm: "80px", md: "15px", lg: "20px", xl: "370px" },
          mt: "32px",
        }}
      >
        <Typography fontSize="36px" fontWeight="600">
          New Arrirvals
        </Typography>{" "}
        <RowOfProducts3 /> <RowOfProducts4 />
      </Box>
      <CreditBanner />
    </Box>
  );
}

export default App;
