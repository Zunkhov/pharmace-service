import express from 'express';
import dotenv from 'dotenv';
import pharmacyRoutes from './routes/pharmacy.routes';

dotenv.config();
const app = express();
app.use(express.json());

app.use('/api/medications', pharmacyRoutes);

const PORT = process.env.PORT || 4003;
app.listen(PORT, () => {
  console.log(`Pharmacy Service running on port ${PORT}`);
});
