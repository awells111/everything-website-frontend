import React, { useState } from 'react';

const ResourceCalculator = () => {
  const [woodUsage, setWoodUsage] = useState(700);
  const [stoneUsage, setStoneUsage] = useState(1600);
  const [metalFragsUsage, setMetalFragsUsage] = useState(800);
  const [highQualUsage, setHighQualUsage] = useState(24);
  const [result, setResult] = useState(null);
  const [allocation, setAllocation] = useState(null);

  const calculateMaxDays = () => {
    const slots = 24;
    const slotCapacity = {
      wood: 1000,
      stone: 1000,
      metalFrags: 1000,
      highQual: 100,
    };

    let maxDays = 0;
    let bestAllocation = { wood: 0, stone: 0, metalFrags: 0, highQual: 0 };
    
    // Iterate through all possible slot allocations for high qual
    for (let highQualSlots = 0; highQualSlots <= slots; highQualSlots++) {
      const remainingSlots = slots - highQualSlots;
      
      // Iterate through all possible slot allocations for wood
      for (let woodSlots = 0; woodSlots <= remainingSlots; woodSlots++) {
        const remainingSlotsAfterWood = remainingSlots - woodSlots;
        
        // Iterate through all possible slot allocations for stone
        for (let stoneSlots = 0; stoneSlots <= remainingSlotsAfterWood; stoneSlots++) {
          const metalFragsSlots = remainingSlotsAfterWood - stoneSlots;
          
          // Calculate the days each resource will last
          const woodDays = (slotCapacity.wood * woodSlots) / woodUsage;
          const stoneDays = (slotCapacity.stone * stoneSlots) / stoneUsage;
          const metalFragsDays = (slotCapacity.metalFrags * metalFragsSlots) / metalFragsUsage;
          const highQualDays = (slotCapacity.highQual * highQualSlots) / highQualUsage;
          
          // Find the minimum days among the resources
          const minDays = Math.min(woodDays, stoneDays, metalFragsDays, highQualDays);
          
          // Update maxDays and best allocation if the current allocation gives a higher value
          if (minDays > maxDays) {
            maxDays = minDays;
            bestAllocation = {
              wood: woodSlots,
              stone: stoneSlots,
              metalFrags: metalFragsSlots,
              highQual: highQualSlots,
            };
          }
        }
      }
    }

    setResult(maxDays);
    setAllocation(bestAllocation);
  };

  return (
    <div>
      <h1>Resource Calculator</h1>
      <div>
        <label>
          Daily Wood Usage:
          <input
            type="number"
            value={woodUsage}
            onChange={(e) => setWoodUsage(Number(e.target.value))}
          />
        </label>
      </div>
      <div>
        <label>
          Daily Stone Usage:
          <input
            type="number"
            value={stoneUsage}
            onChange={(e) => setStoneUsage(Number(e.target.value))}
          />
        </label>
      </div>
      <div>
        <label>
          Daily Metal Frags Usage:
          <input
            type="number"
            value={metalFragsUsage}
            onChange={(e) => setMetalFragsUsage(Number(e.target.value))}
          />
        </label>
      </div>
      <div>
        <label>
          Daily High Qual Usage:
          <input
            type="number"
            value={highQualUsage}
            onChange={(e) => setHighQualUsage(Number(e.target.value))}
          />
        </label>
      </div>
      <button onClick={calculateMaxDays}>Calculate Max Days</button>
      {result !== null && (
        <div>
          <h2>Maximum Days: {result.toFixed(2)} days</h2>
          <h3>Slot Allocation:</h3>
          <p>Wood: {allocation.wood} slots</p>
          <p>Stone: {allocation.stone} slots</p>
          <p>Metal Frags: {allocation.metalFrags} slots</p>
          <p>High Qual: {allocation.highQual} slots</p>
        </div>
      )}
    </div>
  );
};

export default ResourceCalculator;
