import { ProductItem } from "../renderPropPattern/ProductItem";
import WithToggles from "./WithToggles";
import { faker } from "@faker-js/faker";

const products = Array.from({ length: 20 }, () => {
  return {
    productName: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: faker.commerce.price(),
  };
});

// LATER: Let's say we got this component from a 3rd-party library,
// and can't change it. But we still want to add the 2 toggle
// functionalities to it
function ProductList({ title, items }) {
  return (
    <ul className="list">
      {items.map((product) => (
        <ProductItem key={product.productName} product={product} />
      ))}
    </ul>
  );
}

const ProductListWithToggles = WithToggles(ProductList);
function HOCExample() {
  return <ProductListWithToggles title="Products HOC" items={products} />;
}

export default HOCExample;
