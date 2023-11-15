import './login.css';

function Login() {
  return (
    <div className='login'>
      <div className="loginWrapper">
        <div className="loginLeft">
            <h3 className='loginLogo'>My Social</h3>
            <span className='loginDesc'>Connect with your friends and the world around you on <b>My Social</b></span>
        </div>
        <div className="loginRight">
            <div className="loginBox">
                <input placeholder='Email' type="email" className="loginInput" />
                <input placeholder='Password' type="password" className="loginInput" />
                <button className="loginButton">Log In</button>
                <span className="loginForgot">Forgot Password?</span>
                <button className="loginRegisterButton">
                    Create a New Account
                </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Login
