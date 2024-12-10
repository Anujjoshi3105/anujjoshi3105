declare global {
  type Review = {
    review: string;
    name: string;
    role: string;
    avatar: string;
  };
  type Skill = {
    name: string;
    icon: JSX.Element;
  };
  type Qualification = {
    grade: string;
    title: string;
    date: string;
    center: string;
    link: string;
  };
  type Rating = {
    username: string;
    rating: number;
    level: string;
  };
  type Project = {
    id: string;
    img: string;
    problem: string;
    action: string;
    features: string[];
    challenges: string[];
    results: string[];
    futureScope: string[];
    github: string;
    link: string;
    tags: string[];
    title: string;
    description?: string;
  };
  type Post = {
    id: string;
    img: string;
    tags: string[];
    title: string;
    tags: string[];
    description: string;
  };
}

export {};
