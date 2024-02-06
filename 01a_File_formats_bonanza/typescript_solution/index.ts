import { printTxtFile } from './readTxtFiles';
import { printCsvFile } from './readCSVFiles';
import { printJsonFile } from './readJsonFile';
import { printXmlFile } from './readXMLFiles';
import { printYamlFile } from './readYamlFiles';

const txtFilePath = '01a_File_formats_bonanza/me.txt';
const csvFilePath = '01a_File_formats_bonanza/me.csv';
const jsonFilePath = '01a_File_formats_bonanza/me.json';
const xmlFilePath = '01a_File_formats_bonanza/me.xml';
const yamlFilePath = '01a_File_formats_bonanza/me.yaml';

printJsonFile(jsonFilePath)
printCsvFile(csvFilePath);
printTxtFile(txtFilePath);
printXmlFile(xmlFilePath);
printYamlFile(yamlFilePath);




