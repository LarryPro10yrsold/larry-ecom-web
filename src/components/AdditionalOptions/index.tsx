import { Box } from "@mui/material";
import MiniOptions from "./MiniOptions";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PaidIcon from "@mui/icons-material/Paid";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import DiscountIcon from "@mui/icons-material/Discount";
interface BannerInterface {
  isDarkMode: boolean;
}
function AdditionalOptions(props: BannerInterface) {
  const { isDarkMode } = props;
  return (
    <Box
      sx={{
        display: { sm: "block", md: "flex" },
        justifyContent: "center",
        alignItems: "center",
        gap: "8px",
        mt: "32px",
        pl: { xs: "22px", sm: "80px", md: 0 },
        color: isDarkMode ? "white" : "black",
      }}
    >
      <Box
        sx={{
          display: { sm: "flex", md: "flex" },
          gap: { sm: "1px", md: 1 },
        }}
      >
        <MiniOptions
          title="Free Delivery"
          subTitle="Orders from all items"
          icon={
            <LocalShippingIcon
              sx={{ fontSize: { xs: "35px", sm: "30px", md: "35px" } }}
            />
          }
          isDarkMode={isDarkMode}
        />{" "}
        <MiniOptions
          title="Return & Refund"
          subTitle="Money back guarantee"
          icon={
            <PaidIcon
              sx={{ fontSize: { xs: "35px", sm: "30px", md: "35px" } }}
            />
          }
          isDarkMode={isDarkMode}
        />{" "}
      </Box>
      <Box
        sx={{
          display: { sm: "flex", md: "flex" },
          gap: { xs: "35px", sm: "1px", md: 1 },
        }}
      >
        <MiniOptions
          title="Member Discount"
          subTitle="On order over $99"
          icon={
            <DiscountIcon
              sx={{ fontSize: { xs: "35px", sm: "30px", md: "35px" } }}
            />
          }
          isDarkMode={isDarkMode}
        />{" "}
        <MiniOptions
          title="Support 24/7"
          subTitle="Contact us 24 hours a day"
          icon={
            <SupportAgentOutlinedIcon
              sx={{ fontSize: { xs: "35px", sm: "30px", md: "35px" } }}
            />
          }
          isDarkMode={isDarkMode}
        />
      </Box>{" "}
    </Box>
  );
}

export default AdditionalOptions;
