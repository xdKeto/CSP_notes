export default function ProfileName() {
  const name = "Abdul Batagor";
  const profesi = "Tambal Ban"
  return (
    <div className="flex flex-col items-center">
        <h1 className="text-7xl text-white  ">{name}</h1>;
        <p className="text-3xl text-white">{profesi}</p>
    </div>
  )
}
