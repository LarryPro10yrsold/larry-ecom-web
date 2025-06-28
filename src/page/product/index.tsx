import { Box, Divider, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import Header from "../../components/Header";
import Review from "./review";
import Information from "./information";
import CreditBanner from "../../components/CreditBanner";
import Product from "../../components/Products/Product/";
import axios from "axios";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const { productId } = useParams();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [numberOfProducts, setNumberOfProducts] = useState(0);
  const [productDetail, setProductDetail] = useState<{
    description: string;
    discountPercentage: unknown;
    brand: string;
    stock: number;
    reviews: {
      reviewerName: string;
      comment: string;
      rating: number;
    }[];
    category: string;
    thumbnail: string;
    title: string;
  } | null>(null);
  const [similarProducts, setSimilarProducts] = useState<
    { category: string; product: string }[]
  >([]);

  // console.log("product detail");

  const onToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    console.log("Fetching product detail for ID:", productId);
    axios
      .get(`https://dummyjson.com/products/${productId}`)
      .then((res: { data: any }) => {
        setProductDetail(res.data);
        console.log("Updated productDetail:", productDetail);
      });
  }, [productId]);

  useEffect(() => {
    if (productDetail?.category) {
      axios
        .get(
          `https://dummyjson.com/products?limit=24&category=${productDetail?.category}`
        )
        .then((res: { data: any }) => {
          setSimilarProducts(res.data.products);
        });
      console.log(productDetail?.category);
    }
  }, [productDetail?.category]);
  const filteredProducts = similarProducts.filter(
    (product) => product.category === productDetail?.category
  );

  return (
    <Box
      sx={{
        backgroundColor: isDarkMode ? "rgb(30 41 59)" : "white",
        color: isDarkMode ? "white" : "black",
      }}
    >
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
          color: isDarkMode ? "white" : "black",
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
              src={productDetail?.thumbnail}
              alt={productDetail?.title}
              style={{ width: "100%" }}
            />
          </Box>
          <Information
            description={productDetail?.description ?? ""}
            title={productDetail?.title ?? ""} // ?? = OR
            discountPercentage={productDetail?.discountPercentage ?? ""}
            brand={productDetail?.brand ?? ""}
            stock={productDetail?.stock ?? 0}
            essence={productDetail?.category ?? ""}
          />
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
        sx={{
          display: "flex",
          marginTop: "32px",
          justifyContent: "center",
          color: isDarkMode ? "white" : "black",
        }}
      >
        <Divider sx={{ width: "100%" }} />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ mt: "32px" }}>
          <Typography
            fontSize="36px"
            fontWeight="600"
            sx={{ ml: { xs: "15px", sm: 0 } }}
          >
            Similar Products
          </Typography>
          <Box sx={{ display: { sm: "flex", md: "flex" }, gap: "18px" }}>
            {filteredProducts.map((product: any) => (
              <Product
                key={product?.id}
                name={product?.title}
                image={product?.thumbnail}
                rates={product?.rating}
                originalPrice={product?.price}
                discountPercentage={product?.discountPercentage}
                type={product?.category}
                id={product?.id}
              />
            ))}
          </Box>
        </Box>
      </Box>
      <CreditBanner />
    </Box>
  );
}

export default ProductDetail;
