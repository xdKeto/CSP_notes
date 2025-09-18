import { Link } from "react-router-dom";
import Layout from "./Layout";

const Dashboard = () => {
  const list = [
    { id: 1, nama: "Budi", email: "budi@gmail" },
    { id: 2, nama: "Tono", email: "tono@gmail" },
    { id: 3, nama: "Toni", email: "toni@gmail" },
  ];

  return (
    <div>
      {list.length > 0 ? (
        <ul>
          {list.map((item) => (
            <li key={item.id}>
              <Link to={`/dashboard/${item.id}`}>
                {" "}
                {item.nama}, {item.email}{" "}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
};

export default Dashboard;
