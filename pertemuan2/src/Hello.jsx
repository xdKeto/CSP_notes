import Photo from "./components/Photo";
import ProfileName from "./components/ProfileName";
import ProfileStats from "./components/ProfileStats";

function Hello() {
  return (
    <>
      <div className="bg-blue-950 min-h-screen flex flex-col items-center  justify-items-centerp p-16">
        <Photo></Photo>
        <ProfileName />
        <ProfileStats />

        {/* conditionals */}
        {/* { name == 'Yesto' && <p className="text-white mt-8 font-semibold">Selamat datang di kelas React!</p>} */}
      </div>
    </>
  );
}

export default Hello;
