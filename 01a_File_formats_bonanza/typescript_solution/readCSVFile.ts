import * as fs from 'fs';
import csv from 'csv-parser';

const readCsvFile = async (filePath: string): Promise<any[]> => {
    return new Promise((resolve, reject) => {
        const results: any[] = [];

        fs.createReadStream(filePath)
            .pipe(csv())
            .on('data', (data) => results.push(data))
            .on('end', () => resolve(results))
            .on('error', (error) => reject(error));
    });
};

export const printCsvFile = async (filePath: string) => {
    try {
        const csvData = await readCsvFile(filePath);
        console.log('CSV Data:', csvData[0]);
    } catch (error) {
        console.error('Error:', error);
    }
};
