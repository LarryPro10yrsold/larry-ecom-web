import { Box } from "@mui/material";
import Product from "./";
interface ProductInterface {
  id: number;
  title: string;
  description: string;
  price: number;
}
interface RowOfProductsProps4 {
  isDarkMode: boolean;
  onAddToCart: () => void;
  products: ProductInterface[];
}
function RowOfProducts4(props: RowOfProductsProps4) {
  const { isDarkMode, onAddToCart, products } = props;

  const finalRowOfProduct = products.slice(12, 16);

  return (
    <Box sx={{ display: { xs: "block", sm: "flex" }, gap: "18px", my: "16px" }}>
      {finalRowOfProduct.map((product: any) => (
        <Product
          image={product.thumbnail}
          rates={product.rating}
          name={product.title}
          originalPrice={product.price}
          discountPercentage={product.discountPercentage}
          type={product.category}
          id={product.id}
        />
      ))}
    </Box>
  );
}

export default RowOfProducts4;
