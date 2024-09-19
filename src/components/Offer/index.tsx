import { Box, Typography } from "@mui/material";

function Banner() {
  return (
    <Box
      sx={{
        backgroundColor: "rgb(227 237 246)",
        width: { lg: "97.4%", xl: "67%" },
        height: "470px",
        display: "flex",
        mx: { lg: "20px", xl: "370px" },
        alignItems: "center",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{}}>
          <img
            src="src/assets/offer.jpg"
            alt="e"
            height="470px"
            width="743px"
          />
        </Box>
        <Box sx={{}}>
          <Typography
            sx={{
              fontSize: "36px",
              fontWeight: "600",
              ml: { lg: "170px", xl: "220px" },
              lineHeight: "40px",
            }}
          >
            Don't miss the offer
          </Typography>{" "}
          <Typography
            sx={{
              fontSize: "36px",
              fontWeight: "600",
              display: "flex",
              textAlign: "center",
              ml: { lg: "240px", xl: "290px" },
            }}
          >
            Grab it now
          </Typography>
          <Box
            sx={{
              backgroundColor: "white",
              px: "24px",
              py: "12px",
              mt: "16px",
              borderRadius: "6px",
              width: "80px",
              fontSize: "18px",
              fontWeight: "600",
              cursor: "pointer",
              ml: { lg: "275px", xl: "325px" },
            }}
          >
            Shop Now
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Banner;
