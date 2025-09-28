"use client";
import React from "react";
import Container from "./ui/Container";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 1,
      ease: "easeOut",
    },
  }),
};

export default function BrandHero() {
  const riseText = "rise & shine".split("");

  return (
    <Container className="min-h-screen lg:h-[89rem] bg-gradient-to-b from-black via-black/80 to-black flex items-center justify-center">
      <div className="mx-auto text-center">
        <h2 className="font-alan-sans text-5xl sm:text-7xl md:text-8xl lg:text-[10.9375rem] font-bold leading-tight capitalize">
          {/* Giving your */}
          <motion.span
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="text-white/75 inline-block"
          >
            Giving your{" "}
          </motion.span>

          {/* brand */}
          <motion.span
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "backOut", delay: 0.5 }}
            viewport={{ once: true }}
            className="text-[#00FF26] block"
          >
            brand
          </motion.span>

          {/* wings to */}
          <motion.span
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="text-white/75 inline-block"
          >
            wings to{" "}
          </motion.span>

          {/* rise & shine (letter stagger) */}
          <motion.span
            className="text-white/75 block"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {riseText.map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + i * 0.05, duration: 0.5 }}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </motion.span>
        </h2>
      </div>
    </Container>
  );
}
