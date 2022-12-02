import React from "react";
import ReactDOM from "react-dom";
import Banner from "page/Banner";
import { StoreProvider, useStore } from "store/store";
import * as S from "./style";

const App = () => {
  const { increment } = useStore();
  return (
    <>
      <Banner />
      <S.Paragraph> Host page </S.Paragraph>
      <S.Div>
        <S.Button onClick={increment}>addToCart HostBtn</S.Button>
      </S.Div>
    </>
  );
};
ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById("app")
);
