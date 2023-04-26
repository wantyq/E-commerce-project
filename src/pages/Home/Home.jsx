import React from 'react'
import styled from 'styled-components';
import { getUniqueArrayItems } from '../../utils/array';
import ProductCategory from './ProductCategory';
import { useProducts } from '../../hooks/products';

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: flex-start;
`;

const ProductContainer = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  justify-content: center;
`;



const Home = () => {
  const { data, isLoading, error } = useProducts();
  const products = data || [];

  const uniqCategories = getUniqueArrayItems(
    products.map((product) => product.type));

  const categories = uniqCategories.map(category => ({
    name: category, 
    image: products.find((product) => product.type === category).picUrl || "",}));

    if(isLoading) {
      return 'Kraunasi...'
    }

    if(error) {
      return error;
    } 

  return (
    <Container>
      <ProductContainer>
        {categories.map((category) => {
          return <ProductCategory 
          key={category.name} 
          name={category.name} 
          image={category.image[0]} />
        })}
      </ProductContainer>
    </Container>
  );
};

export default Home;