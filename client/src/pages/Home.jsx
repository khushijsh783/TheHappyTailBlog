import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/posts')
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Recent Posts</h1>
      {posts.length === 0 ? (
        <p>No posts yet. Create your first post!</p>
      ) : (
        posts.map((post) => (
          <div key={post._id} className="post-card">
            <Link to={`/post/${post._id}`}>
              <h2>{post.title}</h2>
            </Link>
            <p>By {post.author} • {new Date(post.createdAt).toLocaleDateString()}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Home;
