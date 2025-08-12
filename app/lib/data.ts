"use server"

export type Post = {
    slug: string;
    title: string;
    body: string;
}

const post: Post[] = [
    {
        slug: "learn-nextjs",
        title: "Learning NextJS",
        body: "The Next Js App Router is mostly used now and no one uses Pages route anymore"
    }, {
        slug: "learn-react",
        title: "Learning React",
        body: "React is a popular JavaScript library for building user interfaces"
    }
]

export const getPosts = async (): Promise<Post[]> => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return post;
}

export const getPostBySlug = async (slug: string): Promise<Post | undefined> => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    return post.find((post) => post.slug === slug);
};