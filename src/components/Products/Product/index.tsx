import { Box, createTheme, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { ReactNode } from "react";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import { Stars } from "@mui/icons-material";

function Product(props: any) {
  const { image, rates, name, originalPrice, discountPrice, type } = props;

  const renderRates = () => {
    const stars: ReactNode[] = [];

    // if rate is 4 => push 4 stars into the "stars" array
    // if rate is 5 => push 5 stars into the "stars" array

    {
      /* map stars array into JSX element */
    }
    for (let i = 0; i <= 4; i++) {
      console.log(i, rates);
      //  0.5 - 0 = 0.5
      //  1.5 - 1 = 0.5
      //  2.5 - 2 = 0.5

      //     0 3.5 - whole star because it's lower than Math.floor(rates) which is 3
      //     1 3.5 - whole star because it's lower than Math.floor(rates) which is 3
      //     2 3.5 - whole star because it's lower than Math.floor(rates) which is 3
      //     3 3.5 - half a star beacuse i(3) is smaller than 3.5
      //     4 3.5 - i is larger than rates, leading to a result of an empty star for the rest.

      if (i < Math.floor(rates)) {
        stars.push(<StarIcon key={i} />);
      } else if (i < rates) {
        // Math.floor(rates) <= i < rates: i = 3
        stars.push(<StarHalfIcon key={i} />);
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

  const calcluteDiscountPercentage =
    ((originalPrice - discountPrice) / originalPrice) * 100;
  const discountPricee = originalPrice - discountPrice;
  // const amountOfStars = stars.length;
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
          {type}
        </Typography>{" "}
        <Typography
          sx={{
            fontSize: "18px",
            px: { sm: "0px", md: "9px", lg: "26px", xl: "32px" },
          }}
        >
          {name}
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
            {/* {amountOfStars} */}5
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
              {discountPricee}
            </Typography>
            <Box sx={{ display: "flex", gap: "8px" }}>
              <Typography
                sx={{
                  fontSize: { md: "12px", lg: "16px", xl: "16px" },
                  textDecoration: "line-through",
                }}
              >
                ${originalPrice}
              </Typography>
              <Typography
                sx={{ fontSize: { md: "12px", lg: "16px", xl: "16px" } }}
              >
                -{calcluteDiscountPercentage}%
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
