import './listSearch.scss'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const ListSearch = ({input}) => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        const getMovies = async () => {
            try {
                const res = await axios.get('https://netflix-server1209.herokuapp.com/api/movies');
                const filterData = res.data.filter(item => item.title.toLowerCase().includes(input));
                console.log(filterData)
                setMovies(filterData);
            } catch (err) {
                console.error(err);
            }
        }
        getMovies();
    }, [input])



    return (
        <div className='listSearch'>
            {movies.map(movie => {
                return (
                    <Link key={movie._id} to='/watch' state={{ movie: movie }} className='link'>
                        <div className="movie">
                            <img src={movie.img} alt="" />
                            <span>{movie.title}</span>
                        </div>
                    </Link>

                )
            })}
        </div>
    )
}

export default ListSearch