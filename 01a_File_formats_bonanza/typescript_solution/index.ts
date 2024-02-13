import express from 'express';
import { readFile } from './utils/fileHandler';
import fileRouter from './routes/fileRoute';

const app = express();

app.use(fileRouter)

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



