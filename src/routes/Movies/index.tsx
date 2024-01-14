import { Link } from "react-router-dom";
import "./styles.css";

const Movies = () => {
    return (
        <section id="movies-section">
            <div className="container-lg p-0">
                <h1>Tela listagem de filmes</h1>
            </div>
            <div className="container-lg list">
                <Link to="/movies/1"><h4>Acessar /movies/1</h4></Link>
                <Link to="/movies/2"><h4>Acessar /movies/2</h4></Link>
            </div>
        </section>
    );
}

export default Movies;
