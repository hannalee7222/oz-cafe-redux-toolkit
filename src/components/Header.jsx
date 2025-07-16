import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>☕ 오즈 카페</h1>
      <nav>
        <Link to="/" className="nav-link">
          메인
        </Link>
        <Link to="/cart" className="nav-link">
          장바구니
        </Link>
      </nav>
    </header>
  );
}

export default Header;
