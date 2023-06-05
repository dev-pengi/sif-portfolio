"use client";
import { FC } from "react";
import logo from "../../public/logo.png";
import Image from "next/image";
import { contentPadding } from "@/styles";

const Footer: FC = () => {
  return (
    <footer className="bg-dark">
      <div
        className={`flex gap-3 py-2 items-center justify-between ${contentPadding}`}
      >
        <Image src={logo} alt="sifedine" className="w-12" />
        <p className="text-text-color-light">
          Made with Love and{" "}
          <a href="https://nextjs.org" className="text-primary">
            Nexjs
          </a>{" "}
          by{" "}
          <a href="https://github.com/dev-pengi" className="text-primary">
            Sifedine
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
