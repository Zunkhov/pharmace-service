// src/services/pharmacy.service.ts
import { Medication } from '../models/medication.model';

const medications = new Map<string, Medication>();

export const getAllMedications = (): Medication[] => {
  return Array.from(medications.values());
};

export const getMedicationById = (id: string): Medication | undefined => {
  return medications.get(id);
};

export const addMedication = (data: Omit<Medication, 'id'>): Medication => {
  const id = Date.now().toString();
  const newMedication: Medication = { id, ...data };
  medications.set(id, newMedication);
  return newMedication;
};

export const markAsDispensed = (id: string): boolean => {
  const med = medications.get(id);
  if (med) {
    med.dispensed = true;
    medications.set(id, med);
    return true;
  }
  return false;
};

export const deleteMedication = (id: string): boolean => {
  return medications.delete(id);
};
