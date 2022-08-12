import { useState } from 'react';
import PortfolioList from '../portfolioList/PortfolioList'
import './portfolio.scss'
import { cat, dog, study} from '../../data';
import { useEffect } from 'react';

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data,setData] = useState([])
  const list = [
    {
      id: "cat",
      title: "cat",
    },
    {
      id: "dog",
      title: "dog",
    },
    {
      id: "study",
      title: "study",
    },
  ];

  useEffect(()=>{
    switch(selected){
      case "cat":
        setData(cat);
        break;
      case "dog":
        setData(dog);
        break;
      case "study":
        setData(study);
        break;
        default:
          setData(cat);
    }
  }, [selected])

  return (
    <div className='portfolio' id='portfolio'>
      <div className='hwraper'>
        <h1>Portfolio</h1>
      </div>
      <ul>
        {list.map((item) => (
          <PortfolioList 
            title={item.title} 
            active={selected===item.id}
            setSelected={setSelected}
            id={item.id}
            />
        ))}
      </ul>
      <div className='container'>
        {data.map((d)=> (
        <div className='item'>
            <img src={d.img} alt='' />
            <h3>{d.title}</h3>
        </div>
        ))}
      </div>
    </div>
  )
}
