import express from 'express';
import http from 'http';
import morgan from 'morgan';
import swaggerUI from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
import { swaggerSpec, port } from './config';
import routesV1 from './routes/v1/routes';

const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(
  '/api/v1/docs',
  swaggerUI.serve,
  swaggerUI.setup(swaggerJsDoc(swaggerSpec))
);

routesV1(app);

server.listen(port, () => {
  console.log('API running on port:', port);
});
