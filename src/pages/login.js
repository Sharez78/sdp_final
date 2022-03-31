import React from 'react';
import {Link} from 'react-router-dom';
function Login() {
  return (
    <div >
   <div class="login-form">
  <form>
    <h1>Login</h1>
    <div class="content">
      <div class="input-field">
        <input type="email" placeholder="Email" autocomplete="nope"/>
      </div>
      <div class="input-field">
        <input type="password" placeholder="Password" autocomplete="new-password"/>
      </div>
      <Link to="/register">Register</Link>
    </div>
    <div class="action">
      <button>Sign in</button>
    </div>
  </form>
</div>
    </div>
  );
}

export default Login;
