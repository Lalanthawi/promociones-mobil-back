//import { Request, Response } from 'express';
import { prisma } from '../../prisma';
import { Record } from './record';
import { adminPassword } from '../../config';
import { selectRandomElements } from '../../utils/utils';
import moment from 'moment';

export const postRecord = async (req: any, res: any) => {
  let record: Record = req.body;

  try {
    const exist = await prisma.record.findFirst({
      where: {
        date: { gte: moment().startOf('day').format() },
        OR: [{ phone: Number(record.phone) }, { email: record.email }],
      },
    });
    if (exist)
      return res
        .status(401)
        .send({ message: 'The user already participates today' });
    const newRecord = await prisma.record.create({
      data: {
        ...record,
        date: moment().startOf('day').format(),
        phone: Number(record.phone),
        promotion: String(record.promotion) === 'false' ? false : true,
        termsAndConditions:
          String(record.termsAndConditions) === 'false' ? false : true,
      },
    });
    return res.send(newRecord);
  } catch (e) {
    return res.status(400).send((e as Error).message);
  }
};

export const selectBonusWinners = async (req: any, res: any) => {
  const { password, amount } = req.body;

  try {
    if (password !== adminPassword)
      return res.status(401).send({ message: 'Incorrect password' });
    const participants = await prisma.record.findMany({
      where: { bonusWinner: false, granPrixWinner: false },
    });
    if (amount > participants.length)
      return res.status(412).send({ message: 'Not enough records' });
    const winners = selectRandomElements(participants, amount);
    for (const winner of winners) {
      await prisma.record.update({
        where: { id: Number(winner.id) },
        data: { bonusWinner: true, bonusWinnerDate: new Date() },
      });
    }
    return res.send(winners);
  } catch (e) {
    return res.status(400).send((e as Error).message);
  }
};

export const selectGrandPrixWinners = async (req: any, res: any) => {
  const { password, amount } = req.body;

  try {
    if (password !== adminPassword)
      return res.status(401).send({ message: 'Incorrect password' });
    const participants = await prisma.record.findMany({
      where: { granPrixWinner: false },
    });
    if (amount > participants.length)
      return res.status(412).send({ message: 'Not enough records' });
    const winners = selectRandomElements(participants, amount);
    for (const winner of winners) {
      await prisma.record.update({
        where: { id: Number(winner.id) },
        data: { granPrixWinner: true, granPrixWinnerDate: new Date() },
      });
    }
    return res.send(winners);
  } catch (e) {
    return res.status(400).send((e as Error).message);
  }
};
