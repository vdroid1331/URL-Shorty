import mongoose, { Document, Model } from "mongoose";

const urlSchema = new mongoose.Schema(
  {
    orignalUrl: {
      type: String,
      required: true,
      unique: true,
    },
    shortUrl: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

export interface IUrl extends Document {
  orignalUrl: string;
  shortUrl: string;
}

const Url: Model<IUrl> =
  mongoose.models.Url || mongoose.model<IUrl>("Url", urlSchema);

export default Url;
