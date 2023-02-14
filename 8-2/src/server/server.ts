import express from express;

export default class Server{
    public app : express.Aplication;

    constructor(private port : number){
        this.app = express();
    }

    start(callback : Function){
        this.app.listen(this.port,callback)
    }

    static init(port : number) : Server{
         return new Server(port);
    }
}