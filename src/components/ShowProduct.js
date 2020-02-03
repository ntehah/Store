import styled from "styled-components";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image from "../ford.jpg";
import imge from "../pc.png";
import { MdDateRange } from "react-icons/md";
import { Container, Row, Col } from "react-bootstrap";
const Div = styled.div`
  width: 100%;
  height: 500px;
  background-image:url("http://www.pngmart.com/files/10/Red-Ford-Mustang-PNG-HD.png"); 
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display:flex;
  align-items:center;
    .Cart-product {
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 0.7);
    margin: auto;
    width: 72%;
    display: flex;
    flex-direction: row;
    align-items:center;
    @media screen and (max-width: 768px) {
      flex-direction: column;
      width:95%;
    }
  }
  .Cart-info {
    flex:3;
    display: flex;
    margin-left:2%;
    flex-direction: column;
    align-items: flex-end;
  }
  .Cart-info h3 {
    font-size: 16px;
    width: 90%;
    align-self: center;
    font-weight: bold;
  }
  .Cart-info p {
    margin-left: 5px;
    font-size: 14px;
  }
  .info-user {
    margin-top: 2%;
    margin-bottom: 2%;
    width: 50%;
    border: 1px solid orangered;
    border-radius: 10px;
    align-self: center;
  }
  .cart-dis {
    display: flex;
    justify-content: center;
    font-size: 14px;
    font-weight: 3vw;
    width: 100%;
  }
  .row2 {
    display: flex;
    direction: rtl;
    flex-direction: row;
    width: 100%;
    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
  }
`;
const rowstyled = {
  fontSize: "14px",
  fontWeight: "3vw",
  display: "flex",
  direction: "rtl",
  flexDirection: "column",
  margin: "1%",
  justifyContent: "center",
};
const colstyled = {
  textAlign: "centre",
  padding: "1%",
  marginBottom: "1%",
  flex: 1,
};
const settings = {
  dots: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  className: "slide",
};
const DivImage = styled.div`
    flex:2;
    width:50%;
    height:100%;
    border: 1px solid orangered;
    border-radius: 10px;
    display:flex;
    justify-content:center;
    margin-left:2%;
    @media screen and (max-width: 768px) {
      margin-left:0;
      margin-top:2%;
    }
    .slide {
    width: 80%;
    height:96%;
     }
  .slick-prev,
  .slick-next {
    height: 100%;
    background-color: none;
    position: absolute;
    @media screen and (max-width: 768px) {
      display:"none";
    }
  }
  .slick-prev:hover::before,
  .slick-next:hover::before {
    color: black;
    display:"none";
  }
`;

const ListOfpro = [
  {
    id: 1,
    prix: "300000 MRU",
    title: "1فورد موستانگ",
    description: " موستانگ موستانگ موستانگ موستانگ موستانگ",
    img: { image },
    location: "NKC",
    date: "1/1/2020",
    userName:"مختار سديا1",
    numeroUser:"32303161"
  },
  {
    id: 2,
    prix: "300000 MRU",
    title: "2فورد موستانگ",
    description: " موستانگ موستانگ موستانگ موستانگ موستانگ",
    img: { image },
    location: "NKC",
    date: "1/1/2020",
    userName:"مختار سديا2",
    numeroUser:"32303161"
  },
  {
    id: 3,
    prix: "300000 MRU",
    title: "3فورد موستانگ",
    description: " موستانگ موستانگ موستانگ موستانگ موستانگ",
    img: { image },
    location: "NKC",
    date: "1/1/2020",
    userName:"مختار سديا3",
    numeroUser:"32303161"
    
  },
];
const products = fetch("https://localhost:44385/api/Products");

function ShowProduct ({match}){
  let product = ListOfpro.find(p=> p.id == match.params.id);
  console.log(products);
    return (
      <Div>

        <div className="Cart-product">
          <DivImage>
            <Slider {...settings}>
              <div><img style={{ width: "100%", height: "97%" }} src={image} /></div>
              <div><img style={{ width: "100%", height: "97%" }} src={image} /></div>
              <div><img style={{ width: "100%", height: "97%" }} src={image} /></div>
              <div><img style={{ width: "100%", height: "97%" }} src={image} /></div>
            </Slider>
          </DivImage>
          <div className="Cart-info">
    <h3>{product.title}</h3>
            <p>
              {product.description}
            </p>
            <Container className="cart-dis">
              <Row className="row2">
                <Col style={colstyled}>
                  {" "}
                  المكان: <span>انواكشوط</span>
                </Col>
                <Col style={colstyled}>
                  السعر : <span>25000 MRU</span>
                </Col>
                <Col style={colstyled}>
                  <MdDateRange /> <span> 1/1/2020 </span>{" "}
                </Col>
              </Row>
            </Container>
            <Container className="info-user">
              <Row
                style={{
                  textAlign: "center",
                  fontSize: "14px",
                  fontWeight: "bold",
                  color: "orangered",
                }}
              >
                معلومات البائع
              </Row>
              <Row style={rowstyled}>
                <Col style={colstyled}>
                  الاسم و اللقب : <span>مخطار ولد سديا</span>
                </Col>
              </Row>
              <Row style={rowstyled}>
                <Col style={colstyled}>
                  رقم الهاتف : <span>32003232</span>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </Div>
    );
  }
export default ShowProduct;
