import React from "react";

type Props = {};
interface ResourceRequirements {
  [resource: string]: number; // Daily requirement for each resource
}

interface MaxStackSizes {
  [resource: string]: number; // Max stack size for each resource
}

interface SlotDistribution {
  [resource: string]: number; // Slots allocated for each resource
}

function TCUpkeep({}: Props) {
  // Example inputs
  const dailyRequirements: ResourceRequirements = {
    wood: 1000,
    stone: 2000,
    metal: 500,
    highQualityMetal: 100,
  };
  const optimalUpkeep = calculateOptimalUpkeep(dailyRequirements);
  console.log("Optimal Upkeep:", optimalUpkeep);
  // console.log("Optimal Upkeep Distribution:", distribution);
  // console.log("Maximum Number of Days:", maxDays);

  return <div>TCUpkeep</div>;
}

function calculateOptimalUpkeep(dailyRequirements: ResourceRequirements): {
  upkeep: SlotDistribution;
  days: number;
} {
  const maxStackSizes: MaxStackSizes = {
    wood: 1000,
    stone: 1000,
    metal: 1000,
    highQualityMetal: 100,
  };
  // Convert daily requirements into stack counts
  const stackRequirements: { [resource: string]: number } = {};
  for (const resource in dailyRequirements) {
    stackRequirements[resource] =
      dailyRequirements[resource] / maxStackSizes[resource];
  }
  console.log("Stack requirements:", stackRequirements);

  // Sort resources by the number of stacks required per day, in ascending order
  const sortedResources = Object.entries(stackRequirements).sort(
    (a, b) => a[1] - b[1]
  );
  console.log("Sorted resources:", sortedResources);

  let totalSlotsUsed = 0;
  const slotCapacity = 24;

  let days = 0;

  // Do a loop
  // Keep track of the current resources
  // Try to add to resource count, starting with the first resource in sortedResources
  // Keep track of the new resources in a separate variable
  // If the new resources exceed the slot capacity, break out of the loop
  // If the new resources are less than the slot capacity, add them to the totalSlotsUsed
  const currentResourceStackCount: { [resource: string]: number } = {
    wood: 0,
    stone: 0,
    metal: 0,
    highQualityMetal: 0,
  };

  // Add resources unless they exceed the slot capacity
  // Alex doesn't recommend while (true) loops
  while (true) {
    for (const [resource, stacksPerDay] of sortedResources) {
      console.log("Resource:", resource, "Stacks per day:", stacksPerDay);
    }
    let newResourceStackCount: { [resource: string]: number } = {};

    for (const [resource, stacksPerDay] of sortedResources) {
      newResourceStackCount[resource] =
        currentResourceStackCount[resource] + stacksPerDay;
    }

    // Round all new resources up to the nearest integer and add to one number
    const totalStacks = Object.values(newResourceStackCount).reduce(
      (sum, stacks) => sum + Math.ceil(stacks),
      0
    );
    console.log("Total stacks:", totalStacks);

    if (totalStacks > slotCapacity) {
      console.log("Total stacks exceeds slot capacity");
      break;
    } else {
      totalSlotsUsed += totalStacks;
      for (const [resource, stacksPerDay] of sortedResources) {
        currentResourceStackCount[resource] += stacksPerDay;
      }
      days++;
    }
  }

  // currentResourceStackCount should be multiplied by maxStackSizes to get the actual resource count
  // Then that should be returned
  const upkeep = {
    wood: currentResourceStackCount.wood * maxStackSizes.wood,
    stone: currentResourceStackCount.stone * maxStackSizes.stone,
    metal: currentResourceStackCount.metal * maxStackSizes.metal,
    highQualityMetal:
      currentResourceStackCount.highQualityMetal *
      maxStackSizes.highQualityMetal,
  };

  return { upkeep, days };
}

export default TCUpkeep;
