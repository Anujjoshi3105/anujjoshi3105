import { connectDB } from "@/lib/db";
import ProjectModel from "@/lib/models/project.model";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    await connectDB();
    const searchParams = new URL(request.url);
    const limit = parseInt(searchParams.searchParams.get("limit") || "-1", 10);

    const projects = await ProjectModel.find({}, "tags");
    if (projects.length === 0)
      return new NextResponse(JSON.stringify({ success: false }), {
        status: 404,
      });
    const allTags = projects.flatMap((project) => project.tags);
    const uniqueTags = Array.from(new Set(allTags)).slice(0, limit);

    return new NextResponse(
      JSON.stringify({ success: true, data: uniqueTags }),
      {
        status: 200,
      }
    );
  } catch (error: any) {
    console.error("Database error:", error);
    return new NextResponse(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
