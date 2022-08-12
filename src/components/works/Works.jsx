import './works.scss'
import { useState } from 'react';

export default function Works() {

  const [currentSlide,setCurrentSlide] = useState(0);

  const data = [
    {
      id: "1",
      title: "Web Design",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      img:
        "assets/study.jpeg",
    },
    {
      id: "2",
      title: "Mobile Application",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "assets/dog.jpeg",
    },
    {
      id: "3",
      title: "Branding",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "assets/cute.jpeg",
    },
  ];

  const handleClick = (way) => {
      way === "left" ? setCurrentSlide(currentSlide >0 ? currentSlide-1 : 2) :
      setCurrentSlide(currentSlide<data.length -1 ?currentSlide+1:0);
  }

  return (
    <div className='works' id='works'>
      <h1>Works</h1>
        <div className='slider' style={{transform:`translateX(-${currentSlide *100}vw)`}}>
          {data.map((d)=>(
          <div className="container">
            <div className='item'>
              <div className='left'>
                <div className="leftContainer">
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className='right'>
                <img src={d.img} alt='' />
              </div>
            </div>
          </div>
          ))}
        </div>
      <img src='assets/arrow.png' className='arrow left' alt='' onClick={()=> handleClick("left")}/>
      <img src='assets/arrow.png' className='arrow right' alt='' onClick={()=> handleClick("right")}/>
    </div>
  );
}
