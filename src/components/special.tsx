import React from "react";
import special from "@/constants/special.data";

export default function excellence() {
  return (
    <div>
      <span className="py-8">
        <h1 className="flex justify-center font-serif text-4xl py-8">
          Excellence in Every Morsel
        </h1>
        <p className="flex justify-center text-center font-serif">
          Rasoraj has grown to be synonymous with premium quality Indian Sweets.
          It has created a niche for itself for being one of <br /> the giftable
          brands in Kolkata today.
        </p>
      </span>

      <span className="flex my-8">
        <img
          className="w-screen"
          src="/banner_2.png"
          alt=""
        />
      </span>

      {special.map((item, index) => index %2==0 ? (
        <div key={index} className="grid grid-cols-2 gap-4 py-16 mx-8">
          <span className="flex justify-center">
            <img className="h-80 rounded-2xl" src={item.imgUrl} alt="" />
          </span>
          <span className="flex flex-col justify-center gap-4 px-20">
            <h1 className="text-2xl font-serif">{item.title}</h1>
            <p>{item.description}</p>
          </span>
        </div>
      ):(
        <div key={index} className="grid grid-cols-2 gap-4 py-16 mx-8">
          <span className="flex flex-col justify-center gap-4 px-20">
            <h1 className="text-2xl font-serif">{item.title}</h1>
            <p>{item.description}</p>
          </span>
          <span className="flex justify-center">
            <img className="h-80 rounded-2xl" src={item.imgUrl} alt="" />
          </span>
        </div>
      ))}
    </div>
  );
}
