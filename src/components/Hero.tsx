"use client";
import "animate.css";

import { hero } from "@/constants";
import { buttonStyle, contentPadding, gardient, heroIcons } from "@/styles";
import { FC, useEffect, useRef } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import Typewriter from "typewriter-effect/dist/core";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Hero: FC = () => {
  const contentRef = useRef(null);
  const subContentRef = useRef(null);

  useEffect(() => {
    const typewriter1 = new Typewriter(contentRef.current, {
      delay: 10,
      cursor: "",
    });
    const typewriter2 = new Typewriter(subContentRef.current, {
      delay: 30,
      cursor: "_",
    });

    typewriter1
      .typeString(hero.content)
      .callFunction(() => {
        typewriter2
          .typeString(hero.subContent)
          .callFunction(() => {
            typewriter1.stop();
            typewriter2.stop();
          })
          .start();
      })
      .start();

    return () => {
      typewriter1.stop();
      typewriter2.stop();
    };
  }, []);
  return (
    <section className="w-full mt-[120px]">
      <div
        id="hero"
        className={`${contentPadding} max-w-[1300px] mx-auto flex items-center justify-between`}
      >
        <div className="flex flex-col">
          <div className="flex flex-col">
            <h1
              ref={contentRef}
              className="text-[40px] font-bold"
              dangerouslySetInnerHTML={{ __html: hero.content }}
            ></h1>
            <p
              ref={subContentRef}
              className="text-[20px] font-normal capitalize"
            >
              {hero.subContent}
            </p>
          </div>
          <div className="mt-5 flex items-center gap-8 animate__fadeIn">
            <a className={`${buttonStyle} capitalize`}>download resume</a>
            <div className="flex items-center gap-7">
              <a
                target="_blank"
                href="https://github.com/dev-pengi"
                className={`${heroIcons}`}
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                target="_blank"
                href="https://twitter.com/sif_js"
                className={`${heroIcons}`}
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                target="_blank"
                href="https://instagram.com/sif.js"
                className={`${heroIcons}`}
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
        </div>
        <Player
          src={hero.illustration}
          className="player w-[500px]"
          loop
          autoplay
        />
      </div>
    </section>
  );
};

export default Hero;
