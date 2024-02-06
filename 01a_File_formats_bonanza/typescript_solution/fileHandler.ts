import { printTxtFile } from './readTxtFile';
import { printCsvFile } from './readCSVFile';
import { printJsonFile } from './readJsonFile';
import { printXmlFile } from './readXMLFile';
import { printYamlFile } from './readYamlFile';

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

const splitFilePath = (filePath: string) => {
    return filePath.split('.')[1];
};