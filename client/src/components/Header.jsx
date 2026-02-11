import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <Link to="/"><h1>The Happy Tail Blog</h1></Link>
        <Link to="/create" className="btn">New Post</Link>
      </nav>
    </header>
  );
}

export default Header;
