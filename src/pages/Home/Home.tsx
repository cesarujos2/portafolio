import IamSection from "./IamSection"
import { motion } from "framer-motion"
import { fadeln } from "../../components/Motion/variants"
import Bar from "../../components/Bar"
import About from "./About"
import Experience from "./Experience"


const sections = ["Home", "About", "Experience"]

function Home() {
  return (
    <div className="flex justify-center items-center relative w-ful md:w-[calc(100%-100px)] !scroll-smooth">
      <div>
        <div id="Home">
          <motion.div
            variants={fadeln("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <IamSection className="min-h-[calc(100vh-64px)]" />
          </motion.div>
        </div>
        <div id="About">
          <motion.div
            variants={fadeln("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <About />
          </motion.div>
        </div>
        <motion.div
          variants={fadeln("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          id="Experience"
        >
          <Experience />
        </motion.div>
      </div>
      <Bar sectionsId={sections} className="h-[calc(100vh-100px)]" />
    </div>
  )
}

export default Home