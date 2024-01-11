import '@popperjs/core';
import 'bootstrap/js/dist/collapse';
import { Link } from 'react-router-dom';
import './styles.css';

const NavBar = () => {
    return (
        <nav className='bg-primary main-nav'>
            <Link to='/'>
                <h4>MovieFlix</h4>
            </Link>
        </nav>
    );
};

export default NavBar;
