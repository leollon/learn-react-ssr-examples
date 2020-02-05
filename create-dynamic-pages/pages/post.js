import { useRouter } from 'next/router';
import Layout from '../components/Layout';

// return an anonumous function object
const Page = () => {
    // A react hook: https://reactjs.org/docs/hooks-intro.html
    const router = useRouter();

    return (
        <Layout>
            <h1>{router.query.title}</h1>
            <p>This is tha blog post content.</p>
        </Layout>
    );
};

export default Page;
