import "./styles.css";

type CardMovieProps = {
    title: string;
    year: number;
    description: string;
    imgUrl: string;
    sinopse?: string;
};

const CardMovie = ({ title, year, description, imgUrl, sinopse }: CardMovieProps) => {
    return (
        <div className="card-movie" style={sinopse === undefined ? { cursor: "pointer" } : { width: "100%" }}>
            <div style={sinopse !== undefined ? { padding: "0px 20px", textAlign: "center" } : {}}>
                <img src={imgUrl} alt={title} />
            </div>
            <div className="card-movie-base" style={sinopse !== undefined ? { padding: "0px 20px" } : {}}>
                <div>
                    <h2>{title}</h2>
                    <h3>{year}</h3>
                    <p>{description}</p>
                </div>
                {sinopse &&
                    <div className="card-movie-sinopse">
                        <p>{sinopse}</p>
                    </div>
                }
            </div>
        </div>
    )
};

export default CardMovie;