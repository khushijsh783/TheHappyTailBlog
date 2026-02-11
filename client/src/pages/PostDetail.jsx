import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function PostDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/posts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      await fetch(`/api/posts/${id}`, { method: 'DELETE' });
      navigate('/');
    }
  };

  if (loading) return <p>Loading...</p>;
  if (!post) return <p>Post not found</p>;

  return (
    <article>
      <h1>{post.title}</h1>
      <p>By {post.author} • {new Date(post.createdAt).toLocaleDateString()}</p>
      <div style={{ marginTop: '20px', whiteSpace: 'pre-wrap' }}>{post.content}</div>
      <button onClick={handleDelete} className="btn" style={{ marginTop: '20px', background: '#e74c3c' }}>
        Delete Post
      </button>
    </article>
  );
}

export default PostDetail;
