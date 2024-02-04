import { Redirect, Route } from "react-router-dom";
import { isAuthenticated } from "utils/requests";

const PrivateRoute = (props: any) => {
    return (
        <Route path={props.path} render={() => isAuthenticated() ? props.children : <Redirect to={"/"} />} />
    );
}

export default PrivateRoute;