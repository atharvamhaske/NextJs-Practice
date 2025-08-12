"use server"
import { getPostBySlug } from "@/app/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";

type PostPageProps = {
    params: {
        slug: string;
    }
}

export default async function Post({params} : PostPageProps) {
    const {slug} = params;

    const post = await getPostBySlug(slug);

    if(!post) {
        notFound()
    }

    return (
        <div className="grid grid-cols-3 items-center bg-neutral-700 text-gray-100">
            <div>Blogs using Slugs ...</div>
            <div>This is a params and slugs based route</div>
            <div>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
                <Link href={"/"}>Back to all posts</Link>
            </div>
        </div>
    )
}