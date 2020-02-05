// The Layout Component
import Header from './Header';

// an object
const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
};

// return an anonymous function object
const Layout = props => (
    <div style={layoutStyle}>
        <Header />
        {/* rendering Child Components */}
        {props.children}
    </div>
);

export default Layout;