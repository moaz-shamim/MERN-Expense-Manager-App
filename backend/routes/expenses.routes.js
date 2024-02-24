import { Expense } from "../models/expense.model.js";
import express, { json } from "express";

const router = express.Router();

// Route to create expense
router.post("/", async (request, response) => {
  try {
    if (
      !request.body.item ||
      !request.body.category ||
      !request.body.description ||
      !request.body.amount
    ) {
      return response.status(400).send({
        message:
          "Send all the required fields item, category, description , amount",
      });
    }
    const newExpense = {
      item: request.body.item,
      category: request.body.category,
      description: request.body.description,
      amount: request.body.amount,
    };

    const expense = await Expense.create(newExpense);
    return response.status(201).send(expense);
  } catch (error) {
    console.log(error.message);
    return response.status(500).send({ message: error.message });
  }
});

// Route to get all expenses from data Base
router.get("/", async (request, response) => {
  try {
    const expenses = await Expense.find({});
    return response.status(200).json({
      count: expenses.length,
      data: expenses,
    });
  } catch (error) {
    console.log(error);
    return response.status(500).send({ message: error.message });
  }
});

// Route to get single expenses from data Base
router.get("/:id", async (request, response) => {
  try {
    const expense = await Expense.findById(request.params.id);
    return response.status(200).json(expense);
  } catch (error) {
    console.log(error);
    return response.status(500).send({ message: error.message });
  }
});

// Route to update  Expense data present in the data Base
router.put("/:id", async (request, response) => {
  try {
    if (
      !request.body.item ||
      !request.body.category ||
      !request.body.description ||
      !request.body.amount
    ) {
      return response.status(400).send({
        message:
          "Send all the required fields item, category, description , amount",
      });
    }
    const updatedExpense = await Expense.findByIdAndUpdate(
      request.params.id,
      request.body
    );
    if (!updatedExpense) {
      return response.status(404).send({ message: "Expense not found" });
    }
    return response
      .status(200)
      .send({ message: "Expense updated Succesfully" });
  } catch (error) {
    console.log(error);
    return response.status(500).send({ message: error.message });
  }
});

// Route to delete  Expense data present in the data Base
router.delete("/:id", async (request, response) => {
  try {
    const deletedExpense = await Expense.findByIdAndDelete(request.params.id);
    if (!deletedExpense) {
      return response.status(404).send({ message: "Expense not found" });
    }
    return response
      .status(200)
      .send({ message: "Expense deleted Successfully " });
  } catch (error) {
    console.log(error);
    return response.status(500).send({ message: error.message });
  }
});

export default router;
