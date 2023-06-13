
const user = {
    name: 'Maria',
    age: 21,
    nationality: 'Brazilian',
  };
  
  const jobInfos = {
    profession: 'Software engineer',
    squad: 'Rocket Landing Logic',
    squadInitials: 'RLL',
  };

const userInfo = {...user, ...jobInfos};


"Hi, my name is Maria, I'm 21 years old and I'm Brazilian. I work as a Software engineer and my squad is RLL-Rocket Landing Logic"
const {name, age, nationality, profession, squadInitials, squad } = userInfo;
const textApresentation = `Hi, my name is ${name}, im ${age} years old and im ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`;
console.log(textApresentation);