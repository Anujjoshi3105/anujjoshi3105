import mongoose from "mongoose";

const TestimonialSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  avatar: { type: String, required: true },
  review: { type: String, required: true },
});

const TestimonialModel =
  mongoose.models.Testimonial ||
  mongoose.model("Testimonial", TestimonialSchema);
export default TestimonialModel;
