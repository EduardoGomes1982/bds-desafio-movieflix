import PrimaryButton from "components/PrimaryButton";
import { useContext, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { getTokenData, requestBackendLogin, saveAuthData } from "utils/requests";
import frontLogin from "../../assets/front-login.svg";
import "./styles.css";
import { AuthContext } from "AuthContext";

type FormData = {
    username: string;
    password: string;
}

const Home = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

    const { setAuthContextData } = useContext(AuthContext);

    const [hasErros, setHasErros] = useState(false);

    const history = useHistory();

    const onSubmit: SubmitHandler<FormData> = (formData: FormData) => {
        requestBackendLogin(formData).then(response => {
            saveAuthData(response.data);
            setHasErros(false);
            setAuthContextData({ authenticated: true, tokenData: getTokenData() })
            history.push("/movies");            
        }).catch(errors => {
            setHasErros(true);
        });
    };

    useEffect(() => {
        setAuthContextData({authenticated: false});
    }, [setAuthContextData]);

    return (
        <section id="login-section">
            <div className="container-lg p-0 d-flex align-items-center justify-content-space-between">
                <div className="card-login-logo">
                    <h1>Avalie Filmes</h1>
                    <p>Diga o que você achou do seu filme favorito</p>
                    <img src={frontLogin} alt="Faça seu Login" />
                </div>
                <div className="card-login">
                    <h2>LOGIN</h2>
                    {hasErros && (<div className="alert alert-danger">Ocorreu um erro ao tentar efetuar login</div>)}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="invalid-feedback d-block">{errors.username?.message}</div>
                        <input {...register("username", {
                            required: "Campo obrigatório",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Email inválido"
                            }
                        })}
                            name="username" className={`textbox form-control ${errors.username ? "is-invalid" : ""}`}
                            type="text" placeholder="E-Mail"
                        />
                        <div className="invalid-feedback d-block">{errors.password?.message}</div>
                        <input {...register("password", { required: "Campo obrigatório" })} name="password" className={`textbox form-control ${errors.username ? "is-invalid" : ""}`}
                            type="password" placeholder="Senha"
                        />
                        <div className="login-button-container">
                            <PrimaryButton className="login-button" onClick={onSubmit}>FAZER LOGIN</PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Home;
