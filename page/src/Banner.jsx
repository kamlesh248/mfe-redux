import React from "react";
import { useStore } from "store/store";
import * as S from "./style";
export default () => {
  const { count, clear } = useStore();
  return (
    <S.Header>
      Hello MicroFrontend <S.Count>{count}</S.Count>
      <S.Div>
        <S.Button onClick={clear}>
          Clear Cart
        </S.Button>
      </S.Div>
    </S.Header>
  );
};
