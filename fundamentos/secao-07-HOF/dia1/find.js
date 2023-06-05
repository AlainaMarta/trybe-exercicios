const generatorEmail = (fullName) => {
    const email = fullName.toLowerCase().split(' ').join('_');
    return {Nome : fullName, email:`${email}@trybe.com`};
}

const newEmployees = (generatorEmail) => {
    const employees = {
      id1: generatorEmail('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: generatorEmail('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: generatorEmail('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };
  console.log(newEmployees(generatorEmail));