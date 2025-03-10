import mongoose from "mongoose";
import dotenv from "dotenv";
import BlogModel from "../src/lib/models/blog.model";
import blogs from "../src/lib/data/seed/blogs.json";
import ProjectModel from "../src/lib/models/project.model";
import projects from "../src/lib/data/seed/projects.json";

dotenv.config({
  path: __dirname + "/.env",
});

mongoose
  .connect(process.env.MONGODB_URI as string)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  });

const importData = async () => {
  try {
    const existingBlogs = await BlogModel.countDocuments();
    if (existingBlogs > 0) {
      console.log("Blog data already seeded.");
    } else {
      await BlogModel.insertMany(blogs);
      console.log("Blog data seeded successfully.");
    }

    const existingProjects = await ProjectModel.countDocuments();
    if (existingProjects > 0) {
      console.log("Projects data already seeded.");
    } else {
      await ProjectModel.insertMany(projects);
      console.log("Projects data seeded successfully.");
    }

    console.log("All data imported successfully.");
    process.exit(0);
  } catch (error) {
    console.error("Error during data import:", error);
    process.exit(1);
  }
};

const deleteData = async () => {
  try {
    await BlogModel.deleteMany({});
    console.log("Blog data deleted successfully.");
    await ProjectModel.deleteMany({});
    console.log("Projects data deleted successfully.");
    console.log("All Data deleted successfully.");
    process.exit(0);
  } catch (error) {
    console.error("Error during data deletion:", error);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  deleteData();
}
if (process.argv[2] === "-i") {
  importData();
}
