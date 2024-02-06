import * as fs from 'fs';
import * as yaml from 'js-yaml';

const readYamlFile = (filePath: string): Promise<any> => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                try {
                    const yamlData = yaml.load(data);
                    resolve(yamlData);
                } catch (yamlError) {
                    reject(yamlError);
                }
            }
        });
    });
};

export const printYamlFile = async (filePath: string) => {
    try {
        const yamlData = await readYamlFile(filePath);
        console.log('Yaml Data:', yamlData);
    } catch (error) {
        console.error('Error reading yaml file:', error);
    }
};