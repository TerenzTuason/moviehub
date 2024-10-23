import Link from 'next/link'
import React from 'react'
import PosterImg from './PosterImg'

interface Movie {
    _id: string
    title: string
    poster: string
    directors: Array<string>
}

const MoviesGrid = async () => {

    const res = await fetch("http://localhost:3000/api/routes", {
        next: {
            revalidate: 0
        }
    })
    const movies: Movie[] = await res.json()

    // console.log(JSON.stringify(movies[0]._id))

    return (
        <div className='grid grid-cols-4 gap-[20px] p-[30px] px-[60px]'>

            {movies.slice(0, 20).map((movie) => (
                <Link href={"/" + movie._id} className='w-[20] bg-midnight rounded-[10px] flex flex-col gap-[10px] pb-[20px]'>
                    <PosterImg moviePoster={movie.poster} />
                    <p className='px-[20px] w-full font-bold mt-[10px] flex-2 line-clamp-1'>{movie.title}</p>
                    <div className='text-sm px-[20px] w-full'>
                        <p className='mt-[10px] line-clamp-1'>Directed by:</p>
                        <p>{movie.directors.join(', ')}</p>
                    </div>
                </Link>
            ))}

        </div>
    )
}

export default MoviesGrid