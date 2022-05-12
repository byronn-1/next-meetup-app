import { useRouter } from 'next/router';

function DetailPage(props) {
    const router = useRouter();

    console.log(router.query.newsId);

    /*http://localhost:3001/dynamicRouteBasic/something*/
    //note that this is all based on the name of the file in the brackets

    return <h1>The Detail Page</h1>
}

export default DetailPage;