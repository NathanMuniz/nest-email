import { Injectable, CanActivate, ExecutionContext } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Roles } from "common/decorators/roles.decorator";
import { Observable } from "rxjs";


@Injectable()
export class RolesGuard implements CanActivate {

  constructor(private readonly reflector: Reflector){}


  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {

      const roles = this.reflector.get(Roles, context.getHandler)

      if (!roles){
        return true;
      }

      const req = context.switchToHttp().getRequest();
      const user = req.user;
      const hasRole = user.roles.some((role) => {roles.indexOf(role) < 0});

      let hasPermission = false; 

      if(hasRole){
        hasPermission = true;

        if(req.param.email || req.body.email){  

          if(req.user.email != req.param.email && req.user.email != req.body.email){
            hasPermission = false; 
          }

        }

      }

      return user && user.roles && hasPermission;
  }


}