import React from "react";
import PizzaMaker from "./PizzaForm";
import styled from "styled-components";

const App = () => {

  const StyledHeader = styled.div`
  text-align: center;
  margin-top: 3%;
  `



  return (
    <StyledHeader>
      <PizzaMaker />
    </StyledHeader>
  );
};
export default App;
