// Code your solution here

// const drivers = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "Bobby"];

function findMatching(drivers, s) {
  const arr = drivers.filter((ele) => ele.toLowerCase() === s.toLowerCase());
  return arr;
}

function fuzzyMatch(drivers, s) {
  const arr = drivers.filter((ele) =>
    ele.toLowerCase().startsWith(s.toLowerCase())
  );
  return arr;
}
const drivers = [
  {
    name: "Bobby",
    hometown: "Pittsburgh",
  },
  {
    name: "Sammy",
    hometown: "New York",
  },
  {
    name: "Sally",
    hometown: "Cleveland",
  },
  {
    name: "Annette",
    hometown: "Los Angeles",
  },
  {
    name: "Bobby",
    hometown: "Tampa Bay",
  },
];

function matchName(drivers, s) {
  const arr = drivers.filter(
    (ele) => ele.name.toLowerCase() === s.toLowerCase()
  );
  return arr;
}
