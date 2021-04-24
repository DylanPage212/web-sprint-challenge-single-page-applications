import React from "react";
import {BrowserRouter as Router, Route, Link, useHistory} from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect } from "react";
import * as yup from "yup";
import Schema from "./formSchema";

const StyledHeader = styled.div`
text-align: center;
margin-top: 5%;
`


const StyledButton = styled.button`
text-align: center;
margin-top: 5%;
padding: 8%;
font-size: 200%;
background-color: #ffcccb;
border: solid red 3px;
border-radius: 50px;
font-weight: bold;
&:hover {
    box-shadow: 5px 10px #888888;
}
`
const PizzaMaker = () => {




        // const placeOrder = (newOrder) => {
        //     setOrderList(newOrder)
        // }

        // const getOrders = () => {

            
        // }


return (
    <StyledHeader>
        <header> <h1>LAMBDA EATS</h1> </header> 
        <br></br>
        <h3>Welcome to the Lambda Online Pizza Ordering Portal!</h3>

        <Link to="/pizza">
            <StyledButton id="order-pizza">Order Now!</StyledButton>
        </Link>
    </StyledHeader>

)

}


export default PizzaMaker;