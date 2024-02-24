import React from "react";
import ExpenseSingleCard from "./ExpenseSingleCard";

const ExpenseCard = ({ expenses }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        {expenses.map((item)=>{
            return(
                <ExpenseSingleCard key={item._id} expense={item}/>

            )
        })}
    </div>
  );
};

export default ExpenseCard;
