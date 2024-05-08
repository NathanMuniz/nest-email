import { Body, Controller, Get, UseGuards, UseInterceptors } from "@nestjs/common";
import { AuthGuard } from '@nestjs/passport';
import { Roles } from "common/decorators/roles.decorator";
import { RolesGuard } from "common/guards/roleguards";
import { TransformInterceptor } from "common/interceptors/transforme.interceptor";
import { IResponse } from "common/interface/response.interface";
// import { UserService } from "./users.service";


// // @UseGuards(AuthGuard('jwt'))
// @UseInterceptors(TransformInterceptor)
// @Controller('user')
// export class UserController {

//     constructor(
//         private userService: UserService;
//     ){}

//     @Get()
//     @UseGuards(RolesGuard)
//     @Roles('user')
//     async getUser(@Body() data): Promise<IResponse> {

//         return this.userService.findByEmail(data.email);


//         return data;
//     }


// }