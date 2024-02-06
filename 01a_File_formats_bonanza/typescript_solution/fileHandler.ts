import { printTxtFile } from './readTxtFile';
import { printCsvFile } from './readCSVFile';
import { printJsonFile } from './readJsonFile';
import { printXmlFile } from './readXMLFile';
import { printYamlFile } from './readYamlFile';

export const readFile = async (filePath: string) => {
    const parts = filePath.split('.');
    switch (parts[parts.length - 1]) {
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