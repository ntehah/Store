import React from "react";
import styled from "styled-components";
import search from "./search.PNG";

const Div = styled.div`
  .SearchBarDesktop {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  .SearchBarDesktop button {
    height: 36px;
    border-style: none;
    border-radius: 10px 0 0 10px;
    background-color: #f2a847;
  }
  .SearchBarDesktop input {
    width: 400px;
    height: 34px;
    border-style: none;
  }
  .SearchBarDesktop select {
    cursor: pointer;
    height: 36px;
    width: 100px;
    border-style: none;
    border-radius: 0 10px 10px 0;
    background-color: #f2f2f2;
  }
  .SearchBarMobile {
    display: flex;
    justify-content: center;
  }
  .SearchBarMobile button {
    border-style: none;
    border-radius: 10px 0 0 10px;
    background-color: #f2a847;
    height: 30px;
    flex: 1;
    width: 20%;
  }
  .SearchBarMobile input {
    height: 28px;
    border-style: none;
    flex: 4;
    width: 60%;
  }
  .SearchBarMobile select {
    flex: 2;
    cursor: pointer;
    border-style: none;
    border-radius: 0 10px 10px 0;
    background-color: #f2f2f2;
    height: 30px;
    width: 20%;
  }
`;

const Search = props => (
  <Div>
    <div className={props.class}>
      <button>بحث</button>
      <input SearchMob={props.SearchMob}></input>

      <select>
        <option> سيارات سيارات</option>
        <option>سيارات</option>
        <option>سيارات</option>
      </select>
    </div>
  </Div>
);

export default Search;
