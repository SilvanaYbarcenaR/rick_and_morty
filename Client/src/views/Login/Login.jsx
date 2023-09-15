import { useState } from "react";
import validation from "../../helpers/validation";
import styleLogin from "./Login.module.css";
import loginImage from "../../assets/rick-color.png";
import loginText from "../../assets/rick_morty.png";
import loginGif from "../../assets/rm-animation.gif";

const Login = ({login, errorLogin}) => {
    const [errorVisibility, setErrorVisibility] = useState(false)
    const [userData, setUserData] = useState({
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState({
        email: "",
        password: ""
    })

    const handleChange = (event) => {
        setErrorVisibility(false);
        setUserData({
            ...userData,
            [event.target.name]: event.target.value 
        });
        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
        setErrorVisibility(true);
    }

    const handleDisabled = () => {
        let disabled = false;
        for (let error in errors) {
          if (errors[error] === "") {
            disabled = false;
          } else {
            disabled = true;
          }
        }
        return disabled
    }

    return (
        <div className={styleLogin.loginContainer}>
            <img src={loginText} alt="Rick and Morty" className={styleLogin.loginText}/>
            <img src={loginGif} alt="Rick and Morty" className={styleLogin.loginGif}/>
            <img src={loginImage} alt="Rick and Morty" className={styleLogin.loginImage}/>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label><br/>
                <input name="email" id="email"  type="email" value={userData.email} onChange={handleChange} autoComplete="on"/>
                {errors.email && <p className={styleLogin.error}>{errors.email}</p>}
                <label htmlFor="password">Password</label><br/>
                <input name="password" id="password" type="password" value={userData.password} onChange={handleChange}/>
                {errors.password && <p className={styleLogin.error}>{errors.password}</p>}
                {(Object.values(errors).join("") === "" && errorVisibility) && <p className={styleLogin.error}>{errorLogin}</p>}
                <button disabled={handleDisabled()} type="submit">Log in</button>
                <p className={styleLogin.test}>Para testing: Email: silvana.ybarcena@gmail.com - Constraseña: sayr2207</p>
            </form>
        </div>
    )
}

export default Login;