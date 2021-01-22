import React from "react";
import Google_login from "./Google-login"
import Facebook_login from "./Facebook-login"

const Login = (props) =>{
    const {email,
      setEmail,
      password,
      setPassword,
      handleLogin,
      handleSignup,
      hasAccount,
      setHasAccount,
      emailError,
      passwordError,
    } = props;
    return(
        <section className="login">
         <section className="vector-img">
           <img href="../public/photo"></img>
         </section>

            <div className="loginContainer">
                <Google_login />
                <Facebook_login />
                <label>Username</label>
                <input type="text" autoFocus required value={email} onChange={(e) => setEmail(e.target.value)} ></input>
                <p className="errorMsg">{emailError}</p>
                <label>Password</label>
                <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <p className="errorMsg">{passwordError}</p>
                <div className="btnContainer">
                    {hasAccount ? (
                        <>
                         <button onClick={handleLogin}>Sign in</button>
                         <p>Don't have an account ? <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span></p>
                        </>
                    ) : (
                        <>
                         <button onClick={handleSignup}>Sign up</button>
                         <p>have an account ? <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span></p>
                        </>
                    )}
                </div>
            </div>
        </section>
    ); 
}


export default Login;