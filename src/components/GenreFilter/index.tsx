import { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Select from "react-select";
import { Genre } from "types/genre";
import { requestBackend } from "utils/requests";
import { genreSelect } from "./styles";
import "./styles.css";

type GenreFilterData = {
    genre: Genre;
};

type Props = {
    onChange: (genreId: number) => void;
}

const GenreFilter = ( { onChange }: Props ) => {
    useEffect(() => {
        const config: AxiosRequestConfig = {
            method: "GET",
            url: "/genres"
        };

        requestBackend(config)
            .then((response) => setGenres(response.data));
    }, []);

    const { register } = useForm<GenreFilterData>();
    const [genres, setGenres] = useState<Genre[]>([]);

    return (
        <div className="container-lg p-2 card-filter-select">
            <form>
                <Select options={genres}
                    {...register("genre")}
                    getOptionLabel={(genre: Genre) => genre.name}
                    getOptionValue={(genre: Genre) => String(genre.id)}
                    placeholder="Selecione um gênero..." 
                    isClearable
                    styles={genreSelect}
                    onChange={(value) => onChange(value ? value.id : 0)}
                />
            </form>
        </div>
    );
}

export default GenreFilter;