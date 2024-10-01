import { Box, createTheme, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { ReactNode } from "react";
import { Star, StarBorder, StarOutline } from "@mui/icons-material";

function Product(props: any) {
  const { image, rates } = props;

  const renderRates = () => {
    const stars: ReactNode[] = [];

    // if rate is 4 => push 4 stars into the "stars" array
    // if rate is 5 => push 5 stars into the "stars" array

    {
      /* map stars array into JSX element */
    }
    for (let i = 1; i <= 5; i++) {
      if (i <= rates) {
        stars.push(<StarIcon key={i} />);
      } else {
        stars.push(<StarBorderIcon key={i} />);
      }
    }
    return (
      <Box sx={{ display: "flex", mx: "28px", color: "#FFC300 " }}>
        {stars?.map((star) => {
          return star;
        })}
        {/* <StarBorderIcon /> */}
      </Box>
    );
  };

  return (
    <Box
      sx={{
        border: "1px solid #e5e7eb",
        width: {
          xs: "300px",
          sm: "232px",
          md: "195px",
          lg: "335px",
          xl: "360px",
        },
        py: { xs: "30px", sm: "20px", md: "20px", lg: "25px", xl: "25px" },
        mt: { sm: "20px", md: 0, lg: 0, xl: 0 },
        px: { xs: "20px", lg: 0 },
      }}
    >
      {" "}
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        {" "}
        <Box
          component="img"
          src={image}
          alt="e"
          sx={{
            width: { sm: "240px", md: "200px", lg: "275px", xl: "295px" },
            height: { md: "130px", lg: "200px", xl: "200px" },
          }}
        />
      </Box>
      <Box sx={{ mx: { md: "5px" } }}>
        <Typography
          sx={{
            color: "rgb(107 114 128)",
            px: { sm: "0px", md: "9px", lg: "26px", xl: "32px" },
            pt: "16px",
          }}
        >
          huh
        </Typography>{" "}
        <Typography
          sx={{
            fontSize: "18px",
            px: { sm: "0px", md: "9px", lg: "26px", xl: "32px" },
          }}
        >
          raging frog
        </Typography>{" "}
        <Typography
          sx={{ fontSize: "16px", px: "32px", color: "rgb(75 85 99)" }}
        ></Typography>
        <Box
          sx={{
            display: "flex",
            gap: "0px",
            alignItems: "center",
            p: 0,
          }}
        >
          {renderRates()}
          <Typography
            sx={{
              fontSize: { md: "12px", lg: "20px", xl: "20px" },
            }}
          >
            5
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            px: { sm: "0px", md: "0px", lg: "26px", xl: "32px" },
            gap: { xs: "60px", sm: "10px", md: "3px", lg: "26px", xl: "41px" },
          }}
        >
          {" "}
          <Box>
            <Typography
              sx={{
                fontSize: { md: "15px", lg: "22px", xl: "22px" },
                color: "rgb(59 130 246)",
                lineHeight: "28px",
              }}
            >
              $9.27
            </Typography>
            <Box sx={{ display: "flex", gap: "8px" }}>
              <Typography
                sx={{
                  fontSize: { md: "12px", lg: "16px", xl: "16px" },
                  textDecoration: "line-through",
                }}
              >
                $9.99
              </Typography>
              <Typography
                sx={{ fontSize: { md: "12px", lg: "16px", xl: "16px" } }}
              >
                -7.17%
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              py: "8px",
              px: "16px",
              color: "white",
              backgroundColor: "rgb(236 72 153)",
              borderRadius: "4px",
              width: { sm: "200px", md: "180px", lg: "200px", xl: "203px" },
              height: { md: "30px", lg: "30px", xl: "30px" },
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "15px",
                  sm: "13px",
                  md: "10px",
                  lg: "15px",
                  xl: "15px",
                },
              }}
            >
              ADD TO CART
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Product;
