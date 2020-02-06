import Layout from '../components/Layout';
import Header from '../components/Header';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';

const Index = props => (
    <Layout>
        <h1>Batman TV Shows</h1>
        <ul>
            {props.shows.map(show => (
                <li key={show.id}>
                    <Link href="/p/[id]/" as={`/p/${show.id}`}>
                        {/*
                            When we click on a link wrapped with the Next.js `<Link>` component,
                            the page transition takes place in the browser, without making a request to the server.

                            If you just visit a post page directly (eg:- http://localhost:3000/p/975) you'll be able to
                            see the message printed on the server but not in the client.
                        */}
                        <a>{show.name}</a>
                    </Link>
                </li>
            ))}
        </ul>
    </Layout>
);

Index.getInitialProps = async () => {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    const data = await res.json();

    console.log(`Show data fetched. Count: ${data.length}`);

    return {
        shows: data.map(entry => entry.show)
    };
};

export default Index;