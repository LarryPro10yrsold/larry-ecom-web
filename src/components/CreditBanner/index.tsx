import { Box, Typography } from "@mui/material";

function CreditBanner() {
  return (
    <Box
      sx={{
        width: { md: "100%", lg: "100%", xl: "100%" },
        backgroundColor: "rgb(59 130 246)",
        color: "white",
        p: 4,
        mt: "20px",
      }}
    >
      <Box>
        <Typography
          sx={{
            ml: { xs: "16%", sm: "36%", md: "39%", lg: "42.5%", xl: "44.9%" },
          }}
        >
          © Copyright | All Rights Reserved
        </Typography>
        <Typography sx={{ ml: { xs: "44%", sm: "48.9%" } }}>
          M A Alim
        </Typography>{" "}
        <Typography
          sx={{
            ml: {
              xs: "8.8%",
              sm: "32%",
              md: "36.1%",
              lg: "40.6%",
              xl: "43.6%",
            },
          }}
        >
          Customer Support Number - 123 456 789
        </Typography>
      </Box>{" "}
    </Box>
  );
}

export default CreditBanner;
