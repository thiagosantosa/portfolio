import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import '../subpages.css';

import ImageBack from '../Assets/icones/icon-left.png';
import LogoCacauShow from '../Assets/logos/logo-cacaushow.png';
import ImagemLink from '../Assets/icones/icon-link.png';

import Banner1 from '../Assets/cacau-show/banner1.jpg';
import Banner2 from '../Assets/cacau-show/banner2.jpg';
import Banner3 from '../Assets/cacau-show/banner3.jpg';
import Banner4 from '../Assets/cacau-show/banner4.jpg';

function CacauShow() {
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
      <img src={LogoCacauShow} />
    </header>

    <p className='container__description'>
    Participação do projeto na receita de vendas do programa de relacionamento e fidelidade. A atuação no projeto esteve no foco do
desenvolvimento de estruturação junto à equipe do projeto utilizando metodologia ágil. Neste projeto tivemos que utilizar muitos recursos em React devido a
a complexidade do projeto. Meu papel focal foi na estruturação de telas em React através da Prototipagem pela equipe criativa.
    </p>

    <section className='container__tags'>
      <div className='container__tags__item'><i>HTML 5</i> <span>10</span> <div data-label="punctuation" style={{width: '100%'}}></div></div>
      <div className='container__tags__item'><i>CSS/SCSS</i> <span>10</span> <div data-label="punctuation" style={{width: '100%'}}></div></div>
      <div className='container__tags__item'><i>React</i> <span>7</span> <div data-label="punctuation" style={{width: '70%'}}></div></div>
      <div className='container__tags__item'><i>Bootstrap</i> <span>9</span> <div data-label="punctuation" style={{width: '90%'}}></div></div>
      <div className='container__tags__item'><i>GitFlow</i> <span>9</span> <div data-label="punctuation" style={{width: '90%'}}></div></div>
      <div className='container__tags__item'><i>Mobile</i> <span>9</span> <div data-label="punctuation" style={{width: '90%'}}></div></div>
      <div className='container__tags__item'><i>Adobe XD</i> <span>8</span> <div data-label="punctuation" style={{width: '80%'}}></div></div>
    </section>

    <section className='container__seeproject'>
      <div className='container__seeproject_legend'><span></span>Nível de interação da tecnologia aplicada no projeto de 0 a 10, a nota refere-se ao quanto precisei para aplicar a tecnologia em questão no projeto.</div>
      <a href="https://revendedor.cacaushow.com.br/revendedor" target='_blank' rel="noreferrer">ver projeto <img src={ImagemLink} /></a>
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

export default CacauShow