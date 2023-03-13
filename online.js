function whoIsOnline(users) {
  let usersOnline = [];
  // Happy Coding! Puedes modificar solo el cuerpo de esta función
  return usersOnline;
}

let friends = [
  {
    username: "David",
    status: "online",
    lastActivity: 10,
  },
  {
    username: "Lucy",
    status: "offline",
    lastActivity: 22,
  },
  {
    username: "Bob",
    status: "online",
    lastActivity: 104,
  },
];

let workers = [
  {
    username: "Nathan",
    status: "offline",
    lastActivity: 10,
  },
  {
    username: "Lucy",
    status: "offline",
    lastActivity: 22,
  },
  {
    username: "Joel",
    status: "online",
    lastActivity: 104,
  },
];

console.log(whoIsOnline(friends)); // ["David", "Bob"]
console.log(whoIsOnline(workers)); // ["Joel"]
