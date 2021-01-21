import React from 'react';

const Logout = prop => {
  return (
    <button className="logout btn" onClick={prop.onLogout}>
      Logout
    </button>
  );
};

export default Logout;
