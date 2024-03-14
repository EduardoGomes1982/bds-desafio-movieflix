import { AuthContext } from "AuthContext";
import { AxiosRequestConfig } from "axios";
import CardMovie from "components/CardMovie";
import GenreFilter from "components/GenreFilter";
import { useContext, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useHistory } from "react-router-dom";
import { Movie } from "types/movie";
import { SpringPage } from "types/spring-page";
import { isAuthenticated, requestBackend } from "utils/requests";
import { ReactComponent as ArrowIcon } from "../../assets/arrow.svg";
import "./styles.css";

const Movies = () => {
    const history = useHistory();

    const { setAuthContextData } = useContext(AuthContext);

    const [springPage, setSpringPage] = useState<SpringPage<Movie>>();

    const [selectFilter, setSelectFilter] = useState(0);

    const handleMovieClick = (path: string) => {
        if (isAuthenticated())
            history.push(path);
        else
            setAuthContextData({ authenticated: false });
    };

    const getMovies = (pageNumber: number) => {
        const config: AxiosRequestConfig = {
            method: "GET",
            params: { page: pageNumber, size: 4 },
            url: `movies/?genreId=${selectFilter}`,
            withCredentials: true
        };
        requestBackend(config).then((response) => {
            setSpringPage(response.data);
        });
    };

    const handleFilterChange = (genreId: number) => {
        setSelectFilter(genreId);
    };

    useEffect(() => {
        getMovies(0);
        // eslint-disable-next-line
    }, [selectFilter]);

    return (
        <section id="movies-section">
            <GenreFilter onChange={handleFilterChange} />
            <div className="container-lg p-0 row g-3 m-0">
                {springPage?.content.map((movie: Movie) => (
                    <div key={movie.id} className="col-sm-6 col-lg-4 col-xl-3 d-flex justify-content-center p-0 g-3"
                        onClick={() => handleMovieClick(`/movies/${movie.id}`)}>
                        <CardMovie title={movie.title} year={movie.year} description={movie.subTitle} imgUrl={movie.imgUrl} />
                    </div>
                ))}
            </div>
            <ReactPaginate pageCount={(springPage) ? springPage.totalPages : 0} pageRangeDisplayed={1} marginPagesDisplayed={3}
                containerClassName="pagination" previousLabel={<ArrowIcon style={{ transform: "rotate(180deg)" }} />} nextLabel={<ArrowIcon />}
                pageLinkClassName="page-link rounded-circle text-white border-1 border-tertiary d-flex align-items-center fw-bold"
                activeLinkClassName="page-item bg-primary" activeClassName="page-item" breakClassName="page-link rounded-circle text-white border-0 d-flex align-items-center fw-bold"
                previousClassName="d-flex align-items-center" nextClassName="d-flex align-items-center"
                forcePage={0} pageClassName="container-lg page-item" previousLinkClassName="rounded-circle" disabledClassName="disabled"
                onPageChange={(items) => getMovies(items.selected)}
            />
        </section>
    );
}

export default Movies;
