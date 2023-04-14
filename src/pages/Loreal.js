import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import '../subpages.css';

import ImageBack from '../Assets/icones/icon-left.png';
import LogoDermaclub from '../Assets/logos/dermaclub.png';
import ImagemLink from '../Assets/icones/icon-link.png';

import Banner1 from '../Assets/loreal/banner1.jpg';
import Banner2 from '../Assets/loreal/banner2.jpg';
import Banner3 from '../Assets/loreal/banner3.jpg';
import Banner4 from '../Assets/loreal/banner4.jpg';
import Banner5 from '../Assets/loreal/banner5.jpg';
import Banner6 from '../Assets/loreal/banner6.jpg';

function Loreal() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
  return (
    <>
    <header className='container__subpage'>
      <Link to="/" className='container__subpage_bto'><img src={ImageBack} /></Link>
      <img src={LogoDermaclub} />
    </header>

    <p className='container__description'>
    Active in the development of the dermocosmeticos Dermaclub discount club project. The project was focused on giving discounts
    exclusive for registered CPFs, through partner pharmacies. My role with the project team was to act
    in the construction of the prototyping delivered in XD using the technologies below:
    </p>

    <section className='container__tags'>      
      <div className='container__tags__item'><i>Mobile</i> <span>10</span> <div data-label="punctuation" style={{width: '100%'}}></div></div>
      <div className='container__tags__item'><i>Adobe XD</i> <span>8</span> <div data-label="punctuation" style={{width: '80%'}}></div></div>
      <div className='container__tags__item'><i>UX | UI</i> <span>6</span> <div data-label="punctuation" style={{width: '60%'}}></div></div>
      <div className='container__tags__item'><i>Scrum</i> <span>10</span> <div data-label="punctuation" style={{width: '100%'}}></div></div>
      <div className='container__tags__item'><i>HTML 5</i> <span>10</span> <div data-label="punctuation" style={{width: '100%'}}></div></div>
      <div className='container__tags__item'><i>CSS/SCSS</i> <span>10</span> <div data-label="punctuation" style={{width: '100%'}}></div></div>
      <div className='container__tags__item'><i>React</i> <span>7</span> <div data-label="punctuation" style={{width: '70%'}}></div></div>
      <div className='container__tags__item'><i>Bootstrap</i> <span>9</span> <div data-label="punctuation" style={{width: '90%'}}></div></div>
      <div className='container__tags__item'><i>Javascript</i> <span>5</span> <div data-label="punctuation" style={{width: '50%'}}></div></div>
      <div className='container__tags__item'><i>GitFlow</i> <span>9</span> <div data-label="punctuation" style={{width: '90%'}}></div></div>

      <div className='container__tags__item'><i>React Native</i> <span>8</span> <div data-label="punctuation" style={{width: '80%'}}></div></div>
    </section>

    <section className='container__seeproject'>
      <div className='container__seeproject_legend'><span></span>Level of interaction of the technology applied in the project from 0 to 10, the grade refers to how much I needed to apply the technology in question in the project.</div>
      <a href="https://sso.dermaclub.com.br/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Ddermafront%26redirect_uri%3Dhttps%253A%252F%252Fclube.dermaclub.com.br%252Fsignin-callback.html%26response_type%3Dcode%26scope%3Dopenid%2520profile%26state%3D85735919a1df4d9cb92bee06c1328fc6%26code_challenge%3D1_QL03wyn79lSS5LcRe4-teAbCGJJGVdnM9pZN22vIk%26code_challenge_method%3DS256%26response_mode%3Dquery" target='_blank' rel="noreferrer">See project <img src={ImagemLink} /></a>
    </section>


    <section className='container__slider'>
        <Slider {...settings}>
          <div>
            <img src={Banner1} />
          </div>
          <div>
            <img src={Banner2} />
          </div>
          <div>
            <img src={Banner3} />
          </div>
          <div>
            <img src={Banner4} />
          </div>
          <div>
            <img src={Banner5} />
          </div>
          <div>
            <img src={Banner6} />
          </div>
        </Slider>
    </section>
    </>
  )
}

export default Loreal