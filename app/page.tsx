import Navbar from "./component/Navbar/Navbar";
import HeroBackground from "./component/Hero/HeroBackground/HeroBackground";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

export default function Home() {
  const socmedIcons = [
    {
      href: "www.linkedin.com/in/vincent-dwi-hartanto-44bb81203", 
      component: <FaLinkedin size={35}/>
    }, 
    {
      href: "https://github.com/vincentdwi07", 
      component: <FaGithub size={35}/>
    }, 
    {
      href: "mailto:vincentfuk99@gmail.com", 
      component: <FaEnvelope size={35}/>
    }, 
  ]

  return (
    <>
      <Navbar/>
      <HeroBackground>
          <div className="flex h-full items-center relative">
            <div className="flex flex-col gap-5 justify-between">
              <div>
                <p className="text-white font-bold text-6xl text-shadow-white text-start"
                  style={{ textShadow: "0px 0px 50px rgba(255,255,255,0.75)" }}
                >
                  Vincent Dwi <br />Hartanto.
                </p>
              </div>
              <div className="w-[5vw] h-[5px] bg-yellow-400"></div>
              <div className="flex gap-3 absolute bottom-0">
                {socmedIcons.map((item, index) => (
                  <a 
                    href={item.href}
                    target="_blank"
                    className="text-white"
                    key={index}
                  >
                    {item.component}
                  </a>
                ))}
              </div>
            </div>
          </div>
      </HeroBackground>
    </>
  );
}
