import IamSection from "./IamSection"
import Bar from "../../components/Bar"
import About from "./About"
import Experience from "./Experience"
import { Fade } from "react-awesome-reveal"


const sections = ["Home", "About", "Experience"]

function Home() {
  return (
    <div className="flex justify-center items-center relative w-full md:w-[calc(100%-100px)]">
      <div>
        <Fade delay={100}>
        <div id="Home">
          <div>
            <IamSection className="min-h-[calc(100vh-64px)]" />
          </div>
        </div>
        </Fade>
        <div id="About">
          <div>
            <About />
          </div>
        </div>
        <div id="Experience">
          <Experience />
        </div>
      </div>
      <Bar sectionsId={sections} className="h-[calc(100vh-100px)]" />
    </div>
  )
}

export default Home