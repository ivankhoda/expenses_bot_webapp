import React from "react";

export const Main = () => {
  //@ts-ignore
  console.log(window.Telegram.WebApp, "this is telegram web app");
  //@ts-ignore
  console.log(window.Telegram.WebApp.initData, "this is telegram web app init data");

  //@ts-ignore
  const data = window.Telegram.WebApp.initData;
  // const mainButton = window.Telegram.WebApp.MainButton;
  const sendData = () => {
    //@ts-ignore

    //@ts-ignore
    // window.Telegram.WebApp.sendData(data);
    //@ts-ignore
    window.Telegram.WebApp.sendData("privet");
  };
  //@ts-ignore
  window.Telegram.WebApp.sendData(data);
  return (
    <>
      <div>Here is main component</div>

      <button onClick={sendData}>Test init and some other data</button>
      <button onClick={sendData}>Test init and some other data</button>
    </>
  );
};
