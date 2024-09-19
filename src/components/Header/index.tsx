import { Box, createTheme, Input, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import HeaderMenu from "./HeaderMenu";

function Header() {
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
  });
  return (
    <Box
      sx={{
        boxSizing: "border-box",
        display: "flex",
        alignItems: "center",
        maxWidth: "100%",
        justifyContent: "center",
        py: "16px",
        fontFamily: "Roboto",
        boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
        position: "sticky",
        top: "0",
        backgroundColor: "white",
      }}
    >
      <Box
        sx={{
          width: { md: "97vw", lg: "88vw", xl: "67vw" },
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "0px", sm: "", md: "36px", lg: "36px", xl: "36px" },
            // lineHeight: "36px",
            fontWeight: "500",
          }}
        >
          Shopify
        </Typography>
        <Box sx={{ display: "flex" }}>
          <Input
            placeholder="Search for a product..."
            sx={{
              border: "2px solid rgb(59 130 246)",
              width: { md: "285px", lg: "400px", xl: "400px" },
              px: "12px",
              py: "4px",
              "&.MuiInputBase-root:before": {
                borderBottom: "none",
              },
              "&.MuiInputBase-root:after": {
                borderBottom: "none",
              },
            }}
          ></Input>
          <Box
            sx={{
              backgroundColor: " rgb(59 130 246)",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "55px",
            }}
          >
            <SearchIcon style={{ fontSize: 40, color: "white" }} />
          </Box>
        </Box>{" "}
        <HeaderMenu />
      </Box>
    </Box>
  );
}

export default Header;
