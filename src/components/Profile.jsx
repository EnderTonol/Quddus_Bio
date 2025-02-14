import Spline from "@splinetool/react-spline";
import { Card,CardHeader,CardBody,Divider, CardFooter,Listbox, ListboxItem, Link } from "@heroui/react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import React from "react";
import Chart from "react-apexcharts";
import "../App.css"


function Profile(){
  
  const chartOptionsAll = {
    chart: {
      type: "radar",
    },
    xaxis: {
      categories: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB", "MySQL", "Python", "C/C++"],
    },
    stroke: {
      width: 2,
    },
    fill: {
      opacity: 0.3,
    },
  };

  const chartSeriesAll = [
    {
      name: "SKills OverView",
      data: [87, 74, 94, 92, 83, 53, 68], // Adjust skill levels (0-100)
    },
  ];

  const chartOptionsR = {
    chart: {
      type: "radar",
    },
    xaxis: {
      categories: ["React-Router", "ApexChart", "React-Redux", "FramerMotion", "Spline", "NextJS", "TailwindCSS"],
    },
    stroke: {
      width: 2,
    },
    fill: {
      opacity: 0.3,
    },
  };

  const chartSeriesR = [
    {
      name: "SKills OverView",
      data: [74, 87, 85, 96, 58, 73, 94], // Adjust skill levels (0-100)
    },
  ];
  const links = [
    {
      name: "Github",
      url: "https://github.com/EnderTonol"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/nitroxee.dll?igsh=YzljYTk1ODg3Zg=="
    },
    {
      name: "Stack Overflow",
      url: "https://stackoverflow.com/users/29026249/quddus-larik"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/abdul-quddus-158643273/"
    },
    {
      name: "Threads",
      url: "https://www.threads.net/@nitroxee.dll"
    },
  ]
  const services = [
    {
      title: "Full-Stack Web Development",
      points: [
        "Custom React.js front-end with modern UI/UX",
        "Node.js & Express.js backend with RESTful APIs",
        "MongoDB & MySQL database integration",
      ],
    },
    {
      title: "Backend & API Development",
      points: [
        "Secure JWT authentication & authorization",
        "Real-time data handling with WebSockets",
        "API development & integration",
      ],
    },
    {
      title: "UI/UX & Frontend Optimization",
      points: [
        "Responsive UI with Tailwind CSS & SASS",
        "Figma-based prototyping and design implementation",
        "Performance optimization for fast rendering",
      ],
    },
    {
      title: "Deployment & DevOps",
      points: [
        "Hosting on Netlify, Vercel, Heroku",
        "Version control with Git & GitHub",
        "PowerShell & Ubuntu CLI scripting",
      ],
    },
    {
      title: "Tools & Package Management",
      points: [
        "npm & Node Package Management",
        "CLI scripting for automation",
        "Debugging & troubleshooting",
      ],
    },
  ];

  const t_b = {
    initial: {
        x: -20,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1
    },
    easing: {
        type: "easeIn",
        duration: 0.3
    }
  }
  const waitT = {
    easing: {
        duration: 2,
        type: "easeIn"
    }
  }
  return(
    <>
    <motion.div className="h-full w-full bg-gradient-to-tr from-jaguar-950 from-40% to-jaguar-800">
    <motion.p initial={t_b.initial} animate={t_b.animate} transition={t_b.easing} className="font-Akira text-tiny tracking-widest text-jaguar-200 absolute top-2 left-8">MINIMAL BIO {">"}</motion.p>
    <Marquee speed={100} className="absolute top-[200px] overflow-hidden">
            <p className="font-Akira text-9xl tracking-widest text-jaguar-200">&nbsp;- MONGODB - EXPRESS JS - REACT JS - NODE JS </p>
    </Marquee>
    <Spline scene="https://prod.spline.design/ubfVuz7Q1zZN4XHp/scene.splinecode" className="absolute top-0 z-10"/>
    <div className="absolute top-0 left-0 mt-5 ml-4 z-0">
    <motion.p initial={t_b.initial} animate={t_b.animate} transition={waitT.easing.duration - 0.3} className="font-Akira text-5xl text-black-50 tracking-wide">Abdul Quddus</motion.p>
    <motion.p initial={t_b.initial} animate={t_b.animate} transition={waitT.easing.duration} className="text-sm font-Poppins text-jaguar-50 z-10 absolute mt-2"> MERN STACK DEVELOPER</motion.p>
    </div>
    <div className="w-full h-[100%] bg-jaguar-950 relative top-[390px] p-4 z-20">
      <div className="flex flex-col md:flex-row gap-2">
      <Card className="w-full">
        <CardHeader>
          Bio
        </CardHeader>
        <Divider/>
        <CardBody>
          <p className="font-Poppins">I am a MERN Stack Developer with expertise in MongoDB, Express.js, React.js, and Node.js, building efficient and scalable web applications. I also work with npm, PowerShell, Ubuntu CLI, Git, Tailwind CSS, MySQL, and Figma, ensuring clean, optimized, and maintainable code. My focus is on delivering high-performance applications with a seamless user experience.</p>
        </CardBody>
      </Card>
      <Card className="w-full">
        <CardHeader>
          Skill Distribution
        </CardHeader>
        <Divider/>
        <CardBody className="flex flex-col gap-1 md:flex-row">
        <Chart options={chartOptionsAll} series={chartSeriesAll} type="radar" height={300} />
        <Chart options={chartOptionsR} series={chartSeriesR} type="radar" height={300} />
        </CardBody>
      </Card>
      </div>
      <Divider/>
      <p className="text-2xl font-Akira tracking-widest text-jaguar-400 my-3 md:text-3xl">Services Provided By Me;</p>
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-2">
        {
          services.map((itm,idx)=>(
            <motion.div initial={t_b.initial} whileInView={t_b.animate} transition={t_b.animate}>
            <Card>
              <CardHeader><p>{itm.title}</p></CardHeader>
              <Divider/>
              <CardBody>
                 <Listbox color="secondary" className="font-Poppins">
                  <ListboxItem>{itm.points[0]}</ListboxItem>
                  <ListboxItem>{itm.points[1]}</ListboxItem>
                  <ListboxItem>{itm.points[2]}</ListboxItem>
                 </Listbox>
              </CardBody>
            </Card>
            </motion.div>
          ))
        }
         <Card>
              <CardHeader>Socials</CardHeader>
              <Divider/>
              <CardBody>
                {links.map((itm,idx)=>(
                  <Link isExternal showAnchorIcon href={itm.url}>{itm.name}</Link>
                ))
}
              </CardBody>
            </Card>
      </div>
    </div>
    </motion.div>
    </>
  )
}
export default Profile;