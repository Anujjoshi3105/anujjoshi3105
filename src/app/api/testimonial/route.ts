import { connectDB } from "@/lib/db";
import TestimonialModel from "@/models/TestimonialModel";

export async function GET(request: Request) {
  try {
    const mongoose = await connectDB();
    const data = await TestimonialModel.find();

    if (data.length === 0) {
      return new Response(JSON.stringify({ error: "No data found" }), {
        status: 404,
      });
    }
    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
    });
  } catch (error: any) {
    console.error("Database error:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
