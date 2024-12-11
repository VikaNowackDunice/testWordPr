import React from "react";
import "./style.css";
import myImage from './image/stars.jpg';
import LogoSpace from './image/logo.png';
import myIcon from './image/icon_menu.png';
import ImgSpace from './image/space.webp';
import ImageMars from './image/mars.png'

const Spacex = () => {
  return (
    <main className="main_container">
      <img src={myImage} alt="Stars background" className="starsBackground" />
      {/* Секция шапка */}
      <section className="header">
        <img src={LogoSpace} alt="SpaceX Logo" className="logoSpace" />
        <nav className="navigation">
          <p>Главная</p>
          <p>Технология</p>
          <p>График полетов</p>
          <p>Гарантии</p>
          <p>О компании</p>
          <p>Контакты</p>
        </nav>
        <img src={myIcon} alt="Menu Icon" className="menu" />
      </section>
       {/* Заголовок и фон */}
      <h1 className="headeJourney">ПУТЕШЕСТВИЕ</h1>
      <p className="journeyP">на красную планету</p>
      <img src={ImageMars} alt="Mars" className="mars"/>
      <div className="black"></div>
      <img src={ImgSpace} alt='space' className="spaceBackground"/>
      <div className="gridContent">
        <div className="one box">
            <p>мы</p>
            <h1>1</h1>
            <span>на рынке</span>
        </div>
        <div className="two box">
            <p>гарантируем</p>
            <h1>50%</h1>
            <span>безопасность</span>
        </div>
        <div className="three box">
            <p>календарик за</p>
            <h1>2001г.</h1>
            <span>в подарок</span>
        </div>
        <div className="fore box">
            <p>путешествие</p>
            <h1>597</h1>
            <span>дней</span>
        </div>
      </div>
      <button className="toBegin">Начать путешествие</button>
      <div class="gradientLine"></div>
    </main>
  );
};

export default Spacex;
