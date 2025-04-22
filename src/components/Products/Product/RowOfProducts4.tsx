import { Box } from "@mui/material";
import Product from ".";
import { useEffect, useState } from "react";
import axios from "axios";

function RowOfProducts() {
  const [similarProducts, setSimilarProducts] = useState([]);
  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/category/beauty`)
      .then((res: { data: any }) => {
        setSimilarProducts(res.data.products);
      });
  }, []);

  return (
    <Box sx={{ display: { xs: "block", sm: "flex" }, gap: "18px", my: "16px" }}>
      {similarProducts.slice(0, 4).map((product: any) => (
        <Product
          image={product.thumbnail}
          rates={product.rating}
          name={product.title}
          originalPrice={product.price}
          discountPrice={product.discountPercentage}
          type={product.category}
          id={product.id}
        />
      ))}
    </Box>
  );
}

export default RowOfProducts;
