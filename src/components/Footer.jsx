
import './Footer.css';
import SMXIcon from '../assets/images/icons/SM-x.svg';
import InstagramIcon from '../assets/images/icons/SM-instagram.svg';
import FacebookIcon from '../assets/images/icons/SM-facebook.svg';
import YouTubeIcon from '../assets/images/icons/SM-youtube.svg';
import TikTokIcon from '../assets/images/icons/SM-tiktok.svg';
import SpainFlag from '../assets/images/icons/Spain.svg';

const Footer = () => {
  return (
    <footer>
      <div className="socialmedia">
        <a href="https://twitter.com" className="x">
          <img src={SMXIcon} alt="X" />
        </a>
        <a href="https://instagram.com" className="instagram">
          <img src={InstagramIcon} alt="Instagram" />
        </a>
        <a href="https://facebook.com" className="facebook">
          <img src={FacebookIcon} alt="Facebook" />
        </a>
        <a href="https://youtube.com" className="youtube">
          <img src={YouTubeIcon} alt="YouTube" />
        </a>
        <a href="https://tiktok.com" className="tiktok">
          <img src={TikTokIcon} alt="TikTok" />
        </a>
      </div>
      <div className="flag">
        <a href="#" className="flag">
          <img src={SpainFlag} alt="Bandera España" />
        </a>
      </div>
      <div className="language">
        <a href="#" className="spain">Spain</a>
      </div>
      <div className="legalterms">
        <a href="#" className="privacy">Privacy</a>
        <a href="#" className="googlenest">Google Nest Commitment to Privacy</a>
        <a href="#" className="sales">Sales Terms</a>
        <a href="#" className="terms">Terms of Service</a>
      </div>
    </footer>
  );
}

export default Footer;
