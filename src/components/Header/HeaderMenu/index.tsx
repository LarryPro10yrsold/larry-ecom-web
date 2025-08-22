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
import EditNoteIcon from "@mui/icons-material/EditNote";
import axios from "axios";
import React from "react";
import SignInUI from "./SignInUI";

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
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
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
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        sx={{
          "& .MuiPaper-root": {
            width: "22%",
            flexDirection: "column",
            display: "flex",
            justifyContent: "center",
            minHeight: "350px",
            alignItems: "center",
            p: 2,
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <Avatar
            sx={{
              margin: 3,
              width: "80px",
              height: "80px",
            }}
            src={userData?.image as string} // as string is overriding the type for the image
          />
          <Box>
            <Typography fontSize="20px" fontWeight="550">
              {userData?.firstName} {userData?.lastName}
            </Typography>
            <Typography
              sx={{
                fontSize: "20px",
                opacity: "0.8",
              }}
            >
              {userData?.role}
            </Typography>{" "}
          </Box>
        </Box>{" "}
        <Divider sx={{ width: "100%", mb: 2 }} />{" "}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography fontSize="20px">gender : {userData?.gender}</Typography>{" "}
          <Typography fontSize="20px">
            username : {userData?.username}{" "}
          </Typography>{" "}
          <Typography fontSize="20px">
            phone number : {userData?.phone}{" "}
          </Typography>
          <Typography fontSize="20px">email : {userData?.email}</Typography>{" "}
          <Typography fontSize="20px">
            address : {userData?.address.address}{" "}
            {/* if the keys are still throwing an error and you accessed the data correctly, try defining it more specifically like the userProfile Interface above ^^^  */}
          </Typography>{" "}
          <Typography fontSize="20px">age : {userData?.age}</Typography>{" "}
        </Box>
        <Box
          onClick={() => {
            setStatusMessage("");
            setLoggedInUser("");
            setToken("");
            setUserData(null);
            handleClose();
          }}
          sx={{
            p: 1,
            background: "#32B8F0",
            color: "white",
            borderRadius: "8px",
            width: "24%",
            display: "flex",
            justifyContent: "center",
            mt: "20px",
            fontSize: "20px",
            cursor: "pointer",
          }}
        >
          logout
        </Box>
      </Popover>
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
        {/* // isSigningUP ? LoginComponent : RegisterComponent */}
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
function onAddToCart() {
  throw new Error("Function not implemented.");
}
