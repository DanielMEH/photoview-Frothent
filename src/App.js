import {useContext} from 'react'
import { Header } from './components/Header'
import{ context } from './context/PostContext'
import {BrowserRouter} from "react-router-dom"
import { IndexRouter }  from "./router/IndexRouter"

export default function App() {

  const data = useContext(context)
  console.log("data", data)

  return (
   <>
    <BrowserRouter>
     <IndexRouter/>
    </BrowserRouter>


   
   </>
  )
}
