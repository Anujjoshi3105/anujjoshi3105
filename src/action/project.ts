"use server";
import projects from "@/data/seed/projects.json";
import { connectDB } from "@/lib/db";
import ProjectModel from "@/models/ProjectModel";

const getProjectById = async (id: string) => {
  try {
    await connectDB();
    const project = await ProjectModel.findOne({ _id: id });

    if (project) {
      return project as Project;
    }

    return projects.find((project) => project._id === id) as
      | Project
      | undefined;
  } catch (error) {
    console.error("Error fetching project data:", error);
    return projects.find((project) => project._id === id) as
      | Project
      | undefined;
  }
};

const getAllProjectIds = async () => {
  try {
    await connectDB();
    const data = await ProjectModel.find({}, "_id");

    return data.map((project) => ({ params: { id: project._id.toString() } }));
  } catch (error) {
    console.error("Error fetching all project IDs:", error);
    return projects.map((project) => ({
      params: { id: project._id.toString() },
    }));
  }
};

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
const getTotalProjects = async () => {
  try {
    await connectDB();
    const data = await ProjectModel.countDocuments();
    return data;
  } catch (error) {
    console.error("Error fetching all projects:", error);
    return projects.length;
  }
};
export { getProjectById, getAllProjectIds, getAllProjects, getTotalProjects };
