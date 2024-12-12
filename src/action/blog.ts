"use server";

import blogs from "@/data/seed/blogs.json";
import { connectDB } from "@/lib/db";
import BlogModel from "@/models/BlogModel";
import { isValidObjectId } from "mongoose";

const sanitizeMongooseObject = (doc: any) => {
  if (doc && typeof doc.toObject === "function") {
    return doc.toObject();
  }
  return doc;
};

const getBlogById = async (id: string) => {
  try {
    await connectDB();
    if (isValidObjectId(id)) {
      const blog = await BlogModel.findOne({ _id: id });
      if (blog) {
        return sanitizeMongooseObject(blog);
      }
    }

    return blogs.find((blog) => blog._id === id) as Blog | undefined;
  } catch (error) {
    console.error("Error fetching blog data:", error);
    return blogs.find((blog) => blog._id === id) as Blog | undefined;
  }
};

const getAllBlogIds = async () => {
  try {
    await connectDB();
    const data = await BlogModel.find({}, "_id");
    return data.map((blog) => ({ params: { id: blog._id.toString() } }));
  } catch (error) {
    console.error("Error fetching all blog IDs:", error);
    return blogs.map((blog) => ({ params: { id: blog._id.toString() } }));
  }
};

const getAllBlogs = async () => {
  try {
    await connectDB();
    const data = await BlogModel.find({}).sort({ createdAt: -1 });
    return data.map((blog) => sanitizeMongooseObject(blog));
  } catch (error) {
    console.error("Error fetching all blog data:", error);

    return blogs as Blog[];
  }
};

const getTotalBlogs = async () => {
  try {
    await connectDB();
    const count = await BlogModel.countDocuments();
    return count;
  } catch (error) {
    console.error("Error fetching total blogs:", error);

    return blogs.length;
  }
};

export { getBlogById, getAllBlogIds, getAllBlogs, getTotalBlogs };
