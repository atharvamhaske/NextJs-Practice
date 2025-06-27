import { NextRequest, NextResponse } from "next/server"
import  { PrismaClient } from "@prisma/"

export async function POST (req: NextRequest) {

    const data = await req.json()
    return NextResponse.json({
        message: "you are signed in"
    })
}


const data = {
    username: "atharva",
    password: "1234"
}

const { username, password} = data; // sane as username = data.username and password = data.password

await PrismaClient.user.create({
    data : { username, password}
    //another way to do same is like  data : { usename: data.username, password: data.password }
})


