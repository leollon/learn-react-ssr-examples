// The layout component

import Header from './Header';

// an object
const layoutStryle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
};

const Layout = props => (
    <div style={layoutStryle}>
        <Header />
        {props.children}
    </div>
);

export default Layout;
