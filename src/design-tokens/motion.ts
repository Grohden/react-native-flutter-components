// https://m3.material.io/styles/motion/easing-and-duration/tokens-specs

export type MotionTokens = {
  duration: {
    short1: number;
    short2: number;
    short3: number;
    short4: number;
    medium1: number;
    medium2: number;
    medium3: number;
    medium4: number;
    long1: number;
    long2: number;
    long3: number;
    long4: number;
    // TODO: extra long?
  };
  easing: {
    linear: [number, number, number, number];
    standard: [number, number, number, number];
    standardAccelerate: [number, number, number, number];
    standardDecelerate: [number, number, number, number];
    emphasized: [number, number, number, number];
    emphasizedDecelerate: [number, number, number, number];
    emphasizedAccelerate: [number, number, number, number];
  };
};

export const motionTokens: MotionTokens = {
  duration: {
    short1: 50,
    short2: 100,
    short3: 150,
    short4: 200,
    medium1: 250,
    medium2: 300,
    medium3: 350,
    medium4: 400,
    long1: 450,
    long2: 500,
    long3: 550,
    long4: 600,
  },
  easing: {
    linear: [0, 0, 1, 1],
    standard: [0.2, 0, 0, 1],
    standardAccelerate: [0.3, 0, 1, 1],
    standardDecelerate: [0, 0, 0, 1],
    emphasized: [0.2, 0, 0, 1],
    emphasizedDecelerate: [0.05, 0.7, 0.1, 1],
    emphasizedAccelerate: [0.3, 0, 0.8, 0.15],
  },
};
