import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";

const PizzaMaker = () => {

    const initialFormValues = {
        name: "",
        pizzaSize: "",
        specialInstructions: "",
        pepperoni: false,
        sausage: false,
        pinapple: false,
        secretSauce: false,
    }

    const initialOrderList = [];

    const [formValues, setFormValues] = useState(initialFormValues);
    const [orderList, setOrderList] = useState(initialOrderList);
    const [disabled, setDisabled] = useState();

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

        const StyledForm = styled.form`
        height: 800px;
        border: 5px solid black;
        margin: 10%;
        margin-top: 5%;
        border-radius: 50px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;

        `

        const StyledBoxes = styled.div`
        padding: 2%;
        border: 5px solid #ff4d4d;
        margin: 10%;
        margin-top: 5%;
        display: flex;
        flex-direction: column;
        align-items: center;

        `

        const change = (evt) => {
            const {name,value, checked, type} = evt.target;
            const valueToUSe = type === "checkbox" ? checked : value;
            setFormValues({...formValues, [name]: valueToUSe})
        }

        const submit = (evt) => {
            evt.preventDefault()

            const newOrder = {
            name: formValues.name.trim(),
            pizzaSize: formValues.pizzaSize.trim(),
            pepperoni: formValues.pepperoni,
            sausage: formValues.sausage,
            pinapple: formValues.pinapple,
            secretSauce: formValues.secretSauce,
            specialText: formValues.specialText.trim(),
            }
            setOrderList([...orderList, newOrder])
            setFormValues(initialFormValues);
        }


return (
    
    <Router>
        <Route exact path="/">
            <StyledHeader>
                   <header> <h1>LAMBDA EATS</h1> </header> 
                   <br></br>
                    <h3>Welcome to the Lambda Online Pizza Ordering Portal!</h3>

                    <Link to="/pizza">
                    <StyledButton id="order-pizza">Order Now!</StyledButton>
                    </Link>
            </StyledHeader>
        </Route>
        <Route path="/pizza">
        <StyledForm id="pizza-form" onSubmit={submit}>

            <label> Build Your Own Pizza! </label>
            
            <label>Your Name  <input
                type="text"
                name="name"
                value={formValues.name}
                onChange={change}
                />
            </label>
            <label>
                <select value={formValues.pizzaSize} name="pizzaSize" onChange={change}>
                    <option value="">-- Select a Pizza Size --</option>
                    <option value="Small"> Small </option>
                    <option value="Medium"> Medium </option>
                    <option value="Large"> Large </option>
                    <option value="Extra-Large"> Extra-Large </option>
                    <option value="FAC"> Fat Albert Challenge </option>
                </select>
            </label>

        <StyledBoxes>

            <label>
                Pepperoni

                <input
                type="checkbox"
                name="pepperoni"
                checked={formValues.pepperoni}
                onChange={change}
                />
            </label>

            <label>
                Sausage

                <input
                type="checkbox"
                name="sausage"
                checked={formValues.sausage}
                onChange={change}
                />
            </label>

            <label>
                Pinapple

                <input
                type="checkbox"
                name="pinapple"
                checked={formValues.pinapple}
                onChange={change}
                />
            </label>

            <label>
                Secret Sauce

                <input
                type="checkbox"
                name="secretSauce"
                checked={formValues.secretSauce}
                onChange={change}
                />
            </label>
            </StyledBoxes>

            <label>
                Special Instructions

                <input
                type="text"
                name="specialInstructions"
                value={formValues.specialInstructions}
                onChange={change}
                />
            </label>
            <button id="order-button">Place Order!</button>
        </StyledForm>
        </Route>
    </Router>
)

}


export default PizzaMaker;