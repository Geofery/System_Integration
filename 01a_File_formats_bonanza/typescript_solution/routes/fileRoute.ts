import { Router } from 'express';
import * as fileController from '../controllers/fileController';

const fileRouter = Router();

fileRouter.get('/csv', fileController.getCSVFile)
fileRouter.get('/txt', fileController.getTxtFile)
fileRouter.get('/json', fileController.getJsonFile)
fileRouter.get('/xml', fileController.getXmlFile)
fileRouter.get('/yaml', fileController.getYamlFile)
fileRouter.get('/fastapi/:fileformat', fileController.getFileFromServer)

export default fileRouter;