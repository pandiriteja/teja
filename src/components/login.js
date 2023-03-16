
import "../styles/login.css"
const Login=()=>{
    return(
<div className="login-container">
    <div className="login-sixty">
    <div className="login-sign">
<div className="login-address">
    <ul>
        <li className="login-letter">Login</li>
        <li className="login-two">Doesn't have an account yet?<span>Signup?</span></li>
    </ul>
    <ul>
        <li className="login-letter">Email Address</li>
        <li><input type="text" placeholder="you@example.com"/></li>
    </ul>
    <ul className="login-ten">
        <li className="login-pass"><p className="login-letter">Password</p><p className="loginfour">Forgot Password?</p></li>
        <li><input type="text" placeholder="6 character or more"/></li>
       
    </ul>
    <ul className="login-len">
    <li >Remember me</li>
        <li><button className="login-seven">Login</button></li>
    </ul>
   
   
</div>
<div className="login-image">
    <img src="https://res.cloudinary.com/cliqtick/image/upload/v1678959844/students/test_rwctqg.jpg"/>

</div>
</div>
</div>
</div>
    )
}
export default Login;