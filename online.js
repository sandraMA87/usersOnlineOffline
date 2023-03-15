function whoIsOnline(users) {
  //Primero creamos una variable para saber que usuarios que estén Offline. 
  let usersOnline = [];

  // Seguidamente creamos un bucle "for" para que nos recorra el string, con el condicional "if" en el caso que su status sea offline y acto seguido usamos un "push" para que nos los agregue.
  for (let i = 0; i < users.length; i++) {
    if(users[i].status === "online") {
      usersOnline.push(users[i].username);
    }
  }
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



console.log(whoIsOnline(friends)); 
console.log(whoIsOnline(workers)); 
