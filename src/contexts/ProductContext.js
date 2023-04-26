import { createContext, useState, useEffect } from "react";
import axios from "axios";

const ProductContext = createContext();

const transformData = (products) => {
  return products.map((product) => ({
    ...product, picUrl: JSON.parse(product.picUrl), 
    size: JSON.parse(product.size), }));
};

const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
      setIsLoading(true);
      axios
        .get("https://testapi.io/api/lukasnvc/resource/NewEshop")
        .then((response) => {
          const transformedData = transformData(response.data.data);
          setProducts(transformedData);
          setIsLoading(false);
      })
      .catch((error) => {
        setError("Nepavyko gauti produktų");
        console.error("Products:", error);
      })
      .finally(() => {
        setIsLoading(false);
      })
    }, []);

  return (
    <ProductContext.Provider value={{ products, error, isLoading }}>
      {children}
    </ProductContext.Provider>
  )
}

export { ProductContext, ProductProvider };
