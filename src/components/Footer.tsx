import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaFacebook} from 'react-icons/fa6';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='footer-section contact-info'>
       
          <h3>Contact Us</h3>
          <p>Email: sarveshrembhotkarjm@gmail.com</p>
          <p>Phone: +1 (682)-256-5500</p>
        </div>

        <div className='footer-section social-media'>
          <h4>Follow Us</h4>
          <ul>
            <li>
              <a href='https://github.com/zfranczak' target='_blank'>
                <FaGithub color='#a7ec94' size={20} style={{ paddingLeft: '6px' }}/>
              </a>
            </li>
            <li>
              <a
                href='https://www.linkedin.com/in/zachary-franczak/'
                target='_blank'
              >
                <FaLinkedin color='#a7ec94' size={20} style={{ paddingLeft: '6px' }}/>
              </a>
            </li>
            <li>
              <a href='https://twitter.com/zakfranczak' target='_blank'>
                <FaFacebook color='#a7ec94' size={20} style={{ paddingLeft: '6px' }}/>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='footer-bottom'>
        <p>&copy; 2025 Dog Finder. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;