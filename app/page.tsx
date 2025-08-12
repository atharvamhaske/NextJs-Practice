"use server"
import { getPosts } from "./lib/data"
import Link from "next/link"
export default async function Home() {

  const post = await getPosts();

  return (
    <div className="flex flex-col gap-2 justify-center items-center bg-neutral-700 text-gray-50">
      <h1>Blog</h1>
       <p className="text-white/40">Click on blog to read it</p>
       <ul>
        {post.map((posts) => (
          <li key={posts.slug}>
            <Link href={`/blog/${posts.slug}`}>{posts.title}</Link>
          </li>
        ))}
       </ul>
    </div>
  )
}