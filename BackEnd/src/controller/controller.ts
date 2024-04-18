
import { Request, Response } from "express";
import { ProjectTable } from '../database/connection'

export async function getRequest(req: Request, res: Response) {

    const id = req.query
    console.log(id);
    

    try {

        const Project = await ProjectTable.find({ _id: id.id });
        res.json(Project).status(200);

    } catch (error) {

        res.json(error)
    }

}

export async function getAndSaveFormData(req: Request, res: Response) {

    const projectData = req.body

    console.log(projectData);
    


    const data = await ProjectTable.create(projectData); 
  
    res.json(data)

}

export async function getArray(req:Request,res:Response){

    const array = await ProjectTable.find({},{NAME:1});

    res.json(array);

}




