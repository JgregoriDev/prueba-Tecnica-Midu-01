import { Card, Spin, ModalCustom } from "@/components";
import {
  useBooks,
  useGenreFilter,
  useRangeValue,
  useListReadedBooks,
} from "@/hooks";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { AsideListBooks } from "../components/AsideListBooks";
export const PaginaPrincipal = () => {
  const { load, books, addBooksToLS, filterBookfilterBooksByName } = useBooks();
  const { booksReaded, addBooksReaded, removeBookReaded } =
    useListReadedBooks();

  const [bookHelper, setBookHelper] = useState(books);
  const { genres, bookFilterByGenre } = useGenreFilter(bookHelper);
  const { rangeValue, maxValue, changeValueOnSlideRange } =
    useRangeValue(bookHelper);

  const [showAside, setShowAside] = useState(false);
  const onChange = genre => {
    console.log(books);
    genres.find(g => g.toLowerCase() === genre.toLowerCase()) === undefined
      ? setBookHelper(books)
      : setBookHelper(bookFilterByGenre(books, genre));
  };

  const handleRangeChange = event => {
    changeValueOnSlideRange(event.target.value);
  };

  const onWrite = name => {
    name.trim();
    setBookHelper(filterBookfilterBooksByName(name));
  };

  const removeBook = book => {
    // console.log(book);
    const arrayAux = bookHelper.filter(b => b.id !== book.id);
    setBookHelper(arrayAux);
    addBooksReaded(book);
  };

  const handleShow = () => {
    const body = document.querySelector(".row");
    setShowAside(!showAside);
    body.classList.toggle("overflow-y-hidden");
  };
  const addBooks = book => {
    setBookHelper([...bookHelper, book]);
  };
  return (
    <main>
      <h1>Pagina Principal</h1>

      <Container>
        <Row className="">
          <h2>Listado de libros</h2>
          <div className="row ">
            <div className="mb-3 col-lg-6 col-12">
              <label htmlFor="search" className="form-label">
                Search:
              </label>
              <input
                type="search"
                onChange={e => onWrite(e.target.value)}
                className="form-control"
                name=""
                id=""
              />
            </div>
            <div className="mb-3 col-lg-6 col-12">
              <Form.Label>Range</Form.Label>
              <Form.Range
                min={20}
                max={maxValue}
                value={rangeValue}
                onChange={handleRangeChange}
              />
            </div>
            <div className="mb-3 col-12 col-lg-6">
              <ModalCustom addBooksToLS={addBooksToLS} />
            </div>
            <div className="mb-3 col-12 col-lg-6">
              <button
                onClick={() => handleShow()}
                className={`btn w-100 ${
                  showAside ? "btn-danger" : "btn-primary"
                }`}>
                {showAside
                  ? `Close list of readed books`
                  : `Show list of readed books`}
              </button>
            </div>
            <div className="mb-3 col-12 col-lg-6">
              <label htmlFor="value" className="form-label">
                Filter by genre
              </label>
              <select
                onChange={e => onChange(e.target.value)}
                className="form-select form-select-lg"
                name=""
                id="value">
                <option value="" defaultChecked>
                  All genres
                </option>
                {genres.map(genre => (
                  <option key={genre.toLowerCase()} value={genre}>
                    {genre}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {load ? (
            bookHelper?.map(book => (
              <Card key={book.id} book={book} removeBook={removeBook} />
            ))
          ) : (
            <Spin />
          )}
        </Row>
        <AsideListBooks
          addBooks={addBooks}
          removeBookReaded={removeBookReaded}
          showAside={showAside}
          booksReaded={booksReaded}
        />
      </Container>
    </main>
  );
};
