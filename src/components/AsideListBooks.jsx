import "@/styles/components/AsideListBooks.module.css";
export const AsideListBooks = ({
  booksReaded,
  showAside,
  removeBookReaded,
  addBooks,
}) => {
  const mostrarListadoDeLibros = () => {
    console.log(booksReaded);
    return (
      <div className="row min-vh-100">
        {booksReaded?.map(book => {
          return (
            <article
              key={book.id}
              className="position-relative text-center col-6">
              <button
                onClick={() => {
                  removeBookReaded(book);
                  addBooks(book);
                }}
                style={{ right: "25%" }}
                className="btn btn-danger position-absolute  z-1">
                x
              </button>
              <img
                src={book.cover}
                className="img-thumbnail position-relative w-50 h-auto"
                loading="lazy"
                alt={book.title}
              />
              <h3>{book.title}</h3>
            </article>
          );
        })}
      </div>
    );
  };
  const mostrarTitulo = () => {
    return (
      <small className="text-danger">
        No hay libros en el listado de libros leidos
      </small>
    );
  };
  return (
    <aside
      style={{ overflowY: "scroll" }}
      className={`w-25 border-1 asideListBooks bg-secondary position-absolute top-0  end-0 z-1 ${
        showAside ? "d-flex" : "d-none overflow"
      }`}>
      <section>
        <h2 className="">Listado de libros leidos</h2>

        {Object.entries(booksReaded).length > 0
          ? mostrarListadoDeLibros()
          : mostrarTitulo()}
      </section>
    </aside>
  );
};
