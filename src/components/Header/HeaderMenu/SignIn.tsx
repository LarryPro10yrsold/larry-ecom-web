import { Box, Typography, Input } from "@mui/material";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import CloseIcon from "@mui/icons-material/Close";
interface LoginUI {
  statusMessage: string;
  loginUsername: string;
  closePopup: () => void;
  setLoginUsername: React.Dispatch<React.SetStateAction<string>>;
  loginPassword: string;
  setLoginPassword: React.Dispatch<React.SetStateAction<string>>;
  handleRegister: () => void;
  onSubmitLoginPass: () => void;
}
function SignIn(props: LoginUI) {
  const {
    statusMessage,
    loginUsername,
    closePopup,
    loginPassword,
    handleRegister,
    setLoginPassword,
    setLoginUsername,
    onSubmitLoginPass,
  } = props;

  return (
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
          color: statusMessage.includes("complete")
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
  );
}

export default SignIn;
