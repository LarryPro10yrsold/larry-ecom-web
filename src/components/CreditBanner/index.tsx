import { Box, Typography } from "@mui/material";

function CreditBanner() {
  return (
    <Box
      sx={{
        width: { md: "94%", lg: "95.6%", xl: "97.2%" },
        backgroundColor: "rgb(59 130 246)",
        color: "white",
        p: 4,
        mt: "20px",
      }}
    >
      <Box>
        <Typography
          sx={{
            ml: { xs: "16%", sm: "36%", md: "40%", lg: "44.9%", xl: "44.9%" },
          }}
        >
          © Copyright | All Rights Reserved
        </Typography>
        <Typography sx={{ ml: { xs: "44%", sm: "48.9%" } }}>
          M A Alim
        </Typography>{" "}
      </Box>
    </Box>
  );
}

export default CreditBanner;
