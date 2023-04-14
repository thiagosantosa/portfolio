import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import '../subpages.css';

import ImageBack from '../Assets/icones/icon-left.png';
import LogoCartaoMais from '../Assets/logos/logo-cartaomais.png';
import ImagemLink from '../Assets/icones/icon-link.png';

import Banner1 from '../Assets/cartao-mais/banner1.jpg';
import Banner2 from '../Assets/cartao-mais/banner2.jpg';
import Banner3 from '../Assets/cartao-mais/banner3.jpg';
import Banner4 from '../Assets/cartao-mais/banner4.jpg';

function CartaoMais() {
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
      <img src={LogoCartaoMais} style={{width: '120px'}} />
    </header>

    <p className='container__description'>
    Reformulation of the Credsystem Cards website, working in partnership with the third-party agency Iterative. The project was based on
structuring and partial part of UX in the project.
    </p>

    <section className='container__tags'>
      <div className='container__tags__item'><i>HTML 5</i> <span>10</span> <div data-label="punctuation" style={{width: '100%'}}></div></div>
      <div className='container__tags__item'><i>CSS/SCSS</i> <span>10</span> <div data-label="punctuation" style={{width: '100%'}}></div></div>
      <div className='container__tags__item'><i>React</i> <span>7</span> <div data-label="punctuation" style={{width: '70%'}}></div></div>
      <div className='container__tags__item'><i>UX | UI</i> <span>7</span> <div data-label="punctuation" style={{width: '70%'}}></div></div>
      <div className='container__tags__item'><i>Adobe XD</i> <span>8</span> <div data-label="punctuation" style={{width: '80%'}}></div></div>
      <div className='container__tags__item'><i>Scrum</i> <span>9</span> <div data-label="punctuation" style={{width: '90%'}}></div></div>  
      <div className='container__tags__item'><i>Bootstrap</i> <span>9</span> <div data-label="punctuation" style={{width: '90%'}}></div></div>
      <div className='container__tags__item'><i>GitFlow</i> <span>9</span> <div data-label="punctuation" style={{width: '90%'}}></div></div>
      <div className='container__tags__item'><i>Mobile</i> <span>9</span> <div data-label="punctuation" style={{width: '90%'}}></div></div>
          
    </section>

    <section className='container__seeproject'>
      <div className='container__seeproject_legend'><span></span>Level of interaction of the technology applied in the project from 0 to 10, the grade refers to how much I needed to apply the technology in question in the project.</div>
      <a href="https://www.cartaomais.com.br/" target='_blank' rel="noreferrer">See project <img src={ImagemLink} /></a>
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
        </Slider>
    </section>
    </>
  )
}

export default CartaoMais