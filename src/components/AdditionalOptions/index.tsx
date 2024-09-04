import { Box } from "@mui/material";
import MiniOptions from "./MiniOptions";

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
      <MiniOptions title="Free Delivery" subTitle="Orders from all items" />{" "}
      <MiniOptions title="Return & Refund" subTitle="Money back guarantee" />{" "}
      <MiniOptions title="Member Discount" subTitle="On order over $99" />{" "}
      <MiniOptions title="Support 24/7" subTitle="Contact us 24 hours a day" />
    </Box>
  );
}

export default AdditionalOptions;
