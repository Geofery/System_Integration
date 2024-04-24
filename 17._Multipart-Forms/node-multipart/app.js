import express from 'express';

const app = express();

app.use(express.urlencoded({ extended: true }));

import multer from "multer";
//const upload = multer({ dest: "./uploads" });

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './uploads')
      console.log(req);
      console.log(file);
    },
    filename: (req, file, cb) => {
      const uniquePrefix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      const extension = file.originalname.split('.')
      const uniqueFileName = uniquePrefix + '-' + file.originalname
      console.log(uniqueFileName);
      cb(null, uniqueFileName)
      console.log(cb);
    }
  });
  
  function fileFilter (req, file, cv){
    const allowedTypes = ['image/jpeg', 'image/svg', 'image/png'];
    if (!allowedTypes.includes(file.mimetype)) {
        cb(new Error('File type not allowed: ' + file.mimetype), false);
    } else {
        cb(null, true);
    }
  }

  const upload = multer({ 
    storage,
    limits: {
        fileSize: 10 * 1024 * 1024
    },
    fileFilter
});


app.post('/form', (req, res) => {
    console.log(req.body);
    delete req.body.password;
    res.send( req.body );
});

app.post("/fileform", upload.single('file'), (req, res) => {
    console.log(req.body);
    res.send({});
});



const PORT = process.env.PORT ?? 8080;
app.listen(PORT, () => console.log('Server is running on port:', PORT));

