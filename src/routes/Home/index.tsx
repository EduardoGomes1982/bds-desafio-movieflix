import PrimaryButton from "components/PrimaryButton";
import { Link } from "react-router-dom";

import "./styles.css";

const Home = () => {
    return (
        <section id="login-section">
            <div className="card-login">
                <h2>LOGIN</h2>
                <form action="">
                    <input name="email" className="textbox"
                        type="text" placeholder="E-Mail" 
                        // onChange={handleImputChange}
                        // value={formData.sufixProfile}
                    />
                    <input name="password" className="textbox"
                        type="text" placeholder="Senha" 
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
        </section>
    );
}

export default Home;
