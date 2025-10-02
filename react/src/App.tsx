import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="/" element={
          <div className="container">
            <h1>React RealWorld App</h1>
            <p>Navigate to /profile/[username] to see a profile</p>
            <p>Try: <a href="/profile/jake">/profile/jake</a></p>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;
