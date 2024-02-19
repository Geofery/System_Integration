import { Request, Response, response } from 'express';
import { getFile } from '../utils/fileHandler'

export const getCSVFile = async (req: Request, res: Response) => {
    res.status(200).send(await getFile('01a_File_formats_bonanza/me.csv'))
};

export const getTxtFile = async (req: Request, res: Response) => {
    res.status(200).send(await getFile('01a_File_formats_bonanza/me.txt'))
};

export const getJsonFile = async (req: Request, res: Response) => {
    res.status(200).send(await getFile('01a_File_formats_bonanza/me.json'))
};

export const getXmlFile = async (req: Request, res: Response) => {
    res.status(200).send(await getFile('01a_File_formats_bonanza/me.xml'))
};

export const getYamlFile = async (req: Request, res: Response) => {
    res.status(200).send(await getFile('01a_File_formats_bonanza/me.yaml'))
};

export const getFileFromServer = async (req: Request, res: Response) => {
    console.log('IN ENDPOINT!');

    const repsonse = await fetch(`http://127.0.0.1:8000/fastapi/${req.params.fileformat}`);
    const data = await repsonse.json();
    res.status(200).send(data)
}

