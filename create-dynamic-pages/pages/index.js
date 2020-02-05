// pages/index.js
import Layout from '../components/Layout';
import Link from 'next/link';


// return an anonymous function object
// PostLink component
const PostLink = props => (
    <li>
        {/* use query string for creating dynamic pages */}
        {/* passing data via query strings */}
        <Link href={`/post?title=${props.title}`}>
            <a>{props.title}</a>
        </Link>
    </li>
);


export default function Blog() {
    return (
        <Layout>
            <h1>My Blog</h1>
            <ul>
                <PostLink title="Hello next.js" />
                <PostLink title="Learn Next.js is awesome" />
                <PostLink title="Deploy apps with Zeit" />
            </ul>
        </Layout>
    )
}