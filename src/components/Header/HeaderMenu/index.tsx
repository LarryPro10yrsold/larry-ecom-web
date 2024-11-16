import {
  Box,
  createTheme,
  CssBaseline,
  ThemeProvider,
  Typography,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useState } from "react";

function HeaderMenu() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  // const [background, setBackground] = useState("white");
  // const [textColor, setTextColor] = useState("black");

  const onToggleDarkMode = () => {
    // if dark mode is true
    //      background is black
    //      textColor is white
    // else
    //     background is white
    //     textColor is black

    // You need:
    // state darkMode  => boolean
    // state background => string
    // state textColor => string

    console.log("working");
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: { xs: "5px", sm: "15px", md: "32px" },
        backgroundColor: isDarkMode ? "white" : "black",
        color: isDarkMode ? "black" : "white",
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: "15px", sm: "20px" },
          fontWeight: "500",
          cursor: "pointer",
        }}
      >
        Products
      </Typography>{" "}
      <Typography
        sx={{
          fontSize: { xs: "15px", sm: "20px" },
          fontWeight: "500",
          cursor: "pointer",
        }}
      >
        Categories
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          opacity: isDarkMode ? "0.5" : "white",
          justifyContent: "center",
          backgroundColor: isDarkMode ? "white" : "black",
        }}
      >
        {" "}
        <PersonIcon style={{ fontSize: "30px" }} />
        <Typography
          sx={{
            fontSize: { xs: "15px", sm: "25px" },
            fontWeight: "500",
            cursor: "pointer",
          }}
        >
          Login
        </Typography>{" "}
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "28px",
          position: "relative",
          backgroundColor: isDarkMode ? "white" : "black",
        }}
      >
        {" "}
        <ShoppingCartIcon
          style={{
            fontSize: "30px",
            opacity: isDarkMode ? "0.5" : "1",
            color: isDarkMode ? "black" : "white",
            cursor: "pointer",
          }}
        />{" "}
        <Box
          sx={{
            backgroundColor: "rgb(220 38 38 )",
            width: "25px",
            height: "25px",
            borderRadius: "100%",
            position: "absolute",
            bottom: "16px",
            left: "10px",
            color: "white",
            fontFamily: "sans-serif",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          0
        </Box>
      </Box>
      <Box onClick={() => onToggleDarkMode()}>
        <DarkModeIcon
          style={{
            fontSize: "30px",
            color: isDarkMode ? "black" : "white",
            cursor: "pointer",
          }}
        />{" "}
      </Box>
    </Box>
  );
}

export default HeaderMenu;
