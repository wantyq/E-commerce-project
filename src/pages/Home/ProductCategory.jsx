import styled from "styled-components";
import { useNavigate, generatePath } from "react-router";
import { PRODUCT_LIST_PATH } from "../../routes/const";

const ProductItem = styled.div`
  width: 15%;
  text-align: center;
  background-color: white;
  margin: 16px;
  border-radius: 4px;
  border: 1px solid #ededed;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;

  &:hover {
    cursor: pointer;
  }

  img {
    width: 100%;
  }

  div {
    display: flex;
    justify-content: space-between;
    padding: 16px;

    p {
      margin: 0;
      font-weight: 500;
    }
  }
`;

const ProductCategory = ({name, image}) => {
  const navigate = useNavigate();
  const productPath = generatePath(PRODUCT_LIST_PATH, {category: name});
  return (
  <ProductItem onClick={() => navigate(productPath)}>
    <div>
      <p>{name}</p>
      <span>13</span>
    </div>
    <img 
      src={image}
      alt={name}
    />
  </ProductItem>
  )
}

export default ProductCategory