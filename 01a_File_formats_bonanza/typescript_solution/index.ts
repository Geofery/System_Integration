import { printTxtFile } from './readTxtFiles'; // Adjust the import path based on your file structure
import {printCsvFile} from './readCSVFiles'

// Example usage
const txtFilePath = '01a_File_formats_bonanza/me.txt';
const csvFilePath = '01a_File_formats_bonanza/me.csv';

printCsvFile(csvFilePath);
printTxtFile(txtFilePath);


