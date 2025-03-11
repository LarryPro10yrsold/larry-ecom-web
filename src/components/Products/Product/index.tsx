import { useState } from "react";
import { Box, Typography, Modal, Input } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import CloseIcon from "@mui/icons-material/Close";
import EditNoteIcon from "@mui/icons-material/EditNote";

interface HeaderMenuInterface {
  isDarkMode?: boolean;
  onAddToCart?: () => void;
  image: string;
  rates: number;
  name: any;
  originalPrice: number;
  discountPrice: number;
  type: string;
}

function Product(props: HeaderMenuInterface) {
  const {
    image,
    rates,
    name,
    originalPrice,
    discountPrice,
    type,
    onAddToCart,
  } = props;
  const [numberOfProducts, setNumberOfProducts] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isPopupOpen2, setIsPopupOpen2] = useState(false);

  const handleAddToCart = () => {
    if (onAddToCart !== undefined) onAddToCart();
    setNumberOfProducts(numberOfProducts + 1);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };
  const closePopup2 = () => {
    setIsPopupOpen2(false);
  };
  const handleRegister = () => {
    setIsPopupOpen2(true);
    setIsPopupOpen(false);
  };
  const HandleGoBack = () => {
    setIsPopupOpen2(false);
    setIsPopupOpen(true);
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
        </Box>
      </Box>
      <Modal open={isPopupOpen} onClose={closePopup}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            transform: "translate(-50%, -50%)",
          }}
        >
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              fontSize: "20px",
              fontWeight: "600",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <LockOpenIcon />
            Login
            <LockOpenIcon />{" "}
            <CloseIcon
              onClick={closePopup}
              sx={{
                position: "absolute",
                bottom: "25px",
                left: "330px",
                cursor: "pointer",
              }}
            />
          </Typography>{" "}
          <Input
            placeholder="Your username here..."
            sx={{
              border: "2px solid rgb(59 130 246)",
              width: "336px",
              px: "12px",
              py: "2px",
              "&.MuiInputBase-root:before": {
                borderBottom: "none",
              },
              "&.MuiInputBase-root:after": {
                borderBottom: "none",
              },
              mt: 2,
              borderRadius: "4px",
            }}
          />{" "}
          <Input
            placeholder="Your password here..."
            sx={{
              border: "2px solid rgb(59 130 246)",
              width: "336px",
              px: "12px",
              py: "2px",
              "&.MuiInputBase-root:before": {
                borderBottom: "none",
              },
              "&.MuiInputBase-root:after": {
                borderBottom: "non   e",
              },
              mt: 2,
              borderRadius: "4px",
            }}
          />
          <Box
            sx={{
              bgcolor: "rgb(59 130 246)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              p: 1,
              color: "white",
              borderRadius: "2px",
              mt: 1,
            }}
          >
            Submit
          </Box>
          <Box sx={{ display: "flex", mt: 1, mx: 11 }}>
            No Account?
            <Typography
              onClick={handleRegister}
              sx={{ color: "rgb(59 130 246)", ml: "4px", cursor: "pointer" }}
            >
              {" "}
              Register
            </Typography>
          </Box>{" "}
          <Typography
            sx={{
              fontWeight: "600",
              fontSize: "12px",
              textDecoration: "underline",
              mt: "20px",
            }}
          >
            YOUR PURCHASE WILL BE COUNTED BUT IT WILL BE ANONYMOUS (fake)
          </Typography>
        </Box>
      </Modal>{" "}
      <Modal open={isPopupOpen2} onClose={closePopup2}>
        <Box
          sx={{
            position: "absolute",
            top: "40%",
            left: "42%",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              fontSize: "20px",
              fontWeight: "600",
              justifyContent: "center",
              position: "relative",
              gap: "5px",
            }}
          >
            <EditNoteIcon />
            Register
            <EditNoteIcon />{" "}
            <CloseIcon
              onClick={closePopup2}
              sx={{
                position: "absolute",
                bottom: "25px",
                left: "330px",
                cursor: "pointer",
              }}
            />
          </Typography>{" "}
          <Box sx={{ mt: 1 }}>
            This is a hobby project for development purpose only. No well suited
            backend has been used here.
            <Typography
              onClick={HandleGoBack}
              sx={{ color: "rgb(59 130 246)", cursor: "pointer" }}
            >
              {" "}
              Go to login
            </Typography>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}

export default Product;
