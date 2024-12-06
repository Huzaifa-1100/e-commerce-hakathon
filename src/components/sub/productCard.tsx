// components/ProductCard.tsx
import React, { FC } from "react";
import Image from "next/image";
import { AiOutlineHeart, AiOutlineEye } from "react-icons/ai";

interface ProductCardProps {
  imageSrc: string;
  name: string;
  price: number;
  discount?: number;
  rating: number;
  dPrice?: number;
}

const ProductCard: FC<ProductCardProps> = ({
  imageSrc,
  name,
  price,
  discount,
  rating,
  dPrice,
}) => {
  // Calculate discounted price
  const discountedPrice = discount ? price - (price * discount) / 100 : price;

  // Calculate rating percentage
  const ratingPercentage = (rating / 5) * 100;

  return (
    <div className="relative bg-white shadow-md rounded-lg overflow-hidden  h-[350px] group">
      {/* Discount Badge */}
      {discount && (
        <span className="absolute z-10 top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md">
          -{discount}%
        </span>
      )}

      {/* Product Image */}
      <div className="relative h-[250px] w-full flex justify-center items-center bg-secondary">
        <div className="w-[190px] h-[180px]">
          <Image
            className="w-full h-full object-contain"
            src={imageSrc}
            alt="Product Image"
            width={190}
            height={180}
          />
        </div>
        {/* Add to Cart Button */}
        <div className="absolute bottom-0 left-0 right-0 hidden w-full group-hover:flex justify-center items-center ">
          <button className=" w-full p-2 bg-button text-white text-sm font-medium rounded-md shadow-md hover:bg-secondary2 transition-all duration-300 delay-700">
            Add To Cart
          </button>
        </div>
      </div>

      {/* Action Icons */}
      <div className="absolute top-2 right-2 space-y-2 ">
        <button className="p-1 bg-primary rounded-full shadow-md hover:bg-secondary2 hover:text-secondary transition-all duration-500">
          <AiOutlineHeart size={22} />
        </button>
      </div>
      <div className="absolute top-12 right-2 space-y-2 ">
        <button className="p-1 bg-primary rounded-full shadow-md hover:bg-secondary2 hover:text-secondary transition-all duration-500">
          <AiOutlineEye size={22} />
        </button>
      </div>

      {/* Product Info */}
      <div className="py-4 px-2">
        <h2 className="poppins-medium text-text2">{name}</h2>

        {/* Price */}
        <div className="flex items-center space-x-2">
          <p className="poppins-medium text-secondary2">
            ${dPrice ? dPrice : discountedPrice.toFixed(2)}
          </p>

          <p className="poppins-medium text-button opacity-50 line-through">
            ${price}
          </p>
        </div>

        {/* Rating */}
        <div className="flex items-center mt-1">
        {Array.from({ length: 5 }).map((_, index) => (
         <span
           key={index}
           className={`text-[#FFAD33] ${
             index < rating ? "text-[#FFAD33]" : "text-text2 opacity-25"
           }`}
         >
           ★
         </span>
       ))}
          <span className="ml-2 text-sm text-gray-500">
            ({ratingPercentage.toFixed(0)})
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

