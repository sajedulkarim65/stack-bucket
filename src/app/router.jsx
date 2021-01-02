import App from "./App";

import { Router, Redirect } from '@reach/router'


// Custom Components
import BucketPage from '../pages/buckets'
import BucketDetails from '../pages/bucket-details'
import NotFound from '../pages/404'

function AppRouter() {
    return (
        <Router>
            <BucketPage path='/' />
            <Redirect from='buckets' to='/' noThrow />
            <BucketDetails path='/buckets/:bucketID' />
            <NotFound default />
        </Router>
    )
}

export default AppRouter