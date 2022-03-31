
function Register() {
    return (
      <div >
     <div class="login-form">
    <form action="https://google.com">
      <h1>Register</h1>
      <div class="content">
        <div class="input-field">
          <input type="email" placeholder="Email" autocomplete="nope"/>
        </div>
        <div class="input-field">
          <input type="password" placeholder="Password" autocomplete="new-password"/>
          <input type="password" placeholder=" Confirm Password" autocomplete="new-password"/>
        </div>
      </div>
      <div class="action">
        <button>Register</button>
      </div>
    </form>
  </div>
      </div>
    );
  }
  
  export default Register;
  