import React, { useState, useEffect } from 'react';
import StatsTable from './StatsTable';

const App = () => {
  const [stats, setStats] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://statsapi.mlb.com/api/v1/stats?stats=season&group=hitting&teamId=110&playerPool=ALL');
        const response2 = await fetch("https://statsapi.mlb.com/api/v1/teams/110/roster");
        const rosterData = await response2.json();
        const playerNames = rosterData.roster.map(
          (player) => player.person.fullName
        );
        const data = await response.json();
        if (data && data.stats && data.stats.length > 0) {
          const playersData = data.stats.flatMap(stat => stat.splits);
          setStats(playersData.filter(playerData =>{
            const playerName = playerData.player.fullName;
            return playerNames.includes(playerName) && playerData.position.abbreviation !== 'P';
          }));
        }
      } catch (error) {
        console.error('Error fetching MLB stats:', error);
      }
    };

    fetchData();

    const intervalId = setInterval(fetchData, 10000); // Fetch new data every 10 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h1>MLB Stats</h1>
      <StatsTable stats={stats} />
    </div>
  );
};

export default App;
