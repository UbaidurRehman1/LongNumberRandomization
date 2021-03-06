import * as express from "express";

export class IndexRouter
{

    private router : express.Router = express.Router();


    constructor()
    {
    }

    public listenIndex() : express.Router
    {
        this.router.get("/", (req: express.Request, res:express.Response) => 
        {
            res.render("index/index")
        });

        return this.router;
    }
}