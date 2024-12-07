import logo from "./logo.svg";
import "./App.css";

import React from "react";

const MainPage = () => {
  return (
    <div>
      <header>
        <h1>Добро пожаловать!</h1>
        <p>Это первый экран главной страницы.</p>
      </header>
      <main>
        <section>
          <h2>Информация</h2>
          <p>Контент страницы можно будет редактировать через CMS.</p>
        </section>
      </main>
    </div>
  );
};

export default MainPage;
