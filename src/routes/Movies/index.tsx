import { AuthContext } from "AuthContext";
import CardMovie from "components/CardMovie";
import GenreFilter from "components/GenreFilter";
import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { isAuthenticated, requestBackend } from "utils/requests";
import "./styles.css";
import { AxiosRequestConfig } from "axios";
import { Movie } from "types/movie";

const Movies = () => {
    const history = useHistory();

    const { setAuthContextData } = useContext(AuthContext);

    const [movies, setMovies] = useState([]);

    const [selectFilter, setSelectFilter] = useState(0);

    const handleMovieClick = (path: string) => {
        if (isAuthenticated())
            history.push(path);
        else
            setAuthContextData({ authenticated: false });
    };

    useEffect(() => {
        const config: AxiosRequestConfig = {
            method: "GET",
            url: `movies/?genreId=${selectFilter}`,
            withCredentials: true
        };
        requestBackend(config).then((response) => setMovies(response.data.content));
    }, [selectFilter])

    return (
        <section id="movies-section">
            <GenreFilter onChange={(value) => { setSelectFilter(value) }} />
            <div className="container-lg p-0 row g-3 m-0">
                {movies.map((movie: Movie) => (
                    <div key={movie.id} className="col-sm-6 col-lg-4 col-xl-3 d-flex justify-content-center p-0 g-3"
                        onClick={() => handleMovieClick(`/movies/${movie.id}`)}>
                        <CardMovie title={movie.title} year={movie.year} description={movie.subTitle} imgUrl={movie.imgUrl} />
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Movies;
