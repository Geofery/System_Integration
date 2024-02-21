import express from 'express';
import fileRouter from './routes/fileRoute';

const app = express();
app.use(express.json());
//app.use(cors());

app.use(fileRouter)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`App: http://localhost:${PORT}/`);
});



