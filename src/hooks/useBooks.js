"use strict";
import { useEffect, useState } from "react";
import { library } from "@/db/books.json";
import { mappingBook, stringToLowerCase } from "@/utils/Auxiliar";
export const useBooks = () => {
  const [books, setBooks] = useState(mappingBook(library));
  const [load, setLoad] = useState(false);
  useEffect(() => {
    setLoad(true);
    return () => {
      load
    }
  }, [load, books]);
  const addBooksToLS = (bookParam) => {
    const arrayAux = [...books, { ...bookParam }];
    localStorage.setItem("books", JSON.stringify(arrayAux));
    setBooks(arrayAux);
  }

  const filterBookfilterBooksByName = (name) => {
    // name = stringToLowerCase(name);
    console.log(name);
    const arrayAuxBooks = [...books].filter((book) => {
      return book?.title.toLowerCase().includes(name.toLowerCase());
    })
    console.log(arrayAuxBooks);
    return arrayAuxBooks;
  }

  return { books, load, addBooksToLS, filterBookfilterBooksByName };
}
