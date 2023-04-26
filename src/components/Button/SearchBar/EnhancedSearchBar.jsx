import { Popover } from "react-tiny-popover";
import { useState } from "react";
import SearchBar from "./SearchBar";
import { useProducts } from "../../../hooks/products";
import styled from "styled-components";
import { lightBorderColor } from "../../../consts/colors";
import { generatePath, Link } from "react-router-dom";
import { PRODUCT_PATH } from "../../../routes/const";

const EnhancedSearchBar = () => {
    const [search, setSearch] = useState("");
    const {data} = useProducts();
    const products = (data || []);

    const filteredItems = products.filter((product) => product.name.toLowerCase().includes(search.toLocaleLowerCase)).slice(0, 4);

    return (
        <Popover 
            onClickOutside={() => setSearch("")}
            isOpen={search} 
            positions={["top", "bottom", "left", "right"]}
            content={
                <Container>{filteredItems.length 
                    ? (filteredItems.map((product) => (
                        <p key={product.id} onClick={() => setSearch("")}>
                            <Link to={generatePath(PRODUCT_PATH, {
                                category: product.type,
                                productId: product.id,
                            })}
                            >
                                {product.name}
                            </Link>
                        </p>
                    ))
                ) : (
                    <p>Item not found.</p>
                )}
                </Container>
            }>
                <div>
                    <SearchBar value={search} setValue={setSearch} />
                </div>
        </Popover>
    );
};

export default EnhancedSearchBar;

const Container = styled.div`
    height: 140px;
    background-color: #ffffff;
    border: 1px solid ${lightBorderColor};
    border-radius: 4px;
    width: 205px;

    p {
        padding-top: 8px;
        padding-top: 8px;
        font-size: 13px;
    }
`;