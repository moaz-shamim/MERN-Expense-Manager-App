import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";

const ExpenseSingleCard = ({ expense }) => {
  return (
    <div
      key={expense._id}
      className="bottom-2 border border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl"
    >
      <div class="p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-green-200 dark:border-green-700 dark:hover:bg-green-100">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-green-500">
          {expense.item.slice(0,15)}
        </h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">
          {expense.description.slice(0,223)}
        </p>
        <div className="flex justify-center gap-x-4">
          <Link to={`/expense/details/${expense._id}`}>
            <BsInfoCircle className="text-2x1 text-green-800" />
          </Link>
          <Link to={`/expense/edit/${expense._id}`}>
            <AiOutlineEdit className="text-2x1 text-yellow-600" />
          </Link>
          <Link to={`/expense/delete/${expense._id}`}>
            <MdOutlineDelete className="text-2x1 text-red-600" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExpenseSingleCard;
