import { Box, Input, Typography } from "@mui/material";
import EditNoteIcon from "@mui/icons-material/EditNote";
import CloseIcon from "@mui/icons-material/Close";
interface RegisterUI {
  signInUsername: string;
  setSignInUsername: ;
  newPassword: string;
  setNewPassword: ;
  confirmNewPassword: string;
  setConfirmNewPassword: ;
  statusMessage: string;
  OnSubmitCheckPass: () => void;
  HandleGoBack: () => void;
  closePopup2: () => void;
}
function SignInUI(props: RegisterUI) {
  const {
    signInUsername,
    setSignInUsername,
    setNewPassword,
    newPassword,
    statusMessage,
    OnSubmitCheckPass,
    HandleGoBack,
    confirmNewPassword,
    setConfirmNewPassword,
    closePopup2,
  } = props;
  return (
    <Box
      sx={{
        position: "absolute",
        top: "36%",
        left: "40%",
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

      <Box sx={{ mt: 1, display: "flex", flexDirection: "column" }}>
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
            color: statusMessage.includes("Login failed.")
              ? "rgb(22 163 74)"
              : "rgb(220 38 38)",
          }}
        >
          {" "}
          {statusMessage}
        </Typography>

        <Box
          onClick={() => {
            OnSubmitCheckPass();
          }}
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
  );
}

export default SignInUI;
