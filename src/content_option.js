// My Name
const nameText = "Josh Watson";
// short desc
const meta = {
    title: "Josh Watson",
    description: "Hi, my name is Josh Watson and I am a Full-Stack Web Developer"
};

// Introdata shown when first entering portfolio
const introdata = {
    title: "I'm Josh Watson",
    animated: {
        first: "I love coding",
        second: "I love coding websites",
        third: "I also love gaming",
    },
    description: "I have always had a passion for coding. Recently I have undertaken the full-stack web development bootcamp at Monash University to learn more about coding and gather the skills to get into the industry"
};

// Data about me
const dataabout = {
    title: "A little information about me",
    aboutme: "I like gaming, going to the gym and learning new things!",
};

// Work Experience
const worktimeline = [{
    jobtitle: "Second In Charge | Manager",
    where: "Let Danny Do It",
    date: "Aug 2017 - Present"
}];

// Job Skills
const skills = [{
    name: "JavaScript"
},
{
    name: "CSS"
},
{
    name: "HTML"
},
{
    name: "MySQL"
},
{
    name: "MongoDB"
}
];

// Portfolio Data
const dataportfolio = [{
    title: "Travel Wise",
    img:"",
    description:"",
    link: "#",
},
{
    title: "BillEase",
    img:"",
    description:"",
    link: "#",
}];

// Contact Information
const contactConfig = {
    EMAIL{process.env.EMAIL},
    PK = {process.env.PK},
    SERVICE_ID: "service_wqyo9rv",
    TEMPLATE_ID: "template_k4ldf1f"
};

// Social Information
const socialprofiles = {
    github: "https://github.com/Joshua-Watson96",
    linkedin: ""

};

// export all consts
export {
    nameText,
    meta,
    dataabout,
    dataportfolio,
    skills,
    worktimeline,
    introdata,
    socialprofiles,
    contactConfig,

}
