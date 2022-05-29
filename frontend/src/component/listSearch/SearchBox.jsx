import './searchBox.scss'
import axios from 'axios';
import React, {useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { Search } from '@material-ui/icons';

const SearchBox = ({ wrapperRef, setClicked }) => {
    const [movies, setMovies] = useState([]);
    const inputRef = useRef();
    const [input, setInput] = useState('');
    useEffect(() => {
        const getMovies = async () => {
            try {
                const res = await axios.get('/api/movies');
                const filterData = res.data.filter(item => item.title.toLowerCase().includes(input));
                console.log(filterData)
                setMovies(filterData);
            } catch (err) {
                console.error(err);
            }
        }
        getMovies();
    }, [input])
    useEffect(() => {
        document.addEventListener('click', handleClick);
        return ()=>{
            document.removeEventListener('click', handleClick);
        }
    }, [])
    const handleClick = (e) => {
        const { target } = e;
        // Handle click outside search box
        if (!wrapperRef.current.contains(target)) {
            setClicked(false);
            console.log('click outside')
        }
    }


    return (
        <div className='searchBox'>
            <div className='searchBar'>
                <input type="text" name='input' placeholder='Enter movie name ...' ref={inputRef} autoFocus
                    onChange={e => setInput(e.target.value)}
                />
                <Search className='icon' />
            </div>
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
        </div>

    )
}

export default SearchBox