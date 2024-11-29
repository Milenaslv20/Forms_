import Hours from "../components/Hours"

import notebook_img from "../assets/svg/notebook.svg"
import buble from "../assets/svg/Vector (3).png"
import bubble2 from "../assets/svg/bublle2.svg"
import { Link } from "react-router-dom"

function Welcome() {
  return (
    <div className="flex flex-row">
        <div className="w-3/5">
            <img src={bubble2} className="absolute left-2/4 -top-12 size-1/5"/>
            <img src={notebook_img} className="size-9/12 mx-36 my-8"/>
            <span className="text-8xl font-bold text-left absolute left-28 top-3/4">{Hours()}</span>
            <img src={buble} className="absolute bottom-0 size-24 w-auto"/>
        </div>

        <div className="w-0.5 h-screen bg-black"></div>

        <div className="right-side">
            <span className="text-8xl font-bold text-left inset-x-50px relative top-56 left-40">Welcome to forms</span>
            <Link to="/login"><button className="btn absolute top-2/4 left-2/3">Login</button></Link>
            <button className="btn absolute top-2/4 left-3/4">Sign Up</button>
        </div>
    </div>
  )
}

export default Welcome