import { Prisma } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

export function prismaErrorToHttp(err: any) : { status: number; message: string} {
    if ( err instanceof PrismaClientKnownRequestError ) {
        if (err.code === "P2002") return { status: 409, message: "Unique constraint violation"};
        if(err.code === "P2025") return { status: 404, message: "Record Not Found"};
        if(err.code === "P2034") return { status: 409, message: "Transaction conflict"}
    };

    return { 
        status: 500,
        message: "Internal server error"
    }
}