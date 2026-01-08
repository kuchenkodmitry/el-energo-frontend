import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema(
  {
    whatsapp: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
      // unique: true,
    },
    email: {
      type: String,
      required: true,
    },
    details: {
      type: String,
      required: true,
    }
  }
);

export default mongoose.model('Contact', contactSchema);