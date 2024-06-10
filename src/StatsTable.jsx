import React from 'react';
import StatRow from './StatRow';

const StatsTable = ({ stats }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Position</th>
          <th>Player</th>
          <th>AVG</th>
          <th>OBP</th>
          <th>SLG</th>
          <th>OPS</th>
          <th>PA</th>
        </tr>
      </thead>
      <tbody>
        {stats.map((stat, index) => (
          <StatRow key={index} stat={stat} />
        ))}
      </tbody>
    </table>
  );
};

export default StatsTable;
