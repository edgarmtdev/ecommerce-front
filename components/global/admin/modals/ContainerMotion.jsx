import { motion } from "framer-motion";

const show = {
  opacity: 1,
  display: "flex",
};

const hide = {
  opacity: 0,
  transitionEnd: {
    display: "none",
  },
};

export default function ContainerMotion({ children, visible }) {
  return (
    <motion.section
      className="fixed z-20 top-0 left-0 bg-[#00000078] h-[100vh] w-[100%] p-10 hidden overflow-y-scroll"
      animate={visible ? show : hide}
    >
      {children}
    </motion.section>
  );
}
