import { defer } from "react-router-dom"
import { getAllMovies } from "../../services/movie.service"

export const movieLoader = async() => {
    return defer({
        films: getAllMovies()
    })
}