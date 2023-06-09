const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
people.sort((a, b) => {
    const saveA = a.age;
    const saveB = b.age;
   return saveB - saveA;
});
  
console.log(people);