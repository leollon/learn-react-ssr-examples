// pages/about.js

import Layout from '../components/Layout';

// Page content as a property
// This is a JSX
const aboutPageContent = <p>This is the about page</p>

export default function About() {
    return <Layout content={aboutPageContent} />
};