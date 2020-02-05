// The Layout Component
import Header from './Header';

// an object
const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
};

// Layout as a Higher Order Component

const withLayout = function(Page) {
    // return an anonymous function object
    return () => (
        <div style={layoutStyle}>
            <Header />
            <Page />
        </div>
    );
};

export default withLayout;