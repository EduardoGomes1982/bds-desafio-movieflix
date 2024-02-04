import NavBar from 'components/NavBar';
import PrivateRoute from 'components/PrivateRoute';
import { Redirect, Route, Router, Switch } from 'react-router-dom';
import Home from 'routes/Home';
import Movies from 'routes/Movies';
import MoviesDetails from 'routes/MoviesDetails';
import history from 'utils/history';
import { isAuthenticated } from 'utils/requests';


const Routes = () => {

    return (
        <Router history={history}>
            <NavBar />
            <main className='main-container'>
                <Switch>
                    <Route path="/" exact>
                        {isAuthenticated() ? <Redirect to={"/movies"} /> : <Home />}
                    </Route>
                    <PrivateRoute path="/movies" exact>
                        <Movies />
                    </PrivateRoute>
                    <PrivateRoute path="/movies/:movieId" exact>
                        <MoviesDetails />
                    </PrivateRoute>
                </Switch>
            </main>
        </Router>
    )
};

export default Routes;