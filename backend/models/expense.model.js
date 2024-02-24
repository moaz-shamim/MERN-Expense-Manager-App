import { model, Schema } from "mongoose";

const expenseSchema = new Schema(
  {
    item: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export const Expense = model("Expense", expenseSchema);
