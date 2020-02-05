// pages/p/[id].js

import { useRouter } from 'next/router';
import Layout from '../../components/Layout';

export default function Post() {
    const router = useRouter();

    return (
        <Layout>
            <h1>{router.query.id}</h1>
            <p>This is the '{router.query.id}' post content.</p>
        </Layout>
    );
};

