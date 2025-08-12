import { cookies, headers } from "next/headers";
import jwt from "jsonwebtoken"
import { NextRequest } from "next/server";
import { prisma } from "./prisma";
import { Role } from "../generated/prisma";

const JWT_SECRET = process.env.JWT_SECRET || 'fallback-secret'

export type JWTPayload = {
    sub: string;
    email: string;
    role: Role;
    iat?: number
    exp?: number
}

export function verifyToken(token: string): JWTPayload | null {
    try {
        const decoded = jwt.verify(token, JWT_SECRET) as unknown as JWTPayload
        return decoded
    } catch (error) {
        return null
    }
}


export async function getUserFromReq(req: NextRequest) {
    const cookieStore = cookies();
}
