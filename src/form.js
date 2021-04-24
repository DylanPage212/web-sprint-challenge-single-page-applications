import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Route, Link, useHistory} from "react-router-dom";
import styled from "styled-components";
import * as yup from "yup";
import Schema from "./formSchema";


const initialFormValues = {
    name: "",
    pizzaSize: "",
    specialInstructions: "",
    pepperoni: false,
    sausage: false,
    pineapple: false,
    secretSauce: false,
}


const initialDisabled = true;

const StyledForm = styled.form`
height: 800px;
border: 5px solid black;
margin: 30%;
margin-top: 5%;
border-radius: 50px;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
background-color: #ffcccb;
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

const Form = ({
    formErrors,
    formValues,
    setFormErrors,
    setOrderList,
    setFormValues
}) => {
    const history = useHistory();

    console.log(history, 'history at the start of the comment')

    const change = (evt) => {

        const {name,value, checked, type} = evt.target;
        const valueToUSe = type === "checkbox" ? checked : value;

        yup.reach(Schema, name)
        .validate(value)
        .then(()=> {
            setFormErrors({
                ...formErrors, [name]: "",
            });
        })
        .catch((err) => {
            setFormErrors({
                ...formErrors, [name]: err.errors[0],
            })
        })

        setFormValues({...formValues, [name]: valueToUSe})
    }

    const submit = (evt) => {
        evt.preventDefault()

console.log("Hello!")

        const newOrder = {
            name: formValues.name.trim(),
            pizzaSize: formValues.pizzaSize,
            pepperoni: formValues.pepperoni,
            sausage: formValues.sausage,
            pineapple: formValues.pineapple,
            secretSauce: formValues.secretSauce,
            specialInstructions: formValues.specialInstructions.trim(),
        }

        setOrderList(newOrder);
        setFormValues(initialFormValues);

        // route change after all states are set
        // order-placed
        history.push('/order-placed')
    }

    const [disabled, setDisabled] = useState(initialDisabled);

    useEffect(() => {
        console.log(formValues)
        Schema.isValid(formValues).then(valid => {
            setDisabled(!valid)
        })
    }, [formValues])

return (
<StyledForm id="pizza-form" onSubmit={submit}>

<h2> Build Your Own Pizza! </h2>

<div className="errors">
<div>{formErrors.name}</div>
<div>{formErrors.pizzaSize}</div>
</div>

<label>Your Name &nbsp;
    <input
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
    Pineapple

    <input
    type="checkbox"
    name="pineapple"
    checked={formValues.pineapple}
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
    Special Instructions &nbsp;

    <input
    type="text"
    name="specialInstructions"
    value={formValues.specialInstructions}
    onChange={change}
    />
</label>

<button type="submit" id="order-button" disabled={disabled}>Place Order!</button>

</StyledForm>


)}

export default Form;