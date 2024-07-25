import IamSection from "./IamSection"
import { motion } from "framer-motion"
import { fadeln } from "../../components/Motion/variants"
import Bar from "../../components/Bar"


const sections = ["Home", "About", "Experience"]

function Home() {
  return (
    <div className="flex justify-center items-center relative w-ful md:w-[calc(100%-100px)] !scroll-smooth">
      <div>
        <motion.div
          variants={fadeln("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          id="Home"
        >
          <IamSection />
        </motion.div>
        <motion.div
          variants={fadeln("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          id="About"
        >
          <IamSection/>
        </motion.div>
        <motion.div
          variants={fadeln("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          id="Experience"
        >
          <IamSection />
        </motion.div>
      </div>
      <Bar sectionsId={sections} className="h-[calc(100vh-100px)]"/>
    </div>
  )
}

export default Home