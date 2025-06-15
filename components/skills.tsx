import React from "react";
import { useTheme } from "./ui/themeprovider";



const Skills = () => {
  const { lightMode, toggleLightMode } = useTheme();
  const skills = [
    { text: "Html5 & CSS3", styles: "rotate-[-45deg] translate-x-10 rounded-4xl border-2 text-3xl" },
    { text: "JavaScript", styles: "border-2" },
    { text: "TypeScript", styles: `border-2 text-4xl ${lightMode ? "text-white bg-black":"text-black bg-white"} ` },
    { text: "Cloud Deployments", styles: "border-2" },
    { text: "NextJS", styles: `border-2 text-4xl ${lightMode ? "text-white bg-black":"text-black bg-white"} ` },
    { text: "PostgreSQL", styles: "rotate-[55deg] -translate-x-11 border-2" },
  ];

  const frameworks = [
    { text: "Java", styles: "border-2 py-2 rounded-full" },
    { text: "MERN Stack", styles: `border-2 text-4xl ${lightMode ? "text-white bg-black":"text-black bg-white"} ` },
    { text: "Prisma", styles: "border-2" },
    { text: "TailwindCSS", styles: `border-2 text-4xl ${lightMode ? "text-white bg-black":"text-black bg-white"} ` },
    { text: "HonoJS", styles: "border-2" },
    { text: "Docker", styles: `border-2 text-4xl ${lightMode ? "text-white bg-black":"text-black bg-white"}`},
    // { text: "&", styles: "border-2 text-4xl px-6 font-extrabold rounded-full" },
    // { text: "C", styles: "border-2 text-4xl px-6 font-extrabold rounded-full" },
  ];
  return (
    <section className="flex-col flex-wrap items-center">
      <div className="flex font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl pb-25">with my Skills in</div>
      <div className="-translate-x-20">
        <div className="flex justify-center">
          {skills.map((skill, index) => (
            <div key={index} className={`flex p-5 mx-0.5 rounded-full text-3xl font-bold text-center items-center justify-center whitespace-nowrap ${skill.styles}`}>
              {skill.text}
            </div>
          ))}
        </div>
        <br/>
        <div className="flex justify-center -translate-y-5">
          {frameworks.map((skill, index) => (
            <div key={index} className={`flex p-5 rounded-full mx-0.5 text-3xl font-bold text-center items-center justify-center whitespace-nowrap ${skill.styles}`}>
              {skill.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
