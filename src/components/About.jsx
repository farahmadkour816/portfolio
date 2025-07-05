import { motion } from 'framer-motion';
import React from 'react';
import { Tilt } from 'react-tilt';
import { services } from '../constants';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt="web-development" className="w-16 h-16 object-contain" loading="lazy" />

        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
    <div className="flex justify-center mt-[-60px] mb-6">
  <img
    src="/image/farah.png"
    alt="Farah Madkour"
    className="w-40 h-40 object-cover border-4 border-white shadow-lg"
  />
</div>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
       Hi! I'm Farah Madkour, a Software Engineering student specializing in Big Data at York University's Lassonde School of Engineering.

What I love most about my program is the perfect balance between creativity and problem-solving — it challenges me to build meaningful tools using logic, code, and collaboration.

So far, my most rewarding co-op experience has been working as a Software Research Specialist, where I’ve led the design and deployment of full-stack tools, optimized Snowflake SQL pipelines, and built secure internal platforms that support efficiency across teams.

My ultimate goal is to use my skills in data, systems, and software to contribute to impactful projects in the healthcare space — especially those that make technology more accessible, scalable, and capable of improving lives.

      </motion.p>


<h4 className={styles.sectionMidText}>
  Why Me Video:&nbsp;
  <a
    href="https://www.youtube.com/watch?v=Zrof_038gc8"
    target="_blank"
    rel="noopener noreferrer"
    className="text-[#00ffff] underline hover:text-white transition"
  >
    Watch here
  </a>
</h4>
<motion.p
  variants={fadeIn('', '', 0.1, 1)}
  className="mt-2 text-secondary text-[16px] max-w-3xl leading-[28px]"
>
  The "Why Me?" video offers a closer look at my journey as a software engineering student specializing in Big Data, along with my practical experience at Condrain Group. I discuss key projects, including optimizing Snowflake code to reduce costs by 30% and developing systems like a Wi-Fi token guest system and a customer survey management system.

  This video highlights why I'm passionate about the tech industry and how my skills and experiences align with the needs of forward-thinking teams. I hope it provides insight into how I can contribute to your projects.
</motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

const WrappedAbout = SectionWrapper(About, 'about');

export default WrappedAbout;
