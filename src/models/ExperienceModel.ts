import mongoose from "mongoose";

const ExperienceSchema = new mongoose.Schema({
  company: { type: String, required: true },
  role: { type: String, required: true },
  link: { type: String, required: true },
  start: { type: Date, required: true },
  end: { type: Date },
  place: { type: String, required: true },
  description: [{ type: String }],
  skills: [{ type: String }],
});

const ExperienceModel =
  mongoose.models.Experience || mongoose.model("Experience", ExperienceSchema);
export default ExperienceModel;
