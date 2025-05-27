import project1 from "../assets/mediaPlayer.png";
import project2 from "../assets/foodHub.png";
import project3 from "../assets/movieWebsite.png";
import project4 from "../assets/shopNGo.png";

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Media Player",
    image: project1,
    description:
      "A clean, easy-to-use media player web app for playing and managing your audio and video files seamlessly.",
    technologies: ["React", "Bootstrap", "JsonWebServer"],
    liveLink: "https://media-player-front-end.netlify.app/",
    githubLink: "https://github.com/sebin-johnson/mediaPlayerFE"
  },
  {
    title: "Restaurant Website",
    image: project2,
    description:
      "A modern and inviting restaurant website showcasing our delicious menu, easy reservations, and a warm dining experience.",
    technologies: ["React", "Bootstrap", "Redux"],
    liveLink: "https://foodhub-online.netlify.app/",
    githubLink: "https://github.com/sebin-johnson/RestaurantWebsite"
  },
  {
    title: "Movie Website",
    image: project3,
    description:
      "A sleek platform to browse, discover, and stream your favorite movies with easy navigation and up-to-date info.",
    technologies: ["React", "Bootstrap", "JsonWebServer"],
    liveLink: "https://clone-movie-website.netlify.app/",
    githubLink: "https://github.com/sebin-johnson/netflixClone"
  },
  {
    title: "E-kart website",
    image: project4,
    description:
      "A fast and convenient online shopping platform offering a wide range of products with seamless browsing and easy checkout.",
    technologies: ["React", "Bootstrap", "Redux"],
    liveLink: "https://shopngo-ekart-website.netlify.app/",
    githubLink: "https://github.com/sebin-johnson/eKartWebsite"
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
