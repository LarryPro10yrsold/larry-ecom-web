import { Box, Divider, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import Header from "../../components/Header";
import Review from "./review";
import Information from "./information";
import CreditBanner from "../../components/CreditBanner";
import Product from "../../components/Products/Product";
import axios from "axios";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const { productId } = useParams();
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
    axios
      .get(`https://dummyjson.com/products/${productId}`)
      .then((res: { data: any }) => {
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
          {productDetail?.reviews?.map(
            (review: {
              reviewerName: string;
              comment: string;
              rating: number;
            }) => {
              return (
                <Review
                  username={review.reviewerName}
                  review={review.comment}
                  rates={review.rating}
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
            Similar Products
          </Typography>{" "}
          <Box sx={{ display: { sm: "flex", md: "flex" }, gap: "18px" }}>
            {productId.SimilarProducts.map(() => {
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
            })}
          </Box>
        </Box>
      </Box>{" "}
      <CreditBanner />
    </Box>
  );
}

export default ProductDetail;
