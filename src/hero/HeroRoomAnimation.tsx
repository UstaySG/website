import React, { useEffect, useRef, useState } from 'react';
import { RotateCcw } from 'lucide-react';
import {motion} from 'framer-motion';
import ceillinglightImg from "./ceillinglightImg.png"
import coffeetableImg from "./coffeetableImg.png"
import consoleImg from "./consoleImg.png"
import leftchairImg from "./leftchairImg.png"
import mirrorImg from "./mirrorImg.png"
import rightchairImg from "./rightchairImg.png"
import pictureImg from "./pictureImg.png"
import plantImg from "./plantImg.png"
import roomBg from "./roomBg.png"
import rugImg from "./rugImg.png"
import standinglampImg from "./standinglampImg.png"
import tablelampImg from "./tablelampImg.png"
import full from "./full.jpg"


type ItemMotion = {
  delay: number;
};


/* =========================
   Rug
========================= */
const slideUpAnimation = {
  hidden: {
    opacity: 0,
    y: 220,
    scaleY: 0.45,
    scaleX: 0.82,
    filter: "blur(12px)",
  },

  visible: ({ delay }: ItemMotion) => ({
    opacity: 1,
    y: [220, -12, 6, 0],
    scaleY: [0.45, 1.08, 0.96, 1],
    scaleX: [0.82, 1.02, 0.99, 1],
    filter: "blur(0px)",

    transition: {
      delay,
      duration: 1.3,
      times: [0, 0.65, 0.85, 1],
      ease: [0.19, 1, 0.22, 1],
    },
  }),
};

/* =========================
   Pop
========================= */
const popAnimation = {
  hidden: {
    opacity: 0,
    scale: 0.35,
    y: 140,
    rotateX: -18,
    filter: "blur(12px)",
  },

  visible: ({ delay }: ItemMotion) => ({
    opacity: 1,
    scale: [0.35, 1.08, 0.96, 1],
    y: [140, -18, 8, 0],
    rotateX: [-18, 4, -2, 0],
    filter: "blur(0px)",

    transition: {
      delay,
      duration: 1.15,
      times: [0, 0.55, 0.82, 1],
      ease: [0.19, 1, 0.22, 1],
    },
  }),
};

/* =========================
   Slide Left
========================= */
const slideLeftAnimation = {
  hidden: {
    opacity: 0,
    x: -420,
    rotate: -10,
    scale: 0.82,
    filter: "blur(10px)",
  },

  visible: ({ delay }: ItemMotion) => ({
    opacity: 1,
    x: [-420, 36, -12, 0],
    rotate: [-10, 3, -1, 0],
    scale: [0.82, 1.04, 0.98, 1],
    filter: "blur(0px)",

    transition: {
      delay,
      duration: 1.25,
      times: [0, 0.72, 0.9, 1],
      ease: [0.19, 1, 0.22, 1],
    },
  }),
};

/* =========================
   Slide Right
========================= */
const slideRightAnimation = {
  hidden: {
    opacity: 0,
    x: 420,
    rotate: 10,
    scale: 0.82,
    filter: "blur(10px)",
  },

  visible: ({ delay }: ItemMotion) => ({
    opacity: 1,
    x: [420, -36, 12, 0],
    rotate: [10, -3, 1, 0],
    scale: [0.82, 1.04, 0.98, 1],
    filter: "blur(0px)",

    transition: {
      delay,
      duration: 1.25,
      times: [0, 0.72, 0.9, 1],
      ease: [0.19, 1, 0.22, 1],
    },
  }),
};

/* =========================
   Ceiling
========================= */
const rotationAnimation = {
  hidden: {
    opacity: 0,
    y: -180,
    x: -40,
    rotate: -95,
    scale: 0.62,
    transformOrigin: "50% 0%",
    filter: "blur(8px)",
  },

  visible: ({ delay }: ItemMotion) => ({
    opacity: 1,
    y: [-180, 24, -10, 5, 0],
    x: [-40, 24, -12, 6, 0],
    rotate: [-95, 42, -24, 12, 0],
    scale: [0.62, 1.1, 0.96, 1.02, 1],
    filter: "blur(0px)",

    transition: {
      delay,
      duration: 2,
      times: [0, 0.42, 0.66, 0.86, 1],
      ease: [0.19, 1, 0.22, 1],
    },
  }),
};

/* =========================
   Fade
========================= */
const fadeAnimation = {
  hidden: {
    opacity: 0,
    y: 28,
    scale: 0.96,
    filter: "blur(6px)",
  },

  visible: ({ delay }: ItemMotion) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",

    transition: {
      delay,
      duration: 1.2,
      ease: [0.19, 1, 0.22, 1],
    },
  }),
};

const HeroFurnitureScene = () => {
  const [replayKey, setReplayKey] = useState(0);

  return (
    <section className="hero-scene-wrap">
      {/* Replay */}
      <button
        className="hero-replay"
        onClick={() => setReplayKey((prev) => prev + 1)}
      >
        <RotateCcw size={20} strokeWidth={2}/>
      </button>

      <motion.div
        key={replayKey}
        className="hero-scene"
        initial={{
          opacity: 0,
          scale: 0.96,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.4,
          ease: [0.19, 1, 0.22, 1],
        }}
      >
        <img src={roomBg} alt="Room" className="hero-room-bg" />

        {/* Rug */}
        <motion.img
          src={rugImg}
          alt="Rug"
          className="hero-item hero-rug"
          custom={{ delay: 0 }}
          variants={slideUpAnimation}
          initial="hidden"
          animate="visible"
        />

        {/* Console */}
        <motion.img
          src={consoleImg}
          alt="Console"
          className="hero-item hero-console"
          custom={{ delay: 0.32 }}
          variants={popAnimation}
          initial="hidden"
          animate="visible"
        />

        {/* Plants */}
        <motion.img
          src={plantImg}
          alt="Plant"
          className="hero-item hero-plant-left"
          custom={{ delay: 0.52 }}
          variants={slideLeftAnimation}
          initial="hidden"
          animate="visible"
        />

        <motion.img
          src={plantImg}
          alt="Plant"
          className="hero-item hero-plant-right"
          custom={{ delay: 0.56 }}
          variants={slideRightAnimation}
          initial="hidden"
          animate="visible"
        />

        {/* Chairs */}
        <motion.img
          src={leftchairImg}
          alt="Chair"
          className="hero-item hero-chair-left"
          custom={{ delay: 0.62 }}
          variants={slideLeftAnimation}
          initial="hidden"
          animate="visible"
        />

        <motion.img
          src={rightchairImg}
          alt="Chair"
          className="hero-item hero-chair-right"
          custom={{ delay: 0.68 }}
          variants={slideRightAnimation}
          initial="hidden"
          animate="visible"
        />

        {/* Coffee Table */}
        <motion.img
          src={coffeetableImg}
          alt="Coffee Table"
          className="hero-item hero-coffee-table"
          custom={{ delay: 0.88 }}
          variants={fadeAnimation}
          initial="hidden"
          animate="visible"
        />

        {/* Wall Art */}
        <motion.img
          src={pictureImg}
          alt="Picture"
          className="hero-item hero-mirror"
          custom={{ delay: 0.98 }}
          variants={fadeAnimation}
          initial="hidden"
          animate="visible"
        />

        {/* Lamps */}
        <motion.img
          src={tablelampImg}
          alt="Lamp"
          className="hero-item hero-table-lamp-left"
          custom={{ delay: 1.04 }}
          variants={slideLeftAnimation}
          initial="hidden"
          animate="visible"
        />

        <motion.img
          src={tablelampImg}
          alt="Lamp"
          className="hero-item hero-table-lamp-right"
          custom={{ delay: 1.08 }}
          variants={slideRightAnimation}
          initial="hidden"
          animate="visible"
        />

        {/* Standing Lamp */}
        <motion.img
          src={standinglampImg}
          alt="Standing Lamp"
          className="hero-item hero-floor-lamp"
          custom={{ delay: 1.12 }}
          variants={slideRightAnimation}
          initial="hidden"
          animate="visible"
        />

        {/* Ceiling */}
        <motion.img
          src={ceillinglightImg}
          alt="Ceiling Light"
          className="hero-item hero-chandelier"
          custom={{ delay: 1.16 }}
          variants={rotationAnimation}
          initial="hidden"
          animate="visible"
        />
      </motion.div>

      <div className="hero-card">
        <h1 className="hero-title">One-Stop Home Furnishing<br/>Service</h1>
        <p className="hero-sub">Hassle-free furniture selection, sourcing and styling for busy homeowners.</p>
        <a href="#paths" className="hero-cta">Explore Our Services</a>
      </div>
    </section>
  );
};

export default HeroFurnitureScene;