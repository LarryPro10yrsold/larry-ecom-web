import { Box, Typography } from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

function MiniOptions(props: any) {
  const { title, subTitle } = props;
  return (
    <Box
      sx={{
        py: "24px",
        px: "16px",
        backgroundColor: "rgb(243 244 246)",
        display: "flex",
        gap: "8px",
        width: "337px",
      }}
    >
      <LocalShippingIcon sx={{ fontSize: "35px" }} />
      <Box>
        <Typography sx={{ fontSize: "20px", lineHeight: "28px" }}>
          {title}
        </Typography>{" "}
        <Typography sx={{ color: "rgb(75 85 99)" }}>{subTitle}</Typography>
      </Box>
    </Box>
  );
}

export default MiniOptions;
