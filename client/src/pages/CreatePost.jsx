import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreatePost() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ title: '', content: '', author: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      navigate('/');
    }
  };

  return (
    <div>
      <h1>Create New Post</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Author"
          value={form.author}
          onChange={(e) => setForm({ ...form, author: e.target.value })}
          required
        />
        <textarea
          placeholder="Write your post content..."
          value={form.content}
          onChange={(e) => setForm({ ...form, content: e.target.value })}
          required
        />
        <button type="submit" className="btn">Publish</button>
      </form>
    </div>
  );
}

export default CreatePost;
