import styled from "styled-components"
import { lightBorderColor } from "../consts/colors"
import { Link, useNavigate } from "react-router-dom";
import { CART_PATH, HOME_PATH, LOGIN_PATH } from "../routes/const";
import { FaShoppingCart, FaSignOutAlt, FaSignInAlt } from "react-icons/fa";
import EnhancedSearchBar from "../components/Button/SearchBar/EnhancedSearchBar";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { toast } from "react-hot-toast";
import CategoriesButton from "../components/CategoriesButton/CategoriesButton";



const Container = styled.div`
    padding: 6px 30px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${lightBorderColor};
`;

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const Logo = styled.div`
  font-weight: 700;
  font-size: 28px;
  text-decoration: none;
  text-transform: uppercase;
  color: inherit;
`;



const SignContainer = styled.div`
  display: flex;
`;

const Topbar = () => {

  const { isLoggedIn, handleLogOut } = useContext(UserContext);
  const navigate = useNavigate();

  const handleClickSign = () => {
    if(isLoggedIn) {
      handleLogOut();
      navigate(HOME_PATH);
      toast.success("Successfully logged out!");
    } else {
      navigate(LOGIN_PATH);
    }
  };

  return (
    <Container>
        <CategoriesButton>Categories</CategoriesButton>
        <Logo as={Link} to={HOME_PATH}>Shopyzee</Logo>
        <ItemContainer>
          <EnhancedSearchBar>Searchbar</EnhancedSearchBar>
          <Link to={CART_PATH}>
            <FaShoppingCart fontSize={20} />
          </Link>
          <SignContainer onClick={handleClickSign} >
            {isLoggedIn ? (
              <FaSignOutAlt fontSize={20} />
            ) : (<FaSignInAlt fontSize={20} />)}
          </SignContainer>
        </ItemContainer>
    </Container>
  )
}

export default Topbar