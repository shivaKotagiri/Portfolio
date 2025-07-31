import React from "react";
import { useTheme } from "./ui/themeprovider";

const Skills = () => {
  const { lightMode, toggleLightMode } = useTheme();

  const skills = [
    { text: "Html5 & CSS3", styles: "lg:rotate-[-45deg] lg:translate-x-10 lg:rounded-4xl border-2 lg:text-3xl" },
    { text: "JavaScript", styles: "border-2" },
    { text: "TypeScript", styles: `border-2 lg:text-4xl ${lightMode ? "text-white bg-black":"text-black bg-white"}` },
    { text: "Cloud Deployments", styles: "border-2" },
    { text: "NextJS", styles: `border-2 lg:text-4xl ${lightMode ? "text-white bg-black":"text-black bg-white"}` },
    { text: "PostgreSQL", styles: "lg:rotate-[55deg] lg:-translate-x-11 border-2" },
  ];

  const frameworks = [
    { text: "Java", styles: "border-2 py-2 rounded-full" },
    { text: "MERN Stack", styles: `border-2 lg:text-4xl ${lightMode ? "text-white bg-black":"text-black bg-white"}` },
    { text: "Prisma", styles: "border-2" },
    { text: "TailwindCSS", styles: `border-2 lg:text-4xl ${lightMode ? "text-white bg-black":"text-black bg-white"}` },
    { text: "HonoJS", styles: "border-2" },
    { text: "Docker", styles: `border-2 lg:text-4xl ${lightMode ? "text-white bg-black":"text-black bg-white"}`},
  ];

  return (
    <section className="flex-col flex-wrap items-center px-2">
      <div className="flex font-bold text-2xl md:text-3xl lg:text-3xl xl:text-4xl pb-5 sm:pb-15 lg:pb-25">
        with my Skills in
      </div>
      <div className="lg:-translate-x-10">
        <div className="flex justify-center flex-wrap lg:flex-nowrap gap-1 lg:gap-0">
          {skills.map((skill, index) => (
            <div key={index} className={`flex p-3 lg:p-5 mx-0.5 rounded-full text-xl lg:text-3xl font-bold text-center items-center justify-center whitespace-nowrap ${skill.styles}`}>
              {skill.text}
            </div>
          ))}
        </div>
        <br/>
        <div className="flex justify-center flex-wrap lg:flex-nowrap gap-1 lg:gap-0 -translate-y-2 lg:-translate-y-5">
          {frameworks.map((skill, index) => (
            <div key={index} className={`flex p-3 lg:p-5 rounded-full mx-0.5 text-xl lg:text-3xl font-bold text-center items-center justify-center whitespace-nowrap ${skill.styles}`}>
              {skill.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
