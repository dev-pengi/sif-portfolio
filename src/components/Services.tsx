"use client";
import { buttonStyle, contentPadding } from "@/styles";
import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowRestore } from "@fortawesome/free-solid-svg-icons";
import { services } from "@/constants";

const Services: FC = () => {
  return (
    <section className="bg-dark-1 py-12" id="services">
      <h3 className="capitalize font-black text-center text-3xl">
        My Services
      </h3>
      <p className="mt-3 w-[98%] max-w-[500px] text-center text-text-color-light mx-auto">
        these are some of the services i provide, you don't see what you need
        here? just contact me to get service you need
      </p>

      <div className={`${contentPadding} max-w-[1400px] mx-auto`}>
        <div className="mt-[50px] grid xlg:grid-cols-3 lg:grid-cols-2 justify-center grid-cols-1 gap-10 gap-y-9">
          {services.map((service, index: number) => (
            <div
              key={index}
              className={`flex flex-col items-center gap-2 py-9 h-[500px] ${
                index == 1 ? "" : "xlg:translate-y-4"
              } bg-dark-2 rounded-md shadow-lg`}
            >
              <div className="flex flex-col items-center w-f">
                <p>{service.name}</p>
                <h2 className="text-2xl font-bold">Development</h2>
                <p className="mt-2 w-[85%] text-center text-text-color-light">
                  {service.description}
                </p>
              </div>
              <div className="mt-[28px] flex flex-col flex-grow items-start gap-2 w-full px-[30px]">
                <h4 className="font-extrabold">Features:</h4>
                <ul className="flex flex-col gap-2 items-start services-list">
                  {service.features.map((feature, index: number) => (
                    <li
                      key={index}
                      className="text-text-color-light text-center list-inside"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto flex items-center">
                <a href="#contact" target="_blank" className={`${buttonStyle}`}>
                  Contact me
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
