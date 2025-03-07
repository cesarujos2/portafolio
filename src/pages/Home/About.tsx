import { Fade } from "react-awesome-reveal"
import CardSkill from "../../components/CardSkill"
import iconReact from '../../assets/icon/iconReact.svg'
import iconTypescript from '../../assets/icon/typescript.svg'
import iconNode from '../../assets/icon/node.svg'
import iconTailwind from '../../assets/icon/tailwind.svg'
import iconMsql from '../../assets/icon/mysql.svg'
import iconMongoDB from '../../assets/icon/mongoDB.svg'
import iconNextjs from '../../assets/icon/nextjs.svg'
import iconNet from '../../assets/icon/net.svg'
import useTheme from "../../hooks/useTheme"
import iconQgis from '../../assets/icon/qgis.svg'
import iconAutodesk from '../../assets/icon/autodesk.svg'
import iconModeling from '../../assets/icon/modeling.svg'

function About({className} : {className?: string}) {
  const { theme } = useTheme();
  return (
    <div className={"flex flex-col px-6 md:px-16 lg:px-28 pt-6 " + className}>
      <Fade>
        <div>
          <h1 className="text-3xl font-bold font-sans dark:text-primary">About Me</h1>
          <p className="text-sm">I'm an environmental engineer and software developer with a deep passion for technology and web development. With a diverse skill set in both frontend and backend development, I strive to create efficient, user-friendly, and aesthetically pleasing applications.</p>
        </div>
      </Fade>
      <Fade delay={100}>
        <div className="mt-6">
          <h1 className="text-3xl font-bold font-sans dark:text-gray-300">Skills</h1>
        </div>
      </Fade>
      <section id="SkillsDev">
        <Fade direction="up" triggerOnce delay={50}>
          <h1 className="text-xl font-bold font-sans dark:text-gray-400 mt-6">Full stack developer</h1>
        </Fade>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 mt-3 justify-center">
          <Fade direction="up" triggerOnce cascade damping={0.1} delay={50}>
            <CardSkill imgSrc={iconTypescript} title="Typescript">
              Skilled in TypeScript for scalable and maintainable code.
            </CardSkill>
            <CardSkill imgSrc={iconTailwind} title="Tailwind CSS">
              Knowledge in using Tailwind CSS for rapid UI development.
            </CardSkill>
            <CardSkill imgSrc={iconReact} title="React">
              Knowledge in building dynamic and interactive user interfaces.
            </CardSkill>
            <CardSkill imgSrc={iconNode} title="Node JS">
              Knowledge in building scalable backend applications, RESTful APIs, and real-time services using Node.js and Express.js.
            </CardSkill>
            <CardSkill imgSrc={iconMsql} title="MySQL">
              Knowledge in MySQL for relational database management.
            </CardSkill>
            <CardSkill imgSrc={iconMongoDB} title="MongoDB">
              Knowledge in designing and managing NoSQL databases with MongoDB. Skilled in creating flexible data models and optimizing performance for scalable applications.
            </CardSkill>
            <CardSkill imgSrc={iconNextjs} title="Next JS" invertColor={theme === "dark"}>
              Knowledge in developing server-side rendered and statically generated React applications using Next.js. Experienced in optimizing performance and implementing features like routing, API integration, and static site generation.
            </CardSkill>
            <CardSkill imgSrc={iconNet} title="C# with .NET" invertColor={theme === "dark"}>
              Knowledge in developing robust APIs using C# and the .NET framework. Experienced in building scalable and secure web services with RESTful endpoints and integrating with various data sources.
            </CardSkill>
          </Fade>
        </div>
      </section>
      <div>
        <Fade className="mt-4" delay={200} direction="up" triggerOnce>
          <h1 className="text-xl font-bold font-sans dark:text-gray-300">Enviromental engineer</h1>
        </Fade>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 mt-6 justify-center">
          <Fade direction="up" triggerOnce cascade damping={0.1} delay={50}>
            <CardSkill imgSrc={iconQgis} title="QGIS" invertColor={theme === "dark"}>
              Skilled in TypeScript for scalable and maintainable code.
            </CardSkill>
            <CardSkill imgSrc={'https://icons.iconarchive.com/icons/simpleicons-team/simple/512/esri-icon.png'} title="ArcGIS" invertColor={theme === "dark"}>
              Skilled in using ArcGIS for advanced geospatial analysis and environmental reporting, handling large datasets and performing detailed spatial analysis.
            </CardSkill>
            <CardSkill imgSrc={iconAutodesk} title="Autodesk AutoCAD">
              Experienced in using AutoCAD for creating technical drawings and environmental design plans, with expertise in drafting, modeling, and visualizing engineering and environmental projects.
            </CardSkill>
            <CardSkill id="CardModeling" imgSrc={iconModeling} title="Environmental Modeling">
              Knowledgeable in environmental modeling techniques, including hydrological and hydraulic modeling, for assessing and predicting environmental impacts. Skilled in applying various tools and methodologies to address complex environmental challenges.
            </CardSkill>
          </Fade>
        </div>
      </div>
    </div >
  )
}

export default About