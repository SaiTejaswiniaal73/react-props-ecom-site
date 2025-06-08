import React from "react";
import { FaPhone, FaMapMarkerAlt, FaBuilding } from "react-icons/fa";


// import { MdEmail } from "react-icons/md";

import "./Singleusers.css"
const UserSingle = ({ singleU }) => {
  const user = singleU;

  return (
    <div className="user-card">
      <img className="user-img" src={user.image} alt={user.firstName} />
      <div className="user-name">{user.firstName} {user.lastName}</div>
      <div className="user-info">
        <FaPhone />
        <span>{user.phone}</span>
      </div>
      <div className="user-info">
        <FaMapMarkerAlt />
        <span>{user.address.address}, {user.address.city}, {user.address.country}</span>
      </div>
      <div className="user-info">
        <FaBuilding />
        <span>{user.company.name}</span>
      </div>
    </div>
  );
};

export default UserSingle;
