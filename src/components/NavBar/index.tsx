import '@popperjs/core';
import { AuthContext } from 'AuthContext';
import 'bootstrap/js/dist/collapse';
import LogoutButton from 'components/LogoutButton';
import { useContext, useEffect } from 'react';
import history from 'utils/history';
import { getTokenData, isAuthenticated, removeAuthData } from 'utils/requests';
import './styles.css';

const NavBar = () => {
    const { authContextData, setAuthContextData } = useContext(AuthContext);

    const logoutHandleClick = () => {
        removeAuthData();
        setAuthContextData({ authenticated: false });
    };

    useEffect(() => {
        if (isAuthenticated())
            setAuthContextData({ authenticated: true, tokenData: getTokenData() })
        else
            setAuthContextData({ authenticated: false })
    }, [setAuthContextData]);

    const handleClickLink = (path: string) => {
        if (isAuthenticated())
            history.push(path);
        else
            setAuthContextData({ authenticated: false });
    }

    return (
        <nav className='bg-primary main-nav'>
            <h4 onClick={() => handleClickLink("/")}>MovieFlix</h4>
            {authContextData.authenticated ? (<LogoutButton onClick={logoutHandleClick} />) : (<></>)}
        </nav>
    );
};

export default NavBar;
