import { Formik, Form } from "formik";
import FormikInput from "../../components/Formik/FormikInput";
import styled from "styled-components";
import {screenSize} from "../../consts/mediaQueries";
import Button from "../../components/Button/Button";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { LOGIN_PATH } from "../../routes/const";
import { useCreateUser } from "../../hooks/users";
import { toast } from "react-hot-toast";

const StyledForm = styled(Form)`
  max-width: ${screenSize.mobile};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 60px;
`;

const Title = styled.p`
  font-size: 24px;
  text-align: center;
  margin-bottom: 16px;
`;

const StyledLink = styled(Link)`
  text-align: center;
  margin-top: 16px;
  font-size: 18px;
`;

const validationSchema = Yup.object().shape({
  first_name: Yup.string().required("Required"),
  last_name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
  confirm_password: Yup.string()
    .required("Please retype your password.")
    .oneOf([Yup.ref("password")], "Your passwords do not match."),
})

const Register = () => {

  const navigate = useNavigate();

  const { mutateAsync: createUser } = useCreateUser();

    const handleSubmit = (values, {setSubmitting, resetForm}) => {
        const {confirm_password, ...user} = values;
        createUser(user)
          .then((response) => {
          navigate(LOGIN_PATH);
          toast.success("Successfully registered")
        })
          .catch((error) => {
            console.error("failed to create a new user", error);
          });
        setSubmitting(false);
        resetForm();
    };

  return (
    <div>
        <Formik initialValues={{
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            confirm_password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        >
            {({ isSubmitting }) => (
            <StyledForm>
                <Title>Register Your Account</Title>
                <FormikInput type="text" name="first_name" placeholder="First Name" />
                <FormikInput type="text" name="last_name" placeholder="Last Name" />
                <FormikInput type="email" name="email" placeholder="Email" />
                <FormikInput type="password" name="password" placeholder="Password" />
                <FormikInput type="password" name="confirm_password" placeholder="Repeat your password" />
                <Button type="submit" disabled={isSubmitting}>Submit</Button>
                <StyledLink to={LOGIN_PATH}>Sign In</StyledLink>
            </StyledForm>)}
        </Formik>
    </div>
  )
};

export default Register