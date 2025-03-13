import { Link, useLocation } from 'react-router-dom';
import '../styles/nav.css';
import { useEffect, useState } from 'react';
import { FaDog } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  const [currentPage, setCurrentPage] = useState<string>('');
  const location = useLocation();

  const navigate = useNavigate();

  const logoutUser = async () => {
    try {
      const response = await fetch(
        'https://frontend-take-home-service.fetch.com/auth/logout',
        {
          method: 'post',
          credentials: 'include',
        }
      );
      if (response.ok) {
        setTimeout(() => {
          navigate('/');
        }, 2000);
      } else {
        throw new Error('Failed to logout');
      }
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location]);

  return (
    <nav className='navbar'>
      {/* Left Section - Logo and Title */}
      <div className='navbar-left'>
        <Link to='/' className='navbar-logo'>
          <FaDog size={27} className='dog-icon' />
          <span className='navbar-title'>Dog Finder</span>
        </Link>
      </div>

      {/* Right Section - Navigation Links */}
      <ul className='navbar-links'>
        <li className={`menu-item ${currentPage === '/search' ? 'active' : ''}`}>
          <Link to='/search'>Search</Link>
        </li>
        <li className={`menu-item ${currentPage === '/favorites' ? 'active' : ''}`}>
          <Link to='/favorites'>Favorites</Link>
        </li>
        <li className='menu-item'>
          <button className='logout-btn' onClick={logoutUser}>
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;