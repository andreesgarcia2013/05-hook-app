import { useContext } from "react"
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {

  const {user, setUser} = useContext(UserContext);

  

  return (
    <>
      <div>LoginPage</div>
      <pre>{JSON.stringify(user)}</pre>

      <button className="btn btn-primary" onClick={()=>setUser({id:123, name:'Jose', email:'andres@gmail.com'})}>Establecer Usuario</button>
    </>
  )
}
