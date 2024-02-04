import { AuthContext } from "AuthContext";
import { AxiosRequestConfig } from "axios";
import PrimaryButton from "components/PrimaryButton";
import ReviewsListing from "components/ReviewsListing";
import { useContext, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { Review } from "types/review";
import { requestBackend } from "utils/requests";
import "./styles.css";

type urlParams = {
    movieId: string;
};

type FormData = {
    movieId: number;
    text: string;
};

const MoviesDetails = () => {
    const { authContextData } = useContext(AuthContext);

    const { register, handleSubmit, formState: { errors }, setValue } = useForm<FormData>();

    const { movieId } = useParams<urlParams>();

    const [reviews, setReviews] = useState<Review[]>([]);

    const onSubmit: SubmitHandler<FormData> = (formData: FormData) => {
        formData.movieId = parseInt(movieId);
        const config: AxiosRequestConfig = {
            method: "POST",
            url: "/reviews",
            data: formData,
            withCredentials: true
        };

        requestBackend(config)
            .then((response) => {
                setValue("text", "");
                const clone = reviews.slice();
                clone.push(response.data);
                setReviews(clone);
            })
            .catch((error) => console.log(error.message));
    }

    useEffect(() => {
        const config: AxiosRequestConfig = {
            method: "GET",
            url: `movies/${movieId}/reviews`,
            withCredentials: true
        };
        requestBackend(config).then((response) => setReviews(response.data))
    }, [movieId])

    return (
        <section id="movies-details-section">
            <div className="container-lg p-0 d-flex flex-column gap">
                <h1>Tela detalhes do filme id: {movieId}</h1>
                {authContextData.tokenData?.authorities.find(x => x === "ROLE_MEMBER") &&
                    <div className="card-evaluation">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="invalid-feedback d-block">{errors.text?.message}</div>
                            <input className="textbox"
                                type="text" placeholder="Deixe sua avaliação aqui"
                                {...register("text", { required: "Campo obrigatório" })}
                                name="text"
                            />
                            <div className="save-button-container">
                                <PrimaryButton className="save-button" onClick={onSubmit}>SALVAR AVALIAÇÃO</PrimaryButton>
                            </div>
                        </form>
                    </div>
                }
                {reviews.map(item => (
                    <ReviewsListing key={item.id} {...item} />
                ))}
            </div>
        </section>
    );
}

export default MoviesDetails;
