import { FaCss3, FaFigma, FaGit, FaGithub, FaHtml5, FaJava, FaJs, FaNodeJs, FaPython, FaReact } from "react-icons/fa"
import { SiC, SiCplusplus, SiDjango, SiPytorch, SiExpress, SiTensorflow, SiFlask, SiMongodb, SiMysql, SiDocker, SiNumpy, SiPandas, SiPostgresql, SiKeras, SiOpencv, SiScikitlearn, SiStreamlit } from "react-icons/si";

export  const navLink = [
    { name: "About", link: "/#about" },
    { name: "Experience", link: "/#experience" },
    { name: "Work", link: "/#work" },
    { name: "Contact", link: "/#contact" },
  ];

export const experiences = [
    {
      name: 'USIP-DTU',
      role: 'Full Stack Developer',
      url: 'https://www.dtu.ac.in/',
      start: 'February, 2024',
      end: 'April, 2024',
      shortDescription: [
        'An intern at the Industrial & Research Unit, Delhi Technological University',
        'I was responsible for developing an ERP portal, designed to manage government-funded projects for DTU professors, students, etc',
        'The ERP solution enabled efficient allocation of resources, timely financial reporting, and systematic tracking of project milestones, significantly improving operational efficiency at DTU.',
      ],
    },
  ];

export const education = [
    {
      grade: '9.2 CGPA (till 3rd Semester)',
      title: "Computer Science Engineering, B. Tech.",
      date: "2022-2026",
      center: 'Delhi Technological University',
    },
    {
      grade: '98.8 %',
      title: "CBSE XII",
      date: "2021-2022",
      center: "Vivekanand International School",
    },
    {
      grade: '97.0 %',
      title: "CBSE X",
      date: "2019-2020",
      center: "Vivekanand International School",
    },  
  ];
  
export const testimonialData = [
  {
      id: 1,
      name: 'Rajiv Kapoor',
      role: 'Professor, DTU',
      avatar: '/prof.jpg',
      review: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, ipsum incidunt. Vero temporibus quasi libero voluptatum minima error, sint maiores eaque modi, quam optio ipsa assumenda, molestias aspernatur perspiciatis nobis.`,
  },
  {
      id: 2,
      name: 'Rajiv Kapoor',
      role: 'Professor, DTU',
      avatar: '/prof.jpg',
      review: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, ipsum incidunt. Vero temporibus quasi libero voluptatum minima error, sint maiores eaque modi, quam optio ipsa assumenda, molestias aspernatur perspiciatis nobis.`,
  },
];

export const skills = [
    {
        title:'Machine Learning',
        skill:[
            {
                name:'Pytorch',
                icon:<SiPytorch className = "icon" />
            },
            {
                name:'Scikit-learn',
                icon:<SiScikitlearn className = "icon" />
            },
            {
                name:'Numpy',
                icon:<SiNumpy className = "icon" />
            },
            {
                name:'Pandas',
                icon:<SiPandas className = "icon" />
            },
            {
                name:'Streamlit',
                icon:<SiStreamlit className = "icon" />
            },
            {
                name:'TensorFlow',
                icon:<SiTensorflow className = "icon" />
            },
            {
                name:'Keras',
                icon:<SiKeras className = "icon" />
            },            {
                name:'Open CV',
                icon:<SiOpencv className = "icon" />
            },
        ]
    },
    {
        title:'Web Development',
        skill:[
            {
                name:'React',
                icon:<FaReact className = "icon" />
            },
            {
                name:'Node Js',
                icon:<FaNodeJs className = "icon" />
            },
            {
                name:'Express Js',
                icon:<SiExpress className = "icon" />
            },
            {
                name:'MongoDb',
                icon:<SiMongodb className = "icon" />
            },            {
                name:'Github',
                icon:<FaGithub className = "icon" />
            },
            {
                name:'MySQL',
                icon:<SiMysql className = "icon" />
            },
            {
                name:'Postgre Sql',
                icon:<SiPostgresql className = "icon" />
            },
            {
                name:'Figma',
                icon:<FaFigma className = "icon" />
            },
            {
                name:'HTML',
                icon:<FaHtml5 className = "icon" />
            },
            {
                name:'CSS',
                icon:<FaCss3 className = "icon" />
            },
            {
                name:'Javascript',
                icon:<FaJs className = "icon" />
            },
            {
                name:'Django',
                icon:<SiDjango className = "icon" />
            },
            {
                name:'Flask',
                icon:<SiFlask className = "icon" />
            },
        ]
    },
    {
        title:'Other Skills',
        skill:[
            {
                name:'C',
                icon:<SiC className = "icon" />
            },
            {
                name:'C++',
                icon:<SiCplusplus className = "icon" />
            },
            {
                name:'Python',
                icon:<FaPython className = "icon" />
            },
            {
                name:'Git',
                icon:<FaGit className = "icon" />
            },
            {
                name:'Docker',
                icon:<SiDocker className = "icon" />
            },
        ]
    }
]

export const projects = [
    {
      header: 'Machine Learning',
      projects: [
        {
          title: 'Hand Gesture Recognition',
          img: '/work1.png',
          desc: 'Trained a Random Forest Classifier, leading to precise recognition of various hand gestures for intuitive and hands-free application control, achieving a recognition accuracy of over 90%',
          techStack: ['Python', 'MediaPipe', 'Scikit-Learn'],
          github: 'https://github.com/Anujjoshi3105/handGesture/',
          link: 'https://github.com/Anujjoshi3105/handGesture/'
        },
        {
            title: 'CineMagic: Movie Recommender System',
            img: '/work2.png',
            desc: 'Implemented advanced recommendation algorithms to provide personalized movie suggestions based on movie content and similarity, and trends.',
            techStack: ['Spacy', 'Cinemagoer', 'Scikit-Learn'],
            github: 'https://github.com/Anujjoshi3105/CineMagic/',
            link: 'https://github.com/Anujjoshi3105/CineMagic/'
          },
        ]
    },
    {
        header: 'Web Development',
        projects: [
          {
            title: 'LIMSTIR-DTU',
            img: '/work3.png',
            desc: '',
            techStack: ['HTML', 'Tailwind-CSS', 'Javascript'],
            github: 'https://github.com/Anujjoshi3105/handGesture/',
            link: 'https://github.com/Anujjoshi3105/handGesture/'
          },
          {
              title: 'IRD-DTU',
              img: '/work4.png',
              desc: '',
              techStack: ['HTML', 'Tailwind-CSS', 'ReactJS'],
              github: 'https://github.com/Anujjoshi3105/IRD-DTU/',
              link: 'https://ird-dtu.vercel.app/'
            },
            {
                title: 'Diatomic Technologies',
                img: '/work5.png',
                desc: '',
                techStack: ['HTML', 'Tailwind-CSS', 'ReactJS'],
                github: 'https://diatomictechnologies.vercel.app/',
                link: 'https://diatomictechnologies.vercel.app/'
              },
          ]
      },
]
