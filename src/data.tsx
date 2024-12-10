import {
  FaGit,
  FaGithub,
  FaInstagram,
  FaJs,
  FaLinkedin,
  FaNodeJs,
  FaPython,
  FaReact,
  FaTelegram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {
  SiC,
  SiCplusplus,
  SiDjango,
  SiPytorch,
  SiExpress,
  SiTensorflow,
  SiFlask,
  SiMongodb,
  SiMysql,
  SiDocker,
  SiPostgresql,
  SiOpencv,
  SiScikitlearn,
  SiKeras,
} from "react-icons/si";

export const navLinks = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Project", href: "/project" },
  { title: "Blog", href: "/blog" },
  { title: "Contact", href: "/contact" },
];

export const socialLinks = [
  {
    title: "GitHub",
    href: "https://github.com/Anujjoshi3105/",
    icon: <FaGithub />,
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/anujjoshi3105/",
    icon: <FaLinkedin />,
  },
  {
    title: "X (Twitter)",
    href: "https://x.com/anujjoshi3105",
    icon: <FaXTwitter />,
  },
  {
    title: "Telegram",
    href: "https://t.me/anujjoshi3105/",
    icon: <FaTelegram />,
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/anujjoshi3105/",
    icon: <FaInstagram />,
  },
];

export const experiences = [
  {
    name: "USIP-DTU",
    role: "Full Stack Developer",
    url: "https://www.dtu.ac.in/",
    start: "February, 2024",
    end: "April, 2024",
    place: "Delhi, India",
    shortDescription: [
      "An intern at the Industrial & Research Unit, Delhi Technological University",
      "I was responsible for developing an ERP portal, designed to manage government-funded projects for DTU professors, students, etc",
      "The ERP solution enabled efficient allocation of resources, timely financial reporting, and systematic tracking of project milestones, significantly improving operational efficiency at DTU.",
    ],
    skills: ["react", "node", "php"],
  },
];

export const education = [
  {
    grade: "9 CGPA (till 4th Semester)",
    title: "Computer Science, B.Tech.",
    date: "2022-2026",
    center: "Delhi Technological University",
    link: "https://www.dtu.ac.in/",
  },
  {
    grade: "98.8 %",
    title: "CBSE XII",
    date: "2021-2022",
    center: "Vivekanand International School",
    link: "https://vivekanandinternationalschool.com/",
  },
  {
    grade: "97.0 %",
    title: "CBSE X",
    date: "2019-2020",
    center: "Vivekanand International School",
    link: "https://vivekanandinternationalschool.com/",
  },
];

export const testimonialData = [
  {
    name: "Rajiv Kapoor",
    role: "Professor, DTU",
    avatar: "/prof.jpg",
    review: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, ipsum incidunt. Vero temporibus quasi libero voluptatum minima error, sint maiores eaque modi, quam optio ipsa assumenda, molestias aspernatur perspiciatis nobis.`,
  },
  {
    name: "Rohan Kumar",
    role: "Professor, DTU",
    avatar: "/prof.jpg",
    review: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, ipsum incidunt. Vero temporibus quasi libero voluptatum minima error, sint maiores eaque modi, quam optio ipsa assumenda, molestias aspernatur perspiciatis nobis.`,
  },
];

export const skills = [
  {
    title: "Machine Learning",
    skill: [
      {
        name: "Pytorch",
        icon: <SiPytorch className="icon" />,
      },
      {
        name: "Scikit-learn",
        icon: <SiScikitlearn className="icon" />,
      },
      {
        name: "TensorFlow",
        icon: <SiTensorflow className="icon" />,
      },
      {
        name: "Keras",
        icon: <SiKeras className="icon" />,
      },
      {
        name: "Open CV",
        icon: <SiOpencv className="icon" />,
      },
    ],
  },
  {
    title: "Web Development",
    skill: [
      {
        name: "React",
        icon: <FaReact className="icon" />,
      },
      {
        name: "Node Js",
        icon: <FaNodeJs className="icon" />,
      },
      {
        name: "Express Js",
        icon: <SiExpress className="icon" />,
      },
      {
        name: "MongoDb",
        icon: <SiMongodb className="icon" />,
      },
      {
        name: "MySQL",
        icon: <SiMysql className="icon" />,
      },
      {
        name: "Postgre Sql",
        icon: <SiPostgresql className="icon" />,
      },
      {
        name: "Javascript",
        icon: <FaJs className="icon" />,
      },
      {
        name: "Django",
        icon: <SiDjango className="icon" />,
      },
      {
        name: "Flask",
        icon: <SiFlask className="icon" />,
      },
    ],
  },
  {
    title: "Other Skills",
    skill: [
      {
        name: "C",
        icon: <SiC className="icon" />,
      },
      {
        name: "C++",
        icon: <SiCplusplus className="icon" />,
      },
      {
        name: "Python",
        icon: <FaPython className="icon" />,
      },
      {
        name: "Git",
        icon: <FaGit className="icon" />,
      },
      {
        name: "Docker",
        icon: <SiDocker className="icon" />,
      },
    ],
  },
];

export const projects = [
  {
    title: "Hand Gesture Recognition",
    id: "work1",
    img: "/work1.png",
    description:
      "Trained a Random Forest Classifier, leading to precise recognition of various hand gestures for intuitive and hands-free application control, achieving a recognition accuracy of over 90%.",
    problem:
      "Recognizing hand gestures in real-time posed challenges in ensuring high accuracy and low latency for practical applications. Existing methods often lacked precision or required excessive computational resources.",
    action:
      "Designed and trained a Random Forest Classifier using MediaPipe for feature extraction and Scikit-Learn for model training. Implemented preprocessing techniques to handle noisy data and ensure robustness in varying lighting conditions.",
    results: [
      "Achieved over 90% recognition accuracy.",
      "Enabled intuitive and hands-free application control.",
      "The solution operates efficiently on both low-power and high-power devices.",
      "Reduced the computational cost by optimizing the feature extraction process.",
      "Improved user experience through real-time gesture recognition.",
    ],
    features: [
      "Real-time hand gesture recognition with high accuracy.",
      "User-friendly interface for intuitive control.",
      "Support for low-power and high-power devices.",
      "Optimized computational performance for scalability.",
      "Robustness to variations in lighting conditions.",
    ],
    challenges: [
      "Handling noisy datasets for accurate model training.",
      "Ensuring robust performance under varying lighting conditions.",
      "Optimizing computational costs for real-time operation.",
      "Minimizing latency while maintaining precision.",
    ],
    futureScope: [
      "Integration with AR/VR systems for immersive applications.",
      "Support for additional gestures and customization.",
      "Enhancing accuracy using advanced neural networks.",
      "Expanding compatibility across diverse devices and platforms.",
    ],
    tags: ["Python", "MediaPipe", "Scikit-Learn"],
    github: "https://github.com/Anujjoshi3105/handGesture/",
    link: "https://github.com/Anujjoshi3105/handGesture/",
    topic: "Machine Learning",
  },
  {
    title: "CineMagic: Movie Recommender",
    img: "/work2.png",
    id: "work2",
    description:
      "Implemented advanced recommendation algorithms to provide personalized movie suggestions based on movie content and similarity, and trends.",
    problem:
      "Users often struggled to discover movies aligned with their preferences due to the vast availability of content. Traditional recommendation systems failed to provide personalized and trend-based suggestions.",
    action:
      "Implemented advanced recommendation algorithms leveraging Spacy and Cinemagoer for content analysis and movie metadata processing. Designed a similarity model using Scikit-Learn to compare user preferences with movie features.",
    results: [
      "Provided personalized movie suggestions based on user preferences and current trends.",
      "Increased user engagement and satisfaction through highly accurate recommendations.",
      "Utilized advanced algorithms to enhance content-based filtering.",
      "Reduced the complexity of recommendation models by optimizing the feature comparison process.",
      "Ensured high scalability to handle a large number of movie records and user data.",
    ],
    features: [
      "Content-based movie recommendation system.",
      "Trend-based suggestion engine for dynamic preferences.",
      "Highly scalable system for large datasets.",
      "User-friendly interface for seamless interaction.",
      "Optimized algorithms for fast and accurate recommendations.",
    ],
    challenges: [
      "Processing large datasets of movie metadata efficiently.",
      "Maintaining recommendation accuracy with evolving trends.",
      "Optimizing algorithms for low computational complexity.",
      "Ensuring scalability for high user and movie data volume.",
    ],
    futureScope: [
      "Incorporating collaborative filtering for improved accuracy.",
      "Adding multilingual support for diverse user bases.",
      "Integrating with streaming platforms for real-time recommendations.",
      "Enhancing the UI for an immersive user experience.",
    ],
    tags: ["Spacy", "Cinemagoer", "Scikit-Learn"],
    github: "https://github.com/Anujjoshi3105/CineMagic/",
    link: "https://github.com/Anujjoshi3105/CineMagic/",
    topic: "Machine Learning",
  },
  {
    title: "Dev Diaries",
    img: "/work6.png",
    id: "work3",
    description:
      "A blog platform for developers of all levels to share experiences and insights. Features include user authentication (NextAuth.js), CRUD operations for blog posts, comments, likes, shares, and blog & profile image management with Firebase.",
    problem:
      "Developers lacked a centralized platform to share experiences, insights, and interact effectively. Existing platforms often provided limited customization and lacked essential features like image management or secure user authentication.",
    action:
      "Built a full-stack blog platform using Next.js with Shadcn for UI components. Integrated PostgreSQL and Prisma for database management and Firebase for image hosting and authentication. Implemented CRUD functionality for blogs, comments, likes, and shares.",
    results: [
      "Created an intuitive, user-friendly platform for developers to share insights.",
      "Enabled secure user authentication and image management using Firebase.",
      "Increased user engagement through features like blog comments, likes, and shares.",
      "Optimized the platform for scalability with a PostgreSQL database and Prisma.",
      "Enhanced the user interface using TailwindCSS and Shadcn for a responsive and modern design.",
    ],
    features: [
      "User authentication and secure access control.",
      "Support for creating, editing, and deleting blog posts.",
      "Interactive features like comments, likes, and shares.",
      "Image hosting and management using Firebase.",
      "Scalable backend architecture with Prisma and PostgreSQL.",
    ],
    challenges: [
      "Implementing secure authentication and user session management.",
      "Handling large numbers of concurrent users and blogs.",
      "Ensuring seamless image uploads and storage.",
      "Maintaining responsiveness and UI consistency across devices.",
    ],
    futureScope: [
      "Adding a recommendation engine for personalized content.",
      "Integrating analytics to track user engagement.",
      "Improving SEO to enhance platform visibility.",
      "Supporting multiple content formats like videos and podcasts.",
    ],
    tags: ["Next.js", "Shadcn", "PostgreSQL", "Prisma", "Firebase"],
    github: "https://github.com/Anujjoshi3105/devdiaries/",
    link: "https://devdiaries3105.vercel.app/",
    topic: "Web Development",
  },
  {
    title: "LIMSTIR-DTU",
    img: "/work3.png",
    id: "work4",
    description:
      "A redesign of the LIMSTIR-DTU website, focusing on modern UI components and mobile responsiveness using TailwindCSS and JavaScript.",
    problem:
      "The existing website for LIMSTIR-DTU lacked modern design, responsive features, and required updates to align with current UI trends.",
    action:
      "Redesigned and developed the website using HTML, TailwindCSS, and JavaScript to enhance the user experience and ensure mobile responsiveness.",
    results: [
      "Updated the website with a modern, sleek design that aligns with current UI trends.",
      "Improved accessibility and responsiveness for mobile and desktop devices.",
      "Increased site traffic due to a more appealing and user-friendly design.",
      "Streamlined navigation and made content more easily accessible.",
      "Enhanced the website’s performance with optimized CSS and JavaScript.",
    ],
    features: [
      "Modern and responsive design.",
      "Streamlined navigation for better usability.",
      "Optimized performance for faster load times.",
      "Mobile-first design approach.",
      "Interactive UI components with TailwindCSS.",
    ],
    challenges: [
      "Ensuring consistent responsiveness across devices.",
      "Optimizing CSS and JavaScript for performance.",
      "Designing intuitive and modern UI components.",
      "Incorporating accessibility features.",
    ],
    futureScope: [
      "Adding an admin panel for content management.",
      "Incorporating analytics to track user interactions.",
      "Improving SEO for better search engine visibility.",
      "Integrating dynamic elements like announcements or events.",
    ],
    tags: ["HTML", "Tailwind-CSS", "JavaScript"],
    github: "https://github.com/Anujjoshi3105/handGesture/",
    link: "https://github.com/Anujjoshi3105/handGesture/",
    topic: "Web Development",
  },
  {
    title: "IRD-DTU",
    img: "/work4.png",
    id: "work5",
    description:
      "Developed a dynamic, responsive website for the Industrial Research and Development Unit at DTU to showcase ongoing projects and updates.",
    problem:
      "The Industrial Research and Development Unit at DTU needed a more dynamic and functional website to display their ongoing projects and updates.",
    action:
      "Developed a responsive website using HTML, TailwindCSS, and ReactJS for interactivity and modern UI components.",
    results: [
      "Delivered a responsive and dynamic website for the IRD-DTU.",
      "Implemented ReactJS for better interactivity and user experience.",
      "Enhanced the site’s performance by optimizing loading speeds.",
      "Provided real-time updates and interactive features for users.",
      "Improved project visibility and user engagement with a modern UI design.",
    ],
    features: [
      "Dynamic and interactive UI with ReactJS.",
      "Mobile-friendly, responsive design.",
      "Support for showcasing multiple projects and updates.",
      "Modern UI elements with TailwindCSS.",
      "Real-time content updates.",
    ],
    challenges: [
      "Optimizing performance for real-time updates.",
      "Ensuring seamless interactivity with ReactJS.",
      "Designing scalable components for additional content.",
      "Implementing modern UI design principles.",
    ],
    futureScope: [
      "Adding a search and filter feature for projects.",
      "Integrating user feedback for improved content delivery.",
      "Enhancing the design with animations.",
      "Building a content management system for easy updates.",
    ],
    tags: ["HTML", "Tailwind-CSS", "ReactJS"],
    github: "https://github.com/Anujjoshi3105/IRD-DTU/",
    link: "https://ird-dtu.vercel.app/",
    topic: "Web Development",
  },
];

export const allTags = Array.from(
  new Set(projects.flatMap((project) => project.tags))
).sort();
