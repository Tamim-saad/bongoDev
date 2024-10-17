import { useEffect, useState } from "react";
import { ProductServices } from "../services";
// import axios from "axios";

export const useProduct = () => {
  const [products, setProducts] = useState([]);

  const loadProducts = async () => {
    try {
      const products = await ProductServices.getProducts();
      setProducts(products);
    } catch (error) {
      alert("failed to get products");
      console.error(error);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return { products };
};

// export function useProduct() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/api/products")
//       .then((res) => {
//         setProducts(res.data);
//       })
//       .catch((error) => {
//         console.error(error);
//       });

//     // fetch('http://localhost:5000/api/products')
//     //   .then((res) => res.json())
//     //   .then((data) => setProducts(data));
//   }, []);
//   return { products };
// }
