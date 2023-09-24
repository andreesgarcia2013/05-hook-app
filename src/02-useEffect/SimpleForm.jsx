import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'light',
        email: 'andres@gmail.com'
    });

    const {username, email}=formState;

    const onInputChange=({target})=>{
        const {name, value}=target;
        setFormState({
            ...formState,
            [name]:value
        })
    }

    useEffect(() => {
    //   console.log('Dispara formstate');
    }, [formState]);

    useEffect(() => {
    //   console.log('Dispara email');
    }, [email]);

    useEffect(() => {
    //   console.log('Dispara ');
    }, []);

  return (
    <>
        <h1>Simple form</h1>
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
        {
            username==='light2' && <Message/>
        }
    </>
  )
}
