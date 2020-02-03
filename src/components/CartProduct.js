import React from "react";
import image from "../ford.jpg";
import styled from "styled-components";
import {Card,ListGroup} from "react-bootstrap";
//-----------------------CSS---------------------------------------
const Div = styled.div`
  width: 200px;
  /* margin: 12px auto; */
  border: 3px solid #eeeeee;
  box-shadow: 0 2px 3px #cccccc;
  /* padding: 16px; */
  background-color: #e3e3e3;
`;
//------------------------------------------------------------------------

const CartProduct = props => {
  return (
      <Card border="secondary" style={{ width: "80%",height:"200px" , margin:"auto"}}>
        <Card.Img style={{width:"100%", height:"100px"}} variant="top" src={image}/>
        <ListGroup variant="flush">
  <ListGroup.Item style={{ textAlign:"right"}}>{props.Cart.title}</ListGroup.Item>
    <ListGroup.Item style={{ textAlign:"center"}}>{props.Cart.prix}</ListGroup.Item>
    <ListGroup.Item>{props.Cart.location}</ListGroup.Item>
  </ListGroup>
  <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
  );
};

export default CartProduct;
