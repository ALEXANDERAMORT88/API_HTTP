import mongoose from 'mongoose';
import { Suppliers } from '../types/suppliers.types';

const suppliersSchema = new mongoose.Schema<Suppliers>({
  name: {type: String, required: true},
  cc: { type: String, required: true},
  bithDate: { type: String, required: true },
  email:{ type: String, required: true },
  job: { type: String, required: true},
  addrees: { type: String, required: true}
});

const SupplierSchema = mongoose.model("Supplier", suppliersSchema);
export { SupplierSchema };