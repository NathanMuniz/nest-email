import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {

    constructor(private reflector: Reflector){}

  canActivate(context: ExecutionContext): boolean {

    const roles = this.reflector.get<string[]>('roles', context.getHandler());

    if(!roles){
        return true;
    }

    const request = context.switchToHttp().getRequest()
    const UserReq = {
      email: 'test@gmail.com'
    }


    let hasPermission = false;


    if(request.body.email || request.params.id){
      if(request.body.email == UserReq.email || request.params.id == UserReq.email ){
        hasPermission = true;
      }
    }

    return hasPermission;

    
  }
}
