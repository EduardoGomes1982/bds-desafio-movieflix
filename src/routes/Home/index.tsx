import PrimaryButton from "components/PrimaryButton";
import { Link } from "react-router-dom";
import frontLogin from "../../assets/front-login.svg";

import "./styles.css";

const Home = () => {
    return (
        <section id="login-section">
            <div className="container-lg d-flex align-items-center justify-content-space-between">
                <div className="card-login-logo">
                    <h1>Avalie Filmes</h1>
                    <p>Diga o que você achou do seu filme favorito</p>
                    <img src={frontLogin} alt="Faça seu Login" />
                </div>
                <div className="card-login">
                    <h2>LOGIN</h2>
                    <form action="">
                        <input name="email" className="textbox"
                            type="text" placeholder="E-Mail"
                        // onChange={handleImputChange}
                        // value={formData.sufixProfile}
                        />
                        <input name="password" className="textbox"
                            type="password" placeholder="Senha"
                        // onChange={handleImputChange}
                        // value={formData.sufixProfile}
                        />
                        <div className="login-button">
                            <Link to={"/"}>
                                <PrimaryButton buttonTitle="FAZER LOGIN" />
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Home;
