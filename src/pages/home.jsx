import React from "react";
import Navbar from "../features/Navbar/Navbar";
import { ProductList } from "../features/product-list/ProductList";
export const Home = () => {
  return (
    <div>
      <Navbar>
        <ProductList />
      </Navbar>
    </div>
  );
};
