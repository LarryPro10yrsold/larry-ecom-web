import { Box, createTheme, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DarkModeIcon from "@mui/icons-material/DarkMode";

function HeaderMenu() {
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
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: { xs: "5px", sm: "15px", md: "32px" },
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
          opacity: "0.5",
          justifyContent: "center",
        }}
      >
        {" "}
        <PersonIcon style={{ fontSize: "30px", color: "black" }} />
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
        }}
      >
        {" "}
        <ShoppingCartIcon
          style={{ fontSize: "30px", opacity: "0.5", cursor: "pointer" }}
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
      <DarkModeIcon
        style={{ fontSize: "30px", color: "black", cursor: "pointer" }}
      />{" "}
    </Box>
  );
}

export default HeaderMenu;
