import { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Select from "react-select";
import { Genre } from "types/genre";
import { requestBackend } from "utils/requests";
import "./styles.css";
import { genreSelect } from "./styles";

type GenreFilterData = {
    genre: Genre;
}

const GenreFilter = () => {
    useEffect(() => {
        const config: AxiosRequestConfig = {
            method: "GET",
            url: "/genres"
        };

        requestBackend(config)
            .then((response) => setGenres(response.data));
    }, []);

    const { register, formState } = useForm<GenreFilterData>();
    const [genres, setGenres] = useState<Genre[]>([]);

    return (
        <div className="container-lg p-2 card-filter-select">
            <form>
                <Select options={genres}
                    getOptionLabel={(genre: Genre) => genre.name}
                    getOptionValue={(genre: Genre) => String(genre.id)}
                    placeholder="Selecione um gênero..." 
                    isClearable
                    styles={genreSelect}
                />
            </form>
        </div>
    );
}

export default GenreFilter;