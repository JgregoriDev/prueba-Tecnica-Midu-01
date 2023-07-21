import { useState, useEffect } from "react";
export const useGenreFilter = (books) => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const chargeGenresInSelect = () => {
      const arrayAux = books.map((book) => book.genre);
      const arrayGenres = Array.from(new Set(arrayAux));
      setGenres(arrayGenres);
    }
    chargeGenresInSelect();
    return () => {
      genres
    }
  }, [])

  const bookFilterByGenre = (books, genre) => {
    const arrayAux = [...books].filter((book) => {
      return book.genre.toLowerCase() === genre.toLowerCase()
    });
    return arrayAux;
  }



  return { genres, bookFilterByGenre };

}