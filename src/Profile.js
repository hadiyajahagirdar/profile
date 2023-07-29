// Profile.js

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const user = useSelector((state) => state.user);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    if (user && user.id) {
      fetch(`https://dummyjson.com/users/${user.id}`)
        .then((res) => res.json())
        .then((data) => {
          setUserInfo(data);
        })
        .catch((error) => {
          console.error('Error fetching user data:', error);
        });
    }
  }, [user]);

  return (
    <div>
      <h1>Profile Page</h1>
      {userInfo ? (
        <div>
          <p>Username: {userInfo.username}</p>
          <p>Email: {userInfo.email}</p>
          {/* Display other user information as needed */}
        </div>
      ) : (
        <p>Loading user information...</p>
      )}
    </div>
  );
};

export default Profile;
