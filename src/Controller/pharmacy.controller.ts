// src/controllers/pharmacy.controller.ts
import { Request, Response } from 'express';
import {
  getAllMedications,
  getMedicationById,
  addMedication,
  markAsDispensed,
  deleteMedication
} from '../services/pharmacy.service';

export const getAll = (req: Request, res: Response) => {
  res.json(getAllMedications());
};

export const getById = (req: Request, res: Response) => {
  const med = getMedicationById(req.params.id);
  med ? res.json(med) : res.status(404).send('Not found');
};

export const create = (req: Request, res: Response) => {
  const newMed = addMedication(req.body);
  res.status(201).json(newMed);
};

export const dispense = (req: Request, res: Response) => {
  const done = markAsDispensed(req.params.id);
  res.status(done ? 200 : 404).send();
};

export const remove = (req: Request, res: Response) => {
  const deleted = deleteMedication(req.params.id);
  res.status(deleted ? 204 : 404).send();
};
