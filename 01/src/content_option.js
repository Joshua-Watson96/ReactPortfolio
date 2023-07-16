// My Name
const nameText = "Josh Watson";
// short desc
const meta = {
    title: "Josh Watson",
    description: "Hi, my name is Josh Watson and I am a Full-Stack Web Developer"
};

// Introdata shown when first entering portfolio
const introdata = {
    title: "Hey, my name is Josh Watson",
    animated: {
        first: "Welcome to my React Portfolio Website",
        second: "I love coding",
        third: "I enjoy challenging myself",
        fourth: "I love going to the gym, and gaming"
    },
    description: "I have always had a passion for coding. Recently I have undertaken the full-stack web development bootcamp at Monash University to learn more about coding and gather the skills to get into the industry",
image_url: "https://mcdn.wallpapersafari.com/medium/71/98/WyqRTH.jpg"};

// Data about me
const dataabout = {
    title: "A little information about me",
    aboutme: "My name is Josh Watson, and I am 27 years old. I have been to be the 2IC/Manager of a removals/logistics company for 6 years.I have always had a passion for Web/Software Development and coding.After managing the removals company and reaching my peak in the company, I thought it was time for  a change and wanted to follow my passion from high school and get back into coding and eventually get a job in the industry and see where it takes me.I also have a dog named Max, and we have the same jumper.",
    image: ""
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
},
{
    name: "React"
}
];

// Portfolio Data
const dataportfolio = [{
    title: "Travel Wise",
    img:"https://raw.githubusercontent.com/Joshua-Watson96/Travel-Wise/main/assets/images/HomePage.png",
    description:"A website to help check the local-time, weather, best restaurants and a small map of a searched location",
    link: "https://github.com/Joshua-Watson96/Travel-Wise",
    deployedLink:"https://joshua-watson96.github.io/Travel-Wise/index.html"
},
{
    title: "BillEase",
    img:"https://raw.githubusercontent.com/Joshua-Watson96/BillManagement/main/public/images/Logo.png",
    description:"Make organising bills easier with BillEase, all your bills on the one website!",
    link: "https://github.com/Joshua-Watson96/BillManagement",
    deployedLink:"https://billease.herokuapp.com/"
},
{
    title: "SocialNetworkAPI(Back-end)",
    img:"https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/1143154/0605-social-network-apis-Waldek_Social-505609a4701c4a329f7ce487aedbd403.png",
    description:"This is for the backend of a Social Network API. Allowing you to create a user, create a thought, add a user, react to a users thought and also delete the reaction, thought and user",
    link:"https://github.com/Joshua-Watson96/SocialNetworkAPI",
    deployedLink:"This is a back-end project and cannot be deployed"
    
},
{
    title: "README-Generator",
    img: "https://res.cloudinary.com/practicaldev/image/fetch/s--QEV4TOa---/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/xxpoztfr72z00uk1negr.png",
    description:"Using NodeJS and npm inquirer, if the user anwnsers the questions provided. It will create a professional looking README.md file",
    link: "https://github.com/Joshua-Watson96/README-Generator",
    deployedLink:"This is a back-end project and cannot be deployed"
},
{
    title: "Employee Tracker(Back-end)",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFGH3Pmcc2xeHdd_l1r9llQ2nYF8NjOMEU5w&usqp=CAU",
    description:"Using NodeJS, inquirer and MySQL2. This application allows you to track employees, certain roles, and departments in the command line.",
    link:"https://github.com/Joshua-Watson96/employee_tracker",
    deployedLink:"This is a back-end project and cannot be deployed"
},
{
    title:"Weather-Dashboard",
    img:"https://raw.githubusercontent.com/Joshua-Watson96/Weather-Dashboard/main/assets/images/OnceSearched.png",
    description:"A simple weather dashboard that shows todays forecast and the 5 day forecast for the selected city using OpenWeatherAPI.",
    link:"https://github.com/Joshua-Watson96/Weather-Dashboard",
    deployedLink:"https://joshua-watson96.github.io/Weather-Dashboard/"
}];

// Contact Information
const contactConfig = {
    EMAIL: "joshjkwatson@gmail.com",
    USER_ID: "qKI5Ms0KDaUn94jB5",
    SERVICE_ID: "service_o5jcns2",
    TEMPLATE_ID: "template_k4ldf1f"
};

// Social Information
const socialprofiles = {
    github: "https://github.com/Joshua-Watson96",
    linkedin: "https://www.linkedin.com/in/josh-watson-65a22b267/",
    stackOverflow: "https://stackoverflow.com/users/20748254/josh-watson"

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
