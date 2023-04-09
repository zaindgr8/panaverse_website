'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >

      <TypingText title="| People on the World" textStyles="text-center" />
      <TitleText
        title={(
          <>You can now join our courses from Across Pakistan 
          </>
        )}
        textStyles="text-center"
      />

<motion.div
  variants={fadeIn('up', 'tween', 0.3, 1)}
  className="relative mt-[50px] flex w-full h-[550px] justify-center"
>
  <div class="">
    <img src="/Pakpng1.png" alt="map" class="h-full w-full object-contain" />
    <img src="/panalogo.png" alt="logo" class="absolute left-400 top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-20 ml-80 -mt-50" />
  </div>
</motion.div>

    </motion.div>
  </section>
);

export default World;