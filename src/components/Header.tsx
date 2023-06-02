"use client";
import { FC } from "react";
import { contentPadding } from "@/styles";
import { headerItems } from "@/constants";
import logo from "../../public/logo.png";
import Image from "next/image";

const Header: FC = () => {
  return (
    <header
      className={`bg-dark-2 top-0 h-14 w-full flex items-center justify-between fixed z-10 ${contentPadding}`}
    >
      <div className="flex items-center justify-center gap-2">
        <Image src={logo} className="w-[36px]" alt="sifedine | pengi dev"/>
        <h2 className="text-xl">Sifedine</h2>
      </div>
      <ul className="flex items-center gap-8">
        {headerItems.map((item, index) => (
          <li key={index}>
            <a href={item.link} className="capitalize hover:text-primary duration-300">
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
