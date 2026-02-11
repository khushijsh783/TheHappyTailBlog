import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Header() {
  const { user, logout } = useAuth();

  return (
    <header>
      <nav>
        <Link to="/"><h1>The Happy Tail Blog</h1></Link>
        <div className="nav-links">
          {user ? (
            <>
              <span className="user-greeting">Hi, {user.firstName}</span>
              <Link to="/create" className="btn">New Post</Link>
              <button onClick={logout} className="btn btn-logout">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn">Login</Link>
              <Link to="/signup" className="btn">Sign Up</Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
