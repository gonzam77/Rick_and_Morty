import style from "./Form.module.css"
import React from "react";
import validation from "./validation";


function Form({ login }) {
    const [userData, setUserData] = React.useState({
        username: "",
        password: ""
    })

    const [errors, setErrors] = React.useState({
        username: "",
        password: ""
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    };

    function handleInputChange(event) {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        });

        setErrors(
            validation({
                ...userData,
                [event.target.name]: event.target.value,
            })
        );
    }

    return (
        <div className={style.container}>
            <form className={style.form} onSubmit={handleSubmit}>
                <label>Username</label>
                <input value={userData.username} type="text" onChange={handleInputChange} name="username" className={errors.name && style.warning} />
                {errors.username !== "" && <p className={style.danger}>{errors.username}</p>}
                <label>Password</label>
                <input value={userData.password} type="password" onChange={handleInputChange} name="password" className={errors.name && style.warning} />
                {errors.password !== "" && <p className={style.danger}>{errors.password}</p>}
                <br />
                <button className={style.login} >Login</button>
            </form>
        </div>
    )
}


export default Form;