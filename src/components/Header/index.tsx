import { Box, Input, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import HeaderMenu from "./HeaderMenu";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

interface HeaderInterface {
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  numberOfProducts: any;
}

function Header(props: HeaderInterface) {
  const { isDarkMode, onToggleDarkMode, numberOfProducts } = props;

  return (
    <Box
      sx={{
        boxSizing: "border-box",
        display: "flex",
        alignItems: "center",
        maxWidth: "100%",
        justifyContent: { xs: "space-between", sm: "center" },
        py: "16px",
        fontFamily: "Roboto",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        position: "sticky",
        top: "0",

        backgroundColor: isDarkMode ? "rgb(30 41 59)" : "white",
        color: isDarkMode ? "white" : "black",
      }}
    >
      <Box
        sx={{
          width: { md: "97vw", lg: "88vw", xl: "67vw" },
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          pl: { xs: "30px", sm: 0 },
        }}
      >
        {" "}
        <Typography
          sx={{
            fontSize: {
              xs: "25px",
              sm: "32px",
              md: "36px",
              lg: "36px",
              xl: "36px",
            },
            fontWeight: "600",
            mr: { xs: "180px", sm: 0 },
            color: "black",
          }}
        >
          <Link
            to={"http://localhost:5173/"}
            sx={{
              textDecoration: "none",
              color: "inherit",
              cursor: "pointer",
              // Add other Material UI styles here
            }}
          >
            Shopify
          </Link>{" "}
        </Typography>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            mx: { sm: "20px", md: 0 },
          }}
        >
          <Input
            placeholder="Search for a product..."
            sx={{
              color: isDarkMode ? "white" : "black",
              border: "2px solid rgb(59 130 246)",
              width: { sm: "150px", md: "285px", lg: "400px", xl: "400px" },
              px: "12px",
              py: "4px",
              "&.MuiInputBase-root:before": {
                borderBottom: "none",
              },
              "&.MuiInputBase-root:after": {
                borderBottom: "none",
              },
              backgroundColor: isDarkMode ? "rgb(30 41 59)" : "white",
            }}
          />
          <Box
            sx={{
              backgroundColor: "rgb(59 130 246)",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "55px",
            }}
          >
            <SearchIcon style={{ fontSize: 40, color: "white" }} />
          </Box>
        </Box>
        <MenuIcon
          sx={{
            display: { xs: "block", sm: "none" },
          }}
        />
        <Box sx={{ display: "flex", ml: { xs: "10px", sm: 0 } }}>
          <HeaderMenu
            isDarkMode={isDarkMode}
            onToggleDarkMode={onToggleDarkMode}
            numberOfProducts={numberOfProducts}
          />
        </Box>
      </Box>{" "}
    </Box>
  );
}

export default Header;
