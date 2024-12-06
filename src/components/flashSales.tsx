import React from "react";
import { FlashSale } from "../../utils/data";
import ProductCard from "./sub/productCard";
import CardHeading from "./sub/cardHeading";
import ViewButton from "./sub/viewButton";
import Arrows from "./sub/arrows";

const FlashSales = () => {
  return (
    <div className="wrapper mt-24">
      {/* Top Side */}
      <div className="flex items-end justify-between">
        <CardHeading
          subHeading={"Today's"}
          mainHeading={"Flash Sales"}
          daysTime={true}
        />
        
        <Arrows />
      </div>
      {/* Bottom cards */}
      <div className="my-10 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
        {FlashSale.map((product, index) => (
          <ProductCard
            key={index}
            imageSrc={product.imageSrc}
            name={product.name}
            price={product.price}
            discount={product.discount}
            rating={product.rating}
          />
        ))}
      </div>

      <div className="flex my-20 justify-center ">
        <ViewButton text="View All Products" />
      </div>
    </div>
  );
};

export default FlashSales;
