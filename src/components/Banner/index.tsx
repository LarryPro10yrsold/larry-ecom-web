import { Box, Typography } from "@mui/material";

function Banner() {
  return (
    <Box
      sx={{
        backgroundColor: "rgb(227 237 246)",
        width: "100vw",
        height: "470px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: "385px" }}>
        <Box>
          <Typography>Starting at $999</Typography>{" "}
          <Typography
            sx={{
              marginTop: "18px",
              fontSize: "3rem",
              lineHeight: "50px",
              fontWeight: "600",
              width: "500px",
            }}
          >
            The best notebook collection 2024
          </Typography>{" "}
          <Typography
            sx={{
              marginTop: "18px",
              fontSize: "24px",
              lineHeight: "1rem",
              fontWeight: "600",
              display: "flex",
              alignItems: "center",
            }}
          >
            Exclusive offer{" "}
            <Typography
              sx={{
                fontSize: "24px",
                lineHeight: "1rem",
                fontWeight: "600",
                color: "rgb(220 38 38 )",
                mx: "6px",
              }}
            >
              -10%
            </Typography>{" "}
            off this week
          </Typography>
          <Box
            sx={{
              backgroundColor: "white",
              px: "24px",
              py: "12px",
              mt: "26px",
              borderRadius: "6px",
              width: "80px",
              fontSize: "18px",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Shop Now
          </Box>
        </Box>
        <Box sx={{ ml: "auto" }}>
          <img src="src/assets/hero.png" alt="e" />
        </Box>
      </Box>
    </Box>
  );
}

export default Banner;
