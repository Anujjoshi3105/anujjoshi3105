"use server";
import projects from "@/lib/data/seed/projects.json";
import { connectDB } from "@/lib/db";
import ProjectModel from "@/lib/models/project.model";

const getAllProjects = async () => {
  try {
    await connectDB();
    const data = await ProjectModel.find({}).sort({ createdAt: -1 });
    return data as Project[];
  } catch (error) {
    console.error("Error fetching all projects:", error);
    return projects as Project[];
  }
};

export { getAllProjects };
