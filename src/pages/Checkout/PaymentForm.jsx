import { Formik, Form } from "formik";
import * as Yup from 'yup';
import FormikInput from "../../components/Formik/FormikInput";
import Button from "../../components/Button/Button";
import styled from "styled-components";
import { lightBorderColor } from "../../consts/colors";
import { requiredField } from "../../consts/validations";
import FormikSelect from "../../components/Formik/FormikSelect";
import { CartContext } from "../../contexts/CartContext";
import { useContext } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-hot-toast";
import { HOME_PATH } from "../../routes/const";

const StyledForm = styled(Form)`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

const Subtitle = styled.p`
  font-size: 18px;
  padding-bottom: 8px;
  border-bottom: 1px solid ${lightBorderColor};
`;

const InputRow = styled.div`
  display: flex;  
  gap: 16px;
`;

const InputRowItem = styled.div`
  width : 100%;
`;

const CardNumber = styled.div`
    flex: 1.7;
`

const validationSchema = Yup.object().shape({
    country: Yup.object().shape({}).required(requiredField),
    address: Yup.string().required(requiredField),
    postal_code: Yup.string().required(requiredField),
    city: Yup.string().required(requiredField),
    phone_number: Yup.string().required(requiredField),
    first_name: Yup.string().required(requiredField),
    last_name: Yup.string().required(requiredField),
    card_number: Yup.number().required(requiredField),
    card_cvv: Yup.number().required(requiredField),
});

const PaymentForm = () => {
    const { resetCart} = useContext(CartContext);
    const navigate = useNavigate();
    const handleSubmit = (values) => {
        resetCart();
        navigate(HOME_PATH);
        toast.success("Purchase confirmed");
    };

  return (
    <Formik 
        initialValues={{
            country: "",
            address: "",
            postal_code: "",
            city: "",
            phone_number: "",
            first_name: "",
            last_name: "",
            card_number: "",
            card_cvv: "",
        }} 
        validationSchema={validationSchema} 
        onSubmit={handleSubmit}>
            <StyledForm>
                <Subtitle>Contact Details</Subtitle>
                <FormikSelect 
                    name="country" 
                    options={[{ value: "LT", label: "Lithuania"}]} 
                />
                <FormikInput name='address' placeholder="Address" />
                <InputRow>
                    <InputRowItem>
                        <FormikInput name='postal_code' type="number" placeholder="Postal Code" />
                    </InputRowItem>
                    <InputRowItem>
                        <FormikInput name='city' placeholder="City" />
                    </InputRowItem>
                </InputRow>
                    <FormikInput name="phone_number" placeholder="Phone Number" />
                    <Subtitle>Card Details</Subtitle>
                <InputRow>
                    <InputRowItem>
                        <FormikInput name='first_name' placeholder="First Name" />
                    </InputRowItem>
                    <InputRowItem>
                        <FormikInput name='last_name' placeholder="Last Name" />
                    </InputRowItem>
                </InputRow>
                <InputRow>
                    <CardNumber>
                        <FormikInput name="card_number" type="number" placeholder="Card Number" />
                    </CardNumber>
                    <InputRow>
                        <FormikInput name="card_cvv" type="number" placeholder="CVV"/>
                    </InputRow>
                </InputRow>
                <Button type="submit">Place Order</Button>
            </StyledForm>
    </Formik>
  )
}

export default PaymentForm