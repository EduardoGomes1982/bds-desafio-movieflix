import '@popperjs/core';
import 'bootstrap/js/dist/collapse';
import { Link } from 'react-router-dom';
import './styles.css';
import LogoutButton from 'components/LogoutButton';

const NavBar = () => {
    return (
        <nav className='bg-primary main-nav'>
            <Link to='/'>
                <h4>MovieFlix</h4>
            </Link>
            <LogoutButton />
        </nav>
    );
};

export default NavBar;
