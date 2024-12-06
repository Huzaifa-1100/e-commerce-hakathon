import React from "react";
import { FlashSale } from "../../utils/data";
import ProductCard from "./sub/productCard";
import { Button } from "./ui/button";
import CardHeading from "./sub/cardHeading";

const FlashSales = () => {
  return (
    <div className="wrapper mt-24">
      {/* Top Side */}
      <CardHeading
        subHeading={"Today's"}
        mainHeading={"Flash Sales"}
        daysTime={true}
        arrowType={true}
      />

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

      <div className="flex my-20 ">
        <Button className="bg-button2 mx-auto hover:bg-secondary hover:text-button2 text-text py-6 px-12">
          View All Products
        </Button>
      </div>
    </div>
  );
};

export default FlashSales;