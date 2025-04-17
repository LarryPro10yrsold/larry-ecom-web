import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import axios from "axios";

interface HeaderMenuInterface {
  isDarkMode?: boolean;
  onAddToCart?: () => void;
  image: string;
  rates: number;
  name: any;
  originalPrice: number;
  discountPrice: number;
  type: string;
  id: number;
}

function Product(props: HeaderMenuInterface) {
  const {
    image,
    rates,
    name,
    originalPrice,
    discountPrice,
    type,
    id,
    onAddToCart,
  } = props;
  const [numberOfProducts, setNumberOfProducts] = useState(0);
  const [similarProducts, setSimilarProducts] = useState([]);
  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/category/beauty`)
      .then((res: { data: any }) => {
        setSimilarProducts(res.data.products); // Access the 'products' array!
      });
  }, []);

  const handleAddToCart = () => {
    if (onAddToCart !== undefined) onAddToCart();
    setNumberOfProducts(numberOfProducts + 1);
  };

  const renderRates = () => {
    const stars = [];
    for (let i = 0; i <= 4; i++) {
      if (i < Math.floor(rates)) {
        stars.push(<StarIcon key={i} />);
      } else if (i < rates) {
        stars.push(<StarHalfIcon key={i} />);
      } else {
        stars.push(<StarBorderIcon key={i} />);
      }
    }
    return (
      <Box sx={{ display: "flex", mx: "28px", color: "#FFC300 " }}>{stars}</Box>
    );
  };

  const calculateDiscountPercentage =
    ((originalPrice - discountPrice) / originalPrice) * 100;

  return (
    <Box
      sx={{
        border: "1px solid #e5e7eb",
        width: {
          xs: "350px",
          sm: "292px",
          md: "225px",
          lg: "335px",
          xl: "360px",
        },
        py: { xs: "30px", sm: "20px", md: "20px", lg: "25px", xl: "25px" },
        mt: { xs: "20px", sm: "20px", md: 0, lg: 0, xl: 0 },
        px: { xs: "20px", lg: 0 },
        ml: { xs: "15px", sm: 0 },
        flex: 1,
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          component="img"
          src={image}
          alt="e"
          sx={{
            width: {
              xs: "300px",
              sm: "240px",
              md: "200px",
              lg: "275px",
              xl: "295px",
            },
            objectFit: "contain",
            height: { md: "130px", sm: "150px", lg: "200px", xl: "200px" },
          }}
        />
      </Box>
      <Box sx={{ mx: { md: "5px" } }}>
        <Typography
          sx={{
            color: "rgb(107 114 128)",
            px: { sm: "0px", md: "0px", lg: "26px", xl: "32px" },
            pt: "16px",
          }}
        >
          {type}
        </Typography>
        <Typography
          sx={{
            fontSize: "18px",
            px: { sm: "0px", md: "0px", lg: "26px", xl: "32px" },
          }}
        >
          {name}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          {renderRates()}
          <Typography
            sx={{
              fontSize: { md: "12px", lg: "20px", xl: "20px" },
            }}
          >
            {rates}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            px: { sm: "0px", md: "0px", lg: "26px", xl: "32px" },
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: { md: "15px", lg: "22px", xl: "22px" },
                color: "rgb(59 130 246)",
                lineHeight: "28px",
              }}
            >
              ${discountPrice}
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: "8px",
                alignItems: { md: "0px", lg: "center" },
              }}
            >
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
                -{calculateDiscountPercentage}%
              </Typography>
            </Box>
          </Box>
          <Link to={`/product/${id}`}>
            <Box
              onClick={handleAddToCart}
              sx={{
                py: "8px",
                px: "16px",
                color: "white",
                backgroundColor: "rgb(236 72 153)",
                borderRadius: "4px",
                width: { sm: "43px", md: "43px", lg: "43px", xl: "43px" },
                height: { md: "30px", lg: "30px", xl: "30px" },
                display: "flex",
                alignItems: "center",
                justifyContent: { md: "none", lg: "center", xl: "center" },
                cursor: "pointer",
              }}
            >
              <ShoppingCartIcon
                sx={{
                  fontSize: {
                    xs: "15px",
                    sm: "13px",
                    md: "10px",
                    lg: "15px",
                    xl: "15px",
                  },
                }}
              />
            </Box>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default Product;
