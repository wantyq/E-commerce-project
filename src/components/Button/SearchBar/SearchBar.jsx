import styled from "styled-components"
import { searchBgColor } from "../../../consts/colors";
import { AiOutlineSearch } from "react-icons/ai";


const Input = styled.input`
  background-color: ${searchBgColor};
  border: none;
  outline: none;
  border-radius: 4px;
  padding: 10px 40px;
`;

const InputWrapper = styled.div`
  position: relative;

  svg {
    position: absolute;
    left: 12px;
    top: 6px;
    font-size: 22px;
  }
`;

const SearchBar = ({ value, setValue }) => {
  return (
    <InputWrapper>
      <AiOutlineSearch/>
      <Input placeholder="Search" value={value} onChange={(e) => setValue(e.target.value)} />
    </InputWrapper>
  )
}

export default SearchBar