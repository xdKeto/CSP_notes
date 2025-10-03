const Modal = ({ product, onClose }) => {
  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center bg-black/80">
      <div className="max-w-5xl w-full bg-white rounded-2xl shadow-lg overflow-hidden flex flex-row">
        <div className="relative bg-gray-500 p-8 flex justify-center items-center w-1/2 min-h-[24rem]">
          <img src={product.image} alt="" className="transform drop-shadow-2xl object-contain h-96" />
        </div>

        <div className="p-8 flex flex-col w-1/2">
          <div className="flex-grow">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{product.title}</h2>
            <span className="space-x-2 mb-4 inline-block border border-gray-300 rounded-md px-2 py-1 text-xs font-semibold text-gray-600">{product.category}</span>
            <p className="text-gray-600 leading-relaxed mb-4">{product.description}</p>
            <p className="text-black font-semibold text-sm leading-relaxed">Rating Pelanggan: {product.rating?.rate}</p>
          </div>

          <div className="mt-6 flex flex-row justify-between items-center gap-6">
            <div>
              <p className="text-xs text-gray-500 uppercase font-semibold">Price</p>
              <p className="text-xl font-bold text-gray-900">${product.price}</p>
            </div>
            <button onClick={onClose} className="bg-blue-950 text-white font-semibold py-2 px-4 rounded-lg shadow-md">Kembali</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;


