import { Injectable, NestMiddleware } from "@nestjs/common";


@Injectable()
export class LoggerMiddleware implements NestMiddleware{

    use(req, res, next){

        try{
            const data = req.body;

            if( data.password){ data.password = "*******" }
            if( data.newPassword){ data.newPassword = "*******" }
            if( data.currentPassword ){ data.currentPassword  = "*******" }

            // console.log(JSON.stringify(data.teste));


            if (Object.keys(data).length !== 0){
                
                console.log('Request: ' + JSON.stringify(data) + 'Timestamp: ' + Date() + ' URL : ' + req.baseUrl)

            }
        }catch(e){
            return;
        }

        next();

    }


}
