import Image from 'next/image';

interface Review {
  review: string;
  avatar: string;
  name: string;
  role: string;
}

interface TestimonialCardProps {
  review: Review;
  isVisible: boolean;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ review, isVisible }) => {
  return (
    <div className={`text-center ${isVisible ? '' : 'opacity-0'} [grid-area:stack] transition-all duration-700`}>
      <blockquote className={`block bg-secondary text-primary rounded-md p-4 text-md relative isolate transition-all duration-700 ${isVisible ? 'scale-100' : 'scale-0'} before:absolute before:bg-secondary before:w-6 before:h-6 before:rotate-45 before:-bottom-2 before:left-2/4 before:-translate-x-2/4 before:-z-10 before:transition before:duration-500 before:delay-500 ${isVisible ? 'before:translate-y-0' : 'before:-translate-y-4'}`}>
        {review.review}
      </blockquote>
      <div className={`text-sm flex flex-col items-center gap-2 mt-6 transition-all duration-700 ${isVisible ? 'translate-y-0' : 'translate-y-[150px]'}`}>
        <Image
          src={review.avatar}
          alt={review.name}
          width={64}
          height={64}
          className="object-cover rounded-full"
        />
        <div>
          <p className="text-lg font-bold leading-5 capitalize">{review.name}</p>
          <p className="text-sm">{review.role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
