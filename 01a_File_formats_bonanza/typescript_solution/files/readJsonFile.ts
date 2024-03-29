import * as fs from 'fs';

const readJsonFile = async (filePath: string): Promise<any> => {
    const jsonData = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(jsonData);
};

export const printJsonFile = async (filePath: string) => {
    try {
        const jsonData = await readJsonFile(filePath);
        console.log('JSON Data:', jsonData);
    } catch (error) {
        console.error('Error:', error);
    }
};

export const getJsonFile = async (filePath: string) => {
    try {
        return JSON.parse(JSON.stringify({ data: await readJsonFile(filePath) }));
    } catch (error) {
        console.error('Error:', error);
    }
};