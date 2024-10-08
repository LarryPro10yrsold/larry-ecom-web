import { Box, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DarkModeIcon from "@mui/icons-material/DarkMode";

function Header() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: { sm: "10px", md: "32px", lg: "32px", xl: "32px" },
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: "10px", sm: "20px" },
          lineHeight: "28px",
          fontWeight: "500",
          cursor: "pointer",
        }}
      >
        Products
      </Typography>{" "}
      <Typography
        sx={{
          fontSize: "20px",
          lineHeight: "28px",
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
        {" "}
        <Box>
          {" "}
          <PersonIcon style={{ fontSize: 35, color: "black" }} />
        </Box>
        <Typography
          sx={{
            fontSize: "25px",
            lineHeight: "36px",
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
        }}
      >
        {" "}
        <ShoppingCartIcon
          style={{ fontSize: 35, opacity: "0.5", cursor: "pointer" }}
        />{" "}
        <Box
          sx={{
            backgroundColor: "rgb(220 38 38 )",
            width: "25px",
            height: "25px",
            borderRadius: "100%",
            position: "absolute",
            bottom: "22px",
            left: "17px",
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
      <DarkModeIcon
        style={{ fontSize: 35, color: "black", cursor: "pointer" }}
      />{" "}
    </Box>
  );
}

export default Header;
