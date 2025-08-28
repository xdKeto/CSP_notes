import Photo from "./components/Photo";
import ProfileName from "./components/ProfileName";
import ProfileStats from "./components/ProfileStats";
import ProfileTheme from "./components/ProfileTheme";

function Hello({ name, profession }) {
  return (
    <>
      <div className="flex flex-col items-center justify-items-centerp p-2">
        <div class="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 bg-white rounded-lg ...">
          <Photo />
          <ProfileName name={name} profesi={profession} />
        </div>

        {/* conditionals */}
        {/* { name == 'Yesto' && <p className="text-white mt-8 font-semibold">Selamat datang di kelas React!</p>} */}
      </div>
    </>
  );
}

export default Hello;
