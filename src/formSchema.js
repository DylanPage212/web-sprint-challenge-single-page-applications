import * as yup from "yup";

export default yup.object().shape({
    name: yup
    .string()
    .required("Name is required")
    .min(1, "name must be at least 1 character long"),

    pizzaSize: yup
    .string()
    .oneOf(["Small", "Medium", "Large", "Extra-Large", "FAC"], "Pizza Size is required"),

    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    pineapple: yup.boolean(),
    secretSauce: yup.boolean(),

    specialInstructions: yup.string()

});