import mongoose from "mongoose";
import dotenv from "dotenv";
import BlogModel from "./src/models/BlogModel";
import blogs from "./src/data/seed/blogs.json";
import EducationModel from "./src/models/EducationModel";
import education from "./src/data/seed/education.json";
import ExperienceModel from "./src/models/ExperienceModel";
import experiences from "./src/data/seed/experiences.json";
import ProjectModel from "./src/models/ProjectModel";
import projects from "./src/data/seed/projects.json";
import TestimonialModel from "./src/models/TestimonialModel";
import testimonials from "./src/data/seed/testimonials.json";

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
    const existingBlogs = await EducationModel.countDocuments();
    if (existingBlogs > 0) {
      console.log("Blog data already seeded.");
    } else {
      await BlogModel.insertMany(blogs);
      console.log("Blog data seeded successfully.");
    }

    const existingEducation = await EducationModel.countDocuments();
    if (existingEducation > 0) {
      console.log("Education data already seeded.");
    } else {
      await EducationModel.insertMany(education);
      console.log("Education data seeded successfully.");
    }

    const existingExperiences = await ExperienceModel.countDocuments();
    if (existingExperiences > 0) {
      console.log("Experience data already seeded.");
    } else {
      await ExperienceModel.insertMany(experiences);
      console.log("Experience data seeded successfully.");
    }

    const existingProjects = await ProjectModel.countDocuments();
    if (existingProjects > 0) {
      console.log("Projects data already seeded.");
    } else {
      await ProjectModel.insertMany(projects);
      console.log("Projects data seeded successfully.");
    }

    const existingTestimonials = await TestimonialModel.countDocuments();
    if (existingTestimonials > 0) {
      console.log("Testimonial data already seeded.");
    } else {
      await TestimonialModel.insertMany(testimonials);
      console.log("Testimonial data seeded successfully.");
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
    await EducationModel.deleteMany({});
    console.log("Education data deleted successfully.");
    await ExperienceModel.deleteMany({});
    console.log("Experience data deleted successfully.");
    await ProjectModel.deleteMany({});
    console.log("Projects data deleted successfully.");
    await TestimonialModel.deleteMany({});
    console.log("Testimonial data deleted successfully.");
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
