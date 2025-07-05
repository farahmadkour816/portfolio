import {
  c,
  python,
  java,
  pen,
  wifi,
  automation,
  cpp,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  edunet,
  weatherpedia,
  termpw,
  payloadmaster,
  threejs,
  mhft,
  cdg,
  cust,
  rest,
  plant,
  pv,
  sketcher,
  mathwork,
  CompileVortex,
  condrain,
  les,
  admsc,
  eduskill,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work & Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  { title: "C", icon: c },
  { title: "C++", icon: cpp },
  { title: "Python", icon: python },
  { title: "Java", icon: java },
  { title: "Automation Workflows", icon: automation },
  { title: "Front & Back-End Development ", icon: pen },
  { title: "Web Development & API Integrations", icon: wifi},

];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Rect JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
];

export const experiences = [
  {
    title: "IT Software Specialist",
    company_name: "Condrain Group, Toronto, Ontario, Canada",
    icon: condrain,
    iconBg: "#161329",
    date: "August 2024- Present",
    points: [
      "Managed “Olympus” software for ConCast (under Condrain Group), coding, debugging, and implementing updates based on business requests to ensure the platform’s infrastructure, logic, UI consistency, and functionality align with company standards. I oversee deployments using Docker ,Azure DevOps, and Git, ensuring smooth integration and performance.",
      "Specialized in API development and integration, frequently troubleshooting and coding API solutions while providing real-time updates to team members to maintain seamless operations.",
    ],
  },
  {
    title: "Software Research Specialist",
    company_name: "Condrain Group, Toronto, Ontario, Canada",
    icon: condrain,
    iconBg: "#161329",
    date: "March 2024 – August 2024",
    points: [
      "Led extensive research initiatives across diverse topics, including cybersecurity protocols (e.g., BYOD protocols and phishing response strategies), and created detailed reports for each topic.",
      "Developed a WiFi token guest system, including its front-end website, back-end, admin portals, and databases.(created prototypes using machine learning software: Streamlit, python, php, mssql, mysql).",
      "Built prototypes using workflows (Power Automate, OKTA) to automate company processes.",
      "Created prototypes for software systems and optimized Snowflake code, reducing execution costs by 30%.",
    ],
  },
  {
    title: "IT Director",
    company_name: "Lassonde Engineering Society, York University, Canada",
    icon: les,
    iconBg: "#161329",
    date: "May 2024- Present",
    points: [
      "Developed and maintained the website, ensuring it remains user-friendly, up-to-date, and aligned with the needs of students and events.",
      "Led troubleshooting and technical support for the website, resolving issues promptly to ensure minimal downtime",
    ],
  },
   {
    title: "Software Intern",
    company_name: "Abu Dhabi Marine Sports Club, Abudhabi, United Arab Emirates",
    icon: admsc,
    iconBg: "#161329",
    date: "December 2023 – January 2024)",
    points: [
      "Collaborated with the software team on website development, troubleshooting, updates, and gained practical insights into software best practices while contributing to feature implementation.",
      "Enhanced the software team's capabilities with full-stack survey systems, MySQL database solutions, proficiency in Bootstrap, ,HTML, and CSS.",
      "Contributed to enhancing the club's technology ecosystem, bridging software development and maritime industry needs.",
    ],
  },
];

export const projects = [
  {
    name: "Java Restaurant Management Program",
    description:
      "Collaborated on developing a user-friendly complete Restaurant Management Program using Java, JavaFX for the frontend, and PostgreSQL for backend data management. Integrated separate login functionalities for customers and restaurant owners, ensuring efficient reservation management.",
    tags: [
      { name: "Java", color: "blue-text-gradient" },
      { name: "Postgres", color: "green-text-gradient" },
      { name: "bootstrap 5.3.0", color: "pink-text-gradient" },
      //{ name: "Weather API by API Ninjas", color: "yellow-text-gradient" },
    ],
    image: rest,
    source_code_link: "https://github.com/farahmadkour816/PlatePlan",
  },
  {
    name: "Customer Survey Management System",
    description:
      "Designed and developed a Customer Survey Management System using HTML, CSS, Bootstrap, PHP, and MySQL, prioritizing user-friendly interfaces and robust security features. Employed XAMPP for efficient development and testing, ensuring a seamless user experience.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
      { name: "Javascript", color: "pink-text-gradient" },
      { name: "bootstrap", color: "pink-text-gradient" },
    ],
    image: cust,
    source_code_link: "https://github.com/farahmadkour816/survey-2",
  },
  {
    name: "Guest Wifi Token System",
    description:
      "Developed a WiFi Token Guest System using HTML and CSS for the frontend and SQL Server for the backend for Condrain Group. This system allows guests to input their details, granting them access to a WiFi token for a 12-hour period.",
    tags: [
       { name: "HTML", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
      { name: "MSSQL", color: "pink-text-gradient" },
    ],
    image: cdg,
  },
  {
    name: "Automated Plant Watering System",
    description:
      "Developed an Automated Plant Watering System integrated with an Arduino Uno board using Java. Utilized a moisture sensor to measure soil moisture and controlled a water pump with Firmata 4J and a MOSFET board. Implemented a responsive state machine and utilized HashMap for continuous data collection and visualization, emphasizing effective plant care through data analysis techniques.          *Code Available Upon Request*",
    tags: [
      { name: "Arduino", color: "blue-text-gradient" },
    ],
    image: plant,
    // source_code_link: "https://github.com/lohitkolluri/PayloadMaster",
  },
  {
    name: "Optimal Planning & Management of Energy Facilities",
    description:
      "Designed and developed a web-based tool for the optimal planning and management of energy facilities, where users can input their electricity load and system preferences. The application processes this data and calculates the most cost-efficient and sustainable combination of technologies such as photovoltaics (PVs), co-generation units (Co-Gens), and hydrogen systems. Results are clearly visualized through intuitive graphs and charts, helping users make informed decisions about energy system configurations.      *Code Available Upon Request*",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "Node.js", color: "pink-text-gradient" },
      { name: "React", color: "pink-text-gradient" },

    ],
    image: pv,
    // source_code_link: "https://github.com/lohitkolluri/CompileVortex",
  },
  // {
  //   name: "Sketcher",
  //   description:
  //     "Convert an input image to a pencil sketch using OpenCV and Matplotlib libraries.",
  //   tags: [
  //     { name: "OpenCV", color: "blue-text-gradient" },
  //     { name: "Matplotlib", color: "green-text-gradient" },
  //     { name: "Python", color: "pink-text-gradient" },
  //   ],

  //   image: sketcher,
  //   source_code_link: "https://github.com/lohitkolluri/Image_to_Pencil_Sketch_App",
  // },
];
