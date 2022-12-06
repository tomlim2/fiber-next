import { NextPage } from "next";

interface Post {
    title: string,
    id: string
}

interface Props{
    posts: Post[];
}

const Blog: NextPage<Props> = ({ posts }) => {
    return (
        <ul>
            {posts.map((post: Post) => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    )
}

const getStaticProps = async () => {
    // const res = await fetch('https://.../posts')
    // const posts = await res.json()
    const posts: Post[] = [{title:'hi', id:'1'}, {title:'why', id:'2'}]
    return {
        props: {
            posts,
        },
    }   
}

export { getStaticProps }
export default Blog 