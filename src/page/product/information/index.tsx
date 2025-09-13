import { Box, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PaidIcon from "@mui/icons-material/Paid";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

interface InformationInterface {
  discountPercentage: any;
  title: string;
  description: string;
  brand: string;
  stock: number;
  essence: string;
  handleAddToCart: () => void;
  numberOfProducts: number;
}

function Information(props: InformationInterface) {
  const {
    title,
    description,
    brand,
    stock,
    essence,
    discountPercentage,
    handleAddToCart,
    numberOfProducts,
  } = props;
  return (
    <Box sx={{ width: { md: "340px", lg: "493px" } }}>
      <Typography sx={{ fontWeight: "510", fontSize: "1.7rem" }}>
        {title}
      </Typography>
      <Box sx={{}}>
        <Typography
          sx={{
            display: "flex",
            gap: "1px",
            color: "#FFC300",
            fontSize: "5px",
          }}
        >
          <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon />{" "}
          <Typography sx={{ fontSize: "17px", color: "black", ml: "5px" }}>
            5
          </Typography>
        </Typography>
        <Box sx={{ mt: "15px" }}>
          <Typography
            sx={{
              fontSize: { md: "15px", lg: "22px", xl: "22px" },
              color: "rgb(59 130 246)",
              lineHeight: "28px",
            }}
          >
            $9.27
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
                color: "black",
              }}
            >
              $9.99
            </Typography>
            <Typography
              sx={{
                fontSize: {
                  md: "12px",
                  lg: "16px",
                  xl: "16px",
                  color: "black",
                },
              }}
            >
              -{discountPercentage}%
            </Typography>
          </Box>
        </Box>{" "}
        <Box sx={{ display: "flex", gap: "10px", mt: "10px" }}>
          <Box sx={{ fontWeight: "510" }}>
            <Typography sx={{ fontWeight: "510" }}>Brand</Typography>{" "}
            <Typography sx={{ fontWeight: "510" }}>Essence</Typography>{" "}
            <Typography sx={{ fontWeight: "510" }}>Stock</Typography>
          </Box>{" "}
          <Box>
            <Typography>{brand}</Typography> <Typography>{essence}</Typography>{" "}
            <Typography>{stock}</Typography>
          </Box>
        </Box>{" "}
        <Box sx={{ mt: "11px" }}>
          <Typography sx={{ fontWeight: "510", fontSize: "18px" }}>
            About the product
          </Typography>{" "}
          <Typography sx={{ textAlign: "left", fontWeight: "semi bold" }}>
            {description}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: "5px", mt: "10px" }}>
          <Box
            onClick={handleAddToCart}
            sx={{
              py: "8px",
              px: "16px",
              color: "white",
              backgroundColor: "rgb(236 72 153)",
              borderRadius: "4px",
              display: "flex",
              alignItems: "center",
              justifyContent: { md: "none", lg: "center", xl: "center" },
              cursor: "pointer",
            }}
          >
            <ShoppingCartIcon sx={{ fontSize: "15px" }} />
          </Box>
          <Box
            sx={{
              py: "8px",
              px: "16px",
              color: "white",
              backgroundColor: "rgb(59 130 246)",
              borderRadius: "4px",
              display: "flex",
              alignItems: "center",
              justifyContent: { md: "none", lg: "center", xl: "center" },
              cursor: "pointer",
            }}
          >
            <PaidIcon sx={{ fontSize: "17px" }} />
          </Box>
          <Box
            sx={{
              py: "8px",
              px: "16px",
              color: "white",
              backgroundColor: "rgb(234 179 8)",
              borderRadius: "4px",
              display: "flex",
              alignItems: "center",
              justifyContent: { md: "none", lg: "center", xl: "center" },
              cursor: "pointer",
            }}
          >
            <FavoriteBorderIcon sx={{ fontSize: "17px" }} />
          </Box>
        </Box>
      </Box>{" "}
    </Box>
  );
}

export default Information;
