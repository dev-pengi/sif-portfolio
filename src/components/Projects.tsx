"use client";
import { buttonStyle, contentPadding, iconButtonStyle } from "@/styles";
import { FC, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { SideProjects, projects } from "@/constants";
import { Tilt } from "react-tilt";

const Projects: FC = () => {
  const defaultTiltOptions = {
    reverse: false,
    max: 10,
    perspective: 1000,
    scale: 1,
    speed: 1000,
    transition: true,
    axis: "Y",
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
  };
  const [carouselSettings, setCarouselSettings] = useState({
    showArrows: false,
    swipeable: true,
    showStatus: false,
    showThumbs: false,
    centerMode: true,
    centerSlidePercentage: 33.33,
    selectedItem: 0,
  });
  useEffect(() => {
    function SetMaxSlidePercentage() {
      const windowWidth: number = window.innerWidth;
      let maxSlidePercentage: number = 50;

      if (windowWidth > 1200) maxSlidePercentage = 33.33;
      else if (windowWidth < 1200 && windowWidth > 900) maxSlidePercentage = 50;
      else if (windowWidth < 900 && windowWidth > 600) maxSlidePercentage = 75;
      else if (windowWidth < 600) maxSlidePercentage = 100;
      setCarouselSettings((prevSettings) => ({
        ...prevSettings,
        centerSlidePercentage: maxSlidePercentage,
      }));
    }
    const handleResize = () => {
      SetMaxSlidePercentage();
    };
    SetMaxSlidePercentage();

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial call to set the initial slide percentage

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="bg-dark-2 py-12" id="projects">
      <h3 className="capitalize font-black text-center text-3xl">
        My Projects
      </h3>
      <p className="mt-3 w-[98%] max-w-[400px] text-center text-text-color-light mx-auto">
        these are some of the projects i've made, most of them are just for
        practice
      </p>
      <div
        className={`${contentPadding} max-w-[1600px] mx-auto flex flex-col gap-4`}
      >
        {projects.map((project, index: number) => (
          <div
            key={index}
            className="mt-16 lg:relative lg:block flex flex-col-reverse gap-4"
          >
            <div className="flex flex-col lg:gap-0 gap-9 h-max lg:min-h-[500px] lg:w-[55%] w-full lg:max-w-[800px] rounded-md bg-dark-3 px-9 py-12 shadow-lg">
              <div>
                <h2 className="text-2xl font-bold capitalize">
                  {project.name}
                </h2>
                <p className="mt-4 leading-7 lg:max-w-[70%] w-full text-text-color-light">
                  {project.description}
                </p>
              </div>
              <div className="mt-auto flex items-center gap-4">
                <a
                  href={project.link}
                  target="_blank"
                  className={`${buttonStyle}`}
                >
                  Website Link
                </a>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    className={`${iconButtonStyle}`}
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                )}
              </div>
            </div>

            <div className="flex items-center justify-center lg:absolute lg:bottom-0 lg:top-0 lg:my-auto lg:right-2 lg:h-max h-full lg:min-h-[300px] lg:max-h-[400px] rounded-xl bg-dark-1 lg:w-[60%] lg:max-w-[800px] w-full">
              <Tilt options={defaultTiltOptions}>
                <Image
                  src={project.preview}
                  alt="Co Med"
                  className="w-full rounded-xl"
                />
              </Tilt>
            </div>
          </div>
        ))}
      </div>
      <h3 className="capitalize font-black text-center text-3xl mt-[60px]">
        Side projects
      </h3>

      <div className="mt-[30px]">
        <Carousel
          infiniteLoop
          interval={1500}
          stopOnHover
          autoPlay
          {...carouselSettings}
        >
          {SideProjects.map((project, index: number) => (
            <div
              key={index}
              className="bg-dark-3 flex flex-col h-80 px-12 py-6 mx-4 rounded-lg mb-20"
            >
              <div className="flex flex-col flex-grow items-start justify-start gap-4">
                <h2 className="text-2xl font-extrabold text-start">
                  {project.name}
                </h2>
                <p className="text-start text-text-color-light">
                  {project.description}
                </p>
              </div>
              <div className="mt-auto flex items-center gap-4">
                <a
                  href={project.link}
                  target="_blank"
                  className={`${buttonStyle}`}
                >
                  Website Link
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  className={`${iconButtonStyle}`}
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Projects;
