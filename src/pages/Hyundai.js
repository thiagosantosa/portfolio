import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import '../subpages.css';

import ImageBack from '../Assets/icones/icon-left.png';
import LogoHyundai from '../Assets/logos/hyundai-branco.png';
import ImagemLink from '../Assets/icones/icon-link.png';

import Banner1 from '../Assets/hyundai/banner1.jpg';
import Banner2 from '../Assets/hyundai/banner2.jpg';
import Banner3 from '../Assets/hyundai/banner3.jpg';
import Banner4 from '../Assets/hyundai/banner4.jpg';

function Hyundai() {
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
      <img src={LogoHyundai} />
    </header>

    <p className='container__description'>
    Projeto de reformulação de todo o site Hyundai.com.br, foi realizado um estudo aprofundado junto à equipe de criação para reformulação
total do site, toda metodologia UX foi utilizada | UI no projeto porque a ideia em si era trazer toda a componentização do
elementos que tornam o site 100% customizado com tecnologia Adobe AEM.
    </p>

    <section className='container__tags'>
      <div className='container__tags__item'><i>Adobe XD</i> <span>10</span> <div data-label="punctuation" style={{width: '100%'}}></div></div>
      <div className='container__tags__item'><i>UX | UI </i> <span>10</span> <div data-label="punctuation" style={{width: '100%'}}></div></div>
      <div className='container__tags__item'><i>Scrum </i> <span>3</span> <div data-label="punctuation" style={{width: '30%'}}></div></div>
      <div className='container__tags__item'><i>HTML 5</i> <span>10</span> <div data-label="punctuation" style={{width: '100%'}}></div></div>
      <div className='container__tags__item'><i>CSS/SCSS</i> <span>10</span> <div data-label="punctuation" style={{width: '100%'}}></div></div>
      <div className='container__tags__item'><i>Bootstrap</i> <span>9</span> <div data-label="punctuation" style={{width: '90%'}}></div></div>
      <div className='container__tags__item'><i>Jquery</i> <span>10</span> <div data-label="punctuation" style={{width: '100%'}}></div></div>
      <div className='container__tags__item'><i>Responsive</i> <span>10</span> <div data-label="punctuation" style={{width: '100%'}}></div></div>
      
    </section>

    <section className='container__seeproject'>
      <div className='container__seeproject_legend'><span></span>Nível de interação da tecnologia aplicada no projeto de 0 a 10, a nota refere-se ao quanto precisei para aplicar a tecnologia em questão no projeto.</div>
      <a href="https://www.hyundai.com.br/" target='_blank' rel="noreferrer">Ver projeto <img src={ImagemLink} /></a>
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

export default Hyundai