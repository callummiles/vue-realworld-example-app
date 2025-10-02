import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import TagsPage from './pages/TagsPage'

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-light">
          <div className="container">
            <Link className="navbar-brand" to="/">conduit</Link>
            <ul className="nav navbar-nav pull-xs-right">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/tags">Tags</Link>
              </li>
            </ul>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={
            <div className="home-page">
              <div className="banner">
                <div className="container">
                  <h1 className="logo-font">conduit</h1>
                  <p>A place to share your knowledge.</p>
                </div>
              </div>
              <div className="container page">
                <div className="row">
                  <div className="col-md-12">
                    <p>Welcome to the React implementation of Conduit!</p>
                    <p>Navigate to <Link to="/tags">Tags</Link> to see the tag list.</p>
                  </div>
                </div>
              </div>
            </div>
          } />
          <Route path="/tags" element={<TagsPage />} />
        </Routes>

        <footer>
          <div className="container">
            <Link to="/" className="logo-font">conduit</Link>
            <span className="attribution">
              React implementation. An interactive learning project from <a href="https://thinkster.io">Thinkster</a>. Code &amp; design licensed under MIT.
            </span>
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App
