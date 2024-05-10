import React from "react";
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from "chart.js"
import { Doughnut } from "react-chartjs-2"
import { useQuery } from "@tanstack/react-query";
import { listTransactionsAPI } from "../../services/transactions/transactionService";

ChartJS.register(ArcElement, Tooltip, Legend)

const TransactionChart = () => {

  const {
    data: dataTransactionsQuery,
    error: errorTransactionsQuery,
    isError: isErrorTransactionsQuery,
    isLoading: isLoadingTransactionsQuery,
    isFetched: isFetchedTransactionsQuery,
    refetch: refetchQuery
  } = useQuery({
        queryFn: listTransactionsAPI,
        queryKey: ["list-transactions"]
      })
  
  const totals = dataTransactionsQuery?.reduce((accumlator, transaction) =>{
    if(transaction?.type === 'income'){
      accumlator.income += transaction?.amount;
    }
    else{
      accumlator.expense += transaction?.amount
    };
    return accumlator;
  },{income: 0, expense: 0});
  return (
    <div className="my-8 p-6 bg-white rounded-lg shadow-xl border border-gray-200">
      <h1 className="text-2xl font-bold text-center mb-6">
        Transaction Overview
      </h1>
      <div style={{ height: "350px" }}>{/* <Doughnut  /> */}</div>
    </div>
  );
};

export default TransactionChart;