import Layout from '../../components/layout';
import { getAllPostsIds, getPostData } from '../../lib/posts';

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);
    return {
        props: {
            postData,
        },
    };
}

export async function getStaticPaths() {
    const paths = getAllPostsIds();

    return {
        paths,
        fallback: false,
    };
}

export default function Post({ postData }) {
  return (
    <Layout>
        {postData.title}
        <br />
        {postData.id}
        <br />
        {postData.date}
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
  )
}