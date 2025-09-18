import { Link, useParams } from "react-router-dom";

const DashboardItems = () => {
  const { id } = useParams();
  const dashboardItems = [
    { id: 1, nama: "Budi", email: "budi@gmail" },
    { id: 2, nama: "Tono", email: "tono@gmail" },
    { id: 3, nama: "Toni", email: "toni@gmail" },
  ];

  const item = dashboardItems.find((item) => item.id == id);

  if (!item) {
    return (
      <div>
        <h1>User Not Found</h1>
        <Link to="/dashboard">Back</Link>
      </div>
    );
  }

  return (
    <>
      <h1>Detail User</h1>
      <div>
        <p>Nama: {item.nama}</p>
        <p>Email: {item.email}</p>
      </div>
      <Link to={"/dashboard"}>Back</Link>
    </>
  );
};

export default DashboardItems;
