import Layout from '../components/Layout';
import Link from 'next/link';

function getPosts() {
  return [{
      id: 'hello-nextjs',
      title: 'Hello Next.js'
    },
    {
      id: 'learn-nextjs',
      title: 'Learn Next.js'
    },
    {
      id: 'deploy-nextjs',
      title: 'Deploy Next.js'
    }
  ];
}

const PostLink = ({ post }) => (
  <li>
    <Link href="/p/[id]" as={`/p/${post.id}`}>
      <a>{post.title}</a>
    </Link>
    {/* style the child component directly */}
    {/* comment style out */}
    <style jsx>{`
      li {
        list-style: none;
        margin: 5px 0;
      }
      a {
        text-decoration: none;
        color: blue;
      }

      a: hover {
        opacity: 0.6;
      }
    `}</style>
  </li>
    
);

export default function Blog() {
  return (
    <Layout >
      <h1> My Blog </h1>
      <ul> {getPosts().map(post => (
        <PostLink key={post.id} post={post} />
      ))}
      </ul>
      <style jsx>{`
        h1,
        a {
          font - family: 'Arial';
        }
        ul {
          padding: 0;
        }
        // uncomment begins
        // li {
        //   list-style: none;
        //   margin: 5px 0;
        // }
        // a {
        //   text-decoration: none;
        //   color: blue;
        // }
        // a: hover {
        //   opacity: 0.6;
        // }
        // uncomment ends
      `}</style>
    </Layout>
  )
}