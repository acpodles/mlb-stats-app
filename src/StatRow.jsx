import React from 'react';

const StatRow = ({ stat }) => {
  const { player, position, stat: playerStats } = stat;
  const { fullName } = player;
  const { abbreviation } = position;
  const { avg, obp, slg, ops, plateAppearances } = playerStats;

  return (
    <tr>
      <td>{abbreviation}</td>
      <td>{fullName}</td>
      <td>{parseFloat(avg).toFixed(3)}</td>
      <td>{parseFloat(obp).toFixed(3)}</td>
      <td>{parseFloat(slg).toFixed(3)}</td>
      <td>{parseFloat(ops).toFixed(3)}</td>
      <td>{plateAppearances}</td>
    </tr>
  );
};

export default StatRow;
