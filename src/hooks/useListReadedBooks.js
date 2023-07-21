import { useState, useEffect } from "react";
export const useListReadedBooks = () => {
  const [booksReaded, setBooksReaded] = useState([]);
  useEffect(() => {
    setBooksReaded(booksReaded);
  }, [booksReaded])

  const addBooksReaded = (book) => {
    setBooksReaded([...booksReaded, { ...book }]);
  }
  const removeBookReaded = (book) => {
    const arrayAux = booksReaded.filter(b => b.id !== book.id);
    setBooksReaded(arrayAux);
  }



  return { booksReaded, addBooksReaded, removeBookReaded }
}
