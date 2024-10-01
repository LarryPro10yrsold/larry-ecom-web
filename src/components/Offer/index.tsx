import { Box, Typography } from "@mui/material";

function Banner() {
  return (
    <Box
      sx={{
        backgroundColor: "rgb(227 237 246)",
        width: { xs: 0, lg: "97.4%", xl: "67%" },
        height: { md: "400px", lg: "340px", xl: "500px" },
        display: { xs: "block", sm: "flex" },
        mx: { xs: "40px", sm: "82px", md: "20px", lg: "20px", xl: "370px" },
        alignItems: "center",
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
            backgroundColor: "rgb(227 237 246)",
            height: { sm: "190px", md: "340px", lg: "190px" },
            width: { sm: "280px", md: "478px", lg: "478px" },
          }}
        >
          <Box
            sx={{
              mt: { md: "70px", lg: 0 },
              display: { xs: "flex", sm: "block" },
            }}
          >
            <Box sx={{ ml: { sm: "25px", md: 0 } }}>
              <Typography
                sx={{
                  fontSize: {
                    xs: "36px",
                    sm: "30px",
                    md: "36px",
                    lg: "36px",
                    xl: "36px",
                  },
                  fontWeight: "600",
                  ml: {
                    xs: "41px",
                    sm: "11px",
                    md: "123px",
                    lg: "216px",
                    xl: "260px",
                  },
                  lineHeight: "40px",
                  width: { xs: "300px" },
                }}
              >
                Don't miss the{" "}
                <Typography
                  sx={{
                    fontSize: {
                      xs: "36px",
                      sm: "30px",
                      md: "36px",
                      lg: "36px",
                      xl: "36px",
                    },
                    fontWeight: "600",
                    ml: {
                      xs: "73px",
                      sm: "72px",
                      md: "82px",
                      lg: "90px",
                      xl: "85px",
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
                    xs: "36px",
                    sm: "30px",
                    md: "36px",
                    lg: "36px",
                    xl: "36px",
                  },
                  fontWeight: "600",
                  display: "flex",
                  textAlign: "center",
                  ml: {
                    xs: "50px",
                    sm: "28px",
                    md: "145px",
                    lg: "240px",
                    xl: "290px",
                  },
                }}
              >
                Grab it now
              </Typography>
              <Box
                sx={{
                  backgroundColor: { xs: "rgb(227 237 246)", sm: "white" },
                  px: "24px",
                  py: "12px",
                  mt: "16px",
                  borderRadius: "6px",
                  width: "80px",
                  fontSize: "18px",
                  fontWeight: "600",
                  cursor: "pointer",
                  ml: {
                    xs: "100px",
                    sm: "54px",
                    md: "185px",
                    lg: "275px",
                    xl: "325px",
                  },
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
