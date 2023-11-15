import './register.css';

function Register() {
    return (
        <div className='login'>
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className='loginLogo'>My Social</h3>
                    <span className='loginDesc'>Connect with your friends and the world around you on <b>My Social</b></span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder='Username' type="text" className="loginInput" />
                        <input placeholder='Email' type="email" className="loginInput" />
                        <input placeholder='Password' type="password" className="loginInput" />
                        <input placeholder='Confirm Password' type="password" className="loginInput" />
                        <button className="loginButton">Create Account</button>
                        <button className="loginRegisterButton">
                            Log into Account
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
