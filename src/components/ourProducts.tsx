import React from "react";
import CardHeading from "./sub/cardHeading";
import Arrows from "./sub/arrows";
import ProductCard from "./sub/productCard";
import { ourProductsData } from "../../utils/data";

const OurProducts = () => {
  return (
    <div className="wrapper mt-32">
      <div className="flex items-end justify-between">
        <CardHeading
          subHeading={"Our Products"}
          mainHeading={"Explore Our Products"}
          daysTime={false}
        />
        <Arrows />
      </div>
      {/* Product Cards */}
      <div className="my-10 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {ourProductsData.map((product, index) => (
          <ProductCard
            imageSrc={product.url}
            name={product.name}
            price={product.price}
            rating={product.rating}
            isNeew={product.new}
          />
        ))}
      </div>
    </div>
  );
};

export default OurProducts;
