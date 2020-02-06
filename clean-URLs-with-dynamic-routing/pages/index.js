import Layout from '../components/Layout';
import Link from 'next/link';

const PostLink = props => (
    <li>
        {/*
            In the `<Link>` element, the `href` prop is now the path of the page
            in the `pages` folder and `as` is the URL to show in URL bar of the browser.
        */}
        <Link href="/p/[id]/" as={`/p/${props.id}/`}>
            <a>{props.id}</a>
        </Link>
    </li>
);

export default function Blog() {
    return (
        <Layout>
            <h1>My Blog</h1>
            <ul>
                <PostLink id="hello-nextjs" />
                <PostLink id="learn-nextjs" />
                <PostLink id="deploy-nextjs" />
            </ul>
        </Layout>
    )
}