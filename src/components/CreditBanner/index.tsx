import { Box, Typography } from "@mui/material";

function CreditBanner() {
  return (
    <Box
      sx={{
        width: "97.2%",
        backgroundColor: "rgb(59 130 246)",
        color: "white",
        p: 4,
        mt: "20px",
      }}
    >
      <Box>
        <Typography sx={{ ml: "44.9%" }}>
          © Copyright | All Rights Reserved
        </Typography>
        <Typography sx={{ ml: "48.9%" }}>M A Alim</Typography>{" "}
      </Box>
    </Box>
  );
}

export default CreditBanner;
