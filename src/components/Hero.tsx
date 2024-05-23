"use client";
import "animate.css";

import { hero } from "@/constants";
import { buttonStyle, contentPadding, heroIcons } from "@/styles";
import { FC, useEffect, useRef } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import Typewriter from "typewriter-effect/dist/core";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faInstagram,
  faTelegram,
  faLinkedin,
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
    <section className="w-full lg:mt-[120px]" id="home">
      <div
        id="hero"
        className={`${contentPadding} max-w-[1300px] mx-auto flex items-center justify-between lg:flex-row flex-col-reverse`}
      >
        <div className="flex flex-col">
          <div className="flex flex-col">
            <h1
              ref={contentRef}
              className="lg:text-start text-center sm:text-[40px] vsm:text-[28px] text-[22px] font-bold"
              dangerouslySetInnerHTML={{ __html: hero.content }}
            ></h1>
            <p
              ref={subContentRef}
              className="lg:text-start text-center sm:text-[20px] vsm:text-[18px] text-[15px] font-normal capitalize"
              dangerouslySetInnerHTML={{ __html: hero.subContent }}
            >
            </p>
          </div>
          <div className="mt-5 flex vsm:flex-row flex-col vsm:gap-8 gap-4 items-center lg:justify-start justify-center  animate__fadeIn">
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
                href="https://www.linkedin.com/in/sifedine-haboul/"
                className={`${heroIcons}`}
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                target="_blank"
                href="https://instagram.com/_sif.js"
                className={`${heroIcons}`}
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                target="_blank"
                href="https://t.me/sifjs"
                className={`${heroIcons}`}
              >
                <FontAwesomeIcon icon={faTelegram} />
              </a>
            </div>
          </div>
        </div>
        <Player
          src={hero.illustration}
          className="player max-w-[500px] w-full"
          loop
          autoplay
        />
      </div>
    </section>
  );
};

export default Hero;
