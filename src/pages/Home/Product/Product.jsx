import { useParams } from "react-router"
import { useProducts } from "../../../hooks/products";
import styled from "styled-components";
import { screenSize } from "../../../consts/mediaQueries";
import { euroSymbol } from "../../../consts/currency";
import Button from "../../../components/Button/Button";
import { CartContext } from "../../../contexts/CartContext";
import { useContext } from "react";
import { toast } from "react-hot-toast";

const Container = styled.div`
  max-width: ${screenSize.tablet};
  margin: 40px auto;
  display: flex;
`;

const PhotoSide = styled.div`
    width: 60%;
    margin-right: 48px;
    border: 1px solid #ededed;
    border-radius: 4px;

    &:hover {
        box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
        rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;

const InfoSide = styled.div`
  width: 40%;  
`;

const Title = styled.p`
    font-size: 24px;
    margin-bottom: 8px;
`;

const Description = styled.p`
    font-size: 16px;
    font-weight: 300;
    margin-bottom: 16px;
`;

const Price = styled.p`
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 8px;
`;

const FullWidthButton = styled(Button)`
    width: 100%;
`;

const Product = () => {
    const {productId} = useParams();
    const { handleAddToCart } = useContext(CartContext);
    const { data, isLoading } = useProducts();
    const products = data || [];

    const product = products.find(product => product.id === Number(productId));

    const handleAddProduct = () => {
        handleAddToCart(product);
        toast.success("Added to the cart");
    }

    if(isLoading) {
        return <div>Kraunasi...</div>;
    }
    
    if(!product) {
        return <div>Produkto nėra</div>
    }


    return (
        <Container>
            <PhotoSide>
                <img src={product.picUrl[0]} alt={product.name} />
            </PhotoSide>
            <InfoSide>
                <Title>
                    {product.name}
                </Title>
                <Price>{product.price} {euroSymbol}</Price>
                <Description>
                    {product.description}
                </Description>
                <FullWidthButton onClick={handleAddProduct}>Add to Cart</FullWidthButton>
            </InfoSide>
        </Container>
    )
}

export default Product