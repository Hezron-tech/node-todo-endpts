import express, { json, NextFunction, Request, Response }from 'express'
import router from './Router/router'

const app = express()

app.use(json())

app.use('/todos', router)


app.use((err:Error,req:Request,res:Response,next:NextFunction)=>{
    res.json()

    console.log(req.body);
})




app.listen(5000,()=>{
    console.log("hello node");
    
});


