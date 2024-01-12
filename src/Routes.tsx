import NavBar from 'components/NavBar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from 'routes/Home';
import Movies from 'routes/Movies';

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
            </main>
        </Switch>
    </BrowserRouter>
);

export default Routes;