import React from "react";
import {BrowserRouter as Router, Route, Link, useHistory} from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect } from "react";
import * as yup from "yup";
import Schema from "./formSchema";

const StyledOrder = styled.div`
    text-align: center;
    border: solid red 3px;
    border-radius: 50px;
    font-weight: bold;
    background-color: #ffcccb;
    width: 50%;
    margin: 0 auto;
    margin-top: 5%;
    padding: 5%;
    `

const OrderPlaced = ({
    orderList
}) => {

return (
    <div>
            <StyledOrder>
                YOUR ORDER HAS BEEN PLACED! THANK YOU!
            </StyledOrder>
            <div>
                You ordered a {orderList.pizzaSize} for {orderList.name}
            </div>
    </div>
)

}

export default OrderPlaced;