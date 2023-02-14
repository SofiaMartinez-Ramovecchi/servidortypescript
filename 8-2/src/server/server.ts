<<<<<<< HEAD
import express from express;
//como hacer para que lea archivos .ts
=======
import express = require('express');
>>>>>>> parent of cd195fe (fix: repair some stuff)

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