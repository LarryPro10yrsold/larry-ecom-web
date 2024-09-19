import { Box, Typography } from "@mui/material";

function Product(props: any) {
  const { image, rates } = props;
  return (
    <Box
      sx={{
        border: "1px solid #e5e7eb",
        width: { md: "242px", lg: "335px", xl: "360px" },
        py: "25px",
      }}
    >
      {" "}
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        {" "}
        <img src={image} alt="e" width="195px" height="200px" />
      </Box>
      <Box sx={{}}>
        <Typography sx={{ color: "rgb(107 114 128)", px: "32px", pt: "16px" }}>
          huh
        </Typography>{" "}
        <Typography sx={{ fontSize: "18px", px: "32px" }}>
          raging frog
        </Typography>{" "}
        <Typography
          sx={{ fontSize: "16px", px: "32px", color: "rgb(75 85 99)" }}
        ></Typography>
        <Box sx={{ display: "flex", gap: "0px" }}>
          {rates}
          <Typography>i don't know</Typography>
        </Box>
        <Box>
          <Box
            sx={{
              display: "flex",
              px: "32px",
              gap: { lg: "36px", xl: "61px" },
            }}
          >
            {" "}
            <Box>
              <Typography
                sx={{
                  fontSize: "22px",
                  color: "rgb(59 130 246)",
                  lineHeight: "28px",
                }}
              >
                $9.27
              </Typography>
              <Box sx={{ display: "flex", gap: "8px" }}>
                <Typography
                  sx={{
                    fontSize: "16px",
                    textDecoration: "line-through",
                  }}
                >
                  $9.99
                </Typography>
                <Typography sx={{ fontSize: "16px" }}>-7.17%</Typography>
              </Box>
            </Box>
            <Box
              sx={{
                py: "8px",
                px: "16px",
                color: "white",
                backgroundColor: "rgb(236 72 153)",
                borderRadius: "4px",
                width: { lg: "1000px", xl: "103px" },
                height: "30px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: { lg: "15px", xl: "15px" },
                }}
              >
                ADD TO CART
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Product;
