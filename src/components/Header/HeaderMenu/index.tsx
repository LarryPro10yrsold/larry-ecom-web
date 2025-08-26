import {
  Avatar,
  Box,
  Divider,
  Input,
  Modal,
  Popover,
  Typography,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { MouseEventHandler, useEffect, useState } from "react";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import React from "react";
import SignInUI from "./SignUP";
import SignIn from "./SignIn";
import CustomerInfoPopup from "./CustomerInfoPopup";

interface HeaderMenuInterface {
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  numberOfProducts: number;
}

interface UserProfile {
  gender: string;
  username: string;
  phone: string;
  age: number;
  address: {
    address?: string;
  };
  email: string;
  role: string;
  image: string;
  firstName: string;
  lastName: string;
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
  const [confirmNewPassword, setConfirmNewPassword] = useState(""); // to find what type a state, variable etc is, just hover onto it, and copy what it is
  const [statusMessage, setStatusMessage] = useState("");
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loggedInUser, setLoggedInUser] = useState("");
  const [token, setToken] = useState("");
  const [anchorEl, setAnchorEl] = React.useState<HTMLDivElement | null>(null);
  const [userData, setUserData] = useState<UserProfile | null>(null); // Just in case if there's any error, add in another option as null & keys are like for example : firstName : John  and one | is or for types.
  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleLogin = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!loggedInUser) {
      setIsPopupOpen(true);
    } else {
      handleClick(event);
    }
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

  const onSubmitLoginPass = async () => {
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
    try {
      const resp = await axios.post("https://dummyjson.com/auth/login", {
        username: loginUsername,
        password: loginPassword,
      });
      console.log("step1", resp.data);
      setStatusMessage("Login complete.");
      setLoggedInUser(loginUsername);
      setToken(resp.data.accessToken);
      // synchronous vs async
    } catch (err) {
      console.log("step2", err);
      setStatusMessage("Login failed");
    }
  };

  const handleGetMe = async (accessToken: string) => {
    console.log("step2", accessToken);
    const userFetchInfo = await axios.get("https://dummyjson.com/auth/me", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    console.log(userFetchInfo.data);
    setUserData(userFetchInfo.data);
  };

  useEffect(() => {
    if (token) {
      handleGetMe(token);
    }
  }, [token]);

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
        Categories
      </Typography>
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
      <Box
        sx={{
          alignItems: "center",
          justifyContent: "center",
          display: { xs: "none", sm: "flex" },
          cursor: "pointer",
        }}
        onClick={(e) => handleLogin(e)}
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
      <CustomerInfoPopup
        id={id}
        open={open}
        anchorEl={anchorEl}
        userData={userData}
        setStatusMessage={setStatusMessage}
        setLoggedInUser={setLoggedInUser}
        setToken={setToken}
        setUserData={setUserData}
        handleClose={handleClose}
      />
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
        <SignIn
          statusMessage={statusMessage}
          loginUsername={loginUsername}
          closePopup={closePopup}
          setLoginUsername={setLoginUsername}
          loginPassword={loginPassword}
          setLoginPassword={setLoginPassword}
          handleRegister={handleRegister}
          onSubmitLoginPass={onSubmitLoginPass}
        />
      </Modal>{" "}
      <Modal open={isPopupOpen2} onClose={closePopup2}>
        <SignInUI
          signInUsername={signInUsername}
          setSignInUsername={setSignInUsername}
          setNewPassword={setNewPassword}
          newPassword={newPassword}
          statusMessage={statusMessage}
          OnSubmitCheckPass={OnSubmitCheckPass}
          HandleGoBack={HandleGoBack}
          confirmNewPassword={confirmNewPassword}
          setConfirmNewPassword={setConfirmNewPassword}
          closePopup2={closePopup2}
        />
      </Modal>
    </Box>
  );
}

export default HeaderMenu;
