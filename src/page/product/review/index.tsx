import { Box, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarHalfIcon from "@mui/icons-material/StarHalf";
interface ReviewInterface {
  username: string;
  review: any;
  rates: number;
}
function Review(props: ReviewInterface) {
  const { username, review, rates } = props;
  const renderRates = () => {
    const stars = [];
    for (let i = 0; i <= 4; i++) {
      if (i < Math.floor(rates)) {
        stars.push(<StarIcon key={i} />);
      } else if (i < rates) {
        stars.push(<StarHalfIcon key={i} />);
      } else {
        stars.push(<StarBorderIcon key={i} />);
      }
    }
    return (
      <Box sx={{ display: "flex", mx: "28px", color: "#FFC300 " }}>{stars}</Box>
    );
  };
  return (
    <Box sx={{ py: "8px" }}>
      <Typography sx={{ fontWeight: "510", fontSize: "18px" }}>
        {username}
      </Typography>
      <Typography>
        {" "}
        {renderRates()}
        {rates}
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
