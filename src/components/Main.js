import PropTypes from 'prop-types'
import React from 'react'
import pic02 from '../images/bg-saw.jpg'
import pic01 from '../images/bg-truss.jpg'
import pic03 from '../images/bg-clamp.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            Over the past year a number of fellows have expressed interest in practice, studies, exercises and etudes — in the sorts of mini and microprojects you perform as you learn a tool or prepare for a larger project. 
          </p>
          <p>
            So one of the goals for 2021 will be to design, test and practice some of these activities.
          </p>
          <p>
            As far as my spare time goes, I'm going to spend it on different tool each month (starting with GatsbyJS), creating a daily "study" in that tool that can be completed in something like an hour (plus or minus).
          </p>
          <p>
            Now, there needs to be some content in these studies . . . you can't just practice the tool on pure abstract form (at least not without becoming bored and/or producing nothing of lasting value). So what I'm going to try to do (on JK and LF's suggestion) is to focus on a specific term of the day (either the name of Tool or the name of a Move), which, even if I fail miserably to create the ideal form with the Tool in question, will still nudge us closer to the LL Glossary we've been poking at over the years.
          </p>
          <p>
            OK. So let's get started. It's 20210101, and this is the first of 31 Gatsby sites I'm going to make this month.
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Tools</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu,
            at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent
            urna nisi, fringila lorem et vehicula lacinia quam. Integer
            sollicitudin mauris nec lorem luctus ultrices.
          </p>
          <p>
            Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
            Pellentesque condimentum sem. In efficitur ligula tate urna.
            Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor.
            Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat
            tempus.
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Moves</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            Coming soon (i.e. tomorrow, but on a different site).
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Next</h2>
          <p>
            I'm looking for suggestions for both monthly Tools to practice, and for the daily entries in the Glossary of Tools and Moves. I probably won't hook this particular form up to anything, so don't bother entering anything just yet. But if I DID hook it up, these are some of the questions I'd ask.
          </p>
          <form name="tool-ideas" method="POST" data-netlify="true" action="/"> 
            <input type="hidden" name="form-name" value="tool-ideas" />
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/HuntaroSan"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/codebushi/gatsby-starter-dimension"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
