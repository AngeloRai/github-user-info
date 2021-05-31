import React from "react";
import { Link } from "react-router-dom";

import "./UserInfo.css";

const UserInfo = ({ user, repositories, followers }) => {
  return (
    <div className="d-flex card-color">
      <div className="card bg-dark text-light" style={{ width: "18rem" }}>
        <p>{user.name}</p>
        <div className="d-flex justify-content-center">
          {!user.avatar_url ? (
            " "
          ) : (
            <img
              className=" img-circle"
              src={user.avatar_url}
              alt={user.avatar_url}
            />
          )}
        </div>

        <p>{user.name}</p>
        <div className="card-body">
          {user.email ? (
            <h5 className="card-title">{user.email}</h5>
          ) : (
            <p>useremail@gmail.com</p>
          )}
          <div className="d-flex justify-content-between">
            <p className="card-text">
              <h3>{followers.length}</h3> Followers
            </p>

            {/* <p className="card-text">
                <h3>{following.length}</h3> Following
              </p> */}
            <Link to="user-repos">
              <p className="card-text">
                <h3>{repositories.length}</h3> Repos
              </p>
            </Link>
          </div>
        </div>
        {user.bio ? (
          <div className="card-body">{user.bio}</div>
        ) : user.length ? (
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in. Contrary to popular belief, Lorem Ipsum is not
            simply random text. It has roots in a piece of classical Latin
            literature from 45 BC, making it over 2000 years old.
          </p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default UserInfo;
