import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user } = useAuth0();

  return (
    <div>
      <div className="a-box">
        <div className="img-container">
          <div className="img-inner">
            <div className="inner-skew">
              <img alt="Profile" src={user.picture} />
            </div>
          </div>
        </div>
        <div className="text-container">
          <h3>{user.name}</h3>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
            deleniti.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
