import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  img: { type: String, required: true },
  problem: { type: String, required: true },
  action: { type: String, required: true },
  type: {
    type: String,
    enum: [
      "Machine Learning",
      "Web Development",
      "Data Science",
      "Mobile Development",
      "AI",
      "Blockchain",
      "Other",
    ],
    required: true,
  },
  features: [{ type: String }],
  challenges: [{ type: String }],
  results: [{ type: String }],
  "future-scope": [{ type: String }],
  github: { type: String },
  link: { type: String },
  tags: [{ type: String }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const ProjectModel =
  mongoose.models.Project || mongoose.model("Project", ProjectSchema);

export default ProjectModel;
