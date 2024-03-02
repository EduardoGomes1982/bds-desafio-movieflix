import { AuthContext } from "AuthContext";
import GenreFilter from "components/GenreFilter";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { isAuthenticated } from "utils/requests";
import "./styles.css";

const Movies = () => {
    const history = useHistory();

    const { setAuthContextData } = useContext(AuthContext);

    const handleClickLink = (path: string) => {
        if (isAuthenticated())
            history.push(path);
        else
            setAuthContextData({ authenticated: false });
    };

    const list = [1, 2];

    return (
        <section id="movies-section">
            <GenreFilter />
            <div className="container-lg list">
                {list.map(i => <h4 key={i} onClick={() => handleClickLink(`/movies/${i}`)}>Acessar /movies/{i}</h4>)}
            </div>
        </section>
    );
}

export default Movies;
