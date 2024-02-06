import * as fs from 'fs';

const readJsonFile = async (filePath: string): Promise<any> => {
    const resposne = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(resposne);
};

export const printJsonFile = async (filePath: string) => {
    try {
        const jsonData = await readJsonFile(filePath);
        console.log('JSON Data:', jsonData);
    } catch (error) {
        console.error('Error:', error);
    }
};