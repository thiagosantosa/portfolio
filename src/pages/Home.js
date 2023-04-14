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
              <h1 className='container__header__content__logo'><Link to="/" title='TM UI/ UX Designer & Front End Development'>TM <span>UI/ UX Designer &<br /> Front End Development</span></Link></h1>

              <nav className='container__header__content__menu'>
                    <AnchorLink href='#Home'>Home</AnchorLink>
                    <AnchorLink href='#About'>About</AnchorLink>
                    <AnchorLink href='#Services'>Services</AnchorLink>
                    <AnchorLink href='#Work'>Work</AnchorLink>
                    <AnchorLink href='#Education'>Academic education</AnchorLink>
                    <AnchorLink href='#Contact'>Contact</AnchorLink>
              </nav>
            </section>
        </header>

        <section id='Home'></section>
        <section className='container__welcome'>
            <h2>
              <span>Hello people!</span>
              My creative <br />
              digital design <br />
              and Front End
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
             <h2 className='container__about__title'>About me</h2>
             <p className='container__about__description'>
             With 18 years of experience in the internet area, I have worked in different sectors such as creation, 
             projects and development. I developed projects for product, marketing and IT sectors for large clients 
             such as Royal Canin, Porto Seguro, Ticket, Loreal, Cacau Show, Grupo Mateus, Hyundai etc... through the 
             companies that I exercised my functions and tasks.
             </p>
          </div>
          <img src={ImageThiago} alt='Thiago Miranda | UX Designer and Front End' />
        </section>

        <section id='Work'></section>
        <section className='container__works'>
            <h2 className='container__works__title'>Featured Work</h2>

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
          <h2 className='container__services__title'>My Services</h2>

          <ul className='container__services__item'>
            <li><h3>Front End</h3> Construction of the prototype from its conception.</li>
            <li><h3>UX / UI Design</h3> Use of the main concepts of UX and UI to add value to the project.</li>
            <li><h3>Strategy</h3> Strategic plans and project management from inception to final delivery.</li>
          </ul>
        </section>

        <section id='Education'></section>
        <section className='container__education'>
          <h2 className='container__education__title'>Academic education</h2>

          <ul className='container__education__item'>
            <li><h3>2023-2023</h3> <img src={LogoInteractiveDesign} className='container__education__item_logo' /> Design for a Better World with Don Norman <span className='container__education__item_now'>Studying</span></li>
            <li><h3>2023-2023</h3> <img src={LogoInteractiveDesign} className='container__education__item_logo' /> Mobile User Experience (UX) Design <span className='container__education__item_now'>Studying</span></li>
            <li><h3>2023-2023</h3> <img src={LogoEspm} className='container__education__item_logo' /> Agile Methodologies for innovation</li>
            <li><h3>&nbsp;</h3> <img src={LogoEspm} className='container__education__item_logo' /> Project Management with PMI and PMBOK</li>
            <li><h3>&nbsp;</h3> <img src={LogoEspm} className='container__education__item_logo' /> Agile and Collaborative Leadership in Market 4.0</li>
            <li><h3>&nbsp;</h3> <img src={LogoEspm} className='container__education__item_logo' /> Design UX and UI</li>
            <li><h3>&nbsp;</h3> <img src={LogoEspm} className='container__education__item_logo' /> Information Architecture in UX</li>
            <li><h3>&nbsp;</h3> <img src={LogoEspm} className='container__education__item_logo' /> UX Writing - User Flows and Scenarios for Digital Products</li>
            <li><h3>2022-2025</h3> <img src={LogoAnhembi} className='container__education__item_logo' /> Higher Technology Course (CST), Information Technology Management <span className='container__education__item_now'>Studying</span></li>
            <li><h3>2022-2024</h3> <img src={LogoAnhembi} className='container__education__item_logo' /> Higher Technology Course (CST), Internet Systems <span className='container__education__item_now'>Studying</span></li>
            <li><h3>2022-2022</h3> <img src={LogoPanamericana} className='container__education__item_logo' /> Design Leaders Mindset, Game Design and Digital Media</li>
            <li><h3>2004-2006</h3> <img src={LogoOswaldoCruz} className='container__education__item_logo' /> Higher Technology Course (CST), Virtual Systems - Webdesign </li> 
          </ul>
        </section>


        <section className='container__companies'>
            <h4 className='container__companies_title'>Projects from companies I participated in.</h4>

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
          <h2 className='container__talk_title'><span>Want to start a project?</span>Let’s Talk</h2>
          <button className='container__talk_bto' onClick={() => { window.open("https://wa.me/+5511991079785");}}>Contact us</button>
        </section>


        <section className='container__prefooter'>
              <h4 className='container__prefooter__logo'><Link to="/" title='TM UI/ UX Designer & Front End Development'>TM <span>UI/ UX Designer &<br /> Front End Development</span></Link></h4>
        </section>

        <footer className='container__footer'>
          <section className='container__footer_item'>
          You cannot exhaust your creativity.<br />
          The more you use, the more <br />
          you have.

            <nav className='container__footer_item__social'>
                  <a href="https://www.instagram.com/thiagophelps" rel="noreferrer" title='Instagram'><img src={LogoInstagram} alt='Instagram' /></a>
                  <a href="/" rel="noreferrer" title='Twitter'><img src={LogoTwitter} alt='Twitter' /></a>
                  <a href="https://www.linkedin.com/in/thiago-miranda-55695091/" target='_blank' rel="noreferrer" title='Linkedin'><img src={LogoLinkedin} alt='Linkedin' /></a>
            </nav>
          </section>

          <section className='container__footer_item'>
          address
          <a href='mailto:thiagosantosa@gmail.com' target='_blank' rel="noreferrer">thiagosantosa@gmail.com</a>
          +55 11 9 9107-9785
          </section>  
        </footer>



    </>
  )
}

export default Home