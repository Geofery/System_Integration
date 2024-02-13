import { Request, Response } from 'express';
import { getFile } from '../utils/fileHandler'

export const getCSVFile = () => {
    return getFile('01a_File_formats_bonanza/me.csv')
};

export const getTxtFile = () => {
    return getFile('01a_File_formats_bonanza/me.txt')
};

export const getJsonFile = () => {
    return getFile('01a_File_formats_bonanza/me.json')
};

export const getXmlFile = () => {
    return getFile('01a_File_formats_bonanza/me.xml')
};

export const getYamlFile = () => {
    return getFile('01a_File_formats_bonanza/me.yaml')
};

