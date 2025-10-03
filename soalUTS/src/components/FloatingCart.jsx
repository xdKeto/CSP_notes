import { useState } from "react";
import { useCart } from "../context/CartContext";

export default function FloatingCart() {
  const { cart } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className="fixed bottom-8 right-8 bg-blue-700 text-white rounded-full shadow-lg p-4 z-50 flex items-center" onClick={() => setOpen((v) => !v)}>
        🛒
        <span className="ml-2 bg-red-500 rounded-full px-2 text-xs">{cart.length}</span>
      </button>
      {open && (
        <div className="fixed bottom-24 right-8 bg-white text-black rounded-xl shadow-2xl p-6 w-80 z-50">
          <h2 className="font-bold text-lg mb-2">Cart</h2>
          {cart.length === 0 ? (
            <p className="text-gray-500">Cart is empty</p>
          ) : (
            <ul>
              {cart.map((item) => (
                <div>
                  <li key={item.id} className="flex justify-between items-center mb-2 font-normal">
                    <span>{item.title}</span>
                    <span>x{item.qty}</span>
                  </li>
                  <hr />
                </div>
              ))}
            </ul>
          )}
        </div>
      )}
    </>
  );
}
