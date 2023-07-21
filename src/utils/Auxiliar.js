"use strict";
/**
 * Devuelve un array de libros procesado
 * @returns {Array}
 */
export function mappingBook(books) {
  const booksMap = books.map(({ book }) => {
    return {
      id: book.ISBN,
      title: book.title,
      pages: book.pages,
      cover: book.cover,
      genre: book.genre,
    }
  })
  return booksMap;
}

export const stringToLowerCase = (stringName) => {
  return stringName.toLowerCase();
}