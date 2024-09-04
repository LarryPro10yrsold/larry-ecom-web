import { Box, Input, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import HeaderMenu from "./HeaderMenu";

function Header() {
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
        sx={{ width: "67vw", display: "flex", justifyContent: "space-between" }}
      >
        <Typography
          sx={{ fontSize: "36px", lineHeight: "36px", fontWeight: "500" }}
        >
          Shopify
        </Typography>
        <Box sx={{ display: "flex" }}>
          <Input
            placeholder="Search for a product..."
            sx={{
              border: "2px solid rgb(59 130 246)",
              width: "435px",
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