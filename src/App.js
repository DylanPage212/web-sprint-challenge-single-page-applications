import React, {useState} from "react";
import PizzaMaker from "./PizzaForm";
import {BrowserRouter as Router, Route, Link, useHistory, Switch} from "react-router-dom";
import Form from "./form";
import OrderPlaced from "./orderplaced"

const App = () => {
  const history = useHistory();

  const initialFormValues = {
      name: "",
      pizzaSize: "",
      specialInstructions: "",
      pepperoni: false,
      sausage: false,
      pineapple: false,
      secretSauce: false,
  }

  const initialFormErrors = {
      name: "",
      pizzaSize: "",
      specialInstructions: "",
  }

  const initialOrderList = ["a"];

  const initialDisabled = true;

  const [formValues, setFormValues] = useState(initialFormValues);
  const [orderList, setOrderList] = useState(initialOrderList);
  const [formErrors, setFormErrors] = useState(initialFormErrors);


  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <PizzaMaker
            formValues={formValues}
            formErrors={formErrors}
            orderList={orderList}
            setFormErrors={setFormErrors}
            setOrderList={setOrderList}
            setFormValues={setFormValues}
          />
        </Route>
        <Route path="/pizza">
          <Form
            formValues={formValues}
            formErrors={formErrors}
            orderList={orderList}
            setFormErrors={setFormErrors}
            setOrderList={setOrderList}
            setFormValues={setFormValues}
          />
        </Route>
        <Route path="/order-placed">
          <OrderPlaced
            orderList={orderList}
          />
        </Route>
      </Switch>
      </Router>
  );
};
export default App;
