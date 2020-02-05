// pages/index.js
// import component and use it in pages

import Layout from '../components/Layout';

// Page content as a property
// This is a JSX
const indexPageContent = <p>Hello Next.js</p>

export default function Index() {
    return <Layout content={indexPageContent} />
};