import { Body, Controller, Get, Post, UseGuards, UseInterceptors } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Roles } from "common/decorators/roles.decorator";
import { UserService } from "./users.service";
import { RolesGuard } from "common/guards/roleguards";



@Controller('users')
// @UseGuards(AuthGuard('jwt'))
// @UseInterceptors()
export class UserController {


    constructor(
        usersService: UserService
    ){}

    @Get('user/:email')
    async findById(){}

    @Post('profile/update')
    async updateProfile(){

    }


    @Get()
    @UseGuards(RolesGuard)
    @Roles('user')
    async getUser(@Body() data) {

        return 'test'

    }


}