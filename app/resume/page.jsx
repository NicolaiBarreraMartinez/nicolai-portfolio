"use client";

import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaSwift } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

const about ={
  title: 'About me',
  description: "Skilled Software Developer with experience in Java, iOS, front-end, and AI. I create scalable solutions with a focus on performance and innovation, always seeking to enhance my expertise and deliver quality results.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Nicolai Barrera"
    },
    {
      fieldName: "Phone",
      fieldValue: "(+57) 300 873 5048"
    },
    {
      fieldName: "Experience",
      fieldValue: "5+ Years"
    },
    {
      fieldName: "Github",
      fieldValue: "NicolaiBarreraMartinez"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Colombia"
    },
    {
      fieldName: "Email",
      fieldValue: "barreram.n@javeriana.edu.co"
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available"
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Spanish"
    },
  ]
  
};
const experience = {
  icon:'/assets/resume/badge.svg',
  title: 'My experience',
  description : "Skilled Software Developer with experience in Java, iOS, front-end, and AI. I create scalable solutions with a focus on performance and innovation, always seeking to enhance my expertise and deliver quality results",
  items:[
    {
    company: "Chimeneas de colombia.",
    position: "HelpDesk Assitant",
    duration : "2018 - 2021",
    },
    {
      company: "Prana SDBC.",
      position: "Web developer & Front-End Developer Intern",
      duration : "2021 - 2021",
    },
    {
      company: "EcoBeast.",
      position: "Freelance Web Design and Architecture Consultant",
      duration : "Summer 2022",
    },
    {
      company: "Comdata.",
      position: "Front-End Developer",
      duration : "2022 - 2023",
    },
    {
      company: "Konecta.",
      position: "Front-End Developer Lead",
      duration : "2023 - 2024",
    },
    {
      company: "Prosol.",
      position: "Pre-Sales Engineer",
      duration : "2024 - Present",
    },
    
  ]
};
const education = {
  icon:'/assets/resume/cap.svg',
  title: 'My education',
  description : "Skilled Software Developer with experience in Java, iOS, front-end, and AI. I create scalable solutions with a focus on performance and innovation, always seeking to enhance my expertise and deliver quality results",
  items:[
    {
      institution: "Pontificia Universidad Javeriana",
      degree: "Systems Engineer",
      duration : "2022",
    }, 
    {
      institution: "CISCO",
      degree: "Cisco Cyber Ops Networking Academy",
      duration : "2022",
    }, 
    {
    institution: "Online course Platform",
    degree: "Full-stack iOS & Swift app development",
    duration : "2023",
    }, 
  ]
};
const skills = {
  title: "My skills",
  description: "Skilled Software Developer with experience in Java, iOS, front-end, and AI. I create scalable solutions with a focus on performance and innovation, always seeking to enhance my expertise and deliver quality results.",
  skillList:[
    {
      icon: <FaHtml5/>,
      name: "html 5"
    },
    {
      icon: <FaCss3/>,
      name: "css 3"
    },
    {
      icon: <FaJs/>,
      name: "javascript"
    },
    {
      icon: <FaReact/>,
      name: "react.js"
    },
    {
      icon: <SiNextdotjs/>,
      name: "next.js"
    },
    {
      icon: <SiTailwindcss/>,
      name: "tailwind.css"
    },
    {
      icon: <FaNodeJs/>,
      name: "node.js"
    },
    {
      icon: <FaSwift/>,
      name: "Swift"
    },
  ],
};

import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger,} from '@/components/ui/tooltip';
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
  <motion.div
    initial = {{opacity: 0}}
    animate = {{
      opacity:1,
      transition: {delay:0.3,duration:0.4,ease:"easeIn"},
    }}
    className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]">
            <TabsList className ="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
              <TabsTrigger value= "experience">Experience</TabsTrigger>
              <TabsTrigger value= "education">Education</TabsTrigger>
              <TabsTrigger value= "skills">Skills</TabsTrigger>
              <TabsTrigger value= "about">About me</TabsTrigger>
            </TabsList>
          <div className="min-h-[70vh] w-full">
            {/* Experience */}
            <TabsContent value = "experience" className = "w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                {experience.description}
                </p>
                <ScrollArea className ="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item,index)=> {
                      return(
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-[#FF7A29] text-sm">{item.duration}</span>
                        <h3 className="text-lg max-w-[260px] min-h-[60px] text-center lg:text-left font-medium">{item.position}</h3>
                        <div className="flex items-center gap-3 text-sm">
                          <span className="w-[6px] h-[6px] rounded-full bg-[#FF7A29]"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>                      
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
             {/* education */}
             <TabsContent value = "education" className = "w-full">
               <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                {education.description}
                </p>
                <ScrollArea className ="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item,index)=> {
                      return(
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-[#FF7A29] text-sm">{item.duration}</span>
                        <h3 className="text-lg max-w-[260px] min-h-[60px] text-center lg:text-left font-medium">{item.degree}</h3>
                        <div className="flex items-center gap-3 text-sm">
                          <span className="w-[6px] h-[6px] rounded-full bg-[#FF7A29]"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>                      
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
             {/* skills */}
             <TabsContent value = "skills" className = "w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className=" flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                </div>
                <ul className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index)=>{
                    return <li key ={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-[#FF7A29] transition-all duration-300">{skill.icon}</div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  })}
                </ul>
              </div>
              

            </TabsContent>
             {/* about */}
             <TabsContent value = "about" className = "w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620] mx-auto xl:mx-0">
                  {about.info.map((item, index)=>{
                    return(
                      <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
          </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
