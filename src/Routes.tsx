import NavBar from 'components/NavBar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from 'routes/Home';
import Movies from 'routes/Movies';
import MoviesDetails from 'routes/MoviesDetails';

const Routes = () => (
    <BrowserRouter>
        <NavBar />
        <Switch>
            <main className='main-container'>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/movies" exact>
                    <Movies />
                </Route>
                <Route path="/movies/1" exact>
                    <MoviesDetails />
                </Route>
            </main>
        </Switch>
    </BrowserRouter>
);

export default Routes;