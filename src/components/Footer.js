import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">Links => <a href="https://github.com/mkuzmick/mk-gatsby-20210101">The Github repo.</a> | <a href="https://www.gatsbyjs.org/">Gatsby.js</a> | <a href="https://www.gatsbyjs.com/starters/codebushi/gatsby-starter-dimension">gatsby-starter-dimension</a></p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
