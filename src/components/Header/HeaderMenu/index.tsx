import React from "react";
import { Box, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DarkModeIcon from "@mui/icons-material/DarkMode";

function HeaderMenu({ isDarkMode, onToggleDarkMode }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: { xs: "5px", sm: "15px", md: "32px" },
        backgroundColor: isDarkMode ? "black" : "white",
        color: isDarkMode ? "white" : "black",
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
      </Typography>
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
          opacity: "0.5",
          justifyContent: "center",
        }}
      >
        <PersonIcon style={{ fontSize: "30px" }} />
        <Typography
          sx={{
            fontSize: { xs: "15px", sm: "25px" },
            fontWeight: "500",
            cursor: "pointer",
          }}
        >
          Login
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "28px",
          position: "relative",
        }}
      >
        <ShoppingCartIcon
          style={{
            fontSize: "30px",
            opacity: "0.5",
            cursor: "pointer",
            color: isDarkMode ? "white" : "black",
          }}
        />
        <Box
          sx={{
            backgroundColor: "rgb(220 38 38)",
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
      <Box onClick={onToggleDarkMode}>
        <DarkModeIcon
          style={{
            fontSize: "30px",
            color: isDarkMode ? "white" : "black",
            cursor: "pointer",
          }}
        />
      </Box>
    </Box>
  );
}

export default HeaderMenu;
