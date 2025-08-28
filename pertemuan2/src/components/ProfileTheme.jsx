import Header from "./Header";
import Hello from "../Hello";

export default function ProfileTheme() {
  const array = [
    {
      name: "Budi Capslock",
      profesi: "Tukang AC",
    },
    {
      name: "Adi Mousepad",
      profesi: "Programmer",
    },
    {
      name: "Bambang Proyektor",
      profesi: "Satpam",
    },
    {
      name: "Asep Knalpot",
      profesi: "Desainer",
    },
  ];

  const cards = array.map((item, index) => {
    return <Hello key={index} name={item.name} profession={item.profesi}/>
  })

  return <div className="bg-blue-950 ">{cards}</div>;
}
