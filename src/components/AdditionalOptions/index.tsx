import { Box } from "@mui/material";
import MiniOptions from "./MiniOptions";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PaidIcon from "@mui/icons-material/Paid";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";

function AdditionalOptions() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "8px",
        mt: "32px",
      }}
    >
      <MiniOptions
        title="Free Delivery"
        subTitle="Orders from all items"
        icon={<LocalShippingIcon sx={{ fontSize: "35px" }} />}
      />{" "}
      <MiniOptions
        title="Return & Refund"
        subTitle="Money back guarantee"
        icon={<PaidIcon sx={{ fontSize: "35px" }} />}
      />{" "}
      <MiniOptions
        title="Member Discount"
        subTitle="On order over $99"
        icon={<img src="src/assets/discount.svg" height="36px" width="36px" />}
      />{" "}
      <MiniOptions
        title="Support 24/7"
        subTitle="Contact us 24 hours a day"
        icon={<SupportAgentOutlinedIcon sx={{ fontSize: "35px" }} />}
      />
    </Box>
  );
}

export default AdditionalOptions;
