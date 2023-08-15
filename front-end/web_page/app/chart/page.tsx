"use client"
import React, { useState, useEffect } from 'react';
import DataTable from "@/components/dataTable";

const getData = async () => {
  const res = await fetch("http://127.0.0.1:5001/market-candidates");
  return res.json();
};

export default function Chart() {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    getData().then(data => setCandidates(data.candidates));
  }, []);

  console.log(candidates)

  return (
    <div style={{ marginTop: '100px' }}>
      {candidates.map((candidate, index) => (
        <DataTable
          key={index}
          pVal={candidate["p_val"]}
          series1Name={candidate["series1"]}
          series2Name={candidate["series2"]}
          currentZscore={candidate["current_z"]}
          optimalZPlus={candidate["opt_p_z"]} // You'll need to make sure this is part of the data object
          optimalZMinus={candidate["opt_n_z"]} // You'll need to make sure this is part of the data object
        />
      ))}
    </div>
  );
}
