const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

const authorBornIn1947 = (books) => {
return books.find((book) => book.author.birthYear === 1947).author.name;
}
console.log(authorBornIn1947(books));
//--------------------//----------------------------//

const smallerName = (books) => {
 let nameBook;
books.forEach((book) => {
    const bookname = book.name;
      if (!nameBook || bookname.length < nameBook.length) {
      nameBook = bookname;
    }
  });
  return nameBook;
}
console.log(smallerName(books));
//--------------------//----------------------------//
const getNamedBook = (books) => {
  return books.find((book) => book.name.length === 26);
}
console.log(getNamedBook(books));
//--------------------//----------------------------//
function everyoneWasBornOnSecXX(books) {
return books.every((book) => {
 return book.author.birthYear >= 1901 && book.author.birthYear <= 2001;
})
}
console.log(everyoneWasBornOnSecXX(books));
//--------------------//----------------------------//
const someBookWasReleaseOnThe80s = (books) => {
  return books.some((book) => {
   return book.releaseYear >= 1980 && book.releaseYear <= 1989;
  })
}
console.log(someBookWasReleaseOnThe80s(books));
//--------------------//----------------------------//
const expectedResult = false;

const authorUnique = () => {
  // escreva seu código aqui
}