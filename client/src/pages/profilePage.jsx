import React, { useContext } from "react";
import { UserContext } from "../context/userContext";

const ProfilePage = () => {
  const { userInfo } = useContext(UserContext);
  const info = userInfo?.info
  console.log(info?.name)
  return (
    <div>
      <h1>Profile Page</h1>
      <h1>{info?.name}</h1>
      {/* Additional profile information can be displayed here */}
    </div>
  );
};

export default ProfilePage;
