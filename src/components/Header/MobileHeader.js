import { ReactComponent as HamburgerIcon } from '../../assets/icon-hamburger.svg';
import './MobileHeader.css';

const MobileHeader = ({planets}) => {
  const toggleMenu = (e) => {
  };


  return (
    <header>
      <div className='mobile-header-container'>
        <h1>The Planets</h1>
        <HamburgerIcon onClick={toggleMenu} />
      </div>
    </header>
  );
};

export default MobileHeader;
