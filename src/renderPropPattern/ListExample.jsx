import { faker } from "@faker-js/faker";
import { ProductItem } from "./ProductItem";
import { CompanyItem } from "./CompanyItem";
import { List } from "./List";

export function ListExample() {
  const products = Array.from({ length: 20 }, () => {
    return {
      productName: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      price: faker.commerce.price(),
    };
  });

  const companies = Array.from({ length: 15 }, () => {
    return {
      companyName: faker.company.name(),
      phrase: faker.company.catchPhrase(),
    };
  });

  return (
    <>
      <List
        title="Products"
        items={products}
        render={(product) => (
          <ProductItem key={product.productName} product={product} />
        )}
      />

      <List
        title="Companies"
        items={companies}
        render={(company) => (
          <CompanyItem
            key={company.companyName}
            company={company}
            defaultVisibility={false}
          />
        )}
      />
    </>
  );
}
