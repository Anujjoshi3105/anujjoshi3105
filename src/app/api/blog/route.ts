import { connectDB } from "@/lib/db";
import BlogModel from "@/lib/models/blog.model";

export async function GET(request: Request) {
  const searchParams = new URL(request.url);

  const id = searchParams.searchParams.get("id");
  const title = searchParams.searchParams.get("title");
  const description = searchParams.searchParams.get("description");
  const search = searchParams.searchParams.get("q");
  const limit = parseInt(searchParams.searchParams.get("limit") || "10", 10);

  const filter: Record<string, any> = {};

  if (id) filter._id = id;
  if (title) filter.title = { $regex: title, $options: "i" };
  if (description) filter.description = { $regex: description, $options: "i" };

  if (search) {
    const searchRegex = { $regex: search, $options: "i" };
    filter.$or = [
      { title: searchRegex },
      { description: searchRegex },
      { content: searchRegex },
      { tags: searchRegex },
    ];
  }

  try {
    await connectDB();

    const data = await BlogModel.find(filter).limit(limit);

    if (data.length === 0) {
      return new Response(
        JSON.stringify({ error: "No matching blogs found." }),
        { status: 404 }
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
