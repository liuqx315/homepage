import React from 'react'
import ReactMarkdown from 'react-markdown'

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div class="ui center aligned container">
          <div class="ui section divider"></div>
            <a href="/">
            <img style={{ maxWidth: '62px', margin: '30px auto' }} src="/static/images/profile.png" className="ui centered circular image" />
            <div className="content">
              <h1 style={{ fontSize: '1.5rem' }}>Ryo Suzuki</h1>
              <div className="sub header">
                Assistant Professor at University of Calgary
              </div>
            </div>
            </a>
          </div>
          <div class="ui horizontal small divided link list">
            <div className="item">
              <a href="https://scholar.google.com/citations?user=klWjaQIAAAAJ" target="_blank" style={{ fontSize: '1.2em' }}>
                <i className="fas fa-graduation-cap fa-fw" />
                Google Scholar
              </a>
            </div>
            <div className="item">
              <a href="/cv.pdf" target="_blank" style={{ fontSize: '1.2em' }}>
                <i className="far fa-file fa-fw" />
                Resume/CV
              </a>
            </div>
            <div className="item">
              <a href="mailto:ryo.suzuki@ucalgary.ca" target="_blank" style={{ fontSize: '1.2em' }}>
                <i className="far fa-envelope fa-fw" />
                ryo.suzuki@ucalgary.ca
              </a>
            </div>
            <br/>
            <div className="item">
              <a href="https://www.facebook.com/ryosuzk" target="_blank" style={{ fontSize: '1.2em' }}>
                <i className="fab fa-facebook-square fa-fw" />
                ryosuzk
              </a>
            </div>
            <div className="item">
              <a href="https://twitter.com/ryosuzk" target="_blank" style={{ fontSize: '1.2em' }}>
                <i className="fab fa-twitter fa-fw" />
                ryosuzk
              </a>
            </div>
            <div className="item">
              <a href="https://github.com/ryosuzuki" target="_blank" style={{ fontSize: '1.2em' }}>
                <i className="fab fa-github-alt fa-fw" />
                ryosuzuki
              </a>
            </div>
            <div className="item">
              <a href="https://www.linkedin.com/in/ryosuzuki/" target="_blank" style={{ fontSize: '1.2em' }}>
                <i className="fab fa-linkedin-in fa-fw" />
                ryosuzuki
              </a>
            </div>
          </div>
      </footer>
    )
  }
}

export default Footer