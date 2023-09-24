import { useRef } from "react";

export const FocusScreen = () => {

    const inputRef = useRef();

    const onClick = () => {
        inputRef.current.select();
    }

  return (
    <>
        <h1>FocusScreen</h1>
        <hr />
        <input
            ref={inputRef} 
            type="text"
            className="form-control"
            placeholder="Ingrese su nombre"
        />

        <button 
            className="btn btn-primary m-2"
            onClick={onClick}
        >
        Set Focus
        </button>
    </>
  )
}
