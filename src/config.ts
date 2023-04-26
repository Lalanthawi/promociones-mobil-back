import 'dotenv/config';

export const port =
  process.env.NODE_ENV === 'dev' ? process.env.DEV_PORT : process.env.PORT;

export const adminPassword = process.env.ADMIN_PASSWORD
