import { Body, Controller, Get, UseGuards, UseInterceptors } from "@nestjs/common";
import { AuthGuard } from '@nestjs/passport';
import { Roles } from "common/decorators/roles.decorator";
import { RolesGuard } from "common/guards/roleguards";
import { TransformInterceptor } from "common/interceptors/transforme.interceptor";


// @UseGuards(AuthGuard('jwt'))
@UseInterceptors(TransformInterceptor)
@Controller('user')
export class UserController {

    @Get()
    @UseGuards(RolesGuard)
    @Roles('user')
    async getUser(@Body() data) {
        return data;
    }


}