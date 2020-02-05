// Using Shared Components

import Link from 'next/link';

const linkStyle = {
    marginRight: 15
};

// Create the Header Component
// return an anomymous function object
const Header = () => (
    <div>
        <Link href="/">
            <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/about">
            <a style={linkStyle}>About</a>
        </Link>
    </div>
);

export default Header;
