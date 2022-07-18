//dummy data for my projects
import image from "./project.jpg";
import image3 from "./medical.jpeg";
import image2 from "./social.png";


const data=[
    {
        id:1,
        title:"Music Player",
        description:`In my 3rd semester of University, I undertook this project with no 
        understanding of reactjs or JS but I was successful and made a 
        functioning Music Player, though this project was more about 
        using Databases.`,
        role:"Front-end Developer",
        technologies:"MySql, Nodejs, Reactjs",
        year:"2021",
        pic:image,
        smallDesc:`A functioning music player with a database`,
    },
    {
        id:2,
        title:"Social Media App",
        description:`A Social Media Application for my 4th semester project, 
        Authentication, use of React hooks such as UseEffect for fetching 
        data and UseState.`,
        role:"Front-end Developer",
        technologies:"MySql, Prisma, Nodejs, Reactjs",
        year:"2022",
        pic:image2,
        smallDesc:`A social media application for university project`,

    },
    {
        id:3,
        title:"Medical Inventory",
        description:`A medical inventory website for a local clinic. All the crud operations, authentication use of multiple react hooks such as useparams, useeffect, usestate etc.`,
        role:"Front-end Developer",
        technologies:"MySql, Prisma, Nodejs, Reactjs",
        year:"2022",
        pic:image3,
        smallDesc:`A medical inventory website for a local clinic`,

    }
]
export default data