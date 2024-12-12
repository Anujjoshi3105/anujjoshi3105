import Image from "next/image";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { formatDate } from "@/utils/date";

const BlogCard = ({ blog }: { blog: Blog }) => (
  <Link
    href={`/blog/${blog._id}`}
    className="group shadow-md hover:shadow-theme/40 bg-muted rounded-md overflow-hidden transition-transform duration-150 hover:-translate-y-2 brightness-125 flex flex-col h-[350px]">
    <div className="h-[200px] overflow-hidden relative">
      <Image
        src={blog.img}
        alt={`${blog.title} preview`}
        className="object-cover w-full h-full rounded-t-md group-hover:scale-125 duration-150"
        width={1000}
        height={1000}
      />
    </div>
    <div className="flex flex-col h-[200px] p-4 font-roboto">
      <h2 className="font-semibold">{blog.title}</h2>
      <div className="space-x-1 mb-4 mt-1 h-6 overflow-hidden">
        {blog.tags.map((tech, index) => (
          <Badge key={index}>{tech}</Badge>
        ))}
      </div>
      <p className="text-sm opacity-70 font-mono overflow-hidden text-ellipsis line-clamp-3">
        <span className="text-theme text-xs">
          {formatDate(blog.createdAt)}&nbsp;|&nbsp;
        </span>
        {blog.description}
      </p>
    </div>
  </Link>
);

export default BlogCard;
