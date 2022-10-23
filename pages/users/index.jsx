import React, { useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../../utils/pagination";
import { BsTelephone } from "react-icons/bs";
import {MdOutlineEmail } from "react-icons/md"

const Users = ({ resultFromApi }) => {
  const [postPerPage] = useState(10);
  const [currentPage, setcurrentPage] = useState(1);

  const indexOfLastPage = postPerPage * currentPage; // 10
  const indexOfFirstPage = indexOfLastPage - postPerPage; // 0
  const ModifiedUserstate = resultFromApi?.slice(
    indexOfFirstPage,
    indexOfLastPage
  ); // (0, 5)

  return (
    <>
      <div className="user-title-text">
        <h2>List of all Users</h2>
      </div>
      {ModifiedUserstate.length !== 0 ? (
        <div>
          <div style={{ margin: "0 1em" }}>
            {ModifiedUserstate.map((data, index) => {
              return (
                <div key={index}>
                  <div className="profile-tile">
                    <div className="pic-tile">
                      <img src={data.picture.medium} alt="dp" />
                    </div>
                    <div className="info-tile">
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
          <Pagination
            currentPage={currentPage}
            resultFromApi={resultFromApi} // All the 100 Result
            setcurrentPage={setcurrentPage} // Current Page
            postPerPage={postPerPage} // Post per page
          />
          <br />
          <br />
        </div>
      ) : (
        <h1 style={{ textAlign: "center", margin: "1em 0" }}>Loading ....</h1>
      )}
    </>
  );
};

export default Users;
