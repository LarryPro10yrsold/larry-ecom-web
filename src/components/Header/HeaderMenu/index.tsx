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
  const [signInUsername, setSignInUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loggedInUser, setLoggedInUser] = useState("");

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
  const OnSubmitCheckPass = () => {
    if (
      signInUsername === "" ||
      newPassword === "" ||
      confirmNewPassword === ""
    ) {
      setStatusMessage("All fields are required.");
    } else if (newPassword !== confirmNewPassword) {
      setStatusMessage("Passwords do not match.");
    } else {
      console.log("this condition is working");
      localStorage.setItem("username", `${signInUsername}`);
      localStorage.setItem("password", `${newPassword}`);

      // store the username and password into local storage
      setStatusMessage("yay");
    }
  };

  const onSubmitLoginPass = () => {
    if (
      // either loginUsername is empty or loginPassword is empty
      loginUsername === "" ||
      loginPassword === ""
    ) {
      setStatusMessage("All fields are required.");
    } else if (
      localStorage.getItem("password") !== loginPassword ||
      localStorage.getItem("username") !== loginUsername
    ) {
      if (localStorage.getItem("password") !== loginPassword) {
        setStatusMessage("Passwords do not match.");
      } else if (localStorage.getItem("username") !== loginUsername) {
        setStatusMessage("Usernames do not match.");
      } else {
        setStatusMessage("Both fields are incorrect.");
      }
    }

    // else if (
    //   localStorage.getItem("password") !== loginPassword &&
    //   localStorage.getItem("username") !== loginUsername
    // ) {
    //   setStatusMessage("Both fields are incorrect.");
    // } else if (
    //   // loginUsername is not the same as the local storage`username` or
    //   // loginPassword is not the same as local storage `password`
    //   localStorage.getItem("password") !== loginPassword
    // ) {
    //   setStatusMessage("Passwords do not match.");
    // } else if (localStorage.getItem("username") !== loginUsername) {
    //   setStatusMessage("Usernames do not match.");
    // }
    else {
      // if both of them are different
      setStatusMessage("yay");
      setIsPopupOpen(false);
      setLoggedInUser(loginUsername);
    }
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
          {loggedInUser || "Login"}
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
            value={loginUsername}
            onChange={(e) => setLoginUsername(e.target.value)}
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
            required
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
            type="password"
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
                borderBottom: "none",
              },
              mt: 2,
              borderRadius: "4px",
            }}
          />
          <Box
            onClick={onSubmitLoginPass}
            sx={{
              cursor: "pointer",
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
          <Typography
            sx={{
              mt: 1,
              color: statusMessage.includes("yay")
                ? "rgb(22 163 74)"
                : "rgb(220 38 38)",
            }}
          >
            {" "}
            {statusMessage}
          </Typography>
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
            top: "36%",
            left: "40%",
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
            <EditNoteIcon />
            <CloseIcon
              onClick={closePopup2}
              sx={{
                position: "absolute",
                bottom: "25px",
                left: "330px",
                cursor: "pointer",
              }}
            />
          </Typography>

          <Box sx={{ mt: 1 }}>
            <Input
              required
              placeholder="Your new username here..."
              value={signInUsername}
              onChange={(e) => setSignInUsername(e.target.value)}
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
            />

            <Input
              required
              placeholder="Your new password here..."
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
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
            />

            <Input
              required
              placeholder="Confirm your new password here..."
              type="password"
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
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
            />

            <Typography
              sx={{
                mt: 1,
                color: statusMessage.includes("yay")
                  ? "rgb(22 163 74)"
                  : "rgb(220 38 38)",
              }}
            >
              {" "}
              {statusMessage}
            </Typography>

            <Box
              onClick={OnSubmitCheckPass}
              sx={{
                bgcolor: "rgb(59 130 246)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                p: 1,
                color: "white",
                borderRadius: "2px",
                mt: 1,
                cursor: "pointer",
              }}
            >
              Submit
            </Box>

            <Typography
              onClick={HandleGoBack}
              sx={{ color: "rgb(59 130 246)", cursor: "pointer", mt: 1 }}
            >
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
