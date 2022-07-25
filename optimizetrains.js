"use strict";

const schedule = [
  {
    activity: "A",
    startTime: 8,
    endTime: 20,
  },
  {
    activity: "B",
    startTime: 8,
    endTime: 11,
  },
  {
    activity: "C",
    startTime: 8,
    endTime: 10,
  },
  {
    activity: "D",
    startTime: 9,
    endTime: 12,
  },
  {
    activity: "E",
    startTime: 11,
    endTime: 12,
  },
  {
    activity: "F",
    startTime: 13,
    endTime: 15,
  },
  {
    activity: "G",
    startTime: 15,
    endTime: 17,
  },
  {
    activity: "H",
    startTime: 5,
    endTime: 11,
  },
  {
    activity: "I",
    startTime: 6,
    endTime: 9,
  },
  {
    activity: "k",
    startTime: 5,
    endTime: 10,
  },
];

const schedule2 = [
  {
    activity: "A",
    startTime: 8,
    endTime: 10,
  },
  {
    activity: "B",
    startTime: 9,
    endTime: 11,
  },
  {
    activity: "C",
    startTime: 12,
    endTime: 14,
  },
  {
    activity: "D",
    startTime: 8,
    endTime: 13,
  },
  {
    activity: "E",
    startTime: 5,
    endTime: 5,
  },
  {
    activity: "F",
    startTime: 15,
    endTime: 16,
  },
];
const getRandomData = function () {
  let schedule = [];
  let counter = 1;
  while (counter <= 10) {
    let startTime = Math.trunc(Math.random() * 24);
    let endTime = Math.trunc(Math.random() * 24);
    if (endTime > startTime) {
      schedule.push({
        activity: `${counter}`,
        startTime: startTime,
        endTime: endTime,
      });
      counter++;
    }
  }
  return schedule;
};

const randomSchedule = getRandomData();
console.log(randomSchedule);

const getBays = function (schedule) {
  let bays = 0;
  let available = 0;
  const [start] = schedule
    .map((el) => el.startTime)
    .sort((a, b) => a - b)
    .splice(0, 1);
  const [end] = schedule
    .map((el) => el.endTime)
    .sort((a, b) => b - a)
    .splice(0, 1);
  for (let i = start; i <= end; i++) {
    schedule.forEach((el) => {
      if (i === el.endTime) available = available + 1;

      if (i === el.startTime) {
        available > 0 ? (available = available - 1) : (bays = bays + 1);
      }
    });
  }
  console.log(available);
  return bays;
};

const result = getBays(randomSchedule);
console.log(result);
