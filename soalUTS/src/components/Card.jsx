import { useCart } from "../context/CartContext";

const Card = ({ product, openModal }) => {
  const { addToCart } = useCart();

  return (
    <div className="max-w-xl w-full bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 flex flex-col">
      <div className="relative bg-gray-500 p-8 flex justify-center items-center">
        <img src={product.image} alt="" className="transform drop-shadow-2xl h-[160px] object-contain" />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex-grow">
          <h2 className="text-xl font-bold text-gray-800 mb-2">{product.title}</h2>
          <span className="space-x-2 mb-4 inline-block border border-gray-300 rounded-md px-2 py-1 text-xs font-semibold text-gray-600">{product.category}</span>
        </div>

        <div className="mt-6 flex flex-row justify-between items-center gap-6">
          <div>
            <p className="text-xs text-gray-500 uppercase font-semibold">Harga</p>
            <p className="text-xl font-bold text-gray-900">${product.price}</p>
          </div>
          <div className="flex space-x-4 flex-col gap-4">
            <button onClick={() => openModal(product)} className="bg-blue-950 text-white font-semibold py-2 px-4 rounded-lg shadow-md text-lg">
              Lihat Detail
            </button>
            <button onClick={() => addToCart(product)} className="bg-blue-950 text-white font-semibold py-2 px-4 rounded-lg shadow-md text-lg">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
