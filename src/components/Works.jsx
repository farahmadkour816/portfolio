import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ name, description, tags, image, source_code_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring")}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img src={github} alt="source code" className="w-1/2 h-1/2 object-contain" />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p variants={fadeIn("", "", 0.1)} className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Following projects showcase my skills and experience through examples
          of my work. Each project is briefly described with links to code
          repositories in it.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} />
        ))}
      </div>
      <motion.div
  variants={fadeIn("", "", 0.2)}
  className="mt-20 bg-gradient-to-br from-[#1a1a2e] to-[#2c2c44] p-8 rounded-2xl max-w-5xl mx-auto shadow-lg border border-[#3a3a5c]"
>
  <h3 className="text-pink-400 text-[20px] font-semibold text-center mb-2 uppercase tracking-widest">
    Purpose-Driven Engineering
  </h3>
  <h2 className="text-white text-[28px] md:text-[32px] font-extrabold text-center mb-4 leading-snug">
    Engineering for Impact: <br className="hidden sm:block" />
    Advancing Healthcare Through Innovation
  </h2>
  <p className="text-[16px] md:text-[17px] text-gray-300 leading-[30px] text-center max-w-3xl mx-auto">
    My vision as an engineer is to advance healthcare through Big Data and AI-driven insights.
    I aspire to design scalable database systems that allow real-time medical data analysis,
    enabling earlier diagnoses, personalized treatments, and optimized patient care.
    By integrating intelligent systems into healthcare infrastructure, I aim to drive impactful,
    data-informed solutions that improve lives and foster innovation in the medical field.
  </p>
</motion.div>

      {/* 🧩 Personal Section: Hobbies & Languages */}
<motion.div
  variants={fadeIn("", "", 0.2)}
  className="mt-20 bg-[#1a1a2e] p-8 rounded-2xl max-w-5xl mx-auto"
>
  <h3 className="text-orange-400 text-[20px] font-semibold text-center mb-2">About Me</h3>
  <h2 className="text-white text-[32px] font-bold text-center mb-8">Hobbies & Languages</h2>

  <div className="space-y-6">
    {[
      {
        title: 'Taekwondo - Black Belt',
        content:
          'Beyond my passion for engineering, I am a Kukkiwon-certified Taekwondo black belt, showcasing my dedication, discipline, and resilience. These qualities permeate all areas of my academic and professional life, empowering me to overcome challenges and pursue excellence.',
      },
      {
        title: 'Piano - RCM Level 2',
        content:
          'I’m proud to hold a Royal Conservatory of Music (RCM) Level 2 certification in piano, showcasing my commitment to musical proficiency and mastering complex skills. This highlights my passion for music and my ability to adapt, learn, and excel across diverse disciplines.',
      },
      {
        title: 'Arabic - Fluent',
        content:
          'Arabic is my native tongue, and I’m fluent in both speaking and writing. I’ve passed official government exams in Arabic, showing strong formal proficiency and enabling inclusive communication with diverse communities.',
      },
      {
        title: 'English - Fluent',
        content:
          'I’ve mastered English academically and practically, scoring 9 on the IELTS and excelling in the SATs (96th percentile). I also completed all IGCSE courses in English, equipping me to communicate professionally and personally in global contexts.',
      },
      {
        title: 'French - Fluent',
        content:
          'I’ve studied French for over nine years, culminating in the DELF exam. My strong command of French allows me to confidently engage in conversation and comprehend academic and professional materials.',
      },
    ].map(({ title, content }) => (
      <div key={title} className="border border-white rounded-lg p-5 text-white">
        <h4 className="text-[18px] font-semibold mb-2">{title}</h4>
        <p className="text-[15px] text-gray-300 leading-7">{content}</p>
      </div>
    ))}
  </div>
</motion.div>


    </>
  );
};

export default SectionWrapper(Works, "");
