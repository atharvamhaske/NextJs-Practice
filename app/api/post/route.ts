import { prisma } from "../../lib/prisma"
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { title, content, authorEmail } = await req.json();

    // Validate input
    if (!title || !content || !authorEmail) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // Find the user who is the author
    const user = await prisma.user.findUnique({
      where: { email: authorEmail },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Create the post and link to the user
    const post = await prisma.post.create({
      data: {
        title,
        content,
        author: {
          connect: { id: user.id },
        },
      },
    });

    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
