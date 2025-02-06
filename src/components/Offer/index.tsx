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
        width: { xs: 0, lg: "97.4%", xl: "67%" },
        height: { md: "400px", lg: "340px", xl: "500px" },
        display: { xs: "block", sm: "flex" },
        mx: { xs: "40px", sm: "82px", md: "20px", lg: "20px", xl: "370px" },
        alignItems: "center",
        color: isDarkMode ? "white" : "black",
      }}
    >
      <Box sx={{ display: { xs: "block", sm: "flex" }, alignItems: "center" }}>
        <Box
          component="img"
          src="src/assets/offer.jpg"
          alt="e"
          sx={{
            height: { sm: "190px", md: "340px", xl: "500px" },
            width: {
              xs: "341px",
              sm: "283px",
              md: "510px",
              lg: "743px",
              xl: "743px",
            },
          }}
        />
        <Box
          sx={{
            backgroundColor: isDarkMode ? "rgb(71 85 105)" : "rgb(227 237 246)",
            height: { sm: "190px", md: "340px", lg: "190px" },
            width: { xs: "340px", sm: "315px", md: "478px", lg: "478px" },
            py: { xs: 2, sm: 0 },
          }}
        >
          <Box
            sx={{
              display: { xs: "flex", sm: "block", xl: "flex" },
            }}
          >
            <Box
              sx={{
                ml: { xs: "45px", sm: "25px", md: 0 },
                mt: { md: "100px", lg: 0 },
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: "26px",
                    sm: "25px",
                    md: "36px",
                    lg: "36px",
                    xl: "38px",
                  },
                  fontWeight: "600",
                  ml: {
                    xs: "31px",
                    sm: "41px",
                    md: "73px",
                    lg: "170px",
                    xl: "190px",
                  },
                  lineHeight: "40px",
                  width: {
                    xs: "200px",
                    sm: "200px",
                    md: "400px",
                    lg: "500px",
                    xl: "500px",
                  },
                  display: { md: "flex", lg: "flex", xl: "flex" },
                }}
              >
                Don't miss the{" "}
                <Typography
                  sx={{
                    fontSize: {
                      xs: "26px",
                      sm: "25px",
                      md: "36px",
                      lg: "36px",
                      xl: "38px",
                    },
                    fontWeight: "600",
                    ml: {
                      xs: "63px",
                      sm: "64px",
                      md: "8px",
                      lg: "8px",
                      xl: "8px",
                    },
                    lineHeight: "40px",
                    display: { xs: "flex", sm: "block" },
                  }}
                >
                  offer
                </Typography>
              </Typography>{" "}
              <Typography
                sx={{
                  fontSize: {
                    xs: "26px",
                    sm: "25px",
                    md: "36px",
                    lg: "36px",
                    xl: "32px",
                  },
                  fontWeight: "600",
                  display: "flex",
                  textAlign: "center",
                  ml: {
                    xs: "50px",
                    sm: "60px",
                    md: "145px",
                    lg: "240px",
                    xl: "280px",
                  },
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
                  fontSize: "18px",
                  fontWeight: "600",
                  cursor: "pointer",
                  ml: {
                    xs: "50px",
                    sm: "54px",
                    md: "185px",
                    lg: "275px",
                    xl: "300px",
                  },
                  color: "black",
                  width: { xs: "140px", sm: "140px" },
                }}
              >
                Shop Now
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Banner;
