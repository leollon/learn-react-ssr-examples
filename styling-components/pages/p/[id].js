import { useRouter } from 'next/router';
import Layout from '../../components/Layout';

const Post = props => {
    const router = useRouter();
    
    return (
        <Layout>
            <h1>{router.query.id}</h1>
            <p>This is the '{router.query.id}' detail page.</p>
        </Layout>
    );
};

export default Post;
