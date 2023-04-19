import 'dotenv/config';
import path from 'path';

export const port =
  process.env.NODE_ENV === 'dev' ? process.env.DEV_PORT : process.env.PORT;

export const swaggerSpec = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Promociones Mobil - Backend',
      version: '1.0.0',
    },
  },
  apis: [`${path.join(__dirname, './routes/v1/*.[tj]s')}`],
};

/* export const secretJWT: Secret = process.env.SECRET_JWT
  ? process.env.SECRET_JWT
  : ''; */
