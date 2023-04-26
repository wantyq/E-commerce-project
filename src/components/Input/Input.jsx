import styled from "styled-components";
import { inputColor, inputBgColor } from "../../consts/colors";

const StyledInput = styled.input`
    font-size: 16px;
    border-radius: 4px;
    color: ${inputColor};
    background-color: ${inputBgColor};
    padding: 10px 14px;
    border: none;
    outline: none;
    width: 100%;
`;

const Input = (props) => {
  return (
    <StyledInput {...props} />
  )
}


export default Input;