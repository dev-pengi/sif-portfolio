"use client";
import { FC } from "react";
import Image from "next/image";
import blob from "../../public/blob.svg";
import dev from "../../public/dev.png";
import { contentPadding } from "@/styles";
import { aboutDescription, quotes } from "@/constants";
import { Tilt } from "react-tilt";

const About: FC = () => {
  const defaultTiltOptions = {
    reverse: false, // reverse the tilt direction
    max: 10, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: 'Y', // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };
  return (
    <section className="bg-dark-2 mt-[150px] py-6" id="about">
      <h3 className="capitalize font-black text-center text-3xl">about me</h3>
      <div
        className={`${contentPadding} max-w-[1600px] mx-auto flex lg:flex-row flex-col items-center justify-between mt-[10px]`}
      >
        <div className="relative w-full max-w-[400px]">
          <Image src={blob} alt="blob shape svg" className="w-full" />
          <Image
            src={dev}
            alt="dev vector icon"
            className="w-[150px] absolute top-0 bottom-0 right-0 left-0 m-auto block"
          />
        </div>
        <p className="text-lg font-medium break-words whitespace-pre-wrap lg:text-start text-center">
          {aboutDescription}
        </p>
      </div>

      <h3 className="capitalize font-black text-center text-3xl lg:mt-[20px] mt-[60px]">
        quotes
      </h3>

      <div
        className={`${contentPadding} grid grid-cols-quote-card gap-9 mt-[60px] max-w-[1600px] mx-auto`}
      >
        {quotes.map((quote, index: number) => (
          <Tilt options={defaultTiltOptions}>
            <div
              key={index}
              className="bg-dark-3 px-[16px] py-[14px] rounded-md duration-300"
            >
              <p>“{quote}”</p>
              <h5 className="mt-3 flex justify-end italic font-light text-[15px]">
                - sifedine
              </h5>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default About;
