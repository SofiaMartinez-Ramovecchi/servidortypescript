import Server from './server/server';
import router from './router/router';
//no encuentra los .ts
const server = Server.init(8080)

router.get('/',(req : Request, res: Response)=>{
    res.send('Hola mundo');
    //send no existe
    
});
server.start(function () { return console.log("Server started"); });