'use client';
import {motion} from "framer-motion";
import {TypingText} from "../components"
import styles from "../styles";
import {fadeIn, staggerContainer} from "../utils/motion"

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0"/>
    <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{once:false, amount: 0.25}}
    className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}>

      <TypingText title="|About Panaverse"
      textStyles="text-center"/>

      <motion.p
      variant= {fadeIn("up", "tween", 0.2, 1)}
      className="mt-[8px] font-normal sm:text-[32px] text-[20px]
      text-center text-secondary-white"
      >
        <span className="font-extrabold text-whote">PANAVERSE </span> is a forward-thinking company committed to advancing the tech industry in Pakistan by providing state-of-the-art education to students. With a focus on emerging technologies like web 3.0, metaverse, and blockchain, Panaverse aims to equip students with the skills they need to succeed in the rapidly evolving tech landscape. By doing so, Panaverse hopes to contribute to the national cause of Pakistan by creating a skilled workforce that can compete on a global level. With experienced instructors and a comprehensive curriculum, Panaverse is the perfect place for students to gain the knowledge and practical experience they need to succeed in the tech industry.
      </motion.p>

      <motion.img
      variants={fadeIn("up", "tween", 0.3, 1)}
      src="/arrow-down.svg"
      alt="arrow down"
      className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
  
</motion.div>
  </section>
);

export default About;
