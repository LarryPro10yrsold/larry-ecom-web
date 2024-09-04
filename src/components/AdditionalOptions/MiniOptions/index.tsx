import { Box, Typography } from "@mui/material";

function MiniOptions(props: any) {
  const { title, subTitle, icon } = props;
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
      {icon}
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
