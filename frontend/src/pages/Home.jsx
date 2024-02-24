import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Spinner, ExpenseTable, ExpenseCard } from "../components";
import { FaTableCellsLarge } from "react-icons/fa6";
import { FaTableColumns } from "react-icons/fa6";

const Home = () => {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://mern-expense-manager-app.vercel.app/expense/")
      .then((response) => {
        setExpenses(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div class="antialiased bg-gradient-to-br from-green-100 to-white align-middle inline-block min-w-full min-h-screen shadow overflow-hidden bg-white shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg">
        <header class="header sticky top-0 bg-white shadow-md flex items-center justify-between px-8 py-02">
          <div class="flex items-center">
            <span class="ml-2 font-semibold text-2xl text text-[#16a34a]">
              EXPENSE MANAGER
            </span>
          </div>
          <div class="w-3/12 flex justify-end m-2">
            <div className="flex  flex-row items-center gap-x-2">
              <FaTableCellsLarge
                className="text-green-500 text-2xl"
                onClick={() => setShowType("table")}
              />

              <FaTableColumns
                className="text-green-500 text-2xl"
                onClick={() => setShowType("card")}
              />
            </div>

            <Link to="/expense/create">
              <button class="ml-2 flex cursor-pointer items-center gap-x-1 rounded-md border py-2 px-4  bg-green-600 text-white hover:bg-green-500 hover:text-black  focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
                <span class="text-sm font-medium ">+ Create Expense</span>
              </button>
            </Link>
          </div>
        </header>
        {loading ? (
          <Spinner />
        ) : showType === "table" ? (
          <ExpenseTable expenses={expenses} />
        ) : (
          <ExpenseCard expenses={expenses} />
        )}
      </div>
    </>
  );
};

export default Home;
