// src/models/medication.model.ts
export interface Medication {
    id: string;
    name: string;
    dosage: string;
    quantity: number;
    instructions: string;
    prescriptionId?: string;
    dispensed: boolean;
  }
  