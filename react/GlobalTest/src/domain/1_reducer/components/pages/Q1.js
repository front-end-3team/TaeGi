import React, { useReducer, useState } from "react";
import NavigateButton from "../../../../components/NavigateButton";
import Q1Form from "../atom/Form";
import ReducerQ1List from "../atom/List";
import reducer from "../../../../store/1_reducer";

const ReducerQ1Page = () => {
    /* 
      문제 1)
      로직 분리하기
    
      재료 추가 로직 분리하기

      1) 재료 추가 로직 작성하기
      2) 재료 삭제 로직 작성하기

      3) 위 로직을 현재 컴포넌트가 아닌 비즈니스 로직을 분리하여
          src/store/1_reducer.js에 구현해보세요
    */

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: "ADD",
            payload: {
                id: ingredients.length + 1,
                name: e.target.name.value,
                price: e.target.price.value,
            },
        });
    };

    const onClickDel = (object) => {
        dispatch({
            type: "DELETE",
            payload: {
                id: object.id,
            },
        });
    };

    const [ingredients, dispatch] = useReducer(reducer, [
        { id: 1, name: "피자 도우", price: 1000 },
        { id: 2, name: "토마토 소스", price: 500 },
        { id: 3, name: "치즈", price: 1000 },
        { id: 4, name: "피망", price: 500 },
        { id: 5, name: "양파", price: 500 },
    ]);

    return (
        <>
            <h2>문제 1</h2>
            <table>
                <thead>
                    <tr>
                        <th>재료</th>
                        <th>가격</th>
                    </tr>
                </thead>
                <ReducerQ1List ingredients={ingredients} onClick={onClickDel} />
            </table>
            <Q1Form onSubmit={onSubmit} />
            <NavigateButton isFistPage to={"/2_context/q1"} />
        </>
    );
};
export default ReducerQ1Page;
