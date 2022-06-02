import React from "react";
import "../style.scss";
import "./App.style.scss";

export const App = () => {
  //@ts-ignore
  const tg = window.Telegram.WebApp;
  const initd = tg.initData;
  const click = () => {
    tg.sendData(initd.user.username);
    //при клике на основную кнопку отправляем данные в строковом виде
  };

  console.log(initd);
  tg.expand();

  // const profileEl = document.getElementById("profile");
  // const nameEl = document.getElementById("name");
  // const usernameEl = document.getElementById("username");
  // const test = document.getElementById("test");

  // tg.ready();
  // test!.innerText = `${JSON.stringify(tg)}`;
  //@ts-ignore
  // const { first_name, last_name, username, photo_url } = window.Telegram.WebAppUser;

  // // set the profile

  // nameEl!.innerText = `${first_name} ${last_name}`;

  // usernameEl!.innerText = username;
  const { first_name, last_name, username, photo_url } = window.Telegram.WebApp.initDataUnsafe.user;

  // const routes = [{ path: "/", name: "Main", Component: <Main /> }];

  return (
    <>
      <div className="App">
        <button onClick={click}>Test init and some other data</button>
        <button>Test init and some other data</button>
      </div>
    </>
  );
};
