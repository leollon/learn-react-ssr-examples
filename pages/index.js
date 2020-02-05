// pages/index.js
// Make sure your React Component is the default export.

// Client-Side History Support
// When you hit the Back button, it navigates the page to the index page
// entirely via the client; next / link does all the location.history handling for you.
import Link from 'next/link';

export default function Index() {
    return (
        <div>
            <Link href="/about">
                {/* Adding Link Props */}
                <a title="About Page">About Page</a>
            </Link>
            <p>Hello Next.js</p>
        </div>
    );
}