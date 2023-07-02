import { Product } from "../lib/slices/createProductSliceTmp";
import { ProductCard } from "./ProductCard";

interface Props {
  products: Product[];
}
const ProductList = ({ products }: Props) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 mt-8">
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
