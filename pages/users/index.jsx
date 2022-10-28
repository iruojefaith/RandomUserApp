import React, { useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../../utils/pagination";
import { BsTelephone } from "react-icons/bs";
import {MdOutlineEmail } from "react-icons/md";
import { Button, Container, InputGroup } from 'reactstrap';
import { ThemeContext, themes } from '../../Darkmode/themeContext';
import  '../../Darkmode/darkmode.css'

const Users = ({ apiResult }) => {
  const [postPerPage] = useState(10);
  const [currentPage, setcurrentPage] = useState(1);
   const [darkMode, setDarkMode] = React.useState(true);
  const indexOfLastPage = postPerPage * currentPage; // 10
  const indexOfFirstPage = indexOfLastPage - postPerPage; // 0
  const ModifiedUserstate = apiResult?.slice(
    indexOfFirstPage,
    indexOfLastPage
  ); // (0, 5)

  return (
    <>
      {/* <div className="user-title-text">
        <h2>List of all Users</h2>
      </div> */}
      <header className="App-header">

        <h3>
            RU
        </h3>
        <Link to={`/`}>Home</Link>
        <InputGroup>
          <ThemeContext.Consumer>
            {({ changeTheme }) => (
              <Button
                color="link"
                onClick={() => {
                  setDarkMode(!darkMode);
                  changeTheme(darkMode ? themes.light : themes.dark);
                }}
              >
                <i className={darkMode ? 'fas fa-sun' : 'fas fa-moon'}></i>
                <span className="d-lg-none d-md-block">Switch mode</span>
              </Button>
            )}
          </ThemeContext.Consumer>
        </InputGroup>
      </header>
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
            apiResult={apiResult} // to total amount of 100 result
            setcurrentPage={setcurrentPage} // Current Page
            postPerPage={postPerPage} // Post per page
          />
          <br />
          <br />
        </div>
      ) : (
        <div className="loader-container">
           <div className="loader"></div>
        </div>

      )}
    </>
  );
};

export default Users;
