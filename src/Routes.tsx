import NavBar from 'components/NavBar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from 'routes/Home';

const Routes = () => (
    <BrowserRouter>
        <NavBar />
        <Switch>
            <main className='main-container'>
                <Route path="/" exact>
                    <Home />
                </Route>
            </main>
        </Switch>
    </BrowserRouter>
);

export default Routes;