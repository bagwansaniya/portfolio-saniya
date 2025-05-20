import { FaNodeJs } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs, TbBrandJavascript } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { BiLogoRedux } from "react-icons/bi";
import { motion } from "framer-motion";
import { DiJava } from "react-icons/di";

const iconVarients = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

function Technologies() {
  return (
    <div style={{ paddingBottom: "6rem" }}>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        style={{
          margin: "5rem 0 2rem 0",
          textAlign: "center",
          fontSize: "2.5rem",
        }}
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        style={{
          display: "flex",
          flexWrap: "nowrap",
          alignItems: "center",
          justifyContent: "center",
          gap: "2.5rem",
        }}
      >
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVarients(2.5)}
        >
          <RiReactjsLine
            className="text-7xl"
            style={{ color: "#06b6d4", fontSize: "3.5rem" }}
          />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVarients(3)}
        >
          <TbBrandJavascript
            className="text-7xl"
            style={{ color: "#f7df1e", fontSize: "3.5rem" }}
          />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVarients(5)}
        >
          <SiMongodb
            className="text-7xl"
            style={{ color: "#10b981", fontSize: "3.5rem" }}
          />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVarients(2)}
        >
          <BiLogoRedux
            className="text-7xl"
            style={{ color: "#a21caf", fontSize: "3.5rem" }}
          />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVarients(4.5)}
          className="p-4"
        >
          <DiJava
            className="text-7xl"
            style={{ color: "#fff", fontSize: "3.5rem" }}
          />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVarients(6)}
        >
          <FaNodeJs
            className="text-7xl"
            style={{ color: "#22c55e", fontSize: "3.5rem" }}
          />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVarients(4)}
        >
          <GrMysql
            className="text-7xl"
            style={{ color: "#0ea5e9", fontSize: "3.5rem" }}
          />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVarients(4)}
        >
          <TbBrandNextjs
            className="text-7xl"
            style={{ color: "#000", fontSize: "3.5rem" }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Technologies;
