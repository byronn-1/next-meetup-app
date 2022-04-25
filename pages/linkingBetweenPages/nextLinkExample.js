import { Fragment } from 'react';
import Link from 'next/link';

function NewsPage() {

    // http://localhost:3001/linkingBetweenPages/nextLinkExample
    return (
        <Fragment>
            <h1>The News Page</h1>
            <ul>
                <li>
                    <Link href="/dynamicRouteBasic/some-great-news-article">NextJs is alright!!!</Link>
                </li>
                <li>something else...</li>
            </ul>
        </Fragment>
    );
}

export default NewsPage;