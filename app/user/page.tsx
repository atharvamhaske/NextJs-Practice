import axios from "axios"

export default async function User() {
    const resp = await axios.get("http://localhost:3000/api/v1/user/details")
    const data = resp.data

    return (
        <div>
            User Page : <br />
            {data.name}
        </div>
    )
}