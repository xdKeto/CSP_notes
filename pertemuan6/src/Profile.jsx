import { useState } from "react";

const Profile = () => {
  const [profile, setProfile] = useState({ nama: "Yesto", email: "yesto@gmail" });

  return (
    <>
      <div>
        <h1>Profile</h1>
        <Biodata profile={profile}>
          <Email email={profile.email} />
        </Biodata>
      </div>
    </>
  );
};

function Biodata({ profile, children }) {
  return (
    <>
      <p>Nama: {profile.nama}</p>
      {children}
    </>
  );
}

function Email({ email }) {
  return <p>Email: {email}</p>;
}

export default Profile;
