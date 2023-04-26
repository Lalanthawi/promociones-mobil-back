import express from 'express';
import http from 'http';
import morgan from 'morgan';
import cors from 'cors';
import { port } from './config';
import routesV1 from './routes/v1/routes';

const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
routesV1(app);

server.listen(port, () => {
  console.log('API running on port:', port);
});
