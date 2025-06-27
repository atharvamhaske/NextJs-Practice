import axios from "axios"
import { useState } from "react"

export default function SignIn() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
     return (
    

        <div className="w-screen h-screen flex justify-center items-center">
            <div className="border p-2">
                <input type="text" name="" id="" placeholder="username" onChange={(e) => {
                    setUsername(e.target.defaultValue)
                }}  />
                <input type="password" name="" id="" placeholder="password"  onChange={(e) => {
                    setPassword(e.target.value)
                }}/>
                <button onClick={() => {
                   axios.post("http://localhost:3000/api/v1/signin", {
                    username,
                    password
                   } )
                }}>Sign In</button>
            </div>
        </div>
     )
}