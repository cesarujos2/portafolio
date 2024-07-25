import portrait from "../../assets/portrait.webp"
import { Link } from "react-router-dom"
import IconSocial from "../../components/IconSocial"
import linkedinIcon from "../../assets/icon/nav-icon1.svg"
import facebookIcon from "../../assets/icon/nav-icon2.svg"
import instagramIcon from "../../assets/icon/nav-icon3.svg"
import { ReactTyped } from "react-typed"

const jobs = [
    "Enviromental Engineer",
    "Full Stack Developer",
]

function IamSection({ className }: {className?: string }) {
    return (
        <div className={`flex justify-center items-center flex-wrap ${className}`}>
            <div className="basis-full lg:basis-1/2 flex flex-col gap-6 px-6 md:pl-16 md:pr-6 lg:pl-28 py-10">
                <div>
                    <h1 className="w-full text-4xl font-bold font-sans dark:text-primary">I'm César Uriarte</h1>
                    <h2 className={`text-xl/2`}>
                        <ReactTyped
                            strings={jobs}
                            typeSpeed={30}
                            loop
                            backSpeed={30}
                            cursorChar="_"
                            showCursor
                        />
                    </h2>
                </div>
                <p className="text-sm">Hi there! I’m an environmental engineer and software developer with a passion for technology and web development. My portfolio website is a window into my professional world, where I share my projects, completed work, and industry experience. Here, you can learn more about my skills, standout projects, and how to get in touch with me.</p>
                <div className="flex gap-4">
                    <IconSocial href="https://www.linkedin.com/in/uriarte-cesar" src={linkedinIcon} alt="Linkedin Icon" color="#0A66C2" />
                    <IconSocial href="https://www.facebook.com/chesar.uch" src={facebookIcon} alt="Facebook Icon" color="#0866FF" />
                    <IconSocial href="https://www.instagram.com/cesarujos/" src={instagramIcon} alt="Instagram Icon" color="linear-gradient(45deg, #833ab4, #fd1d1d, #fcb045)" />
                </div>
                <div className="flex justify-center mt-1">
                    <Link to={'/contact'}>
                        <div
                            className="animate-bounce px-8 py-3 rounded-full mt-6 bg-primary flex justify-center items-center gap-1 text-black cursor-pointer"
                        >
                            <strong className="text-md">Let's connect</strong>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m480-320 160-160-160-160-56 56 64 64H320v80h168l-64 64 56 56Zm0 240q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="basis-full md:basis-1/2">
                <img style={{ margin: '0 auto', width: '80%', maxWidth: '600px', maskImage: 'linear-gradient(black 50%, transparent),', transform: 'scaleX(-1)' }} src={portrait} alt="Foto" />
            </div>
        </div>
    )
}

export default IamSection