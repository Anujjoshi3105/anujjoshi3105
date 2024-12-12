import mongoose from "mongoose";

const EducationSchema = new mongoose.Schema({
  institute: { type: String, required: true },
  place: { type: String, required: true },
  degree: { type: String, required: true },
  start: { type: Date, required: true },
  end: { type: Date, required: false },
  grade: { type: String, required: false },
});

const EducationModel =
  mongoose.models.Education || mongoose.model("Education", EducationSchema);

export default EducationModel;
