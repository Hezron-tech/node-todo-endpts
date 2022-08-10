import { Request, RequestHandler,Response } from "express";
import {v4 as uuidv4} from 'uuid';
import { sqlConfig } from "../Config/config";
import mssql from 'mssql'





// interface ExtendedRequest extends Request{
//     body:{
//         title:string
//         description: string
//     }

// }


export const createTodo= async (req:Request, res:Response)=>{
    try {

        const id = uuidv4()

        const {title, description }=req.body as {title:string,description:string}
        const pool = await mssql.connect(sqlConfig)
        console.log(title,description);
        await pool 
        .request()
        .input('id', mssql.VarChar,id)
        .input('title',mssql.VarChar, title)
        .input('description',mssql.VarChar, description)
        .execute('insertTodo')

       
        


        res.json({ message:'todo inserted successfully' })
        
    } catch (error:any) {
        
        res.json({error})
    }
}



export const getTodos:RequestHandler= async(req,res)=>{
   
    try {
        const pool = await mssql.connect(sqlConfig)
        const todos = await pool.request().execute('getTodos')
        res.json({todos})


        
    } catch (error) {
        res.json({error}) 
    }

}











