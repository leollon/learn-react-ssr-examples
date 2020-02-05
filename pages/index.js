// pages/index.js
// import component and use it in pages

import withLayout from '../components/Layout';

// return an anomymous function object
const Page = () => (<p>Hello Next.js</p>);

export default withLayout(Page);
