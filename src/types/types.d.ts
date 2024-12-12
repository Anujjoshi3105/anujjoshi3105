declare global {
  type Experience = {
    company: string;
    role: string;
    start: Date | string;
    end: Date | string;
    place: string;
    description: string[];
    skills: string[];
    link: string;
  };
  type Testimonial = {
    review: string;
    name: string;
    role: string;
    avatar: string;
  };
  type Skill = {
    name: string;
    icon: JSX.Element;
  };
  type Education = {
    grade: string;
    institute: string;
    degree: string;
    start: Date | string;
    end: Date | string;
    place: string;
    description?: string[];
    link: string;
  };
  type Rating = {
    username: string;
    rating: number;
    level: string;
  };
  type Project = {
    _id: string;
    title: string;
    description: string;
    img: string;
    type:
      | "Machine Learning"
      | "Web Development"
      | "Data Science"
      | "Mobile Development"
      | "AI"
      | "Blockchain"
      | "Other";
    problem: string;
    action: string;
    features: string[];
    challenges: string[];
    results: string[];
    "future-scope": string[];
    github: string;
    link: string;
    tags: string[];
    createdAt: Date | string;
    updatedAt: Date | string;
  };
  type Blog = {
    _id: string;
    img: string;
    tags: string[];
    title: string;
    description: string;
    content: string;
    createdAt: Date | string;
    updatedAt: Date | string;
  };
}

export {};
