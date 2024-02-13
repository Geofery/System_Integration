import { Request, Response } from 'express';
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

