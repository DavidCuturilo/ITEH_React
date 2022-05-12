import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import {Button} from './Button';

function Navbar(){
    const [click, setClick] = useState(false);
    const [button,setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    },[]);

    window.addEventListener('resize',showButton);

    return (
        <nav className="navbar">
            <div className="navbar-container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            AROUND THE WORLD <i className="fas fa-globe-europe"></i>
            </Link>
            <div className="menu-icon" onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
             <li className="nav-item">
                 <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                     Home page
                 </Link>
             </li>
             <li className="nav-item">
                 <Link to='/offer' className='nav-links' onClick={closeMobileMenu}>
                     Offer
                 </Link>
             </li>

            </ul>
            {button && <Button buttonStyle='btn--outline'>Contact</Button>}
            </div>
        </nav>
    )
}

export default Navbar; 