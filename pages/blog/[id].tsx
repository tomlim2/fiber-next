import { NextPage } from "next";

const Post: NextPage<any> = ({ post }) => {
    console.log(post);
    
    return <div>hi:)</div>
}

const getStaticPaths = async () => {
    return {
        paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
        fallback: false, // can also be true or 'blocking'
    }
}

// `getStaticPaths` requires using `getStaticProps`
const getStaticProps = async (context: any) => {
    return {
        // Passed to the page component as props
        props: { post: {} },
    }
}

export { getStaticPaths, getStaticProps }

export default Post