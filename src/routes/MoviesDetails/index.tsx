import PrimaryButton from "components/PrimaryButton";
import { Link } from "react-router-dom";
import starImg from "../../assets/star.svg";
import "./styles.css";

const MoviesDetails = () => {
    return (
        <section id="movies-details-section">
            <div className="container-lg p-0 d-flex flex-column gap">
                <h1>Tela detalhes do filme id: 1</h1>
                <div className="card-evaluation">
                    <form action="" style={{ width: "100%" }}>
                        <input name="email" className="textbox"
                            type="text" placeholder="Deixe sua avaliação aqui"
                        // onChange={handleImputChange}
                        // value={formData.sufixProfile}
                        />
                        <div className="save-button-container">
                            <Link to={"/movies"}>
                                <PrimaryButton className="save-button">SALVAR AVALIAÇÃO</PrimaryButton>
                            </Link>
                        </div>
                    </form>
                </div>
                <div className="card-evaluation d-flex flex-column gap">
                    <div className="evaluation">
                        <div className="d-flex gap">
                            <img src={starImg} alt="" className="star-img" />
                            <h6>Maria</h6>
                        </div>
                        <div className="evaluation-text">
                            <p>Gostei muito do filme. Foi muito bom mesmo. Pena que durou pouco.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MoviesDetails;
