import { Box, Divider, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import Header from "../../components/Header";
import Review from "./review";
import Information from "./information";
import CreditBanner from "../../components/CreditBanner";
import Product from "../../components/Products/Product";
import axios from "axios";

const product = {
  image: {
    src: "src/assets/monke.jpeg",
    alt: "Product Image",
  },
  information: {
    title: "Legendary Turtle",
    description:
      "Master Oogway is an ancient and wise tortoise, the legendary Grand Master of the Jade Palace in Kung Fu Panda. Known for his deep wisdom, calm demeanor, and mastery of kung fu, he serves as a mentor to Master Shifu and the Furious Five. Oogway believes in destiny and the power of inner peace, often speaking in profound yet cryptic sayings. His most famous lesson— 'Yesterday is history, tomorrow is a mystery, but today is a gift. That is why it is called the present.'—continues to inspire generations. Even after ascending to the Spirit Realm, his teachings live on. 🐢✨",
    originalPrice: 50,
    stock: 12,
    essence: "turtles",
    brand: "legend",
    discountPrice: 25,
  },
  reviews: [
    {
      username: "🦖DinoNuggets4Life",
      review:
        "Oogway really said ‘There are no accidents’ but my whole life feels like one. Still, 10/10 wisdom, would get confused again. 🤔💀",
    },
    {
      username: "🐢SlowAndSteady99",
      review:
        "Tried to follow Oogway’s advice and find inner peace. Ended up falling asleep under a tree. Best nap of my life. 🌳😴",
    },
    {
      username: "🍜KungFuNoodles",
      review:
        "Bro dipped into the Spirit Realm mid-sentence like my dad when I ask for money. Absolute legend. 💸👀",
    },
    {
      username: "🕰️ProcrastinationKing",
      review:
        "‘Today is a gift’ sounds great until you realize rent is due. Thanks, Oogway, very helpful. 😭🎁",
    },
    {
      username: "🌸PetalPoof",
      review:
        "Master Oogway turned into flower petals and floated away… meanwhile, I trip on flat ground. Some of us just aren’t built for greatness. 🍃😔",
    },
  ],
  newArrivals: [
    {
      name: "Oogway Poster",
      price: 16,
      currency: "USD",
      image: "src/assets/oogway.jpeg",
      type: "poster",
      rates: 5,
      discountPrice: 6,
    },
    {
      name: "Oogway Tea Set",
      price: 40,
      currency: "USD",
      image: "src/assets/oogway's tea.jpg",
      type: "chinaware",
      rates: 5,
      discountPrice: 25,
    },
  ],
  featuredItems: [
    {
      name: "Oogway's Wisdom Scroll",
      price: 20,
      currency: "USD",
      image: "src/assets/scroll.jpg",
      type: "collectible",
      rates: 4.8,
      discountPrice: 12,
    },
    {
      name: "Oogway's Staff",
      price: 60,
      currency: "USD",
      image: "src/assets/staff.jpg",
      type: "replica",
      rates: 5,
      discountPrice: 45,
    },
  ],
  bestSellers: [
    {
      name: "Oogway's Meditation Cushion",
      price: 35,
      currency: "USD",
      image: "src/assets/meditating carpet.jpg",
      type: "home decor",
      rates: 4.9,
      discountPrice: 28,
    },
    {
      name: "Kung Fu Panda Artbook",
      price: 50,
      currency: "USD",
      image: "src/assets/kung fu.jpg",
      type: "book",
      rates: 5,
      discountPrice: 38,
    },
  ],
  limitedEdition: [
    {
      name: "Golden Oogway Statue",
      price: 150,
      currency: "USD",
      image: "src/assets/oogwayy.jpg",
      type: "statue",
      rates: 5,
      discountPrice: 120,
    },
    {
      name: "Spirit Realm Lantern",
      price: 80,
      currency: "USD",
      image: "src/assets/lantern.jpg",
      type: "home decor",
      rates: 4.7,
      discountPrice: 65,
    },
  ],
  fanFavorites: [
    {
      name: "Oogway's Tea Sampler",
      price: 25,
      currency: "USD",
      image: "src/assets/cool.jpg",
      type: "beverage",
      rates: 4.9,
      discountPrice: 18,
    },
    {
      name: "Oogway Quote T-Shirt",
      price: 30,
      currency: "USD",
      image: "src/assets/quote.jpg",
      type: "apparel",
      rates: 4.8,
      discountPrice: 22,
    },
  ],
};

function ProductDetail() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [numberOfProducts, setNumberOfProducts] = useState(0);
  const [productDetail, setProductDetail] = useState<any>({});

  const onToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    // 1. Fetch the product from the api
    // 2. set the data to the state productDetail by using setProductDetail
    // 3. rendering all the fields inside productDetail into the UI
    // Example: src={productDetail.thumbnail}
    // Example: title={productDetail.title}
    console.log("working");
    axios.get("https://dummyjson.com/products/1").then((res: { data: any }) => {
      console.log(res.data);

      setProductDetail(res.data);
    });
  }, []);

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
              src={productDetail.thumbnail}
              alt={product.image.alt}
              style={{ width: "100%" }}
            />
          </Box>
          <Information
            description={productDetail.description}
            title={productDetail.title}
            discountPercentage={productDetail.discountPercentage}
            brand={productDetail.brand}
            stock={productDetail.stock}
            essence={productDetail.category}
          />{" "}
        </Box>
        <Box sx={{ py: { xs: "20px", sm: 0 } }}>
          <Typography sx={{ fontWeight: "510", fontSize: "1.7rem" }}>
            Reviews
          </Typography>
          {product.reviews.map(
            (review: { username: string; review: unknown }) => {
              return (
                <Review
                  username={review.username}
                  review={review.review}
                  rates={productDetail.reviews.rating}
                />
              );
            }
          )}
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
          </Typography>{" "}
          <Box sx={{ display: { sm: "flex", md: "flex" }, gap: "18px" }}>
            {product.newArrivals.map(
              (newArrival: {
                name: unknown;
                image: string;
                rates: number;
                price: number;
                discountPrice: number;
                type: string;
              }) => {
                return (
                  <Product
                    name={newArrival.name}
                    image={newArrival.image}
                    rates={newArrival.rates}
                    originalPrice={newArrival.price}
                    discountPrice={newArrival.discountPrice}
                    type={newArrival.type}
                  />
                );
              }
            )}
          </Box>
        </Box>
      </Box>{" "}
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ mt: "32px" }}>
          <Typography
            fontSize="36px"
            fontWeight="600"
            sx={{ ml: { xs: "15px", sm: 0 } }}
          >
            Featured Items
          </Typography>{" "}
          <Box sx={{ display: { sm: "flex", md: "flex" }, gap: "18px" }}>
            {product.featuredItems.map(
              (featuredItem: {
                name: unknown;
                image: string;
                rates: number;
                price: number;
                discountPrice: number;
                type: string;
              }) => {
                return (
                  <Product
                    name={featuredItem.name}
                    image={featuredItem.image}
                    rates={featuredItem.rates}
                    originalPrice={featuredItem.price}
                    discountPrice={featuredItem.discountPrice}
                    type={featuredItem.type}
                  />
                );
              }
            )}
          </Box>
        </Box>
      </Box>{" "}
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ mt: "32px" }}>
          <Typography
            fontSize="36px"
            fontWeight="600"
            sx={{ ml: { xs: "15px", sm: 0 } }}
          >
            Best Sellers
          </Typography>{" "}
          <Box sx={{ display: { sm: "flex", md: "flex" }, gap: "18px" }}>
            {product.bestSellers.map(
              (bestSeller: {
                name: unknown;
                image: string;
                rates: number;
                price: number;
                discountPrice: number;
                type: string;
              }) => {
                return (
                  <Product
                    name={bestSeller.name}
                    image={bestSeller.image}
                    rates={bestSeller.rates}
                    originalPrice={bestSeller.price}
                    discountPrice={bestSeller.discountPrice}
                    type={bestSeller.type}
                  />
                );
              }
            )}
          </Box>
        </Box>
      </Box>{" "}
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ mt: "32px" }}>
          <Typography
            fontSize="36px"
            fontWeight="600"
            sx={{ ml: { xs: "15px", sm: 0 } }}
          >
            Limited Edition
          </Typography>{" "}
          <Box sx={{ display: { sm: "flex", md: "flex" }, gap: "18px" }}>
            {product.limitedEdition.map(
              (limitedEdition: {
                name: unknown;
                image: string;
                rates: number;
                price: number;
                discountPrice: number;
                type: string;
              }) => {
                return (
                  <Product
                    name={limitedEdition.name}
                    image={limitedEdition.image}
                    rates={limitedEdition.rates}
                    originalPrice={limitedEdition.price}
                    discountPrice={limitedEdition.discountPrice}
                    type={limitedEdition.type}
                  />
                );
              }
            )}
          </Box>
        </Box>
      </Box>{" "}
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ mt: "32px" }}>
          <Typography
            fontSize="36px"
            fontWeight="600"
            sx={{ ml: { xs: "15px", sm: 0 } }}
          >
            Fan Favourites
          </Typography>{" "}
          <Box sx={{ display: { sm: "flex", md: "flex" }, gap: "18px" }}>
            {product.fanFavorites.map(
              (fanFavorite: {
                name: unknown;
                image: string;
                rates: number;
                price: number;
                discountPrice: number;
                type: string;
              }) => {
                return (
                  <Product
                    name={fanFavorite.name}
                    image={fanFavorite.image}
                    rates={fanFavorite.rates}
                    originalPrice={fanFavorite.price}
                    discountPrice={fanFavorite.discountPrice}
                    type={fanFavorite.type}
                  />
                );
              }
            )}
          </Box>
        </Box>
      </Box>{" "}
      <CreditBanner />
    </Box>
  );
}

export default ProductDetail;
