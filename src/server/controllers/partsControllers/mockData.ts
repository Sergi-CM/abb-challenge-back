import { PartStructure } from "../../../types/types.js";

export const wheelData: PartStructure = {
  name: "Wheel",

  features: [
    {
      featureName: "Seam",
      measurements: [
        {
          control: "Length",
          expected: 10.5,
          deviation: 0.2,
          devOutTol: 0.5,
        },
        {
          control: "Position X",
          expected: 5.0,
          deviation: 0.1,
          devOutTol: 0.3,
        },
        {
          control: "Position Y",
          expected: 3.0,
          deviation: 0.1,
          devOutTol: 0.3,
        },
      ],
    },
    {
      featureName: "Slot",
      measurements: [
        {
          control: "Length",
          expected: 8.0,
          deviation: 0.2,
          devOutTol: 0.5,
        },
        {
          control: "Width",
          expected: 2.0,
          deviation: 0.1,
          devOutTol: 0.3,
        },
        {
          control: "Depth",
          expected: 1.5,
          deviation: 0.1,
          devOutTol: 0.3,
        },
      ],
    },
    {
      featureName: "Hole",
      measurements: [
        {
          control: "Diameter",
          expected: 3.5,
          deviation: 0.1,
          devOutTol: 0.3,
        },
        {
          control: "Position X",
          expected: 10.0,
          deviation: 0.2,
          devOutTol: 0.5,
        },
        {
          control: "Position Y",
          expected: 8.0,
          deviation: 0.2,
          devOutTol: 0.5,
        },
      ],
    },
  ],
};

export const brakeCaliperData: PartStructure = {
  name: "Brake Caliper",

  features: [
    {
      featureName: "Piston",
      measurements: [
        {
          control: "Diameter",
          expected: 2.5,
          deviation: 0.1,
          devOutTol: 0.3,
        },
        {
          control: "Position X",
          expected: 5.0,
          deviation: 0.2,
          devOutTol: 0.5,
        },
        {
          control: "Position Y",
          expected: 3.0,
          deviation: 0.2,
          devOutTol: 0.5,
        },
      ],
    },
    {
      featureName: "Bleeder Screw",
      measurements: [
        {
          control: "Thread Size (mm)",
          expected: 8.0,
          deviation: 0.1,
          devOutTol: 0.3,
        },
        {
          control: "Length (mm)",
          expected: 15.0,
          deviation: 0.2,
          devOutTol: 0.5,
        },
      ],
    },
    {
      featureName: "Weight",
      measurements: [
        {
          control: "Weight (kg)",
          expected: 4.2,
          deviation: 0.2,
          devOutTol: 0.4,
        },
      ],
    },
  ],
};

export const mockPartsList: PartStructure[] = [wheelData, brakeCaliperData];
