import { Fragment } from 'react';


// this methodology sends a request to the backend every time for the page to be rendered. This means it looses state and isn't really a true SPA
function NewsPage() {


    return <Fragment>
        <h1>The News Page</h1>
        <ul>
            <li>
                <a href="/dynamicRouteBasic/some-great-news-article">NextJs is alright!!!</a>
            </li>
            <li>something else...</li>
        </ul>
    </Fragment>
}

export default NewsPage;