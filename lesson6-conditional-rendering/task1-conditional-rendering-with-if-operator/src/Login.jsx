import React from 'react';

const Login = prop => {
  return (
    <button className="login btn" onClick={prop.onLogin}>
      Login
    </button>
  );
};

export default Login;
