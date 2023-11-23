import { Body, ConflictException, Controller, Post } from "@nestjs/common"
import { PrismaServices } from "src/prisma/prisma.services"
import { hash } from "bcryptjs"

@Controller('/user')
export class UserController {
    constructor(private prisma: PrismaServices){}

    @Post()
    async handle(@Body() body: any){
        const { name, email, password } = body

        const userWithSameEmail = await this.prisma.user.findUnique({
            where: {
                email
            }
        })

        if(userWithSameEmail){
            throw new ConflictException("O email já está cadastrado")
        }

        const hashedPassword = await hash(password, 9)

        await this.prisma.user.create({
            data:{
                name,
                email,
                password: hashedPassword
            }
        })
    }
}