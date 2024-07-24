import { Button } from "@nextui-org/react"
import portrait from "../assets/portrait.webp"


const jobs = [
  "Enviromental Engineer",
  "Full Stack Developer",
]

function Home() {
  return (
    <div className="flex-1 flex justify-center items-center flex-wrap">
      <div className="basis-full lg:basis-1/2 flex flex-col gap-8 px-6 py-8 md:px-16 lg:px-28">
        <div>
          <h1 className="w-full text-5xl font-bold font-sans dark:text-primary">I'm César Uriarte</h1>
          <h2 className={`text-xl`}>{jobs.join(' | ')}</h2>
        </div>
        <p className="text-md">Hi there! I’m an environmental engineer and software developer with a passion for technology and web development. My portfolio website is a window into my professional world, where I share my projects, completed work, and industry experience. Here, you can learn more about my skills, standout projects, and how to get in touch with me.</p>
        <div className="flex justify-center">
          <Button
            color="primary"
            className="animate-bounce px-8 py-4 rounded-full mt-6"
            size="lg"
          >
            <strong>Let's connect</strong>
          </Button>
        </div>
      </div>
      <div className="basis-full md:basis-1/2">
        <img style={{ margin: '0 auto', width: '80%', maxWidth: '600px' }} src={portrait} alt="Foto" />
      </div>
    </div>
  )
}

export default Home