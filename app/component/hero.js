import React from "react";
import Image from "next/image";
import logo from "../asset/logo.png";
export default function Hero() {
  return (
    <section className="test-background bg-screen lg:bg-cover  bg-no-repeat h-full lg:h-screen">
      <div className="container flex  flex-col justify-end  mx-auto lg:flex-row ">
        <div className="flex border-4   border-gray-200 border-divi  b flex-col justify-end  p-6  rounded-sm lg:text-left">
          <h1 className="font-ustom text-xl text-right text-gray-50 font-bold">
            Bill Getes
          </h1>
          <p className="font-ustom text-right text-gray-50 font-bold">
            I, Nikula Tesla, the ultimate giga-bra
          </p>
          <p className="font-ustom text-right text-gray-50 font-bold">
            I, Nikula Tesla, the ultimate giga-bra
          </p>{" "}
          <p className="font-ustom text-right text-gray-50 font-bold">
            I, Nikula Tesla, the ultimate giga-bra
          </p>
        </div>
        <div className="flex  items-center justify-center ">
          <Image
            src={logo}
            alt=""
            className="object-contain"
            width={300}
            height={260}
          />
        </div>
      </div>
    </section>
  );
}
