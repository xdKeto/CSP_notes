import logo from "./assets/react.svg";

function App() {

  return (
    <div className="bg-blue-950 min-h-screen flex flex-col justify-center items-center text-white p-8">
      <div className="bg-white rounded-lg shadow-lg p-8 text-blue-900 max-w-md w-full flex flex-col items-center mt-16">
        <img src={logo} alt="Company Logo" className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-blue-500" />
        <h1 className="text-3xl font-bold mb-2">BlueWave Apparel</h1>
        <h2 className="text-xl font-semibold mb-4">Clothing Company Profile</h2>
        <p className="mb-2">
          <span className="font-semibold">Founded:</span> 2010
        </p>
        <p className="mb-2">
          <span className="font-semibold">Location:</span> Jakarta, Indonesia
        </p>
        <p className="mb-8">
          <span className="font-semibold">Specialty:</span> Urban & Casual Wear
        </p>
        <p className="mb-4">
          <span className="font-semibold">About Us:</span> BlueWave Apparel is dedicated to providing high-quality, stylish, and comfortable clothing for all ages. Our mission is to inspire confidence and creativity through fashion.
        </p>
        <a href="https://bluewave-apparel.example.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline font-semibold">
          Visit Our Website
        </a>
      </div>
    </div>
  );
}

export default App;
