import React from "react";
import { Main } from "../Main/Main";
import "../style.scss";
import "./App.style.scss";

export const App = () => {
  //@ts-ignore
  const tg = window.Telegram.WebApp;

  const click = () => {
    tg.sendData("some string that we need to send");
    //при клике на основную кнопку отправляем данные в строковом виде
  };

  tg.expand();
  tg.ready();

  const routes = [{ path: "/", name: "Main", Component: <Main /> }];

  return (
    <>
      <div className="App">
        <button onClick={click}>Test init and some other data</button>
        <button>Test init and some other data</button>
      </div>
    </>
  );
};
