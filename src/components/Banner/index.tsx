import { Box, Typography } from "@mui/material";

function Banner() {
  return (
    <Box
      sx={{
        backgroundColor: "rgb(227 237 246)",
        width: "100vw",
        height: { sm: "300px", md: "470px" },
        display: "flex",
        justifyContent: { sm: "block", md: "center" },
      }}
    >
      <Box
        sx={{
          display: { xs: "block", sm: "flex" },
          alignItems: "center",
          gap: { sm: "0px", md: "", lg: "145px", xl: "385px" },
          pt: { xs: "30px", sm: 0 },
        }}
      >
        <Box sx={{ ml: { sm: "20px", md: 0 } }}>
          <Typography sx={{ fontSize: { sm: "20px", md: "20px" } }}>
            Starting at $999
          </Typography>{" "}
          <Typography
            sx={{
              marginTop: "18px",
              fontSize: { sm: "25px", md: "3rem" },
              lineHeight: { sm: "35px", md: "50px" },
              fontWeight: "600",
              width: { sm: "300px", md: "500px" },
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
        <Box
          component="img"
          sx={{
            width: {
              xs: "100%",
              sm: "40%",
              md: "450px",
              lg: "500px",
              xl: "500px",
            },
          }}
          src="src/assets/hero.png"
          alt="e"
        />
      </Box>
    </Box>
  );
}

export default Banner;
