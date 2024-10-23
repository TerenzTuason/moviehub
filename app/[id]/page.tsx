import React from 'react'
import NavBar from '../components/NavBar'
import { Rating } from '@mui/material'

interface Movie {
    _id: string
    title: string
    year: string
    poster: string
    directors: Array<string>
    plot: string
    fullplot: string
    genres: Array<string>
    cast: Array<string>
    imdb: {
        rating: number
    }
}

const MovieDetails = async ({ params }: {
    params: { id: string }
}) => {

    const res = await fetch("http://localhost:3000/api/routes/" + params.id)

    const movie: Movie = await res.json()

    return (
        <div className="min-h-screen bg-black text-white">
            <div>
                <NavBar />
            </div>

            <div className='p-[60px] flex gap-[60px]'>
                <img src={movie.poster} className='h-[400px] rounded-[10px]' />
                <div className='flex flex-col gap-[30px]'>
                    <p className='text-2xl font-bold'>{movie.title} <span className='px-[10px]'>•</span> {movie.year}</p>

                    <p>{movie.plot}</p>

                    <p><span className='font-bold'>Directed By:</span> {movie.directors.map((director) => director).join(", ")}</p>

                    <p><span className='font-bold'>Genre:</span> {movie.genres.map((genre) => genre).join(", ")}</p>

                    <div>
                        <p className='font-bold'>Cast:</p>
                        <ul className='gap-[10px] list-disc mt-[10px] px-[30px]'>
                            {movie.cast.map((actor) => (
                                <li>{actor}</li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <p className='font-bold'>Plot:</p>
                        <p className='mt-[10px]'>{movie.fullplot}</p>
                    </div>

                    <p className='flex gap-[10px]'>
                        <span className='font-bold mt-[2px]'>IMDb Rating: </span>

                        <span className='mt-[2px]'>{movie.imdb.rating} out of 10</span>

                        <Rating
                            name="full-rating"
                            defaultValue={movie.imdb.rating}
                            max={10}
                            precision={0.01} 
                            readOnly />
                    </p>
                </div>
            </div>
        </div>
    )
}

export default MovieDetails