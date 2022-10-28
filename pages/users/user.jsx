import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { BsTelephone } from "react-icons/bs";
import {MdOutlineEmail } from "react-icons/md";

const Users = ({ apiResult }) => {
  let { id } = useParams();

  const NewFilteredArray = apiResult.find((val) => val.login.uuid === id);

  return (
    <>
      {NewFilteredArray ? (
        <>
          <br />
          <div className="user-title-text">
            <Link to={-1}>Back</Link>
            <br />
            <h2> {NewFilteredArray.name.last}'s Profile</h2>
            <br />
          </div>
          <div style={{ margin: "0 1em" }}>
            <div>
              <div className="user-profile-title">
                <div className="user-pic-tile">
                  <img
                    src={NewFilteredArray.picture.large}
                    alt="dp"
                  />
                </div>
                <div className="info-tile">

                  <div className="info-box box-styling">
                  <h4>
                    {NewFilteredArray.name.last} {NewFilteredArray.name.first}
                  </h4>
                    <p> <MdOutlineEmail /> {NewFilteredArray.email}</p>
                    <p> <BsTelephone />  {NewFilteredArray.cell}</p>
                    <a href={`tel:${NewFilteredArray.cell}`}>Contact Me</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="loader"></div>
      )}
    </>
  );
};

export default Users;
