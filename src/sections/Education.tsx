import EduCard from '@/components/EduCard';
import Template from '@/components/Template';
import {education} from '@/helper/data'

const Education = () => {
  return (
    <Template title="Education" subtitle="My Qualification">
      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:bg-primary">
        {education.map((edu, index) => (
          <EduCard
            key={index}
            grade={edu.grade}
            title={edu.title}
            date={edu.date}
            center={edu.center}
          />
        ))}
      </div>
    </Template>
  );
};

export default Education;
