import React from 'react'
import { Link } from 'gatsby'
import pic01 from '../images/bg-tulle-and-truss.jpg'

import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
      <h1>Success!!!</h1>
    <span className="image main">
            <img src={pic01} alt="" />
    </span>
    <p>thanks--seriously!</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
