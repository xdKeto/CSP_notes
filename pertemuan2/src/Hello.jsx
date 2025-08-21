import Photo from "./components/Photo";

function Hello() {
  const name = "Yesto";
  return (
    <>
      <div className="bg-blue-950 min-h-screen flex flex-col items-center justify-center justify-items-centerp p-16">
        <h1 className="text-9xl text-white">Hello {name}!</h1>
        <p className="text-xl text-white text-center mt-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid deserunt in animi sapiente! Omnis esse quo pariatur officiis porro rem nostrum laudantium aperiam eos assumenda est, aliquam soluta nisi voluptatum.
        </p>

        {/* conditionals */}
        { name == 'Yesto' && <p className="text-white mt-8 font-semibold">Selamat datang di kelas React!</p>}

        {/* image */}
        <Photo></Photo>
      </div>
    </>
  );
}

export default Hello;
