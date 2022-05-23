import './home.scss';

import Navbar from '../../component/navbar/Navbar';
import Featured from '../../component/featured/Featured';
import List from '../../component/list/List';
import { useEffect, useState } from 'react';

import axios from 'axios';

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  const listApi = "https://netflix-server1209.herokuapp.com/api/lists/";

  useEffect(() => {
    const getRandomList = async () => {
      try {
        const res = await axios.get(
          `${listApi}${type ? "?type=" + type : ""}${type && genre ? "&genre=" + genre : ""}`
        );
        console.log(res.data)
        setLists(res.data)
      } catch (err) {
        console.error(err)
      }
    }
    getRandomList();
   
  }, [type, genre])
  return (
    <div className='home'>
      <Navbar />
      <Featured type={type} setGenre={setGenre} />
      {
        lists.map((list, index)=>{
          return <List list={list} key={index}/>
        })
      }
    </div>
  )
}

export default Home
