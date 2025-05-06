import express from 'express';
import {
  getAll,
  getById,
  create,
  dispense,
  remove
} from '../Controller/pharmacy.controller';

const router = express.Router();

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.put('/:id/dispense', dispense); // жороор эм олгох
router.delete('/:id', remove);

export default router;
