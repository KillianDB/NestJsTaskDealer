import { Body, ConflictException, Controller, Post } from "@nestjs/common"
import { PrismaServices } from "src/prisma/prisma.services"

@Controller('/task')
export class TaskController {
    constructor(private prisma: PrismaServices){}

    @Post()
    async handle(@Body() body: any){
        const { title, description } = body

        const taskWithSameTitle = await this.prisma.task.findFirst({
            where: {
               title
            }
        })

        if(taskWithSameTitle){
            throw new ConflictException("A task já existe")
        }

        await this.prisma.task.create({
            data:{
                title,
                description
            }
        })
    }
}