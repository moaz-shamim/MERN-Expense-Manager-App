import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Spinner, BackButton } from "../components";


const ShowExpense = () => {
  const [expense, setExpense] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();


  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/expense/${id}`)
      .then((response) => {
        setExpense(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className=" p-4  ">
      <BackButton />
      <h1 className="text-3xl my-4 text-green-600">Expenses Detail</h1>
      {loading ? (
        <Spinner />
        ) : (
          <div  className="flex flex-col border-2 border-green-400 rounded-xl w-[600px] p-4 mx-auto">
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Id</span>
            <span>{expense._id}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Item</span>
            <span>{expense.item}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Category</span>
            <span>{expense.category}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Description</span>
            <span>{expense.description}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Amount</span>
            <span>₹ {expense.amount}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Create Time</span>
            <span>{new Date(expense.createdAt).toString()}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Last Update Time</span>
            <span>{new Date(expense.updatedAt).toString()}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowExpense;
