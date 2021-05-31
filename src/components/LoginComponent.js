  
import React, { useState } from "react";
import UserInfo from "./UserInfo";
import UserRepos from "./UserRepos"
import axios from 'axios'

const Login = () => {
  const [user, setUser] = useState({});
  const [username, setUsername] = useState("");
  const [repositories, setRepositories] = useState([]);
  const [followers, setFollowers] = useState([])
  const [following, setFollowing] = useState([])

  const onChangeHandler = e => {
    setUsername(e.target.value);
  };

  const submitHandler = async e => {
    e.preventDefault();

    const profile = await axios.get(`https://api.github.com/users/${username}`);
    
    const repositories = await axios.get(profile.data.repos_url);
    console.log("repositories:", repositories.data);

    const followers = await axios.get(profile.data.followers_url);
    // const following = await axios.get(profile.data.following_url);
    
    
    // console.log(following.data);


    if (profile.data) {
      setUser(profile.data);
      setRepositories(repositories.data);
      setFollowers(followers.data)
      // setFollowing(following.data)
    }
  };
  return (
    <>
      <div style={{ padding: 20 }}>
        <div className="ui search">
          <div className="ui icon input">
            <i className="search icon"></i>
            <input
              className="prompt"
              placeholder="search username here..."
              type="text"
              value={username}
              onChange={onChangeHandler}
            />
          </div>

          <button
            className="ui primary button"
            type="submit"
            onClick={submitHandler}
          >
            <i className="github icon"></i>
            Search
          </button>
          <UserInfo user={user} repositories={repositories} followers={followers}  />
          <UserRepos repositories={repositories}/>
        </div>
      </div>
    </>
  );
};
export default Login;