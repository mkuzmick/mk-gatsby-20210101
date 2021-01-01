import React from 'react'
import { Link } from 'gatsby'
import pic01 from '../images/bg-tulle-and-truss.jpg'

import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <span className="image main">
            <img src={pic01} alt="" />
    </span>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
