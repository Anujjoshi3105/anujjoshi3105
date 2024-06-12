import { FaGraduationCap } from "react-icons/fa";

interface EduCardProps {
  grade: string;
  title: string;
  date: string;
  center: string;
}

const EduCard: React.FC<EduCardProps> = ({ grade, title, date, center }) => {
  return (
    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
      <div className="flex items-center justify-center w-10 h-10 rounded-full group-hover:bg-tertiary group-hover:text-theme bg-theme text-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
        <FaGraduationCap />
      </div>
      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] group-hover:bg-secondary bg-tertiary p-4 rounded border-b-2 border-theme">
        <div className="flex items-center justify-between space-x-2 font-semibold">
          <div>{title}</div>
          <time>{date}</time>
        </div>
        <div className="mb-2">{center}</div>
        <div>{grade}</div>
      </div>
    </div>
  );
};

export default EduCard;
