import React from "react";

import Layout from "../components/layout/layout";
import { Link } from "gatsby";
import Head from "../components/head";
const NotFound = () => {
    return (
        <Layout>
            <Head title="404" />
            <p>Page not found</p>
            <p><Link to="/">Head Home</Link></p>
        </Layout>
    )
}

export default NotFound;