import { Box, Input, Modal, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useState } from "react";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import CloseIcon from "@mui/icons-material/Close";
import EditNoteIcon from "@mui/icons-material/EditNote";

interface HeaderMenuInterface {
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  numberOfProducts: number;
}

function HeaderMenu({
  isDarkMode,
  onToggleDarkMode,
  numberOfProducts,
}: HeaderMenuInterface) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isPopupOpen2, setIsPopupOpen2] = useState(false);

  const handleLogin = () => {
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
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: { xs: "10px", sm: "15px", md: "32px" },
        backgroundColor: isDarkMode ? "rgb(30 41 59)" : "white",
        color: isDarkMode ? "white" : "black",
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: "15px", sm: "20px" },
          fontWeight: "500",
          cursor: "pointer",
          display: { xs: "none", sm: "block" },
        }}
      >
        Products
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: "15px", sm: "20px" },
          fontWeight: "500",
          cursor: "pointer",
          display: { xs: "none", sm: "block" },
        }}
      >
        Categories
      </Typography>
      <Box
        sx={{
          alignItems: "center",
          justifyContent: "center",
          display: { xs: "none", sm: "flex" },
          cursor: "pointer",
        }}
        onClick={handleLogin}
      >
        <PersonIcon style={{ fontSize: "30px" }} />
        <Typography
          sx={{
            fontSize: { xs: "15px", sm: "25px" },
            fontWeight: "500",

            color: isDarkMode ? "white" : "black",
            display: { xs: "none", sm: "block" },
          }}
        >
          Login
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "28px",
          position: "relative",
        }}
      >
        <ShoppingCartIcon
          style={{
            fontSize: "30px",
            cursor: "pointer",
            color: isDarkMode ? "white" : "black",
          }}
        />
        <Box
          sx={{
            backgroundColor: "rgb(220 38 38)",
            width: "25px",
            height: "25px",
            borderRadius: "100%",
            position: "absolute",
            bottom: "16px",
            left: "10px",
            color: "white",
            fontFamily: "sans-serif",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {numberOfProducts}
        </Box>
      </Box>
      <Box onClick={onToggleDarkMode}>
        <DarkModeIcon
          style={{
            fontSize: "30px",
            color: isDarkMode ? "white" : "black",
            cursor: "pointer",
          }}
        />
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
          </Box>
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
              onClick={closePopup}
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

export default HeaderMenu;
function onAddToCart() {
  throw new Error("Function not implemented.");
}
