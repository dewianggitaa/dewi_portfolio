import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Details from "./pages/Details";

const pageVariants = {
  initial: {
    clipPath: "circle(0% at 50% 50%)",   // lingkaran kecil di tengah
  },
  animate: {
    clipPath: "circle(150% at 50% 50%)", // meluas sampai nutup layar
  },
    exitToCircle: {
    clipPath: "circle(0% at 50% 50%)", // keluar mengecil jadi lingkaran
  },

};

const pageTransition = {
  duration: 0.6,
  ease: "easeInOut",
};

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              variants={pageVariants}
              initial={{opacity:0.5}}
              animate={{opacity:1}}
              transition={{duration: 0.1}}
              className="w-full h-full fixed top-0 left-0 bg-white" // bg penting biar nutup page sebelumnya
            >
              <Profile />
            </motion.div>
          }
        />
        <Route
          path="/about"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exitToCircle"
              transition={pageTransition}
              className="w-full h-full fixed top-0 left-0 bg-white"
            >
              <About />
            </motion.div>
          }
        />
        <Route
          path="/projects"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              transition={pageTransition}
              className="w-full h-full fixed top-0 left-0 bg-white"
            >
              <Projects />
            </motion.div>
          }
        />
        <Route
          path="/details/:id"
          element={
            <motion.div
              variants={pageVariants}
              transition={pageTransition}
              className="w-full h-full fixed top-0 left-0 bg-white"
            >
              <Details />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}