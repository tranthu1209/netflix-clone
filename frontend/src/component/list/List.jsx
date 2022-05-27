import './list.scss'
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons'
import ListItem from '../listItem/ListItem'
import { useEffect, useRef, useState } from 'react'

const List = ({ list }) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [clickLimit, setClickLimit] = useState(window.innerWidth / 230);
  const nextRef = useRef();
  const preRef = useRef();
  const listRef = useRef();

  const handleClick = (direction) => {
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right" && slideNumber < list.content.length - clickLimit) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
    console.log(list.content.length - clickLimit, slideNumber)
  }
  return (
    <div className='list'>
      <span className="listTitle">{list.title}</span>
      <div className="wrapper">
        <ArrowBackIosOutlined className='sliderArrow left'
          ref={preRef}
          onClick={() => handleClick('left')}
          style={{ display: (slideNumber===0) && "none" }}
        />
        <div className="container" ref={listRef}>
          {
            list.content.map((item) => {
              return <ListItem key={item} item={item} />
            })
          }

        </div>
        <ArrowForwardIosOutlined className='sliderArrow right'
          rel={nextRef}
          onClick={() => handleClick('right')}
          style={{ display: (slideNumber > list.content.length - clickLimit) && "none" }}
        />
      </div>
    </div>
  )
}

export default List