import { Box, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PaidIcon from "@mui/icons-material/Paid";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

function Information() {
  return (
    <Box sx={{ width: { md: "340px", lg: "493px" } }}>
      <Typography sx={{ fontWeight: "510", fontSize: "1.7rem" }}>
        Legendary Turtle
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
            $25
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
              $50
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
              -50%
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
            <Typography>legend</Typography> <Typography>turtles</Typography>{" "}
            <Typography>500</Typography>
          </Box>
        </Box>{" "}
        <Box sx={{ mt: "11px" }}>
          <Typography sx={{ fontWeight: "510", fontSize: "18px" }}>
            About the product
          </Typography>{" "}
          <Typography sx={{ textAlign: "left", fontWeight: "semi bold" }}>
            Master Oogway is an ancient and wise tortoise, the legendary Grand
            Master of the Jade Palace in Kung Fu Panda. Known for his deep
            wisdom, calm demeanor, and mastery of kung fu, he serves as a mentor
            to Master Shifu and the Furious Five. Oogway believes in destiny and
            the power of inner peace, often speaking in profound yet cryptic
            sayings. His most famous lesson—"Yesterday is history, tomorrow is a
            mystery, but today is a gift. That is why it is called the
            present."—continues to inspire generations. Even after ascending to
            the Spirit Realm, his teachings live on. 🐢✨
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: "5px", mt: "10px" }}>
          <Box
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
