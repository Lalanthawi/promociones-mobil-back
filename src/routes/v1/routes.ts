import { Application } from 'express';
import record from './Record.routes';

const routes = (app: Application) => {
  app.use('/api/v1/record', record);
};

export default routes;
