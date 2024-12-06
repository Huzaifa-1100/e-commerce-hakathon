import React from "react";
import CardHeading from "./sub/cardHeading";
import ViewButton from "./sub/viewButton";
import ProductCard from "./sub/productCard";
import { bsProducst } from "../../utils/data";

const BestSellingProducts = () => {
  return (
    <div className="wrapper mt-24">
      {/* heading section */}
      <div className="flex items-end justify-between">
        <CardHeading
          subHeading={"This Month"}
          mainHeading={"Best Selling Products"}
          daysTime={false}
        />
        <ViewButton text="View All" />
      </div>
      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        {bsProducst.map((product, index) => (
          <ProductCard
            key={index}
            imageSrc={product.url}
            name={product.name}
            price={product.price}
            rating={product.rating}
            dPrice={product.dis}
            isNeew={false}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSellingProducts;
