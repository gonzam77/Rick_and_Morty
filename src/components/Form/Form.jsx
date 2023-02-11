import style from "./Form.module.css"
import React from "react";


function Form () {
    
    const [userData, setUserData] = React.useState({
        username:"",
        password:""
    })

    const [errors, setErrors] = React.useState({
        username:"",
        password:""
    })
    
    const handleInputChange = (event)=>{
        setUserData({
            ...userData,
            [event.target.name]:event.target.value 
        })
    }
    
    
    return (
        <div>
            <form >
                <label htmlFor="Username">Username</label>
                    <input value={userData.username} type="text" onChange={handleInputChange} name="username" className={style.username} />
                <label htmlFor="Password">Password</label>
                    <input value={userData.password} type="text" onChange={handleInputChange} name="password" className={style.password} />
                <br/>
                <button>Login</button>
            </form>
        </div>
  
  
  )}


export default Form;