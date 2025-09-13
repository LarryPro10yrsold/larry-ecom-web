import { Popover, Box, Avatar, Typography, Divider } from "@mui/material";
import React from "react";

interface CustomerInfo {
  userData: {
    id?: string;
    open: boolean;
    anchorEl: Element | null;
    image: string;
    firstName: string;
    lastName: string;
    role: string;
    gender: string;
    email: string;
    username: string;
    phone: number;
    address: { address: string };
    age: number;
  };
  setStatusMessage: React.Dispatch<React.SetStateAction<string>>;
  setLoggedInUser: React.Dispatch<React.SetStateAction<string>>;
  setToken: React.Dispatch<React.SetStateAction<string>>;
  setUserData: React.Dispatch<React.SetStateAction<string>>;
  handleClose: () => void;
  open: () => void;
  anchorEl: () => void;
}

function CustomerInfoPopup(props: CustomerInfo) {
  const {
    userData,
    setStatusMessage,
    setLoggedInUser,
    setToken,
    handleClose,
    id,
    open,
    anchorEl,
    setUserData,
  } = props;
  return (
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
  );
}

export default CustomerInfoPopup;
