import React, { useEffect, useState } from "react";
import { BackButton, Spinner } from "../components";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useSnackbar } from "notistack";
import data from "../assets/data";

const EditExpense = () => {
  const [item, setItem] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://mern-expense-manager-app.vercel.app/expense/${id}`)
      .then((response) => {
        setItem(response.data.item);
        setCategory(response.data.category);
        setDescription(response.data.description);
        setAmount(response.data.amount);
        setLoading(false);
      })
      .catch((error) => {
        // alert("An Error happened . Please Check console");
        enqueueSnackbar("Error", { variant: "error" });
        console.log(error);
        setLoading(false);
      });
  }, []);

  const handleEditExpense = () => {
    const data = {
      item,
      category,
      description,
      amount,
    };
    setLoading(true);
    axios
      .put(`https://mern-expense-manager-app.vercel.app/expense/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Expense Edited Successfully", { variant: "success" });
        navigate("/");
      })
      .catch((error) => {
        // alert("An Error happened. Please Check Console");
        enqueueSnackbar("Error", { variant: "error" });
        console.log(error);
      });
  };

  return (
    <>
      <div className="p-4">
        <BackButton />
        <h1 className="text-3xl my-4 text-green-600">Edit Expense</h1>
        {loading ? <Spinner /> : ""}
        <div className="flex flex-col border-2 border-green-400 rounded-xl w-[600px] p-4 mx-auto">
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Item</label>
            <input
              type="text"
              value={item}
              onChange={(event) => setItem(event.target.value)}
              className="border-2 border-gray-500 px-4 py-2 w-full"
            />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Category</label>
            <select
              className="border-2 border-gray-500 px-4 py-2 w-full"
              onChange={(event) => setCategory(event.target.value)}
            >
              <option value="">--Please choose an option--</option>
              {data.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Description</label>
            <input
              type="text"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              className="border-2 border-gray-500 px-4 py-2 w-full"
            />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Amount</label>
            <input
              type="text"
              value={amount}
              onChange={(event) => setAmount(event.target.value)}
              className="border-2 border-gray-500 px-4 py-2 w-full"
            />
          </div>
          <button
            className="p-2 bg-green-500 text-white m-8 "
            onClick={handleEditExpense}
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default EditExpense;
