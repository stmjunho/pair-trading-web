import React from 'react';

type DataTableProps = {
  pVal: number;
  series1Name: string;
  series2Name: string;
  currentZscore: number;
  optimalZPlus: number;
  optimalZMinus: number;
};

export default function DataTable(props: DataTableProps) {
  const { pVal, series1Name, series2Name, currentZscore, optimalZPlus, optimalZMinus } = props;

  return (
    <table>
      <thead>
        <tr>
          <th>P-Value</th>
          <th>Series 1 Name</th>
          <th>Series 2 Name</th>
          <th>Current Z-Score</th>
          <th>Optimal Z+ (Positive)</th>
          <th>Optimal Z- (Negative)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{pVal}</td>
          <td>{series1Name}</td>
          <td>{series2Name}</td>
          <td>{currentZscore}</td>
          <td>{optimalZPlus}</td>
          <td>{optimalZMinus}</td>
        </tr>
      </tbody>
    </table>
  );
}