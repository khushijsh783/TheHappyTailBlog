import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PostDetail from './pages/PostDetail';
import CreatePost from './pages/CreatePost';
import Header from './components/Header';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<PostDetail />} />
          <Route path="/create" element={<CreatePost />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
