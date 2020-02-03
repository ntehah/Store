import React from "react";
import CartProduct from "./CartProduct";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Data from "../components/Data";
import {Link} from "react-router-dom"; 

const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 4,
  initialSlide: 0,
  rtl: true,
  className: "slides",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    { 
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Wrapper = styled.div`
  margin:10vh auto;
  width: 98%;
  height: 260px;
  box-shadow: 0 8px 6px -6px #696969;
  border:1px solid #696969;
  border-radius:5px;
  .slides {
    width: 96%;
    margin:auto;
    justify-content:center;
  }
  .slick-prev,
  .slick-next {
    height: 100%;
    /* border-radius:4px; */
    background-color: none;
    position: absolute;

  }
.slick-prev:hover::before,
.slick-next:hover::before {
    color: black;
}
  .bar{
    display:inline-flex;
    border-radius:6px 6px 0 0 ;
    width:100%;
    align-items:flex-start;
  }
  .bar h2{
    margin-right:2%;
    text-align:right;
    flex:1;
    font-size:18px;
    font-weight:10px;
    color:white;
    height:100%;
    align-self:flex-start;
    margin-top:0;
  }
  .bar a{
    margin-left:2%;
    flex:1;
    font-size:18px;
    font-weight:10px;
    color:white;
    text-decoration:none;
  }
`;

function ListProduct (props) {
 function OpenCart() {
    
  }
  return (
    <Wrapper>
      <div className="bar" style={{backgroundColor:props.color}}>
        <a href="#">عرض الكل</a>
        <h2>{props.NameList}</h2>
      </div>
      <Slider {...settings}>
        {props.List.map(cart => {
          return (
            <div key={cart.id} onClick = {OpenCart}>
              <Link to={`/product/${cart.id}`}><CartProduct Cart={cart} /></Link>
            </div>
          );
        })}
      </Slider>
    </Wrapper>
  );
};
export default ListProduct;
