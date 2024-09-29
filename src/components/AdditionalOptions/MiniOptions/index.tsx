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
        width: {
          xs: "80%",
          sm: "38.3%",
          md: "212px",
          lg: "312px",
          xl: "337px",
        },
        m: { sm: "4px", md: 0 },
        ml: { xs: "25px", sm: 0 },
        mt: { xs: "10px", sm: 0 },
      }}
    >
      {icon}
      <Box>
        <Typography
          sx={{
            fontSize: { xs: "20px", sm: "18px", md: "18px", lg: "20px" },
            lineHeight: { sm: "25px", md: "25px", lg: "28px" },
          }}
        >
          {title}
        </Typography>{" "}
        <Typography
          sx={{
            color: "rgb(75 85 99)",
            fontSize: { xs: "18px", sm: "14px", md: "14px", lg: "20px" },
          }}
        >
          {subTitle}
        </Typography>
      </Box>
    </Box>
  );
}

export default MiniOptions;
