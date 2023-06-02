"use client";
import { buttonStyle, contentPadding, iconButtonStyle } from "@/styles";
import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import CoMed from "../../public/projects/co_med.png";
import { projects } from "@/constants";

const Projects: FC = () => {
  return (
    <section className="bg-dark-2 py-12" id="projects">
      <h3 className="capitalize font-black text-center text-3xl">
        My Projects
      </h3>
      <p className="mt-3 max-w-[400px] text-center text-text-color-light mx-auto">
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
                <p className="mt-4 leading-7 lg:max-w-[70%] w-full">
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
                  <a href={project.github} className={`${iconButtonStyle}`}>
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                )}
              </div>
            </div>

            <div className="flex items-center justify-center lg:absolute lg:bottom-0 lg:top-0 lg:my-auto lg:right-2 lg:h-max h-full lg:min-h-[300px] lg:max-h-[400px] rounded-xl bg-dark-1 lg:w-[60%] lg:max-w-[800px] w-full">
              <Image
                src={project.preview}
                alt="Co Med"
                className="w-full rounded-xl"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
