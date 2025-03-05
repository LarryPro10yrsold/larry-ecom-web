import { Box, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
interface ReviewInterface {
  username: string;
  review: string;
}
function Review(props: ReviewInterface) {
  const { username, review } = props;
  return (
    <Box sx={{ py: "8px" }}>
      <Typography sx={{ fontWeight: "510", fontSize: "18px" }}>
        {username}
      </Typography>
      <Typography
        sx={{
          display: "flex",
          gap: "1px",
          color: "#FFC300",
          fontSize: "5px",
        }}
      >
        <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon />{" "}
        <Typography sx={{ fontSize: "17px", color: "black", ml: "5px" }}>
          5
        </Typography>
      </Typography>
      <Typography
        sx={{
          width: {
            sm: "246.5px",
            md: "353px",
            lg: "423px",
            xl: "493px",
          },
        }}
      >
        {review}{" "}
      </Typography>
    </Box>
  );
}

export default Review;
