import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement"

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    const increment=useCallback(
      (size) => {
        setCounter(state=>state+size);
      },
      [],
    )

  return (
    <>
        <h1>useCallback hook: {counter}</h1>
        <hr />

        <ShowIncrement increment={increment}/>
    </>
  )
}
