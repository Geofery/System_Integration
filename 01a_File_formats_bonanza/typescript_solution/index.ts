import { readFile } from './fileHandler';

const txtFilePath = '01a_File_formats_bonanza/me.txt';
const csvFilePath = '01a_File_formats_bonanza/me.csv';
const jsonFilePath = '01a_File_formats_bonanza/me.json';
const xmlFilePath = '01a_File_formats_bonanza/me.xml';
const yamlFilePath = '01a_File_formats_bonanza/me.yaml';

readFile(csvFilePath);
readFile(txtFilePath);
readFile(jsonFilePath);
readFile(xmlFilePath);
readFile(yamlFilePath);



