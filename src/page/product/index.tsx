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
  const [similarProducts, setSimilarProducts] = useState([]);

  console.log("product detail");

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
  }, [productId]); // Fetch again when productId in URL changes

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/category/beauty`)
      .then((res: { data: any }) => {
        setSimilarProducts(res.data.products.slice(0, 4)); // Show first 4 similar products
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
              src={productDetail?.thumbnail}
              alt={productDetail?.title}
              style={{ width: "100%" }}
            />
          </Box>
          <Information
            description={productDetail?.description}
            title={productDetail?.title}
            discountPercentage={productDetail?.discountPercentage}
            brand={productDetail?.brand}
            stock={productDetail?.stock}
            essence={productDetail?.category}
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
        sx={{ display: "flex", marginTop: "32px", justifyContent: "center" }}
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
            {similarProducts.map((product: any) => (
              <Product
                key={product.id}
                name={product.title}
                image={product.thumbnail}
                rates={product.rating}
                originalPrice={product.price}
                discountPrice={product.discountPercentage}
                type={product.category}
                id={product.id}
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
