import Layout from '../../components/layout';
import { getAllPostsIds } from '../../lib/posts';

export async function getStaticPaths() {
    const paths = getAllPostsIds();

    return {
        paths,
        fallback: false,
    };
}

export default function Post() {
  return <Layout>...</Layout>;
}