"use client";
import { FC } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { contentPadding } from "@/styles";
import { skills } from "@/constants";

const Skills: FC = () => {
  return (
    <section className="py-12" id="skills">
      <h3 className="capitalize font-black text-center text-3xl">My Skills</h3>
      <div className={`${contentPadding} max-w-[1600px] mx-auto`}>
        <p className="text-center max-w-[450px] mx-auto mt-2 text-text-color-light">
          as a full-stack developer, here is my skillset of some of the
          languages and technologies i use the most
        </p>

        <div className="mt-[50px] grid md:grid-cols-2 grid-cols-1 gap-10 gap-y-9">
          {skills.map((skill, index: number) => (
            <div key={index}>
              <div className="flex justify-between items-center">
                <h5 className="text-[18px]">{skill.name}</h5>
                <p>{skill.percentage}%</p>
              </div>
              <ProgressBar
                className="mt-2"
                completed={skill.percentage}
                customLabel=" "
                borderRadius="5px"
                baseBgColor="#4c515c"
                bgColor="#1e79e6"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
