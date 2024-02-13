import * as fs from 'fs';

const readTxtFile = (filePath: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};

export const printTxtFile = async (filePath: string) => {
    try {
        const txtData = await readTxtFile(filePath);
        console.log('TXT Data:', txtData);
    } catch (error) {
        console.error('Error reading TXT file:', error);
    }
};

export const getTxtFile = async (filePath: string) => {
    try {
        return await readTxtFile(filePath);
    } catch (error) {
        console.log('Error reading TXT file: ', error);
    }
};