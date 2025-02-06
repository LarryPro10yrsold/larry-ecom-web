import { Box, Typography } from "@mui/material";
interface BannerInterface {
  isDarkMode: boolean;
  title: string;
  subTitle: string;
  icon: any;
}

function MiniOptions(props: BannerInterface) {
  const { title, subTitle, icon, isDarkMode } = props;
  return (
    <Box
      sx={{
        py: "24px",
        px: "16px",
        backgroundColor: isDarkMode ? "rgb(71 85 105)" : "rgb(227 237 246)",
        display: "flex",
        gap: "5px",
        width: {
          xs: "80%",
          sm: "43.3%",
          md: "239px",
          lg: "312px",
          xl: "337px",
        },
        m: { sm: "4px", md: 0 },
        ml: { xs: "25px", sm: 0 },
        mt: { xs: "10px", sm: 0 },
        color: isDarkMode ? "white" : "black",
      }}
    >
      {icon}
      <Box>
        <Typography
          sx={{
            color: isDarkMode ? "white" : "black",
            fontSize: { xs: "20px", sm: "18px", md: "18px", lg: "20px" },
            lineHeight: { sm: "25px", md: "25px", lg: "28px" },
          }}
        >
          {title}
        </Typography>{" "}
        <Typography
          sx={{
            color: isDarkMode ? "white" : "black",
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
