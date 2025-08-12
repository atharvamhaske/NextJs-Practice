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
    const token = (await cookieStore).get("token")?.value;
    if(!token) return null;

    const payload = verifyToken(token);
    if(!payload) return null;

    const user = await prisma.user.findUnique({
        where: { id: payload.sub },
        select: { id: true, email: true, role: true}
    });
    return user;
}

export async function requireAuth(req: NextRequest) {
    const user = await getUserFromReq
    if(!user) {
        return {
            ok: false as const,
            status: 401,
            error: "Unauthorized" as const
        }
        return {
            ok: true as const, user
        };
    }
};

export function requireRole(userRole: Role, allowed: Role[]) {
    return allowed.includes(userRole);
}
