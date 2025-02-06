import { Box, Typography } from "@mui/material";

interface BannerInterface {
  isDarkMode: boolean;
}

function Banner(props: BannerInterface) {
  const { isDarkMode } = props;
  return (
    <Box
      sx={{
        backgroundColor: isDarkMode ? "rgb(71 85 105)" : "rgb(227 237 246)",
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
          gap: { sm: "0px", md: "", lg: "145px", xl: "415px" },
          pt: { xs: "30px", sm: 0 },
          px: { xs: "4px", sm: 0 },
          pl: { xs: "20px", sm: 0 },
        }}
      >
        <Box sx={{ ml: { sm: "20px", md: 0 } }}>
          <Box sx={{ color: isDarkMode ? "white" : "black" }}>
            <Typography sx={{ fontSize: { sm: "20px", md: "20px" } }}>
              Starting at $999
            </Typography>{" "}
            <Typography
              sx={{
                marginTop: "18px",
                fontSize: { xs: "22px", sm: "25px", md: "3rem" },
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
                fontSize: { xs: "16px", sm: "24px" },
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
                  textDecoration: "underline",
                }}
              >
                -10%
              </Typography>{" "}
              off this week
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: "white",
              px: "24px",
              py: "12px",
              mt: "26px",
              borderRadius: "6px",
              width: "140px",
              fontSize: "18px",
              fontWeight: "600",
              cursor: "pointer",
              color: "black",
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
              xl: "600px",
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
