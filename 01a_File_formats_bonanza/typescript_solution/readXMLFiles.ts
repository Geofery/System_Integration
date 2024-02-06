import * as fs from 'fs';
import * as xml2js from 'xml2js';

export const readXmlFile = (filePath: string): Promise<any> => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                const parser = new xml2js.Parser();
                parser.parseString(data, (xmlError, result) => {
                    if (xmlError) {
                        reject(xmlError);
                    } else {
                        resolve(result);
                    }
                });
            }
        });
    });
};

export const printXmlFile =async (filePath:string) => {
    try {
        const xmlData = await readXmlFile(filePath);
        console.log('XML Data:', xmlData);
    } catch (error) {
        console.error('Error:', error);
    }
};
