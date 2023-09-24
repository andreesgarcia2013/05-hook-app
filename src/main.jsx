import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import { Memorize } from './06-memos/Memorize'
// import { MemorizeHook } from './06-memos/MemorizeHook'
// import { CallbackHook } from './06-memos/CallbackHook'
// import { Padre } from './07-tarea-memo/Padre'
// import { TodoApp } from './08-useReducer/TodoApp'
// import { Layout } from './05-useLayoutEffect/Layout'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { MultiplecustomHooks } from './03-example/MultiplecustomHooks'
// import { SimpleFormWithHook } from './02-useEffect/SimpleFormWithCustomHook'
// import { SimpleForm } from './02-useEffect/SimpleForm'
// import { HooksApp } from './HooksApp'
// import { CounterApp } from './01-useState/CounterApp'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
// import './08-useReducer/intro-reducer'
import { MainApp } from './09-useContext/MainApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter>
    <MainApp/>
  </BrowserRouter>
  // </React.StrictMode>
)
