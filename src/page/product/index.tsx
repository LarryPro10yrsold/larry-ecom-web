import { Box, Divider, Typography } from "@mui/material";
import { useState } from "react";
import Header from "../../components/Header";
import Review from "./review";
import Information from "./information";
import RowOfProducts4 from "../../components/Products/Product/RowOfProducts4";
import CreditBanner from "../../components/CreditBanner";

function Product() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [numberOfProducts, setNumberOfProducts] = useState(0);

  const onToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Box>
      <Header
        isDarkMode={isDarkMode}
        onToggleDarkMode={onToggleDarkMode}
        numberOfProducts={numberOfProducts}
      />
      <Box
        sx={{
          display: { xs: "block", sm: "flex" },
          marginTop: "32px",
          justifyContent: "center",
          fontWeight: "500",
          gap: { xs: "15px", sm: "15px", md: "4px" },
          px: { xs: "15px", sm: 0 },
        }}
      >
        <Box
          sx={{
            display: { sm: "block", md: "flex" },
            ml: { sm: "10px", md: "0px" },
            gap: { xs: "15px", sm: "15px", md: "20px" },
          }}
        >
          <Box sx={{ width: { md: "300px", lg: "493px" }, mt: "100px" }}>
            <img
              src="src/assets/monke.jpeg"
              alt="e"
              style={{ width: "100%" }}
            />
          </Box>
          <Information />{" "}
        </Box>
        <Box sx={{ py: { xs: "20px", sm: 0 } }}>
          <Typography sx={{ fontWeight: "510", fontSize: "1.7rem" }}>
            Reviews
          </Typography>
          <Review
            username="🦖DinoNuggets4Life"
            review={
              "Oogway really said ‘There are no accidents’ but my whole life feels like one. Still, 10/10 wisdom, would get confused again. 🤔💀"
            }
          />
          <Review
            username="🐢SlowAndSteady99"
            review={
              "Tried to follow Oogway’s advice and find inner peace. Ended up falling asleep under a tree. Best nap of my life. 🌳😴"
            }
          />
          <Review
            username="🍜KungFuNoodles"
            review={
              "Bro dipped into the Spirit Realm mid-sentence like my dad when I ask for money. Absolute legend. 💸👀"
            }
          />
          <Review
            username="🕰️ProcrastinationKing"
            review={
              "‘Today is a gift’ sounds great until you realize rent is due. Thanks, Oogway, very helpful. 😭🎁"
            }
          />
          <Review
            username="🌸PetalPoof"
            review={
              "Master Oogway turned into flower petals and floated away… meanwhile, I trip on flat ground. Some of us just aren’t built for greatness. 🍃😔"
            }
          />
        </Box>
      </Box>
      <Box
        sx={{ display: "flex", marginTop: "32px", justifyContent: "center" }}
      >
        <Divider sx={{ width: "100%" }} />
      </Box>{" "}
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ mt: "32px" }}>
          <Typography
            fontSize="36px"
            fontWeight="600"
            sx={{ ml: { xs: "15px", sm: 0 } }}
          >
            New Arrivals
          </Typography>
          <RowOfProducts4
            onAddToCart={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        </Box>
      </Box>{" "}
      <CreditBanner />
    </Box>
  );
}

export default Product;
