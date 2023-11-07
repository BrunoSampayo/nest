import { ArgumentsHost, Catch, ExceptionFilter } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { Response } from "express";

@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaNotFoundExceptionFilter implements ExceptionFilter {
    catch(exception: PrismaClientKnownRequestError, host: ArgumentsHost) {
        const context = host.switchToHttp();
        const response = context.getResponse<Response>()
        const messageError = exception.meta?.cause ?? exception.message
        console.error(exception,'color: green;')
        

        switch (exception.code) {
            case 'P2025':
                response.status(404).json({
                    statusCode: 404,
                    message: messageError
                })
                break;
            case 'P2002':
                response.status(409).json({
                    statusCode: 409,
                    message:`Entidy with ${exception.meta.target[0]} already exists (unique)` 
                })
                break;
            default:
                response.status(500).json({
                    statusCode: 500,
                    message: messageError
                })
                break;
        }

    }
}