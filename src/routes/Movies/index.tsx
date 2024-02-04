import { useHistory } from "react-router-dom";
import "./styles.css";
import { isAuthenticated } from "utils/requests";
import { useContext } from "react";
import { AuthContext } from "AuthContext";

const Movies = () => {
    const history = useHistory();

    const { setAuthContextData } = useContext(AuthContext);

    const handleClickLink = (path: string) => {
        if (isAuthenticated())
            history.push(path);
        else
            setAuthContextData({ authenticated: false });
    };

    const list = [1, 2, 3, 4, 5];

    return (
        <section id="movies-section">
            <div className="container-lg p-0">
                <h1>Tela listagem de filmes</h1>
            </div>
            <div className="container-lg list">
                {list.map(i => <h4 key={i} onClick={() => handleClickLink(`/movies/${i}`)}>Acessar /movies/{i}</h4>)}
            </div>
        </section>
    );
}

export default Movies;
