"use client";
import { FC, useState } from "react";
import { contentPadding } from "@/styles";
import { headerItems } from "@/constants";
import logo from "../../public/logo.png";
import Image from "next/image";

const Header: FC = () => {
  const [isOpened, setIsOpened] = useState(false);
  const burgers = [1, 2, 3];

  return (
    <header
      className={`bg-dark-2 top-0 h-14 w-full flex items-center justify-between fixed z-10 ${contentPadding}`}
    >
      <div className="flex items-center justify-center gap-2">
        <Image src={logo} className="w-[36px]" alt="sifedine | pengi dev" />
        <h2 className="text-xl">Sifedine</h2>
      </div>
      <ul
        className={`sm:w-max w-full sm:bg-transparent bg-dark-3 flex sm:flex-row flex-col sm:relative sm:top-0 sm:gap-8 gap-4 fixed duration-200 ${
          isOpened ? "bottom-0" : "-bottom-52"
        } left-0 sm:rounded-none rounded-tl-lg rounded-tr-lg items-center py-3`}
      >
        {headerItems.map((item, index) => (
          <li key={index}>
            <a
              href={item.link}
              className="capitalize hover:text-primary duration-300"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
      <div
        className="sm:hidden block cursor-pointer"
        id="mobile-burger"
        onClick={() => setIsOpened(!isOpened)}
      >
        {burgers.map((burger, index: number) => (
          <span
            key={index}
            onClick={() => setIsOpened(false)}
            className={`w-[28px] h-[3px] bg-text-color block rounded-lg my-[4px] duration-300 ${
              isOpened ? "bg-primary" : ""
            }`}
          ></span>
        ))}
      </div>
    </header>
  );
};

export default Header;
