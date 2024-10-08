import React from 'react'
import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll'

import LogoInstagram from '../Assets/icones/instagram.png';
import LogoTwitter from '../Assets/icones/twitter.png';
import LogoLinkedin from '../Assets/icones/linkedin.png';
import ImageThiago from '../Assets/thiago.png';

import WorkLoreal from '../Assets/bg-loreal.jpg';
import WorkLorealLogo from '../Assets/logos/loreal.png';

import WorkHyundai from '../Assets/bgHyundai.jpg';
import WorkHyundaiLogo from '../Assets/logos/logo-hyundai.png';

import WorkCacauShow from '../Assets/bg-cacaushow.jpg';
import WorkCacauShowLogo from '../Assets/logos/logo-cacaushow.png';

import WorkCartaoMais from '../Assets/bg-cartaomais.jpg';
import WorkCartaoMaisLogo from '../Assets/logos/logo-cartaomais.png';

import WorkGrupoMateus from '../Assets/bg-grupomateus.jpg';
import WorkGrupoMateusLogo from '../Assets/logos/logo-grupomateus.png';

import WorkPropay from '../Assets/bg-propay.jpg';
import WorkPropayLogo from '../Assets/logos/logo-propay.png';

import LogoEspm from '../Assets/logos/espm.png';
import LogoAnhembi from '../Assets/logos/logo-anhembi.png';

import LogoPanamericana from '../Assets/logos/logo-panamericana.png';
import LogoOswaldoCruz from '../Assets/logos/logo-oswaldocruz.png';

import LogoInteractiveDesign from '../Assets/logos/interactive-design.png';

import CHyundai from '../Assets/logos/hyundai.png';
import CLoreal from '../Assets/logos/loreal.png';
import CTicket from '../Assets/logos/ticket.png';
import CPorto from '../Assets/logos/porto-seguro.png';
import CCacauShow from '../Assets/logos/cacau-show.png';
import CScania from '../Assets/logos/scania.png';
import CIpiranga from '../Assets/logos/ipiranga.png';
import CGrupoMateus from '../Assets/logos/grupo-mateus.png';
import CMais from '../Assets/logos/mais.png';
import CPropay from '../Assets/logos/propay.png';

function Home() {
  return (
    <>
        <header className='container__header'>
            <section className='container__header__content'>
              <h1 className='container__header__content__logo'><Link to="/" title='TM UI/ UX Designer & Front End Development'>TM <span>UI/ UX Fullstack Designer &<br /> Front End Development</span></Link></h1>

              <nav className='container__header__content__menu'>
                    <AnchorLink href='#Home'>Home</AnchorLink>
                    <AnchorLink href='#About'>Quem sou eu</AnchorLink>
                    <AnchorLink href='#Services'>O que eu faço</AnchorLink>
                    <AnchorLink href='#Work'>Meus Trabalhos</AnchorLink>
                    <AnchorLink href='#Skills'>Minhas habilidades</AnchorLink>
                    <AnchorLink href='#Education'>Formação educacional</AnchorLink>
                    <AnchorLink href='#Contact'>Vamos bater um papo</AnchorLink>
              </nav>
            </section>
        </header>

        <section id='Home'></section>
        <section className='container__welcome'>
            <h2>
              <span>Olá pessoal!</span>
              Meu portfólio<br />
              profissional.
            </h2>

            <nav className='container__welcome__social'>
                  <a href="https://www.instagram.com/thiagophelps" rel="noreferrer" title='Instagram'><img src={LogoInstagram} alt='Instagram' /></a>
                  <a href="/" rel="noreferrer" title='Twitter'><img src={LogoTwitter} alt='Twitter' /></a>
                  <a href="https://www.linkedin.com/in/thiago-miranda-55695091/" target='_blank' rel="noreferrer" title='Linkedin'><img src={LogoLinkedin} alt='Linkedin' /></a>
            </nav>
        </section>

        <section id='About'></section>
        <section className='container__about'>
          <div>
             <h2 className='container__about__title'>Quem sou eu</h2>
             <p className='container__about__description'>
             Com 19 anos de experiência na área de internet, já trabalhei em diversos setores como criação,
             projetos e desenvolvimento. Desenvolvi projetos para os setores de produto, marketing e TI para grandes clientes
             como Royal Canin, Porto Seguro, Ticket, Loreal, Cacau Show, Grupo Mateus, Hyundai etc...
             </p>
          </div>
          <img src={ImageThiago} alt='Thiago Miranda | UX Designer and Front End' />
        </section>

        <section id='Work'></section>
        <section className='container__works'>
            <h2 className='container__works__title'>Meus Trabalhos</h2>

            <section className='container__works__item'>
              <Link to="/loreal" title='L Oréal Paris Brasil'>
                  <img src={WorkLoreal} className='container__works__item_image' />
                  <h3 className='container__works__item__title'>L'Oréal Paris Brasil</h3>
                  <img src={WorkLorealLogo} className='container__works__item__logo' alt='Dermaclub' />
              </Link>
            </section>

            <section className='container__works__item'>
              <Link to="/hyundai" title='Hyundai'>
                  <img src={WorkHyundai} className='container__works__item_image' />
                  <h3 className='container__works__item__title'>Hyundai</h3>
                  <img src={WorkHyundaiLogo} className='container__works__item__logo' alt='Hyundai' />
              </Link>
            </section>

            <section className='container__works__item'>
              <Link to="/cacau-show" title='Cacau Show'>
                  <img src={WorkCacauShow} className='container__works__item_image' />
                  <h3 className='container__works__item__title'>Cacau Show</h3>
                  <img src={WorkCacauShowLogo} className='container__works__item__logo' alt='Cacau Show' />
              </Link>
            </section>

            <section className='container__works__item'>
              <Link to="/cartao-mais" title='Cartão Mais'>
                  <img src={WorkCartaoMais} className='container__works__item_image' />
                  <h3 className='container__works__item__title'>Cartão Mais</h3>
                  <img src={WorkCartaoMaisLogo} className='container__works__item__logo' alt='Mais' />
              </Link>
            </section>

            <section className='container__works__item'>
              <Link to="/grupo-mateus" title='Grupo Mateus'>
                  <img src={WorkGrupoMateus} className='container__works__item_image' />
                  <h3 className='container__works__item__title'>Grupo Mateus</h3>
                  <img src={WorkGrupoMateusLogo} className='container__works__item__logo' alt='Grupo Mateus' />
              </Link>
            </section>

            <section className='container__works__item'>
              <Link to="/propay" title='Propay'>
                  <img src={WorkPropay} className='container__works__item_image' />
                  <h3 className='container__works__item__title'>Propay</h3>
                  <img src={WorkPropayLogo} className='container__works__item__logo' alt='Propay' />
              </Link>
            </section>
        </section>

        <section id='Services'></section>
        <section className='container__services'>
          <h2 className='container__services__title'>O que eu faço</h2>

          <ul className='container__services__item'>
            <li><h3>Front End</h3> Construção do protótipo desde a sua concepção.</li>
            <li><h3>UX / UI Design</h3> Utilização dos principais conceitos de UX e UI para agregar valor ao projeto.</li>
            <li><h3>Strategy</h3> Planos estratégicos e gerenciamento de projetos desde o início até a entrega final.</li>
          </ul>
        </section>

        <section id='Skills'></section>
        <section className='container__services'>
          <h2 className='container__services__title'>Minhas habilidades</h2>

            <section className='container__seeproject'>
              <div className='container__seeproject_legend container__seeproject_legend--home'><span>8,5</span><strong style={{fontSize: "16px"}}>UX | UI Design </strong>&nbsp;- Meu conhecimento em tecnologia de 0 a 10 </div>
            </section>

            <section className='container__tags container__tags--home'>   
              <div div className='container__tags__item'><i>User Experience Design</i> <span>8</span> <div data-label="punctuation" style={{width: '80%'}}></div></div>
              <div div className='container__tags__item'><i>Usability</i> <span>7</span> <div data-label="punctuation" style={{width: '70%'}}></div></div>
              <div div className='container__tags__item'><i>Information Architecture</i> <span>10</span> <div data-label="punctuation" style={{width: '100%'}}></div></div>
              <div div className='container__tags__item'><i>Mobile Design</i> <span>10</span> <div data-label="punctuation" style={{width: '100%'}}></div></div>
              <div div className='container__tags__item'><i>Design System</i> <span>7</span> <div data-label="punctuation" style={{width: '70%'}}></div></div>
              <div div className='container__tags__item'><i>Design Sprint</i> <span>9</span> <div data-label="punctuation" style={{width: '90%'}}></div></div>
              <div div className='container__tags__item'><i>Adobe XD</i> <span>10</span> <div data-label="punctuation" style={{width: '100%'}}></div></div>
              <div div className='container__tags__item'><i>Figma</i> <span>10</span> <div data-label="punctuation" style={{width: '100%'}}></div></div>
              <div div className='container__tags__item'><i>Axure</i> <span>10</span> <div data-label="punctuation" style={{width: '100%'}}></div></div>
              <div div className='container__tags__item'><i>PhotoShop</i> <span>7</span> <div data-label="punctuation" style={{width: '70%'}}></div></div>
              <div div className='container__tags__item'><i>Ilustrator</i> <span>6</span> <div data-label="punctuation" style={{width: '60%'}}></div></div>
            </section>

            <section className='container__seeproject'>
              <div className='container__seeproject_legend container__seeproject_legend--home'><span>9,2</span><strong style={{fontSize: "16px"}}>Front End</strong> </div>
            </section>

            <section className='container__tags container__tags--home'>   
            <div className='container__tags__item'><i>Agile Scrum</i> <span>8</span> <div data-label="punctuation" style={{width: '80%'}}></div></div>
            <div className='container__tags__item'><i>HTML 5</i> <span>10</span> <div data-label="punctuation" style={{width: '100%'}}></div></div>
            <div className='container__tags__item'><i>CSS/SCSS</i> <span>10</span> <div data-label="punctuation" style={{width: '100%'}}></div></div>
            <div className='container__tags__item'><i>Angular</i> <span>8</span> <div data-label="punctuation" style={{width: '90%'}}></div></div>
            <div className='container__tags__item'><i>React</i> <span>8</span> <div data-label="punctuation" style={{width: '80%'}}></div></div>
            <div className='container__tags__item'><i>React Native</i> <span>6</span> <div data-label="punctuation" style={{width: '60%'}}></div></div>
            <div className='container__tags__item'><i>Bootstrap</i> <span>10</span> <div data-label="punctuation" style={{width: '100%'}}></div></div>
            <div className='container__tags__item'><i>Angular Material</i> <span>10</span> <div data-label="punctuation" style={{width: '100%'}}></div></div>
            <div className='container__tags__item'><i>GitHub</i> <span>9</span> <div data-label="punctuation" style={{width: '90%'}}></div></div>
            <div className='container__tags__item'><i>Jira</i> <span>8</span> <div data-label="punctuation" style={{width: '80%'}}></div></div>
            <div className='container__tags__item'><i>Bitbucket</i> <span>9</span> <div data-label="punctuation" style={{width: '90%'}}></div></div>
            <div className='container__tags__item'><i>Vercel</i> <span>7</span> <div data-label="punctuation" style={{width: '70%'}}></div></div>
            <div className='container__tags__item'><i>Azure</i> <span>8</span> <div data-label="punctuation" style={{width: '80%'}}></div></div>
            <div className='container__tags__item'><i>Jquery</i> <span>10</span> <div data-label="punctuation" style={{width: '100%'}}></div></div>
            <div className='container__tags__item'><i>Micro frontend</i> <span>6</span> <div data-label="punctuation" style={{width: '60%'}}></div></div>
            </section>

        </section>

        <section id='Education'></section>
        <section className='container__education'>
          <h2 className='container__education__title'>Formação educacional</h2>

          <ul className='container__education__item'>
            <li><h3>2022-2024</h3> <img src={LogoAnhembi} className='container__education__item_logo' /> Gestão de Tecnologia da Informação {/*<span className='container__education__item_now'>Cursando</span>*/}</li>
            <li><h3>2022-2024</h3> <img src={LogoAnhembi} className='container__education__item_logo' /> Sistemas para Internet</li>
            <li><h3>2023-2023</h3> <img src={LogoInteractiveDesign} className='container__education__item_logo' /> Design for a Better World with Don Norman </li>
            <li><h3>2023-2023</h3> <img src={LogoInteractiveDesign} className='container__education__item_logo' /> Mobile User Experience (UX) Design </li>
            <li><h3>2023-2023</h3> <img src={LogoEspm} className='container__education__item_logo' /> Gerenciamento de Projetos com PMI e PMBOK</li>
            <li><h3>&nbsp;</h3> <img src={LogoEspm} className='container__education__item_logo' /> Design UX and UI</li>
            <li><h3>2022-2022</h3> <img src={LogoPanamericana} className='container__education__item_logo' /> Design Leaders Mindset, Game Design and Digital Media</li>
            <li><h3>2004-2006</h3> <img src={LogoOswaldoCruz} className='container__education__item_logo' /> Sistemas Virtuais - Webdesign </li> 
          </ul>
        </section>


        <section className='container__companies'>
            <h4 className='container__companies_title'>Projetos de empresas das quais participei.</h4>

            <ul className='container__companies_item'>
              <li><img src={CHyundai} /></li>
              <li><img src={CLoreal} /></li>
              <li><img src={CTicket} /></li>
              <li><img src={CPorto} /></li>
              <li><img src={CCacauShow} /></li>

              <li><img src={CScania} /></li>
              <li><img src={CIpiranga} /></li>
              <li><img src={CGrupoMateus} /></li>
              <li><img src={CMais} /></li>
              <li><img src={CPropay} /></li>
            </ul>
        </section>


        <section id='Contact'></section>
        <section className='container__talk'>
          <h2 className='container__talk_title'><span>Quer iniciar um projeto ?</span>Vamos Conversar!</h2>
          <button className='container__talk_bto' onClick={() => { window.open("https://wa.me/+5511991079785");}}>Iniciar conversa</button>
        </section>


        <section className='container__prefooter'>
              <h4 className='container__prefooter__logo'><Link to="/" title='TM UI/ UX Designer & Front End Development'>TM <span>UI/ UX Fullstack Designer &<br /> Front End Development</span></Link></h4>
        </section>

        <footer className='container__footer'>
          <section className='container__footer_item'>
          Você não pode esgotar sua criatividade.<br />
          Quanto mais você usa, mais
          você tem.

            <nav className='container__footer_item__social'>
                  <a href="https://www.instagram.com/thiagophelps" rel="noreferrer" title='Instagram'><img src={LogoInstagram} alt='Instagram' /></a>
                  <a href="/" rel="noreferrer" title='Twitter'><img src={LogoTwitter} alt='Twitter' /></a>
                  <a href="https://www.linkedin.com/in/thiago-miranda-55695091/" target='_blank' rel="noreferrer" title='Linkedin'><img src={LogoLinkedin} alt='Linkedin' /></a>
            </nav>
          </section>

          <section className='container__footer_item'>
          Contato
          <a href='mailto:thiagosantosa@gmail.com' target='_blank' rel="noreferrer">thiagosantosa@gmail.com</a>
          +55 11 9 9107-9785
          </section>  
        </footer>



    </>
  )
}

export default Home