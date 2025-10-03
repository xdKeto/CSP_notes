import axios from "axios";
import Loading from "./components/Loading";
import { useEffect, useState } from "react";
import Card from "./components/Card";
import Modal from "./components/Modal";
import FloatingCart from "./components/FloatingCart";
import { CartProvider } from "./context/CartContext";

export default function Navbar() {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [selectedProduct, setSelected] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        const data = response.data;

        setProducts(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  const openModal = (post) => {
    setSelected(post);
  };
  const closeModal = () => {
    setSelected(null);
  };

  return (
    <CartProvider>
      <div className="bg-blue-950 min-h-screen flex flex-col justify-center items-center text-white font-bold">
        <div className="grid grid-cols-3 gap-6 max-w-7xl mx-auto p-4 lg:mt-24 mt-12">
          {products.map((product) => (
            <Card key={product.id} product={product} openModal={openModal} />
          ))}
        </div>
        {selectedProduct && <Modal product={selectedProduct} onClose={closeModal} />}
        <FloatingCart />
      </div>
    </CartProvider>
  );
}
