import { connectDB } from "@/lib/db";
import ProjectModel from "@/lib/models/project.model";

export async function GET(request: Request) {
  const searchParams = new URL(request.url);
  const search = searchParams.searchParams.get("search");
  const id = searchParams.searchParams.get("id");
  const title = searchParams.searchParams.get("title");
  const tag = searchParams.searchParams.get("tag");
  const type = searchParams.searchParams.get("type");
  const description = searchParams.searchParams.get("description");
  const limit = parseInt(searchParams.searchParams.get("limit") || "10", 10);

  const filter: Record<string, any> = {};

  if (search) {
    filter.$or = [
      { title: { $regex: search, $options: "i" } },
      { description: { $regex: search, $options: "i" } },
      { tags: { $regex: search, $options: "i" } },
      { type: { $regex: search, $options: "i" } },
    ];
  } else {
    if (id) filter._id = id;
    if (title) filter.title = { $regex: title, $options: "i" };
    if (tag) filter.tags = { $in: [tag] };
    if (type) filter.type = type;
    if (description)
      filter.description = { $regex: description, $options: "i" };
  }

  try {
    const mongoose = await connectDB();
    const data = await ProjectModel.find(filter).limit(limit);

    if (!data || data.length === 0) {
      return new Response(
        JSON.stringify({ error: "No matching projects found." }),
        {
          status: 404,
        }
      );
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
