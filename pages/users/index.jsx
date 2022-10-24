import React, { useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../../utils/pagination";
import { BsTelephone } from "react-icons/bs";
import {MdOutlineEmail } from "react-icons/md"

const Users = ({ apiResult }) => {
  const [postPerPage] = useState(10);
  const [currentPage, setcurrentPage] = useState(1);

  const indexOfLastPage = postPerPage * currentPage; // 10
  const indexOfFirstPage = indexOfLastPage - postPerPage; // 0
  const ModifiedUserstate = apiResult?.slice(
    indexOfFirstPage,
    indexOfLastPage
  ); // (0, 5)

  return (
    <>
      <div className="user-title-text">
        <h2>List of all Users</h2>
      </div>
      {ModifiedUserstate.length !== 0 ? (
        <div >
          <div style={{ margin: "0 1em" }}>
          <div className="user-page-container">
            {ModifiedUserstate.map((data, index) => {
              return (
                <div key={index} >
                  <div className="profile-title">
                    <div className="pic-title">
                      <img src={data.picture.medium} alt="dp" />
                    </div>
                    <div className="info-title">
                      <h4>
                        {data.name.last} {data.name.first}
                      </h4>
                      <div className="info-box" key={index}>
                        <p> <MdOutlineEmail /> {data.email}</p>
                        <p> <BsTelephone />   {data.cell}</p>
                        <Link to={`/users/${data.login.uuid}`}>
                          View profile
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            </div>
          </div>
          <Pagination
            currentPage={currentPage}
            apiResult={apiResult} // to total amount of 100 result from
            setcurrentPage={setcurrentPage} // Current Page
            postPerPage={postPerPage} // Post per page
          />
          <br />
          <br />
        </div>
      ) : (
        <div className="loader"></div>
      )}
    </>
  );
};

export default Users;
