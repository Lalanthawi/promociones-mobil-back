//import { Request, Response } from 'express';
import { prisma } from '../../prisma';
import { Record } from './record';

export const postRecord = async (req: any, res: any) => {
  let record: Record = req.body;

  try {
    const newRecord = await prisma.record.create({
      data: {
        ...record,
        phone: Number(record.phone),
        promotion: String(record.promotion) === 'false' ? false : true,
        termsAndConditions:
          String(record.termsAndConditions) === 'false' ? false : true,
      },
    });
    return res.send(newRecord);
  } catch (e) {
    console.log(e);
    return res.status(400).send((e as Error).message);
  }
};

export const selectWinners = async (req: any, res: any) => {
  const { password } = req.body;

  try {
    /* Crear query */
    return res.send([]);
  } catch (e) {
    console.log(e);
    return res.status(400).send((e as Error).message);
  }
};
/* adminPassword */
