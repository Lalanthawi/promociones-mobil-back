import multer from 'multer';
import fs from 'fs';
import { Request } from 'express';
import path from 'path';

declare module 'express' {
  export interface Request {
    photo: string;
  }
}
type DestinationCallback = (error: Error | null, destination: string) => void;
type FileNameCallback = (error: Error | null, filename: string) => void;

export const upload = multer({
  storage: multer.diskStorage({
    destination: function (
      _req: Request,
      _file: Express.Multer.File,
      cb: DestinationCallback
    ) {
      if (!fs.existsSync(path.resolve('./uploads')))
        fs.mkdirSync(path.resolve('./uploads'), { recursive: true });
      cb(null, path.resolve('./uploads'));
    },

    filename: function (
      req: Request,
      file: Express.Multer.File,
      cb: FileNameCallback
    ) {
      const newFileName = `${
        (Math.random() + 1).toString(36).substring(2) + file.originalname
      }`;
      req.body.photo = newFileName;
      cb(null, newFileName);
    },
  }),
});
