import { printTxtFile, getTxtFile } from '../files/readTxtFile';
import { printCsvFile, getCsvFile } from '../files/readCSVFile';
import { printJsonFile, getJsonFile } from '../files/readJsonFile';
import { printXmlFile, getXmlFile } from '../files/readXMLFile';
import { printYamlFile, getYamlFile } from '../files/readYamlFile';

export const readFile = async (filePath: string) => {
    switch (splitFilePath(filePath)) {
        case 'txt':
            printTxtFile(filePath);
            break;
        case 'csv':
            printCsvFile(filePath)
            break;
        case 'json':
            printJsonFile(filePath);
            break;
        case 'xml':
            printXmlFile(filePath);
            break;
        case 'yaml':
            printYamlFile(filePath);
            break;
    }
};

export const getFile = async (filePath: string) => {
    switch (splitFilePath(filePath)) {
        case 'txt':
            return getTxtFile(filePath);
        case 'csv':
            return getCsvFile(filePath)
        case 'json':
            return getJsonFile(filePath);
        case 'xml':
            return getXmlFile(filePath);
        case 'yaml':
            return getYamlFile(filePath);
    }
};

const splitFilePath = (filePath: string) => {
    return filePath.split('.')[1];
};