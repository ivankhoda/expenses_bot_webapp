import React from "react";

export const Main = () => {
  //@ts-ignore
  console.log(window.Telegram.WebApp, "this is telegram web app");
  //@ts-ignore
  console.log(window.Telegram.WebApp.initData, "this is telegram web app init data");
  //@ts-ignore
  window.Telegram.WebApp.sendData(window.Telegram.WebApp.initData);
  //@ts-ignore
  // const mainButton = window.Telegram.WebApp.MainButton;
  return (
    <>
      <div>Here is main component</div>
    </>
  );
};
