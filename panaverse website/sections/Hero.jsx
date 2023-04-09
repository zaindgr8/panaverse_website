'use client';
import {motion} from "framer-motion";
import styles from "../styles";
import {slideIn, staggerContainer , textVariant, textVariants} from "../utils/motion"

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once: false, amount: 0.25}}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex justify-center items-center flex-col relative z-10 mb-20">
        <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
          PANAVERSE
        </motion.h1>
      
      </div>

      <motion.div variants={slideIn("right", "tween", 0.2, 1)}>
        <motion.img
          src="/panaverse1.jpg"
          alt="cover"
          className="w-full sm:h-[550px] h-[450px] object-cover rounded-tl-[140px] z-10 relative"
        />
      <div className="absolute w-full hero-gradient rounded-tl-[140px] z-[0] top-[100px]">
      </div>

      <a href="#explore">
        <div className="w-full flex justify-end sm:mt-[10px] -mt-[50px] 
        pr-[40px] relative z-10">
          <img src="/panapiaic.png" alt="stamp" className="sm:w-[155px] 
          w-[100px] sm:h[155px] h-[100px] object-contain" />
        </div>
      </a>
      </motion.div>

      
    </motion.div>
  </section>
);

export default Hero;
