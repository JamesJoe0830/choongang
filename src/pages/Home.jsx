import React, { useState } from "react";
import home from "../videos/home3.mp4";
import './page.css';
import { TypeAnimation } from 'react-type-animation';
export default function Home() {
  const [start, setStart] = useState(false);
  const handleStart = () => {
    setStart((prev) => !prev);
  };
  if (!start) {
    return (

        <div className="start__wrapper">
          <div className="overlay"></div>
          <video className="start__video" src={home} autoPlay loop muted />

          <div className="start__container">
            <section className="Title__box">
            <div className="start_Title">분당 집</div>
            <div className="start_Title1"><TypeAnimation
            sequence ={["분당 중앙 부동산에서"]} speed={1}/></div> 
            <h1 className="start_Title2"> 내 집 마련을 꿈꾸다.</h1> 
            
            </section>

            <h3>분당 중앙 부동산</h3>
            <div>📞 031-716-9900</div>
            <button className="start__button" onClick={handleStart}>방문하기</button>
          </div>
        </div>
    );
  } else {
    <div className="home__wrapper"></div>

  }
}
