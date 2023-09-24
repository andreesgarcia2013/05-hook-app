import { useEffect, useState } from "react"
import { Message } from "./Message";
import { useForm } from "../hooks/useForm";

export const SimpleFormWithHook = () => {

    const {formState, onInputChange, username, email, password, onResetForm}=useForm({
        username: '',
        email: '',
        password: ''
    });

    // const {username, email, password}=formState;

  return (
    <>
        <h1>Simple form with custom hook</h1>
        <hr />
        <input 
            type="text" 
            className="form-control"
            placeholder="Username"
            name="username"
            value={username}
            onChange={onInputChange}
        />
        <input 
            type="text" 
            className="form-control mt-2"
            placeholder="example@example.com"
            name="email"
            value={email}
            onChange={onInputChange}
        />
        <input 
            type="password" 
            className="form-control mt-2"
            placeholder="Contraseña"
            name="password"
            value={password}
            onChange={onInputChange}
        />
        {
            username==='light2' && <Message/>
        }

        <button className="btn btn-primary mt-2" onClick={onResetForm} >Borrar</button>
    </>
  )
}
