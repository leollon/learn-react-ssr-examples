// The Layout Component
import Header from './Header';

// an object
const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
};

const Layout = properties => (
    <div style={layoutStyle}>
        <Header />
        {properties.children}
    </div>
);

export default Layout;